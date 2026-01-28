import { createTask, type Task } from '../model/task';

export class TaskStore {
  private tasks: Task[] = [];

  /**
   * タスクを追加する
   *
   * @param title タスク名
   */
  public add(title: string): Task {
    const trimmedTitle = title.trim();
    if (trimmedTitle === '') {
      throw new Error('タスク名を入力してください');
    }

    this.tasks = [...this.tasks, createTask(trimmedTitle)]; // 非破壊的に変更。
    return this.tasks[this.tasks.length - 1];
  }

  /**
   * タスクを削除する
   *
   * @param id タスクID
   * @returns 削除成功かどうか
   */
  public remove(id: number): boolean {
    const before = this.tasks.length;
    this.tasks = this.tasks.filter((t) => t.id !== id);

    return this.tasks.length !== before;
  }

  public clear(): void {
    this.tasks = []; // 非破壊的に変更。
  }

  /**
   * すべてのタスクを取得する
   *
   * @returns タスク配列
   */
  public all(): Task[] {
    return [...this.tasks]; // 非破壊的に変更。
  }
}
