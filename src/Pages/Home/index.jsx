import React from 'react';
import Products from '../../component/Products';

Home.propTypes = {};

function Home(props) {
    return (
        <div>
            <Products onAddToCart={props.onAddToCart} />
        </div>
    );
}

export default Home;