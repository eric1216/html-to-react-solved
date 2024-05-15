import { Character } from '../../../fma-data';

type Props = {
  character: Character;
  index: number;
};

const TableDataRow = ({ character, index }: Props) => {
  const { name, skillset, votes } = character;

  const adjustIndex = index + 1;
  const theme = adjustIndex % 2 === 0;
  return (
    <tr key={name} className={`${theme ? 'light' : 'dark'}`}>
      <td>{name}</td>
      <td>{skillset}</td>
      <td>{votes}</td>
    </tr>
  );
};

export default TableDataRow;
