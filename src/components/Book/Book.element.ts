import styled from "styled-components";

export const BookWrapper = styled.div`
    position: relative;
    width: 80px;
    height: 200px;
    margin: 60px 60px 0 10px;
`

export const Profile = styled.div<{isChoiceBook: boolean}>`
    position: absolute;
    width: 80px;
    height: 200px;
    background-color: #C4C4C4;
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
    transition-duration: 0.5s;
    transform-origin: 0 0;
    ${({isChoiceBook}) => isChoiceBook && "transform: rotateY(0.25turn)"};
    border: 1px solid black;
`
export const FullFace = styled.div<{isChoiceBook: boolean}>`
    position: absolute;
    z-index: 1;
    width: 160px;
    height: 200px;
    background-color: #F1A9A9;
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
    transition-duration: 0.5s;
    transform-origin: 0 right;
    ${({isChoiceBook}) => isChoiceBook ? "transform: rotateY(0turn)" : "transform: rotateY(0.25turn)" };
    border: 1px solid black;
`

export const BookNameProfile = styled.div`
    position: absolute;
    width: 160px;
    height: 75px;
    top: 85px;
    left: -40px;
    font-size: 25px;
    transform: rotate(0.25turn);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Span = styled.span`
    word-wrap: break-word;
`

export const BookNameFullFace = styled.div`
    position: relative;
    top: 80px;
    font-size: 25px;
    text-align: center;
`
export const BookAuthor = styled.div`
    margin-top: 4px;
    text-align: center;
`