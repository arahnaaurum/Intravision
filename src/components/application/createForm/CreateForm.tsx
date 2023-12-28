import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../button/Button";
import { createTask } from "../../../store/task/taskAPI";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { StyledFormContainer } from "../form.styled";
import { Task } from "../../../types/types";
import { getCurrentTaskWithThunk, getTasksDataWithThunk } from "../../../store/task/taskSlice";

type CreateFormProps = {
  onClose: () => void;
  openUpdateForm: () => void;
}

export default function CreateForm({ onClose, openUpdateForm }: CreateFormProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [task, setTask] = useState<Pick<Task, "name" | "description">>({ name: '', description: '' });
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTaskId = await createTask(task);
    if (newTaskId) {
      await dispatch(getTasksDataWithThunk());
      await dispatch(getCurrentTaskWithThunk(newTaskId));
      onClose();
      openUpdateForm();
    }
  }

  return (
    <StyledFormContainer>
      <div className="form__title">
        <p>Новая заявка</p>
        <img src="/img/cross.png" alt="Закрыть" onClick={onClose} />
      </div>
      <form
        className="form__items"
        onSubmit={handleSubmit}
      >
        <div className="form__item">
          <label>Название</label>
          <textarea
            id="name"
            name="name"
            rows={3}
            cols={75}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form__item">
          <label>Описание</label>
          <textarea
            id="description"
            name="description"
            rows={5}
            cols={75}
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <Button
            text="Сохранить"
            type='submit'
          />
        </div>
      </form>
    </StyledFormContainer>
  )
}