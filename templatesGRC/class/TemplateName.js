import React, {Component} from 'react';
import style from './TemplateName.module.css'
import PropTypes from 'prop-types';

const templateNameInitialState = {

}

class TemplateName extends Component {
    constructor(props) {
        super(props);
        this.state = templateNameInitialState;
    }
    render() {
        return (
            <div className={style.TemplateName} data-testid="TemplateName">
                templateName
            </div>
        );
    }
}

TemplateName.propTypes ={

}

TemplateName.defaultProps = {

}

export default TemplateName;