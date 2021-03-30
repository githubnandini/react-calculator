import React, {Component} from 'react';
import Calculatorbutton from "./Calculator";
import DisplayItem from './DisplayItem';

export default class App extends React.Component {
    render(){
        return (
            <>
            
            <div class = "calculatorMain">
            <div  className = "container">
            <DisplayItem />
            <Calculatorbutton />
            </div>
            </div>
        </>
            )
    }
}