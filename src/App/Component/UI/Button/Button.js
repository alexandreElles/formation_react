import React, {useState} from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css"

function Button(props){
    const [clicked, setClicked] = useState(false);
    console.log(props.text);
    return <button
        className={clicked? `${styles.Button} ${styles.clicked}`:`${styles.Button}`}
        onClick={event => {
            setClicked(true);
            props.onLeftClick(event)
        setTimeout(()=>{setClicked(false)},300)
        }}
        type={props.type}
        style={{backgroundColor: props.backgroundColor, color: props.color}}
    >{props.children}</button>
}
Button.propTypes={
    children: PropTypes.any.isRequired,
    onLeftClick: PropTypes.func.isRequired,
    type: PropTypes.string,
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

Button.defaultProps={
    children: 'Hello edjkzhd....',
    onLeftClick: ()=>{},
    backgroundColor:'yellow',
    color: 'white'
}
export default Button;