import React, { MouseEventHandler, useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import Row from "./Row";
import { TableElement } from "./types";

import { GoPlus } from "react-icons/go";
import TableControls from "./TableControls";

function Table(): JSX.Element | null {
  const { data } = useApi<TableElement[]>("data");

  const [tableData, setTableData] = useState<TableElement[]>([]);

  const addRow: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setTableData((prevState) => {
      const lastId = prevState.at(-1)?.id || 0;
      return prevState.concat({ id: lastId + 1, value: "" });
    });
  };

  const addColumn = () => {
    setTableData((prevState) => {
      const lastId = prevState.at(-1)?.id || 0;
      return prevState.concat({ id: lastId + 1, value: "" });
    });
  };

  useEffect(() => {
    if (data) {
      setTableData(data);
    }
  }, [data]);

  if (!tableData.length) return null;

  return (
    <div className="overflow-auto max-h-full ">
      <table className="">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            {Object.keys(tableData[1]).map((key) => (
              <th scope="col" className="px-6 py-4">
                {key}
              </th>
            ))}
            <th>
              <GoPlus className="cursor-pointer" />
            </th>
          </tr>
        </thead>
        {tableData.map((el) => (
          <Row el={el} />
        ))}
      </table>
      <TableControls addRow={addRow} />
    </div>
  );
}
export default Table;
