import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: #d1e0ed;
  padding: 16px 20px 10px;

  .header__search {
    position: relative;
    width: fit-content;
    & > input {
      width: 676px;
      padding: 8px;
      border: 1px solid #42aaff;
      border-radius: 16px;
      font-size: 16px;
    }
    & > img {
      position: absolute;
      top: 8px;
      right: 12px;
    }
`