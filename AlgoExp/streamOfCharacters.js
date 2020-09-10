// Implement the StreamChecker class as follows:

// StreamChecker(words): Constructor, init the data structure with the given words.
// query(letter): returns true if and only if for some k >= 1, the last k characters queried (in order from oldest to newest, including this letter just queried) spell one of the words in the given list.
 

// Example:

// StreamChecker streamChecker = new StreamChecker(["cd","f","kl"]); // init the dictionary.
// streamChecker.query('a');          // return false
// streamChecker.query('b');          // return false
// streamChecker.query('c');          // return false
// streamChecker.query('d');          // return true, because 'cd' is in the wordlist
// streamChecker.query('e');          // return false
// streamChecker.query('f');          // return true, because 'f' is in the wordlist
// streamChecker.query('g');          // return false
// streamChecker.query('h');          // return false
// streamChecker.query('i');          // return false
// streamChecker.query('j');          // return false
// streamChecker.query('k');          // return false
// streamChecker.query('l');          // return true, because 'kl' is in the wordlist
 

// Note:

// 1 <= words.length <= 2000
// 1 <= words[i].length <= 2000
// Words will only consist of lowercase English letters.
// Queries will only consist of lowercase English letters.
// The number of queries is at most 40000.


class TrieNode {
    constructor(value){
        this.value = value;
        this.children = {};
        this.end = false;
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode("*");
    }

    addWord(word){

        let lastNode = this.root;

        for(let i=0; i < word.length; i++){
            let char = word[i];
            if(lastNode.children[char] === undefined){
                lastNode.children[char] = new TrieNode(char);
            }
            lastNode = lastNode.children[char];
            if(i == word.length - 1) lastNode.end = true;

        }
    }

    hasWord(word){ 
        let lastNode = this.root;
        for(let i = 0; i < word.length; i++){
            let char = word[i];
            if(lastNode.children[char] === undefined){
                return false //returns false if the word is not in the trie
            }
            else{
                lastNode = lastNode.children[char];
            }
            
            if(i == word.length - 1 && lastNode.end){ //true if has the word
                return true;
            }
            else if (i == word.length - 1){ //return lastNode if a word matches partially
                return lastNode
            }
        }
        
        return false;

    }
}

class StreamChecker{
    constructor(words){
        this.trie = new Trie();
        this.letters = [];
        
        for(let word of words){
            let reversedWord = word.split('').reverse().join('')
            this.trie.addWord(reversedWord);
        }
    }
    
    query(letter){
        this.letters.unshift(letter);
        let possibleWord = ""
        for(let letter of this.letters){
            possibleWord = possibleWord + letter;
            let trieWord = this.trie.hasWord(possibleWord);
            if(trieWord === true) return true;
            if(trieWord === false) return false;
        }
		
        return false;
        
    }
}