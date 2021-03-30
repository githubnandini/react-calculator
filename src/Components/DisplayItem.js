import React, {Component} from 'react';
export default class DisplayItem extends React.Component {
render(){
    var val = this.props.val
    return(
        <>
        <span class = "displayItem">{val}</span>
        </>
    )
}

}