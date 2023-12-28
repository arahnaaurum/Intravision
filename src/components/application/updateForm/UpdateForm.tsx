import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store";
import { StyledFormContainer, StyledDot } from "../form.styled";
import { Task } from "../../../types/types";
import { getTasksDataWithThunk, selectCurrentTask, selectExecutors, selectStatuses, } from "../../../store/task/taskSlice";
import { updateTask } from "../../../store/task/taskAPI";
import UpdateFormMain from "./UpdateFormMain";
import UpdateFormSide from "./UpdateFormSide";

type UpdateFormProps = {
  onClose: () => void;
}

export default function CreateForm({ onClose }: UpdateFormProps) {
  const dispatch = useDispatch<AppDispatch>();
  const currentTask = useSelector(selectCurrentTask);
  const [task, setTask] = useState<Task>();

  useEffect(() => {
    if (currentTask) setTask(currentTask);
  }, [currentTask])

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (task) setTask((prev) => ({ ...prev!, comment: e.target.value }))
  }

  const handleSelect = (e: MouseEvent<HTMLParagraphElement>, name: string, rgb?: string) => {
    const text = (e.target as HTMLParagraphElement).innerText;
    const value = +(e.target as HTMLParagraphElement).id;
    if (task) setTask((prev) => ({ ...prev!, [name+"Id"]: value, [name+"Name"]: text }))
    if (task && rgb) setTask((prev) => ({ ...prev!, [name+"Rgb"] : rgb}))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task) await updateTask(task);
    dispatch(getTasksDataWithThunk());
    onClose();
  }

  return (
    <StyledFormContainer>
      <div className="form__title">
        <div className="form__title_task">
          № {task?.id && (task?.id).toLocaleString('ru-RU')} <p>{task?.name}</p>
        </div>
        <img src="/img/cross.png" alt="Закрыть" onClick={onClose} />
      </div>

      <div className="form__update">
        <UpdateFormMain
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          description={task?.description || ''}
          comment={task?.comment || ''}
        />

        <UpdateFormSide
          handleSelect={handleSelect}
          task={task}
        />

      </div>
    </StyledFormContainer>
  )
}