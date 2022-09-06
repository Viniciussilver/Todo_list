import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;

    }

    body {
        min-height: 100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        background: #1a1c1d;
       
    }
`

export const Container = styled.div`
  width: 560px;
  margin: 20px 0;
  padding: 30px 20px;
  background-color: #1a1c1d;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  position:relative;

  @media screen and (max-width:564px) {
    width: 400px;
  }
 
`

export const boxSaveTasks = styled.div`
  width: 100%;
  padding: 25px 10px;

  border-bottom: 1px solid #353a3c;
  display: flex;
  flex-direction: column;
`

export const Typography = styled.p`
  font-weight: ${(props) => props.fontWeight || "500"};
  font-size: ${(props) => props.size || "18px"};
  line-height: ${(props) => props.lineHeight || "27px"};
  color: ${(props) => props.primary || "#ececec"};
  text-align: ${(props) => props.align || "none"};
  border-bottom: ${(props) => props.border || "none"};
`

export const TextTask = styled.p`
  display: flex;
  width: 340px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  padding-left: 20px;
  font-weight: 500;
  font-size: 17.5px;
  color: #ececec;

  @media screen and (max-width:564px) {
    width: 215px;
    padding-left: 5px;
  }
`

export const Flex = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: center;
`

export const SearchBox = styled.div`
  padding: 0 30px 0 10px;
  border-right: 1px solid #353a3c;
`

export const FilterTasks = styled.div`
  padding-left: 30px;
`

export const listTask = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-decoration-line: ${(props) =>
    props.isFinished ? "line-through" : "none"};
  background: ${(props) => (props.isFinished ? "	#7CFC00" : "#232627")};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-top: 30px;
  padding: 20px 15px;
`

export const Select = styled.select`
  padding: 4px;
  height: 48px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  width: 213px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  background-color: #ececec;
  border: none;
  border-radius: 4px;
`
