/**
 * @param {string[]} strs
 * @return {string}
 */
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    findLongestCommonPrefix() {
        let node = this.root;
        let prefix = "";

        while (node) {
            const keys = Object.keys(node.children);
            if (keys.length !== 1 || node.isEndOfWord) {
                break;
            }
            prefix += keys[0];
            node = node.children[keys[0]];
        }
        return prefix;
    }
}

function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    const trie = new Trie();
    for (const word of strs) {
        trie.insert(word);
    }

    return trie.findLongestCommonPrefix();
}
