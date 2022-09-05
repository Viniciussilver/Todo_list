import styled from "styled-components"

export const StyledContainer = styled.div`
  width: 50%;
  padding: 10px 14px;
  background-color:rgba(0,0,0,0.9);
  position: absolute;
  left: 25%;
  top: ${(props) => (props.open ? "1%" : "-120%")};
  transition: 0.4s ease;
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  z-index: 2;
`
export const StyledButton = styled.button`
  width: 27px;
  height: 27px;
  position: absolute;
  top: 5%;
  right: 10px;
  border-radius: 50%;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  cursor: pointer;

  &:active {
    opacity: 0.8;
    background-color: blue;
  }
`
