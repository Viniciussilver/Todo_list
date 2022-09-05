import styled from "styled-components"

export const StyledButton = styled.button`
  padding: 12px 14px;
  margin-left: 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  background-color: blue;
  color: #fff;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
`
