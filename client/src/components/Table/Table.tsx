import React from "react";
import useApi from "../../hooks/useApi";
import { TableElement } from "./types";

function Table(): JSX.Element | null {
  const { data } = useApi<TableElement[]>("data");

  if (!data) return null;

  return (
    <table className="myTable">
      {data.map((el) => (
        <tr>
          <td>
            <input type="text" name="value" value={el.id} />
          </td>
          <td>
            <input type="text" name="value" defaultValue={el.value} />
          </td>
        </tr>
      ))}
    </table>
  );
}
export default Table;
