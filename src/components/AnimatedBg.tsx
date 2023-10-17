import React, { useEffect } from 'react';

const AnimatedBg: React.FC = () => {

    useEffect(()=>{
        const boxes = document.querySelectorAll('.box') as NodeListOf<HTMLElement>;
        boxes.forEach(box => {
            box.style.transform = `translate(${Math.random() * 100}vw, ${Math.random() * 100}vh)`
            box.style.animationDelay = `${Math.random() * 2}s`
        })
        
    },[])

    return (
        <div className='h-screen w-screen flex flex-wrap gap-1  overflow-hidden absolute top-0 left-0'>
            {
                Array(3100).fill(0).map((_, i) => <div key={i} className="h-3 w-3 box bg-gray-700"> </div>)
            }
        </div>
    );
};

export default AnimatedBg;