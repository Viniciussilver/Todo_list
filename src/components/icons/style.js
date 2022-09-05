import { VscCheckAll } from "react-icons/vsc"
import { VscEdit } from "react-icons/vsc"
import { VscTrash } from "react-icons/vsc"
import styled from "styled-components"

export const Check = styled(VscCheckAll)`
  cursor: pointer;
  width: 25px;
  height: 25px;
  color: blue;

  &:active {
    opacity: 0.5;
  }
  &:hover {
    color: #ececec;
  }
`

export const Box = styled.div`
  display: flex;
  gap: 15px;
`

export const Edit = styled(VscEdit)`
  cursor: pointer;
  width: 25px;
  height: 25px;
  color: blue;

  &:active {
    opacity: 0.5;
  }
  &:hover {
    color: #ececec;
  }
`
export const Trash = styled(VscTrash)`
  cursor: pointer;
  width: 25px;
  height: 25px;
  color: blue;

  &:active {
    opacity: 0.5;
  }
  &:hover {
    color: #ececec;
  }
`
