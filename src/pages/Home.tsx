import "./Home.scss";
import Hero from "../components/hero/hero";
import SEO from "../features/seo/seo";
import FancyLink from "../components/text/fancy-highlight/fancy-highlight-link";
import Container from "../components/container/container";
import Breaker from "../components/breaker/breaker";

const Home = () => {
  return (
    <>
      <SEO
        title="Darcy Merrick - Web Developer"
        description="This is the personal website for Darcy Merrick. It contains information about me, my skills and history. There are also pages for custom components."
        keywords="Darcy, Darcy Merrick, Developer, Software, Software Engineer."
      />
      <div>
        <p className="banner">
          This website is a work in progress. I plan to make contributions
          multiple times per week but is still very much a slow burner.
        </p>
        <Hero title="Darcy Merrick" subtitle="A web developer" />
        <Breaker />
        <Container >
          <h2>Some links:</h2>
          <p>
            Check out my{" "}
            <FancyLink url="https://github.com/DarcyMerrick/">
              Github page
            </FancyLink>{" "}
            here!
          </p>
          <p>
            Check out my{" "}
            <FancyLink url="https://www.linkedin.com/in/darcy-merrick/">
              LinkedIn page
            </FancyLink>{" "}
            here!
          </p>
        </Container>
      </div>
    </>
  );
};

export default Home;
