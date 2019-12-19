import React from "react";
import { useState } from "react";
import { Input } from "antd";
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
      <p
        style={{
          paddingTop: "5px",
          paddingLeft: "10px",
          paddingBottom: "0px",
          marginBottom: "0",
          fontSize: "10px"
        }}
      >
        请输入需要过滤内容后按ENTER键获取过滤后内容
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "420px",
          marginTop: "20px"
        }}
      >
        <TextArea
          style={{ width: "40%", color: "white" }}
          onPressEnter={e => handleInput(e)}
        ></TextArea>
        <div
          style={{
            width: "40%",
            border: "2px solid pink",
            fontSize: "20px",
            overflow: "auto"
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
}
