import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'


const Feature = ({ feature }) => {
    return (
        <div className='ms-5 flex gap-2 items-center'>
            <CheckCircleIcon className="h-4 w-4 text-green-500" />

            <span className='text-white'>{feature}</span>
        </div>
    );
};

export default Feature;