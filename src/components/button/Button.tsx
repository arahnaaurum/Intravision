import { type } from "os";
import { StyledButton } from "./button.styled";

type ButtonProps = {
  text: string;
  type?: "button" | "submit";
  callback?:  () => void;
}

export default function Button ({text, type, callback}: ButtonProps) {
  
  return (
    <StyledButton type={type || 'button' } onClick={callback}>
      {text}
    </StyledButton>
  )
}