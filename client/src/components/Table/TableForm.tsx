import Table from "./Table";
import TableControls from "./TableControls";
import TableMenubar from "./TableMenubar";

const TableForm = () => {
  return (
    <form>
      <TableMenubar name="Имя таблицы" />
      <Table />
    </form>
  );
};

export default TableForm;
