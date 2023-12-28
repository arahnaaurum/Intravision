import styled from "styled-components";

export const StyledSidebar = styled.nav`
  box-sizing: border-box;
  height: 100%;
  background-color: #002137;
  display: flex;
  flex-direction: column;
  align-items: center;

  .sidebar__logo {
    padding: 16px 24px 22px;
    cursor: pointer;
    &:hover {
      background-color: #002c49;
    }
  }
  
  .sidebar__item {
    padding: 16px;
    font-size: 12px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    
    &:hover {
      background-color: #002c49;
    }
  
    & > p {
      text-align: center;
    }
`