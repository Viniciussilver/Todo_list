import { StyledInput } from "./style"

export const Input = ({ width, value, placeholder, onChange }) => {
  return (
    <StyledInput
      value={value}
      width={width}
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
