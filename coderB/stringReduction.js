// String Reduction

// Have the function StringReduction(str) take the str parameter being passed and 
// return the smallest number you can get through the following reduction method. 
// The method is: Only the letters a, b, and c will be given in str and you must 
// take two different adjacent characters and replace it with the third. For 
// example "ac" can be replaced with "b" but "aa" cannot be replaced with anything. 
// This method is done repeatedly until the string cannot be further reduced, 
// and the length of the resulting string is to be outputted.

// For example: if str is "cab", then "ca" can be reduced to "b" and you get "bb" 
// (you can also reduce it to "cc"). The reduction is done so the output should 
// be 2. If str is "bcab", "bc" reduces to "a", so you have "aab", then "ab" 
// reduces to "c", and the final string "ac" is reduced to "b" so the output should 
// be 1.

// Examples
// Input: "abcabc"
// Output: 2
// Input: "cccc"
// Output: 4

function StringReduction(str) { 
var res = str.length + 1;
  while(res>str.length){
    res = str.length;
    str = str.replace(/ab|ba/, 'c');
    str = str.replace(/ca|ac/, 'b');
    str = str.replace(/bc|cb/, 'a');
  } ;
     
  // code goes here  
  return str.length; 
         
}

/// PUBLICA CHALLENGE

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

{ "123Push ":
    {" Consumer ":
        {" Demographic ":
            {" Senior Citizens ":
                {" Age 65+":
                    {"id":"1004765519",
                    "description":"Individuals living in a household with 3 or more people.",
                    "provider":"123Push",
                    "price":"0.75"
                }
            }
        }
    }
},
"Alliant ":
    {" Automotive ":
        {" Auto - In Market New Vehicle":
            {"id":"1000846336",
            "description":"In-Market model for new vehicle",
            "provider":"Alliant",
            "price":"2.75"},
        " Auto - In Market for Insurance":
            {"id":"1000846346",
            "description":"In-Market model for auto insurance",
            "provider":"Alliant",
            "price":"2.75"}
            ,
        " Auto - In Market for Used Vehicle":
            {"id":"1000847476",
            "description":"In-Market model for used vehicle",
            "provider":"Alliant",
            "price":"2.75"}
    },
    " Demographic ":
        {" Homeowner":
            {"id":"1000846216",
            "description":"Active multi-channel households who own their home",
            "provider":"Alliant",
            "price":"2.0"},
        " Age 25-29 years":
            {"id":"1000845656",
            "description":"Active multi-channel households with a person age 25-29 years old present in the HH.",
            "provider":"Alliant",
            "price":"1.75"},
        " Age 30-34 years":
            {"id":"1000848136",
            "description":"Active multi-channel households with a person age 30-34 years old present in the HH.",
            "provider":"Alliant",
            "price":"1.75"},
        " Age 35-39 years":
            {"id":"1000845646",
            "description":"Active multi-channel households with a person age 35-39 years old present in the HH.",
            "provider":"Alliant",
            "price":"1.75"},
        " Age 40-44 years":
            {"id":"1000848146",
            "description":"Active multi-channel households with a person age 40-44 years old present in the HH.",
            "provider":"Alliant",
            "price":"1.75"}
        }
    }
}