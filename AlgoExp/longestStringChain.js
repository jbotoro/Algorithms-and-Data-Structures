function longestStringChain(strings) {
    const stringChains = {};
	for (const string of strings) {
		stringChains[string] = {nextString: '', maxChainLength: 1};
	}
	
	
	const sortedStrings = strings.sort((a,b) => a.length - b.length);
	for (const string of sortedStrings){
		findLongestStringChain(string, stringChains);
	}
	
	return buildLongestStringChain(strings, stringChains)
}

function findLongestStringChain(string, stringChains) {
	for(let i = 0; i < string.length; i++){
		const smallerString = getSmallerString(string,i)
		if(!(smallerString in stringChains)) continue
		tryUpdateLongestStringChain(string, smallerString, stringChains)
	}
}

function getSmallerString(string,index) {
	return string.slice(0,index) + string.slice(index + 1);
}

function tryUpdateLongestStringChain(currentString, smallerString, stringChains) {
	const smallerStringChainLength = stringChains[smallerString].maxChainLength;
	const currentStringChainLength = stringChains[currentString].maxChainLength;
	
	if (smallerStringChainLength + 1 > currentStringChainLength){
		stringChains[currentString].maxChainLength = smallerStringChainLength + 1;
		stringChains[currentString].nextString = smallerString;
	}
}
function buildLongestStringChain(strings, stringChains) {
	let maxChainLength = 0;
	let chainStartingString = '';
	for (const string of strings) {
		if (stringChains[string].maxChainLength > maxChainLength){
			maxChainLength = stringChains[string].maxChainLength;
			chainStartingString = string;
	}
}
		
	const ourLongestStringChain = [];
	let currentString = chainStartingString;
	while (currentString !== '') {
		ourLongestStringChain.push(currentString);
		currentString = stringChains[currentString].nextString;
	}
	return ourLongestStringChain.length === 1 ? [] : ourLongestStringChain;
}