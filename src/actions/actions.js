// ./redux/AppActions.js
/**
 * Action type
 */
const CHANGE_LINK_URL = "CHANGE_LINK_URL";
const CHANGE_LINK_TEXT = "CHANGE_LINK_TEXT";
const CHANGE_LINK_BOTH = "CHANGE_LINK_BOTH";


/**
 *  Action creator
 */
export const changeLinkUrl = (value) => ({
  type: CHANGE_LINK_URL,
  payload: {
    value,
  },
});

export const changeLinkText = (value) => ({
  type: CHANGE_LINK_TEXT,
  payload: {
    value,
  },
});

export const changeLinkBoth = (text,url) => ({
  type: CHANGE_LINK_BOTH,
  payload: {
		text,
		url
  },
});


