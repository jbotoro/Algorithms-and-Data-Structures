// You're looking to move into a new apartment and youre given a list of blocks where
// each block contains an apartment that you could move into. In order to pick your
// apartment, you want to optimize its location. You also have a list of reqs: a list
// of buildings that are important to you. For instance, you might value having a 
// school and gym near your apartment. The list of blocks that you have contains
// info at every block about all the buildings that are present and absent at the block
// in question. For instance, you might know whether a school, a pool, an office, and
// a gym are present.

// In order to optimize your life, you want to minimize the farthest distance youd
// have to walk from your apartment to reach any of your required buildings.

// Write a function that takes in a list of blocks and a list of your required buildings
// and that returns the location(the index) of the block that's most optimal for you.

// If there are multiple most optimal blocks, your function can return the index
// of any one of them.

// Sample Input

// blocks = [
//     {
//         "gym" : false,
//         "school" : true,
//         "store" : false,
//     }
//     {
//         "gym" : true,
//         "school" : false,
//         "store" : false,
//     }
//     {
//         "gym" : true,
//         "school" : true,
//         "store" : false,
//     }
//     {
//         "gym" : false,
//         "school" : true,
//         "store" : false,
//     }
//     {
//         "gym" : false,
//         "school" : true,
//         "store" : true,
//     }
// ]

// reqs = ["gym", "school", "store"]

// Sample Output

// 3


function apartmentHunting(blocks, reqs) {
    const maxDistancesAtBlocks = new Array(blocks.length).fill(-Infinity);
	for (let i = 0; i < blocks.length; i++){
		for (const req of reqs){
			let closestReqDistance = Infinity;
			for (let j = 0; j < blocks.length; j++){
				if (blocks[j][req]){
					closestReqDistance = Math.min(closestReqDistance, distanceBetween(i,j));
				}
			}
			maxDistancesAtBlocks[i] = Math.max(maxDistancesAtBlocks[i], closestReqDistance)
		}
	}
	return getIdxAtMinValue(maxDistancesAtBlocks);
}

function getIdxAtMinValue(array) {
	let idxAtMinValue = 0;
	let minValue = Infinity;
	for (let i = 0; i < array.length; i++){
		const currentValue = array[i];
		if (currentValue < minValue){
			minValue = currentValue;
			idxAtMinValue = i;
		}
	}
	return idxAtMinValue;
}

function distanceBetween(a,b) {
	return Math.abs(a - b);
}