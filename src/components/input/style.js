import styled from "styled-components"

export const StyledInput = styled.input`
  width: ${(props) => props.width || "auto"};
  padding: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border: none;
  outline: none;
  background-color: #232627;
  border-radius: 4px;
  color: #ececec;

  @media screen and (max-width:564px) {
    width:220px;
  }
`
