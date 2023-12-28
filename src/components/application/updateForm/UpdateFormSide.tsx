import { MouseEvent, useState } from "react";
import { useSelector } from "react-redux";
import { selectExecutors, selectStatuses } from "../../../store/task/taskSlice";
import { Task } from "../../../types/types";
import { StyledDot } from "../form.styled";

type UpdateFormSideProps = {
  handleSelect: (e: MouseEvent<HTMLParagraphElement>,  name: string, rgb?: string) => void;
  task?: Task;
}

export default function UpdateFormSide({ handleSelect, task }: UpdateFormSideProps) {
  const statuses = useSelector(selectStatuses);
  const executors = useSelector(selectExecutors);
  const [showStatusOptions, setShowStatusOptions] = useState<boolean>(false);
  const [showExecOptions, setShowExecOptions] = useState<boolean>(false);

  return (
    <div className="form__update_side">
      <div className="form__dropdown_container">
        <div
          className="form__update_status"
          onClick={() => setShowStatusOptions(!showStatusOptions)}
        >
          <StyledDot color={task?.statusRgb} />
          <p>{task?.statusName}</p>
        </div>
        <div className="form__dropdown_menu">
          {showStatusOptions && statuses.map(({ id, name, rgb }) => (
            <p
              key={id}
              id={String(id)}
              className="form__dropdown_item"
              onClick={(e) => {
                handleSelect(e, "status", rgb);
                setShowStatusOptions(false);
              }}
            >
              {name}
            </p>
          ))}
        </div>
      </div>

      <div className="form__update_sideblock">
        <span>Заявитель</span> {task?.initiatorName}
      </div>

      <div className="form__update_sideblock">
        <span>Создана</span> {task?.initiatorName}
      </div>

      <div className="form__dropdown_container">
        <div
          className="form__update_sideblock"
          onClick={() => setShowExecOptions(!showExecOptions)}
        >
          <span>Исполнитель</span> {task?.executorName}
        </div>
        <div className="form__dropdown_menu">
          {showExecOptions && executors.map(({ id, name }) => (
            <p
              key={id}
              id={String(id)}
              className="form__dropdown_item"
              onClick={(e) => {
                handleSelect(e, "executor");
                setShowExecOptions(false);
              }}  
            >
              {name}
            </p>
          ))}
        </div>
      </div>

      <div className="form__update_sideblock">
        <span>Срок</span>
        <img src="/img/calendar.png" alt="срок" className="form__update_icon" />
        {task?.resolutionDatePlan ?
          new Date(task?.resolutionDatePlan).toLocaleDateString() :
          new Date().toLocaleDateString()
        }г.
      </div>
      <div className="form__update_sideblock">
        <span>Тэги</span>
        <div className="form__update_tags">
          {task?.tags.map(({ id, name }) => (<p key={id} className="form__update_tag"> {name} </p>))}
        </div>
      </div>
    </div>
  )
}