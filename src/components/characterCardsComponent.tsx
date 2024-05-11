import '../css/character-cards.css';
import { Component } from 'react';
import { Character } from '../fma-data';

type CharacterDataProps = {
  characters: Character[];
};

export class CharacterCards extends Component<CharacterDataProps> {
  render() {
    return (
      <section id='character-cards'>
        {this.props.characters.map((item) => {
          return (
            <div key={item.name} className='card'>
              <div className='card-titles'>
                <h3>{item.name}</h3>
                <h4>{item.nickName}</h4>
              </div>
              <img src={item.imageUrl} alt={`${item.name} image`} />
              <p>{item.background}</p>
            </div>
          );
        })}
      </section>
    );
  }
}
