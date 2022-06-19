import './hero.scss'

const Hero = ({title, subtitle}:any) => {
    return (
        <div className='hero'>
            <h1 className='hero-title'>{title}</h1>
            <h2 className='hero-subtitle'>{subtitle}</h2>
        </div>
    );
}

export default Hero;