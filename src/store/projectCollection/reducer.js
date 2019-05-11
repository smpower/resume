import projectTodoImage from './images/project_todo.png';
import projectYsFusionImage from './images/project_ysfusion.png';
import projectYsFaceImage from './images/project_ysface.png';
import projectJzUmsImage from './images/project_jzums.png';
import projectXyUcmsImage from './images/project_xyucms.png';
import projectXyPcImage from './images/project_xypc.png';
import projectXyMobileImage from './images/project_xymobile.png';
import projectJzMobileImage from './images/project_jzmobile.png';
import projectJzPcImage from './images/project_jzpc.png';

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
    project: 'ysfusion',
    name: '以萨技术融合系统',
    isActived: false,
    isSourceContained: false,
    backgroundImage: projectYsFusionImage
  },
  {
    project: 'ysface',
    name: '以萨技术人脸识别系统',
    isActived: false,
    isSourceContained: false,
    backgroundImage: projectYsFaceImage
  },
  {
    project: 'jzums',
    name: '橘子情感用户管理系统',
    isActived: false,
    isSourceContained: false,
    backgroundImage: projectJzUmsImage
  },
  {
    project: 'xyucms',
    name: '小鱼情感用户留言管理系统',
    isActived: false,
    isSourceContained: false,
    backgroundImage: projectXyUcmsImage
  },
  {
    project: 'xypc',
    name: '小鱼情感 PC 端门户网站',
    isActived: false,
    isSourceContained: false,
    backgroundImage: projectXyPcImage
  },
  {
    project: 'xymobile',
    name: '小鱼情感移动端门户网站',
    isActived: false,
    isSourceContained: false,
    backgroundImage: projectXyMobileImage
  },
  {
    project: 'jzmobile',
    name: '橘子情感移动端门户网站',
    isActived: false,
    isSourceContained: false,
    backgroundImage: projectJzMobileImage
  },
  {
    project: 'jzpc',
    name: '橘子情感 PC 端门户网站',
    isActived: false,
    isSourceContained: false,
    backgroundImage: projectJzPcImage
  }
];

export default (state = projectCollectionState, action) => {
  return state;
};

