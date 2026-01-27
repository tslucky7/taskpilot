export interface Task {
  id: number;
  title: string;
}

// 連番の場合(localStorageに保存　または、サーバーサイドを構築して一任させる)
// let id = 1;
export const createTask = (title: Task["title"]): Task => {
  return {
    // id: id++,
    id: Date.now(),
    title,
  }
}