import type { TaskStore } from "../store/taskStore";
import type { Task } from "../model/task";

export class TaskApp {
  private readonly taskStore: TaskStore;

  private form!: HTMLFormElement;
  private input!: HTMLInputElement;
  private rows!: HTMLTableSectionElement;
  private count!: HTMLElement;
  private clearBtn!: HTMLButtonElement;

  constructor(
    taskStore: TaskStore,
  ) {
    this.taskStore = taskStore;
    this.form = this.mustGet('#task-form');
    this.input = this.mustGet('#task-input');
    this.rows = this.mustGet('#task-rows');
    this.count = this.mustGet('#count');
    this.clearBtn = this.mustGet('#clear');
  }

  mustGet<T extends HTMLElement>(selector: string): T {
    const element = document.querySelector(selector) as T;
    if (!element) {
      throw new Error(`Element not found: ${selector}`);
    }
    return element;
  };

  mount(): void {
    this.form.addEventListener('submit', this.onSubmit.bind(this));
    this.clearBtn.addEventListener('click', this.onClear.bind(this));
    this.render();
  };

  onSubmit(event: Event): void {
    event.preventDefault();

    try {
      const title = this.input.value.trim();
      if (title === '') {
        return;
      }

      this.taskStore.add(title);
      this.input.value = '';

      this.render();
    } catch (error) {
      console.error(error);
    }
  };

  onClear(): void {
    this.taskStore.clear();
    this.render();
  };

  render(): void {
    const tasks = this.taskStore.all();
    this.count.textContent = tasks.length.toString();
    // this.count.textContent = String(tasks.length);

    this.rows.textContent = '';
    tasks.forEach((task) => {
      const row = document.createElement('tr');

      const idCell = this.createCell(task.id.toString());
      row.appendChild(idCell);

      const titleCell = this.createCell(task.title);
      row.appendChild(titleCell);

      const deleteBtn = this.createDeleteBtn(task);
      row.appendChild(deleteBtn);

      this.rows.appendChild(row);
    });
  };

  private createCell(content: string): HTMLTableCellElement {
    const cell = document.createElement('td');
    cell.textContent = content;
    return cell;
  }

  private createDeleteBtn(task: Task): HTMLButtonElement {
    const button = document.createElement('button');
    button.textContent = '削除';

    button.addEventListener('click', () => {
      this.taskStore.remove(task.id);
      this.render();
    });
    return button;
  }
}