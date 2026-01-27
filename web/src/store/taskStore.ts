import type { Task } from "../model/task";

export class TaskStore {
  private tasks: Task[] = [];

  public add(title: Task["title"]) {
    title = title.trim();
    if (title === "") {
      throw new Error("タスク名を入力してください");
    };
  }

  public remove(id: Task["id"]) {

  }

  public clear() {

  }

  public all() {

  }
}