import React, {Component} from 'react';
import DisplayItem from "./DisplayItem";
import  {Box} from '@material-ui/core'

export default class Calculatorbutton extends React.Component {
    
    constructor(){
        super()
        this.state = {
           
            data : [],
            resultData : ''
        }
        this.result = this.result.bind(this)
 
    }
    ClearArray = () => {
        this.setState({data : [] })
        this.setState({resultData : '' })
    }
    clearArrayElement = (e) => {
        var array = this.state.data; 
        var index = array.indexOf(e.target.defaultValue)
          array.splice(index, 1);
          this.setState({data: array});
        
    }
    getValue = (e) => {
        var arrayElement = e.target.defaultValue
        if(arrayElement != 'AC' && arrayElement != 'C' ) {
        var newArray  = this.state.data.concat(arrayElement)
        this.setState({data : newArray })
        }
        
    }
result (){
var arrayElement = this.state.data
const operation = (accumulator, currentValue) => accumulator + currentValue;
var result = arrayElement.reduce(operation);

this.setState ({resultData : eval(result) })
}

    render(){
        return (
            <>
            {this.state.data.map((val,i)=>(
            <DisplayItem val = {val} 
            />
            ))}

            
            <p>{this.state.resultData}</p>
            <Box>
            <div className = "CalculatorContent">
                <ul>
                    <li><input   defaultValue = "AC" onClick = {this.ClearArray}   /></li>
                    <li><input   defaultValue = "C" onClick = {this.clearArrayElement}   /></li>
                    <li><input  defaultValue = "%" onClick = {this.getValue}   /></li>
                    <li><input  defaultValue = "/" onClick = {this.getValue}   /></li>
                </ul>
                <ul>
                    <li><input  defaultValue = "7" onClick = {this.getValue}   /></li>
                    <li><input  defaultValue = "8" onClick = {this.getValue}   /></li>
                    <li><input  defaultValue = "9" onClick = {this.getValue}  /></li>
                    <li><input  defaultValue = "*" onClick = {this.getValue}  /></li>
                </ul>
                <ul>
                    <li><input  defaultValue = "4" onClick = {this.getValue}  /></li>
                    <li><input  defaultValue = "5" onClick = {this.getValue}  /></li>
                    <li><input  defaultValue = "6" onClick = {this.getValue}  /></li>
                    <li><input  defaultValue = "-" onClick = {this.getValue}  /></li>
                </ul>
                <ul>
                    <li><input  defaultValue = "1" onClick = {this.getValue}  /></li>
                    <li><input  defaultValue = "2" onClick = {this.getValue}  /></li>
                    <li><input  defaultValue = "3" onClick = {this.getValue}  /></li>
                    <li><input  defaultValue = "+" onClick = {this.getValue}  /></li>
                </ul>
                <ul>
                    <li></li>
                    <li><input  defaultValue = "0" onClick = {this.getValue}  /></li>
                    <li><input  defaultValue = "." onClick = {this.getValue}  /></li>
                    <li><input  defaultValue = "=" onClick = {this.result}  /></li>
                </ul>
            </div>
            </Box>
        </>
        )
    }
}