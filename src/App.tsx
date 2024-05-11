import './css/reset.css';
import './css/style.css';
import './css/header.css';

import { data } from './fma-data';
import { CharacterRatingTable } from './components/characterRatingComponent';
import { CharacterCards } from './components/characterCardsComponent';

function App() {
  return (
    <>
      <header>
        <h1>Fullmetal Alchemist</h1>
        <nav>
          <li>about us</li>
          <li>info</li>
          <li>support us</li>
        </nav>
      </header>
      <CharacterRatingTable characters={data} />
      <CharacterCards characters={data} />
    </>
  );
}

export default App;
