import { Injectable } from '@angular/core';
import * as tasks from '../../public/tasks.json';
import { Task } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  // where to store dailies information?
  // ngRx store holds the entire json
  // this service will only init/overwrite values in browser local storage

  constructor() {}

  initDailyTasks() {
    const initDailies: Task[] = tasks.dailies;

    if (!this.getDailyTasks()) {
      this.saveTasks('dailies', JSON.stringify(initDailies));
    }
  }

  getDailyTasks(): Task[] {
    const data = tasks.dailies;

    return data;
  }

  public saveTasks(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  // public getTasks(key: string): Task[] | null {
  //   const data = localStorage.getItem(key);

  //   return data ? (JSON.parse(data) as Task[]) : null;
  // }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
