import './CharacterCards.css';
import { Component } from 'react';
import { Character } from '../../fma-data';
import CharacterCard from './_components/CharacterCard';

type CharacterDataProps = {
  characters: Character[];
};

export class CharacterCards extends Component<CharacterDataProps> {
  render() {
    return (
      <section id='character-cards'>
        {this.props.characters.map((character) => {
          return <CharacterCard character={character} key={character.name} />;
        })}
      </section>
    );
  }
}
