import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])

    return (
        <div className='mx-12'>
            <h2 className='text-5xl text-center bg-purple-300 font-bold p-4 mt-10 text-purple-950'>Awesome Affordable Prices</h2>

            <div className='grid md:grid-cols-3 gap-3 mt-10 text-center'>
                {
                    prices.map(price => <PriceCard
                        key={price.id}
                        price={price}
                    ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList; <h2>Awesome Affordable Prices</h2>