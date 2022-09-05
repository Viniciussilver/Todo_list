import { Typography } from "../../styles"
import { StyledButton, StyledContainer } from "./style"

export const ErrorAlert = ({ onClick, open }) => {
  return (
    <StyledContainer open={open}>
      <Typography size="22px" primary="#ececec">
        Usuário
      </Typography>
      <Typography primary="#ececec">Preencha uma nova tarefa</Typography>
      <StyledButton onClick={onClick}>X</StyledButton>
    </StyledContainer>
  )
}
