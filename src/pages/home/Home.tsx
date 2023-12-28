import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Table from "../../components/table/Table";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { getExecutorsWithThunk, getTasksDataWithThunk } from "../../store/task/taskSlice";
import { StyledHome } from "./home.styled";
import CreateForm from "../../components/application/createForm/CreateForm";
import UpdateForm from "../../components/application/updateForm/UpdateForm";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getExecutorsWithThunk());
    dispatch(getTasksDataWithThunk());
  }, []);

  const [createForm, setCreateForm] = useState<boolean>(false);
  const openCreateForm = () => {
    setCreateForm(true);
  }
  const closeCreateForm = () => {
    setCreateForm(false);
  }

  const [updateForm, setUpdateForm] = useState<boolean>(false);
  const openUpdateForm = () => {
    setUpdateForm(true);
  }
  const closeUpdateForm = () => {
    setUpdateForm(false);
  }

  return (
    <StyledHome>
      <div className="home__btn">
        <Button
          text="Создать заявку"
          callback={openCreateForm}
        />
      </div>
      <Table
        onOpen={openUpdateForm}
      />
      {createForm &&
        <CreateForm
          onClose={closeCreateForm}
          openUpdateForm={openUpdateForm}
        />
      }
      {updateForm &&
        <UpdateForm
          onClose={closeUpdateForm}
        />
      }
    </StyledHome>
  )
}