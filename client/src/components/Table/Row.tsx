import { TableElement } from "./types";

type Props = {
  el: TableElement;
};

const Row = ({ el }: Props) => {
  return (
    <tr>
      <td>
        <input type="text" name="value" value={el.id} />
      </td>
      <td>
        <input type="text" name="value" defaultValue={el.value} />
      </td>
    </tr>
  );
};

export default Row;
