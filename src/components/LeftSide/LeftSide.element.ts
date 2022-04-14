import styled from "styled-components";

export const WrapperLeftSide = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 50%;
    height: 100%;
`

export const SortWrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 70px;
  margin-top: 20px;
`;

export const HeaderSort = styled.div`
    height: 30px;
    font-size: 25px;
    text-align: center;
    font-weight: bold;
`

export const ButtonsWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
`

export const BooksWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-top: 100px;
` 