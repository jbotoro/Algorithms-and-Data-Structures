// React List

// We provided some simple React template code. Your goal is to display an 
// unordered list (UL) with list items (LI) within it. The content of each list 
// item should contain two spans (SPAN), one with the name and the other with the 
// age passed in to the DataList function. The span elements should be separated 
// by a single space.

// Submit your code once it is complete and our system will validate your output.

// Start Code:

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function DataList(props) {
    return (
        <h2> Your code goes here </h2>
    );
}

const data = [
    { name: 'Daniel', age: 25 },
    { name: 'John', age: 24 },
    { name: 'Jen', age: 31 },
];

ReactDOM.render(
    <DataList data={ data } />,
    document.getElementById('root')
);



// My Code:

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function DataList({data}) {
    return (
        <ul>
            {data.map( (item) => {
                return (
                <li>
                    <span>{item.name}</span>
                    &nbsp;
                    <span>{item.age}</span>
                </li>
                )
            })}
        </ul>
    );
}

const data = [
    { name: 'Daniel', age: 25 },
    { name: 'John', age: 24 },
    { name: 'Jen', age: 31 },
];

ReactDOM.render(
    <DataList data={ data } />,
    document.getElementById('root')
);