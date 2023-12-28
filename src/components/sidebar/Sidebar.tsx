import { Link } from "react-router-dom";
import { Path } from "../../constant";
import { StyledSidebar } from "./sidebar.styled";

// в более сложном проекте данную переменную м.б.б. вынести в конфиги
const sidebarItems = [
  {id:1, title: "База знаний", path: Path.Base},
  {id:2, title: "Заявки", path: Path.Applications},
  {id:3, title: "Сотрудники", path: Path.Team},
  {id:4, title: "Клиенты", path: Path.Clients},
  {id:5, title: "Активы", path: Path.Actives},
  {id:6, title: "Настройки", path: Path.Settings},
];

export default function Sidebar () {
  function renderNavItems () {
    return sidebarItems.map(({id, title, path}) => (
      <li key={id}>
        <Link to={path} className="sidebar__item">
          <img src={`/img/${id}.png`} alt={title}/>
          <p>{title}</p>
        </Link>
      </li>
    ))
  }
  return (
    <StyledSidebar>
      <Link to="/" className="sidebar__logo">
        <img src="/img/logo.png" alt="Лого" title="Лого" />
      </Link>
      <ul>
        {renderNavItems()}
      </ul>
    </StyledSidebar>
  )
}