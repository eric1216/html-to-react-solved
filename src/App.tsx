import './css/reset.css';
import './css/style.css';

import { data } from './fma-data';
import { CharacterRatingTable } from './components/CharacterRatings/CharacterRatings';
import { CharacterCards } from './components/CharacterCards/CharacterCards';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <CharacterRatingTable characters={data} />
      <CharacterCards characters={data} />
    </>
  );
}

export default App;
