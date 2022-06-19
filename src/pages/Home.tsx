import './Home.scss';
import Hero from '../components/hero/hero';
import SEO from '../features/seo/seo';

const Home = () => {
  return (
    <>
      <SEO title='Darcy Merrick - Web Developer' description='This is the personal website for Darcy Merrick. It contains information about me, my skills and history. There are also pages for custom components.' keywords="Darcy, Darcy Merrick, Developer, Software, Software Engineer." />
      <div>
        <p className="banner">This website is a work in progress. I plan to make contributions multiple times per week but is still very much a slow burner</p>
        <Hero title="Darcy Merrick" subtitle="A web developer" />
    </div>
    </>
  );
}

export default Home;
