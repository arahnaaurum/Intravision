import { useSelector } from "react-redux";
import { selectCurrentTask } from "../../store/task/taskSlice";
import { StyledComment, StyledComments } from "./form.styled";

const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря"
]

export default function ApplicationComments() {
  const currentTask = useSelector(selectCurrentTask);
  const renderComments = () => {
    if (currentTask && currentTask.lifetimeItems) {
      const comments = currentTask.lifetimeItems;

      return comments.map(({id, createdAt, userName, comment}) => {
        const date = new Date(createdAt);
        const month = date.getMonth() - 1;
        return ( comment?
          <StyledComment key={id}>
            <div className="comment__heading">
              <div>
                <img src="/img/avatar.png" alt="аватар" />
              </div>
              <div>
                <p className="comment__heading_text">{userName}</p>
                <p className="comment__heading_small">
                  {`${date.getDate()} ${months[month]}`}, {`${date.getHours()}:${date.getMinutes()}`} прокомментировал
                </p>
              </div>
            </div>
            <div
              className="comment__content"
              dangerouslySetInnerHTML={{ __html: comment || "" }}
            >
            </div>
          </StyledComment> : <></>
        )
      })
    }
  }

  return (
    <StyledComments>
      {renderComments()}
    </StyledComments>
  )
}