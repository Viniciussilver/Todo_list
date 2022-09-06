import styled from "styled-components"

export const StyledModal = styled.div`
  width: 93%;
  padding: 25px 14px;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  
  top: ${(props) => (props.open ? "27%" : "-150%")};
  transition: 0.6s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  @media screen and (max-width:564px) {
   
  }
  @media screen and (max-width:390px) {
    width: 83%;
  }
`

export const TextArea = styled.textarea`
  width: 80%;
  height: 80px;
  padding: 9px;
  border-radius: 7px;
  margin-top: 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #1a1a1a;
`
export const Button = styled.button`
  width: 50%;
  padding: 8px;
  border: none;
  border-radius: 8px;
  font-size:15px;
  margin-top: 15px;
  color: #ececec;
  background-color: blue;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
