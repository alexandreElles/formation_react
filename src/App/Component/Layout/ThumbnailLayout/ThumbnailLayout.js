import React from 'react';
import styles from 'ThumbnailLayout.module.css'
import PropTypes from 'prop-types';

const thumbnailLayoutInitialState ={}

function ThumbnailLayout(props) {
    const [state, setState] = useState(thumbnailLayoutInitialState);
    return (
        <div className={styles.ThumbnailLayout} data-testid="ThumbnailLayout">
            thumbnailLayout
        </div>
    );
}

ThumbnailLayout.propTypes = {

};

ThumbnailLayout.defaultProps = {

}

export default ThumbnailLayout;