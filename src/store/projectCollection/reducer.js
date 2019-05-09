import projectTodoImage from './images/project_todo.png';
import projectJzUmsImage from './images/project_jzums.png';

const projectCollectionState = [
  { 
    project: 'todo',
    name: 'TODO 应用',
    isActived: false,
    isSourceContained: true,
    source: 'https://github.com/smpower/todo_web/',
    backgroundImage: projectTodoImage
  },
  {
    project: 'jzums',
    name: '橘子情感用户管理系统',
    isActived: false,
    isSourceContained: false,
    backgroundImage: projectJzUmsImage
  }
];

export default (state = projectCollectionState, action) => {
  return state;
};

