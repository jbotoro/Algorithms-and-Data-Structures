// React Native Simple Counter

// We provided some simple React Native template code. Your goal is to modify the 
// component so that the counter correctly displays and it increments by one 
// whenever the button is pressed. You are free to add classes and styles, but 
// make sure you leave the element ID's as they are.

// Submit your code once it is complete and our system will validate your output.

import React, { useState } from "react";
import { Text, View } from "react-native";

const SimpleCounter = () => {

    const [count,setCount] = useState(0);

    return (
        <View>
            <Text>Button count: 
                <span id="actualCount">{count}</span>
            </Text>
            <button 
                id="mainButton" 
                onClick={() => setCount(count + 1)}
            >Increase</button>
        </View>
    );
};

export default SimpleCounter;