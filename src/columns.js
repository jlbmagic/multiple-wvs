const customerColumns = [
  {
    name: "CompanyName",
    data: "fieldData.CompanyName",
    title: "Company",
    visible: true,
  },
  { name: "City", data: "fieldData.City", title: "City" },
  {
    name: "State",
    data: "fieldData.State",
    title: "State",
    orderable: true,
    searchable: true,
  },
  { name: "Zip", data: "fieldData.Zip", title: "Zip", orderable: false },
  { name: "Sales", data: "fieldData.Sales", title: "Sales this Year" },
];

const admissionsColumns = [
  { data: "fieldData.Grade", name: "Grade", title: "Grade" },
  { data: "fieldData.Status", name: "Status", title: "Status" },
  { data: "fieldData.School", name: "School", title: "School" },
];

export { customerColumns, admissionsColumns };
