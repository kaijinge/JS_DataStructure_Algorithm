/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //7种罗马数字
    var hash = {};
    hash['I'] = 1;
    hash['X'] = 10;
    hash['C'] = 100;
    hash['M'] = 1000;
    hash['V'] = 5;
    hash['L'] = 50;
    hash['D'] = 500;
    
    var sum = 0;
    
    for(var i = 0,len = s.length;i<len;i++){
        var val = hash[s[i]];
        var nextVal = i + 1 === len ? 0 : hash[s[i+1]];
        
        //相加原则
        if(nextVal > val){
            sum += nextVal - val;
            i++;
        }else{
            sum += val;
        }
    }
    return sum;
};