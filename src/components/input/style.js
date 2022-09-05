import styled from "styled-components"

export const StyledInput = styled.input`
  width: ${(props) => props.width || "auto"};
  padding: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border: none;
  outline: none;
  background-color: #ececec;
  border-radius: 4px;
`
