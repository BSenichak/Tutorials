import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    collection,
    doc,
    getCountFromServer,
    getDocs,
    limit,
    orderBy,
    query,
    setDoc,
    startAfter,
} from "firebase/firestore";
import { db } from "./firebase/firebase";

export const firstLoadComments = createAsyncThunk(
    "firstLoadComments",
    async () => {
        let data = {
            pages: 0,
            comments: [],
            all: [],
        };
        await getCountFromServer(query(collection(db, "Comments"))).then(
            (d) => (data.pages = Math.ceil(d.data().count) / 3)
        );
        await getDocs(
            query(collection(db, "Comments"), orderBy("data", "desc"), limit(3))
        ).then(
            (result) =>
                (data.comments = result.docs.map((el) => {
                    return { ...el.data(), id: el.id };
                }))
        );
        await getDocs(
            query(collection(db, "Comments"), orderBy("data", "desc"))
        ).then((result) => (data.all = result.docs));
        return data;
    }
);
export const addComment = createAsyncThunk("addComment", async (payload) => {
    let status = "loading";
    await setDoc(doc(db, "Comments", new Date().getTime().toString()), {
        author: payload.author,
        text: payload.commentText,
        data: getCurrentData(),
    }).then(() => (status = "idle"));
    return status;
});

function padZero(num) {
    return num < 10 ? "0" + num : num;
}

function getCurrentData() {
    const currentDate = new Date();
    const day = padZero(currentDate.getDate());
    const month = padZero(currentDate.getMonth() + 1); // Місяці в JavaScript починаються з 0, тому потрібно додати 1
    const year = currentDate.getFullYear();
    const hours = padZero(currentDate.getHours());
    const minutes = padZero(currentDate.getMinutes());
    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

export const loadPage = createAsyncThunk("loadPage", async (page) => {
    let data = {
        comments: [],
        status: "loading",
    };
    let start = {};
    await getDocs(
        query(collection(db, "Comments"), orderBy("data", "desc"))
    ).then((result) => {
        start = result.docs[page * 3];
    });
    let q =
        page > 0
            ? query(
                  collection(db, "Comments"),
                  orderBy("data", "desc"),
                  startAfter(start),
                  limit(3)
              )
            : query(
                  collection(db, "Comments"),
                  orderBy("data", "desc"),
                  limit(3)
              );
    await getDocs(q).then((result) => {
        data.comments = result.docs.map((el) => {
            return { ...el.data(), id: el.id };
        });
        data.status = "idle";
    });
    return data;
});

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        page: 0,
        pages: 0,
        comments: [],
        all: [],
        loading: "idle",
    },
    extraReducers: (builder) => {
        //firstLoad
        builder.addCase(firstLoadComments.pending, (state, action) => {
            state.pages = 0;
            state.comments = [];
            state.loading = "loading";
        });
        builder.addCase(firstLoadComments.fulfilled, (state, action) => {
            state.pages = action.payload.pages;
            state.comments = action.payload.comments;
            state.all = action.payload.all;
            state.loading = "idle";
        });
        builder.addCase(firstLoadComments.rejected, (state, action) => {
            state.pages = 0;
            state.comments = [];
            state.loading = action.error.message;
        });
        //addComment
        builder.addCase(addComment.pending, (state, action) => {
            state.loading = action.payload;
        });
        builder.addCase(addComment.fulfilled, (state, action) => {
            state.loading = action.payload;
        });
        builder.addCase(addComment.rejected, (state, action) => {
            state.loading = action.error.message;
        });
        builder.addCase(loadPage.pending, (state, action) => {
            state.loading = action.payload;
            state.comments = [];
        });
        builder.addCase(loadPage.fulfilled, (state, action) => {
            state.loading = action.payload.status;
            state.comments = action.payload.comments;
        });
        builder.addCase(loadPage.rejected, (state, action) => {
            state.loading = action.error.message;
            state.comments = [];
        });
    },
});

export default commentsSlice.reducer;
