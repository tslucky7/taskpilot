import './style.css';
import { TaskStore } from './store/taskStore';
import { TaskApp } from './ui/TaskApp';

const store = new TaskStore();
const app = new TaskApp(store);
app.mount();

