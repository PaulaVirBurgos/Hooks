import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.Title}</td>
                    <td>{props.Length}</td>
                    <td>{props.Rating}</td>
                    <td>
                        <ul>
                            {/* Iterating through the array of categories and returning a list
                            item for each category. */}
                            {props.Categories.map((category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td>
                    <td>{props.Awards}</td>
                </tr>
            )
    }
    
        

export default ChartRow;