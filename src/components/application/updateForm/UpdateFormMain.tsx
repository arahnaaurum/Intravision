import { ChangeEvent, FormEvent } from "react";
import Button from "../../button/Button";
import ApplicationComments from "../ApplicationComments";

type UpdateFormMainProps = {
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>,
  description: string;
  comment: string;
}

export default function UpdateFormMain ({
  handleChange,
  handleSubmit,
  description,
  comment }: UpdateFormMainProps) {
    const descriptionToHTML = description.replaceAll("\n", "<br/>");
  return (
    <div className="form__update_main">
      <div className="form__item">
        <p>Описание</p>
        <div className="form__description" dangerouslySetInnerHTML={{ __html: descriptionToHTML }}></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form__item">
          <label>Добавление комментариев</label>
          <textarea
            id="comment"
            name="comment"
            value={comment}
            rows={3}
            cols={75}
            onChange={handleChange}
          />
        </div>
        <div>
          <Button text="Сохранить" type='submit' />
        </div>
      </form>
      <ApplicationComments />
    </div>
  )
}