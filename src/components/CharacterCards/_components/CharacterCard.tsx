import { Character } from '../../../fma-data';

const CharacterCard = ({ character }: { character: Character }) => {
  const { name, nickName, imageUrl, background } = character;
  return (
    <div key={name} className='card'>
      <div className='card-titles'>
        <h3>{name}</h3>
        {nickName && <h4>{nickName}</h4>}
      </div>
      <img src={imageUrl} alt={`${name} image`} />
      <p>{background}</p>
    </div>
  );
};

export default CharacterCard;
