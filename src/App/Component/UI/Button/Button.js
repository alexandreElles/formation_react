import React from "react";
import "./Button.css";

export function Button(props){
    console.log(props.text)
    return <button className="Button">{props.children?props.children:'BENJAMIIIIN'}</button>
}

//export default Button;
