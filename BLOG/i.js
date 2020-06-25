// 输入: [2,0,2,1,1,0]
// 输出: [0,0,1,1,2,2]
let nums = [2,0,2,1,1,0]

// var sortColors = function(nums) {
//   for(let i = 0; i < nums.length; i++){
//     for(let j = 0; j < nums.length; j++){
//       if(nums[i] <= nums[j]){
//         let lz = nums[i]
//         nums[i] = nums[j]
//         nums[j] = lz
//       }
//     }
//   }
//   return nums
// }

// console.log(sortColors(nums));


// function quickSort(arr){
//   //如果数组<=1,则直接返回
//   if(arr.length<=1){return arr;}
//   var pivotIndex=Math.floor(arr.length/2);
//   //找基准，并把基准从原数组删除
//   var pivot=arr.splice(pivotIndex,1)[0];
//   //定义左右数组
//   var left=[];
//   var right=[];

//   //比基准小的放在left，比基准大的放在right
//   for(var i=0;i<arr.length;i++){
//       if(arr[i]<=pivot){
//           left.push(arr[i]);
//       }
//       else{
//           right.push(arr[i]);
//       }
//   }
//   //递归
//   return quickSort(left).concat([pivot],quickSort(right));
// } 

// console.log();


// function quick(nums) {
//   let left = []
//   let right = []
//   let pivotIndex = Math.floor(nums.length/2) // 挑选中间值
//   var pivot = nums.splice(pivotIndex, 1)[0];

//   for (var i = 0; i < nums.length; i++){
 
// 　　　　if (nums[i] < pivot) {
// 　　　　　　left.push(nums[i]);
// 　　　　} else {
// 　　　　　　right.push(nums[i]);
// 　　　　}

//       return quickSort(left).concat([pivot], quickSort(right));
// 　　}
// }

// var quickSort = function(arr) {
 
//   　　if (arr.length <= 1) { return arr; }
   
//   　　var pivotIndex = Math.floor(arr.length / 2);
   
//   　　var pivot = arr.splice(pivotIndex, 1)[0];
   
//   　　var left = [];
   
//   　　var right = [];
   
//   　　for (var i = 0; i < arr.length; i++){
   
//   　　　　if (arr[i] < pivot) {
   
//   　　　　　　left.push(arr[i]);
   
//   　　　　} else {
   
//   　　　　　　right.push(arr[i]);
   
//   　　　　}
   
//   　　}
   
//   　　return quickSort(left).concat([pivot], quickSort(right));
   
//   };


class fastSort {
  constructor(array) {
      this.array = array
  }
  swiper(i, j) {
      let temp = this.array[i]
      this.array[i] = this.array[j]
      this.array[j] = temp
  }
  sort() {
      this.middle(0, this.array.length - 1)
      return this.array
  }
  middle(left, right) {
           
      let center = Math.floor((left + right) / 2)
      if (this.array[left] > this.array[center]) {
          this.swiper(left, center)
      }
      if (this.array[center] > this.array[right]) {
          this.swiper(center, right)
      }
      if (this.array[left] > this.array[center]) {
          this.swiper(left, center)
      }
      this.swiper(center, right - 1)      
      let i = left
      let j = right - 1     
      while (i < j) {
          while (this.array[++i] < this.array[right - 1]) { }
          while (this.array[--j] > this.array[right - 1]) { }
          if (i < j) {
              this.swiper(i, j)
          }
      }
      this.swiper(i, right - 1)
      // if (left < i - 1) {
      //     this.middle(left, i - 1)
      // }
      // if (i + 1 < right) {
      //     this.middle(i + 1, right)
      // }
  }
}
let q = new fastSort([ 4, 3, 23, 4, 5, 34, 645, 7, 6, 756, 8, 67, 876, 9,10])
console.log(q.sort());


// console.log(quickSort(nums));


