import { SET_PROJECTDETAIL_VISIBLE, SET_PROJECTDETAIL_UNVISIBLE } from './actionTypes';

const projectDetail = {
  todo: false,  // Todo 应用
  jzums: false,  // 橘子情感用户管理系统
  xyucms: false,  // 小鱼情感用户留言管理系统
};

export default (state = projectDetail, action) => {
  switch(action.type) {
    case SET_PROJECTDETAIL_VISIBLE:
      return {
        ...state,
	[action.target]: action[action.target]
      };
    case SET_PROJECTDETAIL_UNVISIBLE:
      return {
        ...state,
	[action.target]: action[action.target]
      };
    default:
      return state;
  }
};

