import React from 'react';
import AppRoutes from '../Routes'

PageContent.propTypes = {};

function PageContent(props) {
    return (
        <div className='pageContent'>
            <AppRoutes onAddToCart={props.onAddToCart} />
        </div>
    );
}

export default PageContent;