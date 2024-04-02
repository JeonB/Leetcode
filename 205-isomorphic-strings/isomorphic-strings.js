/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map1 = [256];
    const map2 = [256];

    for(let i = 0 ; i<s.length ; i++){
        if(map1[s.charAt(i)] !== map2[t.charAt(i)])
            return false;

        map1[s.charAt(i)] = i + 1;
        map2[t.charAt(i)] = i + 1;
    }

    return true;
};