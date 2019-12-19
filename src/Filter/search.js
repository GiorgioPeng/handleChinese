import Pinyin from "pinyin";
import { data } from "./filterData.js";
const search = (res, val) => {
  for (let i = 0; i < res.length; i++) {
    for (let k = 0; k < data.length; k++) {
      let temp = res.slice(i, i + data[k].length).map(el => {
        //对数组中的每N个字符进行拆分
        return el[0];
      }); //切割拼音数组,使其变成和过滤数组一样长的一个个片段
      let equal = false; //默认不相等
      for (let j = 0; j < temp.length; j++) {
        //对切割后的和应过滤的逐位比较
        if (temp[j] === Pinyin(data[k])[j][0]) equal = true;
        else equal = false;
      }
      if (equal) {
        //相等的时候进行替换
        res.splice(i, data[k].length, ["*"], ["*"], ["*"]);
        let temp = val.substring(i, i + data[k].length);
        console.log(temp);
        val = val.replace(temp, "***");
        console.log(val);
      }
    }
  }
  return [res, val];
};
export default search;
