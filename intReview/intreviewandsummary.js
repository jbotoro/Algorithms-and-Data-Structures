/// PUBLICA CHALLENGE


// 1: Couldn't recall how to create nested objects structure -- use createNests helper function -- key to reassign obj = obj[key] to go further down nested objects
// 2: Learned '\n' is used to denote a line break and can be used to split a string into an array on linebreaks



// helper function to create nested objects from keyPath array

function createNests(obj, keyPath, value) {
    let lastKeyIndex = keyPath.length - 1;
    for( let i = 0; i < lastKeyIndex; i++){
        let key = keyPath[i];
        if( !(key in obj)){
            obj[key] = {}
        }
        obj = obj[key];
    }

    obj[keyPath[lastKeyIndex]] = value;
}




const LiveRampDataStoreBase = `data_store_segment_id,name,description,provider,price
1004765519,123Push > Consumer > Demographic > Senior Citizens > Age 65+,Individuals living in a household with 3 or more people.,123Push,0.75
1000846336,Alliant > Automotive > Auto - In Market New Vehicle,In-Market model for new vehicle,Alliant,2.75
1000846346,Alliant > Automotive > Auto - In Market for Insurance,In-Market model for auto insurance,Alliant,2.75
1000847476,Alliant > Automotive > Auto - In Market for Used Vehicle,In-Market model for used vehicle,Alliant,2.75
1000846216,Alliant > Demographic > Homeowner,Active multi-channel households who own their home,Alliant,2.0
1000845656,Alliant > Demographic > Age 25-29 years,Active multi-channel households with a person age 25-29 years old present in the HH.,Alliant,1.75
1000848136,Alliant > Demographic > Age 30-34 years,Active multi-channel households with a person age 30-34 years old present in the HH.,Alliant,1.75
1000845646,Alliant > Demographic > Age 35-39 years,Active multi-channel households with a person age 35-39 years old present in the HH.,Alliant,1.75
1000848146,Alliant > Demographic > Age 40-44 years,Active multi-channel households with a person age 40-44 years old present in the HH.,Alliant,1.75`;


function nest(param) {
    let map = {};

    let splitList = param.split('\n');
    // console.log(splitList)

    //remove first entry which contains only column names / could also keep and store if relevant
    splitList.shift();

    for(let i = 0; i < splitList.length; i++){

        // current entry 
        let splitEntry = splitList[i].split(',');
        let id = splitEntry[0];
        let nestOrder = splitEntry[1]
    
        // create keyPath i.e. structure of nested objects and split on > which divides each level of path
        nestOrder = nestOrder.split('>');
        
        let description = splitEntry[2];
        let provider = splitEntry[3];
        let price = splitEntry[4];
       
        // create obj for final value to be insert at deepest part of path
        let value = {
            'id' : id,
            'description' : description,
            'provider' : provider,
            'price' : price
        }

            

        
        // use helper fuction to use nestOrder to create nested obj structure, inserting value into deepest part of the path

        createNests(map, nestOrder, value)


       
    }

    console.log(JSON.stringify(map));

}

nest(LiveRampDataStoreBase);



//  Fabric 

// Given data obj with text and image data create "list item" for each and display in react

// takeaways: 
// 1: use Array.map to return a list item for each
// 2: when returning a React component make sure its wrapped in a div
// 3: use object-fit CSS property on img along with height and width properties to ensure same size for all images
// 4: Inline css uses {} as a wrapper ie. <img style: {'object-fit' : 'contain'}> or a string <img style= "color : blue">


// Verily

// Given an array of numbers, find the value of the contiguous sequence with the largest product.
// {6, -3, -10, 0, 2} = 180
// largest = 6
// {-2, -2, 0, 1} = 4
// {-1, -3, -10, 0, 60} = 60
// {-2, -3, 0, -2, -40} = 80
// {3, -1, -2} = 6


// My attempted solution

// Where I went wrong:

// 1: using break / continue when arr[i] or arr[j] === 0; this results in missing certain subarray combinations
// 2: sorting the arr / making several variables instead of just one "max"
// 3: didn't add 1 to the len for the j for loop (misses last value)
// 4: didnt use slice or reduce to clean up the calculation of each subarrays product

const arr = [6, -3, -10, 0, 2];


const largestContiguous = (arr) => {
  let sorted = arr.sort((a,b) => a - b);
  let len = arr.length;
  
  let largestSingle = sorted[len - 1];
  
  let largestCont = largestSingle
  
  for(let i = 0; i < len; i++){
    let current = arr[i];
    if(current === 0) continue;
//     console.log(current);
    
    let currentProduct = undefined
    
    for(let j = i + 1; j < len; j++){
      let next = arr[j];
      
      console.log(next)
      
      if(next === 0) break;
      
      
      
      let product = next * current;
      
      if( product > largestCont) largestCont = product;
      
//       console.log(product);
      
      if(!currentProduct){
        currentProduct = product
//         console.log(currentProduct)
      } else {
//         console.log(currentProduct)
        currentProduct = currentProduct * next
        if(currentProduct > largestCont) largestCont = currentProduct;
      }
//       console.log(largestCont);
    }
  }
  
  return largestCont;
  
  
};


// Actual Solution

// Takeaways

// 1: use .slice method to easily create subarrays along with 2 for loops to create all possible subarrays

// 2: use .reduce on each subarray to calculate the product of all subarrays to determine max

// 3: reassign max if currentSubArray product is larger

const largestContiguous2 = (arr) => {
    let max = arr[0];
    let len = arr.length;

    for(let i = 0; i < len; i++){
        for(let j = i + 1; j < len + 1; j++){

            // use slice & reduce to quickly determine product of each subarray

            let currentSubArray = arr.slice(i,j).reduce((acc,curr) => acc *= curr)
            if( currentSubArray > max) max = currentSubArray;
        }
    }

    return max;
}

console.log(largestContiguous2(arr));
