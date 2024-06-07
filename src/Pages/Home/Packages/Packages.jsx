import React from 'react';
import Title from '../../../Components/Title';
import Cover from '../../../Components/Cover';
import card1 from '../../../assets/About/pink.png';
import card2 from '../../../assets/About/color.jpg';
import card3 from '../../../assets/About/liquid-purple.jpg';

const Packages = () => {
    return (
        <div className='w-5/6 md:w-full mx-auto mb-16'>
            <Title heading={'Packages section'} subHeading={'We have 3 varieties in Package'}></Title>
            <div className="flex flex-col md:flex-row gap-8">
                <Cover img={card1} title={'Bronze Package'} text={'Capacity: 5 Persons'}></Cover>
                <Cover img={card2} title={'Silver Package'} text={'Capacity: 10 Persons'}></Cover>
                <Cover img={card3} title={'gold Package'} text={'Capacity: 15 Persons'}></Cover>
            </div>
        </div>
    );
};

export default Packages;