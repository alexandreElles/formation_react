import React from "react";
import PropTypes from "prop-types";

function Button(props){
    console.log(props.text)
    return <button className="Button">{props.children}</button>
}
Button.propTypes={
    text: PropTypes.string,
    children: PropTypes.any.isRequired,
    onLeftClick: PropTypes.func.isRequired
}

Button.defaultProps={
    children: 'Hello edjkzhd....',
    onLeftClick: ()=>{}
}
export default Button;