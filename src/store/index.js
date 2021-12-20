import { createStore } from "redux";

// 初期State
const initialState = {
  linkUrl: 'https://www.yahoo.co.jp/',
  linkText: 'Yahoo',
}

// Reducer処理 どのタイミングでデータを書き換えるのか
const reducer = (state = initialState, action) => {
	switch (action.type) {
		//action からメッセージ CHANGE_LINK_URL を受け取ったら
		case 'CHANGE_LINK_URL': {
			// initialState の linkUrl を action.payload.value に変更
      return {...state,linkUrl:action.payload.value}
    }
    case 'CHANGE_LINK_TEXT': {
			return {...state,linkText:action.payload.value}
		}
		case 'CHANGE_LINK_BOTH': {
			return {...state,linkText:action.payload.text,linkUrl:action.payload.url}
    }
    default: {
      return state
    }
  }
}

const store = createStore(reducer);

export default store;