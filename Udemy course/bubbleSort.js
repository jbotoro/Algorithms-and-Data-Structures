const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) { 
      if(array[j] > array[j+1]) {
        //Swap the numbers
        let temp = array[j]
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }        
  }
}

bubbleSort(numbers);
console.log(numbers);


function anagrams(text){
  let map = {};
  let res = [];

  for(let i = 0; i < text.length; i++){
    let currWord = text[i];
    let mapped = currWord.split('').sort().join('');

    if(i === 0){
      res.push(currWord)
      map[mapped] = true;
      console.log(res)
    }

    if(!map[mapped]){
      map[mapped] = true;
      res.push(currWord)
      console.log(res)
    }
  }
  console.log(res);
  console.log(map)
  return res.sort()
}