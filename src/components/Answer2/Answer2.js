import React from 'react';
import './Answer2.css';

const Answer2 = () => {
    return (
        <div className='answer-2'>
            <h2>Question: Props vs state?</h2>            
            <table>
                <thead>
                    <tr>
                    <th>Number</th>
                    <th>Props</th>
                    <th>State</th>                    
                    </tr>
                </thead>
                <tbody className='tbody'>
                    <tr>
                    <th>1</th>
                    <td>Props are Immutable.</td>
                    <td>State is mutable.</td>                    
                    </tr>
                    <tr>
                    <th>2</th>
                    <td>Used to passed data from parent to child.</td>
                    <td>Used within the component (limited to current component)</td>                    
                    </tr>
                    <tr>
                    <th>3</th>
                    <td>Used to pass data as well as callback functions as props. </td>
                    <td>Initialize within constructor</td>                    
                    </tr>
                    <tr>
                    <th>4</th>
                    <td>Can get initialize from parent component and can be changed from a parent component </td>
                    <td>Used “this.setState” to update object.</td>                    
                    </tr>
                    <tr>
                    <th>5</th>
                    <td>Can set initialize the value for child component and can be changed in the child component </td>
                    <td>Can set initialize the value for child component and can be changed in the child component </td>
                    </tr>
                </tbody>
                </table>           
        </div>
    );
};

export default Answer2;