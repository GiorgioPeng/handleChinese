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
    return `<ruby> ${val}<rt>${res}</rt>
      </ruby>`;
  };
  return (
    <div>
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
            border: "2px solid pink",
            fontSize: "20px"
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
}
