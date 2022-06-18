import './Home.scss';
import FancyLink from '../components/text/fancy-highlight/fancy-highlight-link';

const Home = () => {
  return (
    <div className="App">
      <div className="content">
        <h1>Hello world</h1>
        <p>
          This is normal text and some more
            <FancyLink url="">This is the fancy text</FancyLink>
          and we are back to normal text
        </p>
      </div>
    </div>
  );
}

export default Home;
