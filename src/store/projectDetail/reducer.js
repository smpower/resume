import { SET_PROJECTDETAIL_VISIBLE, SET_PROJECTDETAIL_UNVISIBLE } from './actionTypes';

const projectDetail = {
  todo: false,  // Todo 应用
  ysfusion: false,  // 以萨技术融合系统
  ysface: false,  // 以萨技术人脸识别系统
  jzums: false,  // 橘子情感用户管理系统
  xyucms: false,  // 小鱼情感用户留言管理系统
  xypc: false,  // 小鱼情感 PC 端门户网站
  xymobile: false,  // 小鱼情感移动端门户网站
  jzmobile: false,  // 橘子情感移动端门户网站
  jzpc: false,  // 橘子情感 PC 端门户网站
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

