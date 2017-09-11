/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs){

 	//若字符串数组为空，返回空
 	if(!strs.length) return '';

 	//计算字符串数组中长度最小元素
 	var len = strs.reduce(function(pre,item){
 		return Math.min(pre,item.length);
 	},Number.MAX_VALUE);

 	//以第一个元素为例，遍历从第一个元素到len，与数组中其他元素判断
 	var ans = '';
 	for(var i = 0; i < len; i++){
 		var temp = strs[0][i];

 		var flag = strs.every(function(item){
 			return item[i] === temp;
 		});

 		if(!flag) break;
 		ans += temp;
 	}
 	return ans;
 }