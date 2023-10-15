import React from 'react';
import { socialLinks } from '../utils';

const Accounts: React.FC = () => {
    return (
        <div className='mt-6'>
            <h1 className='font-bebas-neue text-5xl text-center border-y pt-2 pb-1'>Social <span className='text-lime-500'>Profiles</span></h1>

            <div className="mt-7">
                <div className="flex space-x-3">
                    {
                        socialLinks.map((link, index) => <div className="" key={index}>
                            <a href={link.url} target='_blank' className='flex flex-col justify-center items-center hover:text-blue-600 duration-300'>
                                <img className='h-[40px] w-[40px]' src={link.icon} alt={link.name + ' ' + 'Icons'}  />
                                <p className='text-sm font-barlow-semi-condensed'>{link.name}</p>
                            </a>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Accounts;