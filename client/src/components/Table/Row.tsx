import { TableElement } from "./types";

type Props = {
  el: TableElement;
};

const Row = ({ el }: Props) => {
  return (
    <tr className="border-b dark:border-neutral-500">
      <td>
        <input
          className="whitespace-nowrap px-6 py-4 font-medium bg-transparent"
          type="text"
          name="value"
          value={el.id}
        />
      </td>
      <td>
        <input
          className="whitespace-nowrap px-6 py-4 bg-transparent"
          type="text"
          name="value"
          defaultValue={el.value}
        />
      </td>
    </tr>
  );
};

export default Row;
