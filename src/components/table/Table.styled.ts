import styled from "styled-components";

export const StyledTable = styled.table `
  .table__headings {
      color: #404147;
      font-size: 16px;
      &_tag {
        width: 20px;
      }
    }
  .table__heading {
    text-align: left;
    padding: 18px 0;
    &_id {
      padding-left: 24px;
    }
    &_text {
      border-left: 1px solid #e2e7ea;
      padding-left: 16px;
    }
    &_exec {
      border-left: 1px solid #e2e7ea;
      padding-left: 24px;
    }
  }
  .table__body {
    border-top: 1px solid #e2e7ea;
  }

  .table__loading {
    font-weight: bold;
    -webkit-animation: blink1 3s linear infinite;
    animation: blink1 3s linear infinite;
  }

  @-webkit-keyframes blink1 {
    0% { color: rgba(34, 34, 34, 1); }
    50% { color: rgba(34, 34, 34, 0); }
    100% { color: rgba(34, 34, 34, 1); }
  }
  @keyframes blink1 {
    0% { color: rgba(34, 34, 34, 1); }
    50% { color: rgba(34, 34, 34, 0); }
    100% { color: rgba(34, 34, 34, 1); }
  }
`
type StyledTaskProps = {
  tagсolor?: string;
  statusсolor?: string;
}
export const StyledTask = styled.tr<Pick<StyledTaskProps, 'tagсolor' | 'statusсolor'>>`
  color: #525460;
  font-size: 16px;
  font-weight: lighter;
  cursor: pointer;
  
  td {
    border-top: 1px solid #e2e7ea;
    padding: 20px  0px;
  }

  .task__tag {
    border-left: ${p => p.tagсolor || "#fbd6b9" } 6px solid;
  }

  .task__id {
    text-align: center;
    padding: 0 24px;
    width: 94px;
    box-sizing: border-box;
  }

  .task__name {
    box-sizing: border-box;
    width: 414px;
    p {
      display: box;
      padding: 0 16px;
    }
  }

  .task__status {
    color: white;
    font-size: 14px;
    box-sizing: border-box;
    width: 116px;
    padding: 0 16px;
    span {
      background-color: ${p => p.statusсolor || "#fcad51"};
      padding: 4px 16px;
      border-radius: 24px;
    }
  }

  .task__executor {
    p {
      padding-left: 8px;
    }
  }

`