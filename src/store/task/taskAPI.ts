import axios from "axios";
import { Priority, Status, Task, User } from "../../types/types";
import { API, API_URL, T_ID } from "../../constant";

export async function getStatuses (): Promise<Status[] | undefined> {
  try {
    const result = await axios.get(`${API_URL}${T_ID}${API.Statuses}`)
    return result.data
  } catch {
    //для реального API здесь предусматриваются обработчики ошибок, но для тестового просто вернем undefined
    return
  }
}

export async function getPriorities (): Promise<Priority[] | undefined> {
  try {
    const result = await axios.get(`${API_URL}${T_ID}${API.Priorities}`)
    return result.data
  } catch {
    return
  }
}

export async function getExecutors (): Promise<User[] | undefined> {
  try {
    const result = await axios.get(`${API_URL}${T_ID}${API.Users}`)
    return result.data
  } catch {
    return
  }
}


export async function getTasksData (): Promise<Task[] | undefined> {
  try {
    const result = await axios.get(`${API.TasksData}?tenantguid=${T_ID}`)
    return result.data.value
  } catch {
    return
  }
}

export async function createTask (task: Partial<Task>): Promise<number | undefined> {
  try {
    const result = await axios.post(`${API_URL}${T_ID}${API.Tasks}`, task);
    return result.data
  } catch {
    return
  }
}

export async function getTaskById (id: number): Promise<Task | undefined> {
  try {
    const result = await axios.get(`${API_URL}${T_ID}${API.Tasks}/${id}`);
    return result.data
  } catch {
    return
  }
}

export async function updateTask (task: Partial<Task>): Promise<undefined> {
  //для целей теста отправим только измененные поля
  const data: Partial<Task> = {
    id: task.id,
    statusId: task.statusId,
    executorId: task.executorId,
  }
  //проверка на наличие комментария
  if (task.comment) data.comment = task.comment;

  try {
    const result = await axios.put(`${API_URL}${T_ID}${API.Tasks}`, data);
  } catch {
    return
  }
}