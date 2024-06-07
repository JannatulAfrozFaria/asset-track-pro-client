import React from 'react';

const Title = ({title,heading,subHeading,caption}) => {
    return (
        <div className='text-center mx-auto my-8' >
            <h3 className='md:w-1/3 mx-auto text-3xl text-white uppercase'>{title} </h3>
            <h3 className='md:w-1/3 mx-auto text-3xl text-purple-600 uppercase border-b-4 border-purple-300 py-4'>{heading} </h3>
            <p className='md-w-4/5 mx-auto text-gray-500 text-lg  mt-4' >{subHeading}</p>
            <p className='text-white text-lg' >{caption} </p>
            
        </div>
    );
};

export default Title;