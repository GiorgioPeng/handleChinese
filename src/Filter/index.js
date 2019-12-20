import React from "react";
import { useState } from "react";
import { Input } from "antd";
import "../Phonetic/index.css";
import Pinyin from "pinyin";
import search from "./search";
const { TextArea } = Input;
export default function Index() {
  const [content, setContent] = useState("");
  const handleInput = e => {
    let val = (function(e) {
      let temp = e;
      return temp;
    })(e.currentTarget.value);
    let res = Pinyin(e.currentTarget.value);
    setContent(createPinyin(val, res));
  };
  const createPinyin = (val, res) => {
    [res, val] = search(res, val);
    // let result = "";
    // for (let i in res) {
    //   result += `<ruby style="word-break: break-all;white-space: normal;"> ${val[i]}<rt>${res[i]}</rt>
    //   </ruby>`;
    // }
    return val;
  };
  return (
    <div>
      <p>请输入需要过滤内容</p>
      <div className="inputDiv">
        <TextArea
          style={{ width: "40%", color: "white" }}
          onChange={e => handleInput(e)}
        ></TextArea>
        <div
          style={{ borderColor: "pink" }}
          className="resultDiv"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
}
