import Container from '../container/container';
import './hero.scss'

const Hero = ({title, subtitle}:any) => {
    return (
        <Container className='hero'>
            <h1 className='hero-title'>{title}</h1>
            <h2 className='hero-subtitle'>{subtitle}</h2>
        </Container>
    );
}

export default Hero;