import './Home.scss';
import Hero from '../components/hero/hero';

const Home = () => {
  return (
    <div>
      <p className="banner">This website is a work in progress. I plan to make contributions multiple times per week but is still very much a slow burner</p>
      <Hero title="Darcy Merrick" subtitle="A web developer" />
    </div>
  );
}

export default Home;
