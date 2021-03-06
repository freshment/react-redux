// import action types
import { CHANGE_INPUT_VALUE, SUBMIT_LIST, DELETE_ITEM, GET_LIST_DATA } from './action';

const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  // 将state 做一次深拷贝，避免修改原来的state产生副作用
  let prevState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case CHANGE_INPUT_VALUE:
      return Object.assign(prevState, { inputValue: action.value });
    case SUBMIT_LIST:
      return Object.assign(prevState, { inputValue: '', list: [...prevState.list, action.value] });
    case DELETE_ITEM:
      prevState.list.splice(action.index, 1);
      return Object.assign(prevState, { list: [...prevState.list] });
    case GET_LIST_DATA:
      return Object.assign(prevState, { list: [...action.value] });
    default:
    return state;
  }
}
