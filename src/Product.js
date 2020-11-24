import React from 'react'
import './Product.css';

function Product() {
    return (
        <div className='product'>
            
            <div className='product__info'>

                <p>
                    The Lean startup
                </p>

                <p className='product__price'>
                    <small>₹</small>
                    <strong>199</strong>
                </p>

                <div className='product__rating'>

                    <p>⭐</p>
                   

                </div>

            </div>

            <img src="https://m.media-amazon.com/images/I/814EXQRrg5L._AC_UY218_.jpg" />

            <button>Add to Cart</button>

        </div>
    )
}
 
export default Product
