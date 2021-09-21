import React from 'react';
import styles from './FlexLayout.module.css'
import PropTypes from 'prop-types';


function FlexLayout(props) {
    return (
        <div className={styles.FlexLayout} data-testid="FlexLayout">
            {props.children}
        </div>
    );
}

FlexLayout.propTypes = {
    children: PropTypes.array.isRequired
};

FlexLayout.defaultProps = {

}

export default FlexLayout;