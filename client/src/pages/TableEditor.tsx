import React from "react";
import Table from "../components/Table/Table";
import TableControls from "../components/Table/TableControls";

const TableEditorPage = () => {
  return (
    <div className="p-2 bg-gradient-to-b from-white to-slate-100 h-full">
      <form>
        <Table />
        <TableControls />
      </form>
    </div>
  );
};

export default TableEditorPage;
