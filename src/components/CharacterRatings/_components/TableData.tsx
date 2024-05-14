import { Character } from '../../../fma-data';

type Props = {
  character: Character;
  theme: boolean;
};

const TableData = ({ character, theme }: Props) => {
  const { name, skillset, votes } = character;
  return (
    <tr key={name} className={`${theme ? 'light' : 'dark'}`}>
      <td>{name}</td>
      <td>{skillset}</td>
      <td>{votes}</td>
    </tr>
  );
};

export default TableData;
