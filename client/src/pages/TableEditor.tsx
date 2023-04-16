import React from "react";
import Table from "../components/Table/Table";
import TableControls from "../components/Table/TableControls";
import TableForm from "../components/Table/TableForm";

const TableEditorPage = () => {
  return (
    <div className="p-2 bg-gradient-to-b from-white to-slate-100 flex-1">
      <TableForm />
    </div>
  );
};

export default TableEditorPage;
