function isPalindrome(word) {
let start = 0, end = word.length-1; 
let good = true;
for(let i  =0; i<word.length&&good; i++){
if(word.at(start) != word.at(end)){
good = false;
}
start++;
end--;
}
return good;
}

// Do not edit this line;
module.exports = isPalindrome;