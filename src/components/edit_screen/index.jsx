import { Typography } from "../../styles"
import { Button, StyledModal, TextArea } from "./style"

export const Modal = ({ open, value, saveEdit, back, onChange }) => {
  return (
    <StyledModal open={open}>
      <Typography primary="#ececec" align="center">
        Editar tarefa
      </Typography>
      <TextArea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Digite sua tarefa..."
      />
      <Button onClick={saveEdit}>Atualizar</Button>
      <Button onClick={back}>Voltar</Button>
    </StyledModal>
  )
}
