import styled from "styled-components";

export const StyledFormContainer = styled.div`
  border: 1px solid #d7dce0;
  background-color: #ecf3f7;
  width: 950px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  
  .form__title {
    background-color: #1a4876;
    color: white;
    font-size: 18px;
    padding: 24px 30px 24px 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      cursor: pointer;
    }
    &_task {
      display: flex;
      align-items: center;
      gap: 32px;
      p {
        display: block;
        max-width: 604px;
        font-size: 16px;
      }
    }
  }

  .form__items {
    padding: 60px 0px 0px 26px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .form__item {
    label, p {
      color: #9f9ea7;
      display: block;
      margin-bottom: 16px;
    }
    textarea {
      border: 1px solid #e8e8e8;
      border-radius: 8px;
      padding: 8px;
      resize: none;
    }
  }

  .form__update {
    display: flex;
    
    .select {
      border: none;
      border-radius: 8px;
      padding: 8px 12px;
      margin-top: 8px;
      color: #525460;
      font-size: 14px;
      width: 100%;
      background-color: white;
    }

    &_main {
      padding: 24px 26px;
      border-right: 1px solid #d7dce0;
      display: flex;
      flex-direction: column;
      gap: 48px;
    }

    &_side {
      padding: 28px;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    &_status {
      display: flex;
      gap: 12px;
      color: #525460;
      font-size: 14px;
    }

    &_sideblock {
      span {
        display: block;
        color: #9f9ea7;
        margin-bottom: 12px;
      }
    }
    
    &_icon {
      margin-right: 8px;
    }

    &_tags {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    &_tag {
      dispaly: block;
      margin-bottom: 8px;
      width: fit-content;
      padding: 3px 12px;
      background-color: white;
      color: #9f9ea7;
      border: 1px solid #9f9ea7;
      border-radius: 20px;
    }
  }

  .form__dropdown_container {
    position: relative;
    cursor: pointer;
  }

  .form__dropdown_menu {
    position: absolute;
    background-color: white;
    border-radius: 8px;
    z-index: 10;
    min-width: 150px;
  }

  .form__dropdown_item {
    padding: 12px 16px;
    &:hover {
      background-color: #e3e9f4;
    }
  }

  .form__description {
    box-sizing: border-box;
    width: 600px;
  }
  
`

export const StyledComments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-height: 250px;
  overflow-y: auto;
`
export const StyledComment = styled.div`
  .comment__heading {
    display: flex;
    gap: 12px;
    color: #525460;

    &_text {
      font-size: 14px;
      margin-bottom: 12px;
    }

    &_small {
      font-size: 12px;
      margin-bottom: 16px;
    }
  }

  .comment__content {
    background-color: #e3e9f4;
    border: 1px solid #dce3e7;
    border-radius: 8px;
    padding: 12px 12px 20px 12px;
  }
`
type StyledDotProps = {
  color: string;
}

export const StyledDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 20px;
  background-color: ${p => p.color || "black"}
`