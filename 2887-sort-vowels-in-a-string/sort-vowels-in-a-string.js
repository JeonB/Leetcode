/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let strArr = [...s];
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let hasVowels = false
    let findVowels = []
    let findVowelsIndex = []

    for(let i = 0 ; i<s.length ; i++){
        if(vowels.includes(s[i])){
            findVowelsIndex.push(i);
            findVowels.push(s[i]);
            hasVowels = true
        }
    }

    if(!hasVowels)
        return s

    findVowels.sort();
  
    for(let i = 0 ; i<findVowelsIndex.length ; i++)
        strArr[findVowelsIndex[i]] = findVowels[i];

    return strArr.join('');
};