import React from "react";
import { useState } from "react";
import { Input } from "antd";
import Pinyin from "pinyin";
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
    for (let i in res) {
      result += `<ruby style="word-break: break-all;white-space: normal;"> ${val[i]}<rt>${res[i]}</rt>
      </ruby>`;
    }
    return result;
  };
  return (
    <div>
      <p style={{ paddingTop: "10px", paddingLeft: "10px" }}>
        暂时只支持纯中文
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "500px",
          marginTop: "20px"
        }}
      >
        <TextArea
          style={{ width: "40%" }}
          onChange={e => handleInput(e)}
        ></TextArea>
        <div
          style={{
            width: "40%",
            border: "2px solid #707070",
            fontSize: "20px",
            overflow: "scroll"
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
}
