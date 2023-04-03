import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (

        <div className='bg-gray-800 rounded-xl p-7 m-5 flex flex-col'>

            <h2>
                <span className='text-5xl font-extrabold text-yellow-300 '>${price.price}</span>
                <span className='text-2xl font-bold text-white'>/mon</span>
            </h2>

            <h5 className='text-4xl font-bold text-white mt-3'>{price.name}</h5>
        
            <p className='text-white font-bold mt-12 mb-4 text-left'>Features: </p>
            {
                price.features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
            <button className='mt-auto w-full bg-green-500 py-3 rounded-lg text-white font-bold hover:bg-yellow-400 hover:text-gray-800 duration-500'>Buy Now</button>
        </div>

        

    );
};

export default PriceCard;