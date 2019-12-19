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
      <p
        style={{
          paddingTop: "5px",
          paddingLeft: "10px",
          paddingBottom: "0px",
          marginBottom: "0",
          fontSize: "10px"
        }}
      >
        暂时只支持纯中文
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "450px",
          marginTop: "20px"
        }}
      >
        <TextArea
          style={{ width: "40%", color: "white" }}
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
