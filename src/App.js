import './App.css';
import CatFacts from './CatFacts.js';
import Posts from './Posts.js';
import Welcome from './Welcome.js';
import Yo from './Yo.js';
import Woof from './Woof.js';

function App() {
  return (
    <div className="App">
      <CatFacts count="3" />
      <hr />
      <Woof />
    </div>
  );
}

export default App;
