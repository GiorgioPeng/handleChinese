import React from "react";
import { useState } from "react";
import { Input } from "antd";
import Pinyin from "pinyin";
import "./index.css";
const { TextArea } = Input;
export default function Index() {
  const [content, setContent] = useState("");
  const handleInput = e => {
    let val = e.currentTarget.value;
    let res = Pinyin(e.currentTarget.value);
    setContent(createPinyin(val, res));
  };
  const createPinyin = (val, res) => {
    let result = "";
    //添加符号处理,因为Pinyin方法会将多个符号占用一个位置
    let symbolSet = /[,./<>?;':"`~!@#$%^&*()_+-=\\|[\]{} A-Za-z0-9，。、？·！——【】：；‘’“”]{2,}/g;
    val = val.replace(symbolSet, " ");
    for (let i in res) {
      result += `<ruby style="word-break: break-all;white-space: normal;"> ${val[i]}<rt>${res[i][0]}</rt>
        </ruby>`;
    }
    return result;
  };
  return (
    <div>
      <p>暂时只支持纯中文</p>
      <div className="inputDiv">
        <TextArea
          style={{ width: "40%", color: "white" }}
          onChange={e => handleInput(e)}
        ></TextArea>
        <div
          className="resultDiv"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
}
