function charCount(str){
    var resultObj = {}
    for(let i=0;i<str.length;i++){
        var char = str[i].toLowerCase();
        if(resultObj[char]){
            resultObj[char]++;
        }else{
            resultObj[char] = 1;
        }
    }
    return resultObj;
}
console.log(charCount("Hello Gangareddy"))