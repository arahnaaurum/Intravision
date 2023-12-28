import { useSelector } from "react-redux";
import { StyledTable } from "./Table.styled";
import { selectTasks } from "../../store/task/taskSlice";
import TableTask from "./TableTask";

const tableColumns = [
  { id: 1, title: "ID" },
  { id: 2, title: "Название" },
  { id: 3, title: "Статус" },
  { id: 4, title: "Исполнитель" },
]

type TableProps = {
  onOpen: () => void;
}

export default function Table({ onOpen }: TableProps) {
  const tasks = useSelector(selectTasks);

  const renderHeadings = () => {
    return tableColumns.map(({ id, title }) => (
      <th key={id} className="table__heading">
        <span className={`${id===1 ? 'table__heading_id' : id===4 ? 'table__heading_exec' : 'table__heading_text'}`}>
          {title}
        </span>
      </th>
    ))
  }

  const renderTasks = () => {
    return tasks.map((task, i) => (
      <TableTask
        key={task.id}
        task={task}
        onOpen={onOpen}
      />
    ))
  }

  return (
    <StyledTable>
      <thead>
        <tr className="table__headings">
          {/* пустной хеддинг - для тэга */}
          <th className="table__headings_tag"></th>
          {renderHeadings()}
        </tr>
      </thead>
      <tbody className="table__body">
        {tasks.length > 0 ? renderTasks() :
        <tr className="table__loading"><td></td><td>Идет загрузка...</td></tr>}
      </tbody>
    </StyledTable>
  )
}