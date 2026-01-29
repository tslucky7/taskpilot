import type { TaskStore } from "../store/taskStore";

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
    this.form.addEventListener('submit', this.onSubmit);
    this.clearBtn.addEventListener('click', this.onClear);
    this.render();
  };

  onSubmit(event: Event): void {
    debugger;
    console.log('onSubmit this=', this);
  };

  onClear(): void {

  };

  render(): void {};
}