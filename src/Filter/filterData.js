let cnm = ["操槽草襙艹", "妮尼你匿", "嘛妈麻码骂"];
let cnmFilter = [];
let tempStr = "";
//对cnm数组进行类似排列操作
for (let i = 0; i < cnm[0].length; i++) {
  for (let j = 0; j < cnm[1].length; j++) {
    for (let k = 0; k < cnm[2].length; k++) {
      tempStr = cnm[0][i] + cnm[1][j] + cnm[2][k];
      cnmFilter.push(tempStr);
    }
  }
}
const data = [...cnmFilter];
export { data };
