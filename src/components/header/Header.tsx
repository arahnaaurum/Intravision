import { StyledHeader } from "./header.styled";

export default function Header () {
  return (
    <StyledHeader>
      <div className="header__search">
        <input type="text" />
        <img src="/img/glass.png" alt="search"/>
      </div>
    </StyledHeader>
  )
}