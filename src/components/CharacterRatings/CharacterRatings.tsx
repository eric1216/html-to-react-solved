import './CharacterRatings.css';
import { Character } from '../../fma-data';
import TableData from './_components/TableData';

type CharacterDataProps = {
  characters: Character[];
};

export function CharacterRatingTable({ characters }: CharacterDataProps) {
  const topFive = [...characters].sort((a, b) => b.votes - a.votes).slice(0, 5);
  return (
    <section id='character-ratings'>
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {topFive.map((character, itemIndex) => {
            const adjustIndex = itemIndex + 1;
            const theme = adjustIndex % 2 === 0;
            return <TableData character={character} key={character.name} theme={theme} />;
          })}
        </tbody>
      </table>
    </section>
  );
}
