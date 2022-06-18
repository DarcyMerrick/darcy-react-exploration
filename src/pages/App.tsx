import './App.css';
import FancyText from '../components/text/fancy-highlight/fancy-highligh-text';

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Hello world</h1>
        <p>
          This is normal text and some more
            <FancyText url="">This is the fancy text</FancyText>
          and we are back to normal text
        </p>
      </div>
    </div>
  );
}

export default App;
