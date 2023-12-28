//В более обширном проекте; конечно; типы описывались бы в разных файлах
//В целом можно использовать и типы; и интерфейсы.

export type Priority = {
  rgb: string;
  id: number;
  name: string;
}

export type Status = {
  rgb: string;
  id: number;
  name: string;
}

export type Service = {
  id: number;
  name: string;
}

export type Tag = {
  id: number;
  name: string;
}

export type Task = {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  price: number;
  taskTypeId: number;
  taskTypeName: string;
  statusId: number;
  statusName: string;
  statusRgb: string;
  priorityId: number;
  priorityName: string;
  serviceId: number;
  serviceName: string;
  resolutionDatePlan: Date;
  tags: Tag[];
  initiatorId: number;
  initiatorName: string;
  executorId: number;
  executorName: string;
  executorGroupId: number;
  executorGroupName: string;
  comment?: string;
  lifetimeItems?: {
    id: number,
    userName: string,
    lifetimeType: number,
    createdAt: Date,
    comment: string,
    fieldName: string,
    oldFieldValue: string,
    newFieldValue: string
  } []
}
export type TaskType = {
  id: number;
  name: string;
}

export type User = {
  id: number;
  name: string;
}