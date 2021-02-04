// filter / map/ reduce
const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90]

let n =nums.filter(function (n) {
  return n < 100;
}).map(function (n) {
  return n*2;
}).reduce(function (preValue, n) {
  return preValue+n;
});
console.log(n);
let m = nums.filter(n=>n<100).map(n=>n*2).reduce((preValue, n)=>preValue+n);
console.log(m);

/*
* 需求1：取出所有小于100的数组
* */
// 解决方法1
let newNums = []
for (let i of nums){
  if (i<100){
    newNums.push(i)
  }
}
console.log(newNums);

// 解决方法2
let newNums1 = nums.filter(function (n) {
return n<100;
})
console.log(newNums1);

/*
* 需求2：将所有小于100的数字进行转化：全部 * 2
* */
let new2Nums = []
for (let i of newNums){
  new2Nums.push(i*2)
}
console.log(new2Nums);

let new2Nums1 = newNums.map(function (n) {
  return n*2;
})
console.log(new2Nums1);

/*
* 需求3：将所有的 new2nums 数字相加，得到最终的结果
* */
let total=0
for (let n of new2Nums){
  total+=n
}
console.log(total);

let total1 = new2Nums.reduce(function (preValue, book) {
  return preValue+ book
}, 0)
console.log(total1);