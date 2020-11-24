import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className = 'home'>

           <div className='home__container'>

               <img className='home__image ' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/BlackFriday/Fuji_TallHero_BFWeek_v1_en_US_1x._CB415746974_.jpg" />
               
               <div className='home__row'>
                    <Product />
                    <Product />
               </div>
               <div className='home__row'>
               <Product />
               <Product />
               <Product />
               <Product />

                </div>
                <div className='home__row'>
                <Product />
                <Product />
                <Product />

                </div>  

                
           </div>
            
        </div>
    )
}

export default Home 
