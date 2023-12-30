import React from 'react'
import styled from 'styled-components'

export default function NotFound() {
  return (
    <Wrapper>
        <Number>4😯4</Number>
        <Text>Сторінку не знайдено</Text>
    </Wrapper>
  )
}

let Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
`

let Number = styled.div`
    font-size: 20rem;
    line-height: 20rem;
    letter-spacing: -4rem;
`

let Text = styled.div`
    font-size: 4rem;
`