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
