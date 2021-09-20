import React from "react";
import "./Button.css";

interface ButtonProps {
    children?: any[]|{};
    text?: string;
}

export function ButtonTS(props:ButtonProps){
    console.log(props.text)
    return <button className="Button">{props.children?props.children:'BENJAMIIIIN'}</button>
}

//export default Button;
