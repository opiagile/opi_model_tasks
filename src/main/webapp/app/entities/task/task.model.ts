import * as dayjs from 'dayjs';

export interface ITask {
  id?: number;
  name?: string;
  dueDate?: dayjs.Dayjs;
  completed?: boolean;
}

export class Task implements ITask {
  constructor(public id?: number, public name?: string, public dueDate?: dayjs.Dayjs, public completed?: boolean) {
    this.completed = this.completed ?? false;
  }
}

export function getTaskIdentifier(task: ITask): number | undefined {
  return task.id;
}
