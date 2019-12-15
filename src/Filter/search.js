import Pinyin from "pinyin";
const data = ["操你妈"];
const search = (res, val) => {
  for (let i = 0; i < res.length; i++) {
    // try {
    //   console.log(childArr[0]);
    let temp = res.slice(i, i + data[0].length).map(el => {
      return el[0];
    }); //切割拼音数组,使其变成和过滤数组一样长的一个个片段
    let equal = false;
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] === Pinyin(data[0])[j][0]) equal = true;
      else equal = false;
    }
    if (equal) {
      res.splice(i, data[0].length, ["*"], ["*"], ["*"]);
      let temp = val.substring(i, i + data[0].length);
      console.log(temp);
      val = val.replace(temp, "***");
      console.log(val);
    }

    // if (res[i][0] === Pinyin(data[0])[0][0]) {
    //   res[i][0] = "*";
    //   val = val.replace(data[0], "*");
    // }
    // } catch (error) {}
  }
  return [res, val];
};
export default search;
