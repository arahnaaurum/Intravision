import { Outlet } from "react-router";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { StyledLayout } from "./layout.styled";


function Layout(): JSX.Element {
  return (
      <StyledLayout>
        <Sidebar />
        <div className="container">
          <Header />
          <Outlet />
        </div>
      </StyledLayout>
  );
}
export default Layout;