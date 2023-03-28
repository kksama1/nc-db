import React, { MouseEventHandler } from "react";

type Props = {
  addRow: MouseEventHandler<HTMLButtonElement>;
};

const TableControls = ({ addRow }: Props) => {
  return (
    <div className=" mt-2 ">
      <button
        className="p-2 bg-gradient-to-b from-slate-50 to-slate-200 rounded border border-gray-300"
        onClick={addRow}
      >
        Добавить строку
      </button>
    </div>
  );
};

export default TableControls;
