import React from 'react';
import myImg from '../assets/img/me.png';
const About: React.FC = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className="flex gap-2 ">
                <img src={myImg} className='h-[150px] w-[150px]' alt="My Images " />
                <div className="">
                    <h1 className='text-3xl font-bebas-neue'>Md Rakibul Islam</h1>
                    <p className='font-barlow-semi-condensed font-medium leading-3'>Web Developer</p>
                    <p className='font-barlow-semi-condensed font-light leading-5 mt-3'>I am a web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                </div>
            </div>
            <div className="">

            </div>
        </div>
    );
};

export default About;