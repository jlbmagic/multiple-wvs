import { customerColumns, admissionsColumns } from "./columns";

let table;
// https://datatables.net/reference/option/
// https://datatables.net/examples/index

window.loadTable = (json) => {
  const obj = JSON.parse(json);
  const data = obj.data;
  const type = obj.type;
  const columns = type === "Customers" ? customerColumns : admissionsColumns;
  // const data = [];
  table = $("#dtable").DataTable({
    columns,
    data,
  });
};

// add a row click event
$("#dtable").on("click", "tr", function () {
  const row = table.row(this);
  const data = row.data();
  const primaryKey = data.fieldData.PrimaryKey;
  const obj = { primaryKey, type };
  FileMaker.PerformScript("Get Data Back", JSON.stringify(obj));
});
