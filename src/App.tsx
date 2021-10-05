import './App.css';
import iconMusic from './images/icon-music.svg'
import illustrationHero from './images/illustration-hero.svg'

function App() {
  return (
    <div className="App">
      <img src={illustrationHero} className="imgHeader" alt="Backgound header Illustration Hero" />
      <h1>Order Summary</h1>
      <p>You can now listen to millions of songs, audibooks, and podcasts on any devices anywhere you like!</p>
      <div className="plan">
        <img src={iconMusic} alt="Icon Music" />
        <p><strong>Anual Plan</strong><br />$59.99/year</p>
        <a href="/">Change</a>
      </div>
      <a href="/" className="buttons proceed">Proceed to payment</a>
      <a href="/" className="buttons cancel">Cancel order</a>
    </div>
  );
}

export default App;
