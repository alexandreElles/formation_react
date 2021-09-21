import React from 'react';
import styles from 'TemplateName.module.css'
import PropTypes from 'prop-types';

const templateNameInitialState ={}

function TemplateName(props) {
    const [state, setState] = useState(templateNameInitialState);
    return (
        <div className={styles.TemplateName} data-testid="TemplateName">
            templateName
        </div>
    );
}

TemplateName.propTypes = {

};

TemplateName.defaultProps = {

}

export default TemplateName;