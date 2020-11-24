import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search.js';
import { ShoppingBasket } from '@material-ui/icons';

function header() {
    return (

        <div className = 'Header'>

            <img className = 'header_logo' src = "https://pngimg.com/uploads/amazon/amazon_PNG11.png" />

            <div className = 'header_search'>
                
                <input className='header_searchinput' type="text" />
                <SearchIcon className='header_searchIcon' />
                {/*Logo*/}

            </div>

            <div className='header_nav'>

                <div className='header_option'>
                    <span className='header__optionOnLineOne'>Hello Guest</span>
                    <span className='header__optionOnLineTwo'>Sign In</span>
                </div>

                <div className='header_option'>
                    <span className='header__optionOnLineOne'>Returns</span>
                    <span className='header__optionOnLineTwo'>& Orders</span>
                </div>

                <div className='header_option'>
                    <span className='header__optionOnLineOne'>Your</span>
                    <span className='header__optionOnLineTwo'>Prime</span>
                </div>

                <div className='header_optionBasket'>
                    <ShoppingBasket />
                    <span className='header_optionLineTwo header_basketCount'>0</span>
                </div>




            </div>

        </div>
    )
}

export default header
