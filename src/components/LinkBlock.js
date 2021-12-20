import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeLinkUrl,
  changeLinkText,
  changeLinkBoth,
} from "../actions/actions";
import './LinkBlock.css';

function LinkBlock() {
  //input の値
  const [inputLinkText, setInputLinkText] = useState("");
  const [inputLinkURL, setInputLinkURL] = useState("");
  //store から値を取得
  const linkUrl = useSelector((state) => state.linkUrl);
  const linkText = useSelector((state) => state.linkText);
  //useDispatch使います宣言
  const dispatch = useDispatch();
  //命令
  const changeURL = () => {
    if (inputLinkURL) {
      dispatch(changeLinkUrl(inputLinkURL));
    } else {
      alert("リンク先を入れてね");
    }
  };
  const changeText = () => {
    if (inputLinkText) {
      dispatch(changeLinkText(inputLinkText));
    } else {
      alert("テキストを入れてね");
    }
  };
  const changeBoth = () => {
    if (inputLinkURL && inputLinkText) {
      dispatch(changeLinkBoth(inputLinkText, inputLinkURL));
    } else {
      alert("値が足りません");
    }
  };

  return (
    <div className='Contents'>
      <p>
        <a href={linkUrl}>{linkText}</a>
      </p>
      <form action="" className="Form">
        <div className="Form__inputs">
          <div className="Form__input">
            <label htmlFor="linktext">リンクテキストを入れてください</label>
            <input
              id="linktext"
              type="text"
              value={inputLinkText}
              onChange={({ target: { value } }) => setInputLinkText(value)}
              placeholder="Link Text"
            />
          </div>
          <div className="Form__input">
            <label htmlFor="linkulr">リンクURLを入れてください</label>
            <input
              type="linkulr"
              value={inputLinkURL}
              onChange={({ target: { value } }) => setInputLinkURL(value)}
              placeholder="Link URL"
            />
          </div>
        </div>
        <div className="Form__btns">
          <button type="button" onClick={changeURL}>
            リンクを変更
          </button>
          <button type="button" onClick={changeText}>
            テキストを変更
          </button>
          <button type="button" onClick={changeBoth}>
            リンクとテキストを変更
          </button>
        </div>
      </form>
    </div>
  );
}

export default LinkBlock;
