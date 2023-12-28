import { useDispatch, useSelector } from "react-redux";
import { Task } from "../../types/types";
import { getCurrentTaskWithThunk, selectPriorities, selectStatuses } from "../../store/task/taskSlice";
import { StyledTask } from "./Table.styled";
import { AppDispatch } from "../../store";

type TableTaskProps = {
  task: Task;
  onOpen: () => void;
}

export default function TableTask({ task, onOpen }: TableTaskProps) {
  const dispatch = useDispatch<AppDispatch>();
  const priorities = useSelector(selectPriorities);
  const statuses = useSelector(selectStatuses);
  const priority = priorities.find((el) => el.id === task.priorityId);
  const status = statuses.find((el) => el.id === task.statusId);
  const statusName = !status? '' : status.name.length < 10? status.name : (status.name.substring(0, 8) + "...");
 
  const handleTaskChoice = () => {
    dispatch(getCurrentTaskWithThunk(task.id));
    onOpen();
  }

  return (
    <StyledTask
      tagсolor={priority?.rgb}
      statusсolor={status?.rgb}
      onClick={handleTaskChoice}
    >
      <td className="task__tag"></td>
      <td className="task__id">{(task.id).toLocaleString('ru-RU')}</td>
      <td className="task__name"><p>{task.name}</p></td>
      <td className="task__status"><span>{statusName}</span></td>
      <td className="task__executor"><p>{task.executorName || ''}</p></td>
    </StyledTask>
  )
}