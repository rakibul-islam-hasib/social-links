import React from 'react';
import myImg from '../assets/img/me.png';
const About: React.FC = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className="flex gap-2 ">
                <img src={myImg} className='h-[250px] w-[250px]' alt="My Images " />
                <div className="">
                    <h1 className='text-2xl font-serif'>Md Rakibul Islam</h1>
                </div>
            </div>
            <div className="">

            </div>
        </div>
    );
};

export default About;