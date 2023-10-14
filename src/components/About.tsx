import myImage from '../assets/img/me.png';


const About = () => {
    return (
        <div>
            <img className='h-[250px] w-[250px] rounded-full' src={myImage} alt="" />
        </div>
    );
};

export default About;