import Pinyin from "pinyin";
const data = ["操"];
const search = (res, val) => {
  for (let i in res) {
    try {
      //   console.log(childArr[0]);
      console.log(val[i]);
      if (res[i][0] === Pinyin(data[0])[0][0]) {
        res[i][0] = "*";
        val[i] = "*";
        console.log(val);
      }
    } catch (error) {}
  }
  return [res, val];
};
export default search;
