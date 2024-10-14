import React, { useState, useEffect } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable, DataTableFilterMeta } from "primereact/datatable";
import { Column, ColumnFilterElementTemplateOptions } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

interface Customer {
  userId: string;
  fname: string;
  lname: string;
  email: string;
  date: string;
  status: string;
}

export default function Datatables() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const [selectedCustomers, setSelectedCustomers] = useState<Customer[]>([]);
  const [filters, setFilters] = useState<DataTableFilterMeta>({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    userId: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    fname: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    lname: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    email: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    date: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
    },
    status1: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
    },
    status2: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
    },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState<string>("");

  const [statuses] = useState<string[]>([
    "unqualified",
    "qualified",
    "new",
    "negotiation",
    "renewal",
  ]);

  const getSeverity = (status: string) => {
    switch (status) {
      case "unqualified":
        return "danger";

      case "qualified":
        return "success";

      case "new":
        return "info";

      case "negotiation":
        return "warning";

      case "renewal":
        return null;
    }
  };

  const sampleCustomers = [
    {
      id: 1,
      userId: "U001",
      fname: "John",
      lname: "Doe",
      email: "john.doe@example.com",
      date: "2023-01-15",
      status: "Active",
    },
    {
      id: 2,
      userId: "U002",
      fname: "Jane",
      lname: "Smith",
      email: "jane.smith@example.com",
      date: "2022-11-30",
      status: "Inactive",
    },
    {
      id: 3,
      userId: "U003",
      fname: "Michael",
      lname: "Johnson",
      email: "michael.johnson@example.com",
      date: "2023-07-20",
      status: "Pending",
    },
    {
      id: 4,
      userId: "U004",
      fname: "Emily",
      lname: "Brown",
      email: "emily.brown@example.com",
      date: "2023-05-22",
      status: "Active",
    },
    {
      id: 5,
      userId: "U005",
      fname: "Chris",
      lname: "Davis",
      email: "chris.davis@example.com",
      date: "2023-03-11",
      status: "Suspended",
    },
    {
      id: 6,
      userId: "U006",
      fname: "Sarah",
      lname: "Wilson",
      email: "sarah.wilson@example.com",
      date: "2023-06-05",
      status: "Active",
    },
    {
      id: 7,
      userId: "U007",
      fname: "David",
      lname: "Miller",
      email: "david.miller@example.com",
      date: "2022-10-12",
      status: "Inactive",
    },
    {
      id: 8,
      userId: "U008",
      fname: "Olivia",
      lname: "Taylor",
      email: "olivia.taylor@example.com",
      date: "2023-08-17",
      status: "Pending",
    },
  ];

  useEffect(() => {
    setCustomers(sampleCustomers);
    // CustomerService.getCustomersLarge().then((data) => setCustomers(getCustomers(data)));
  }, []);

  const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const exportPdf = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default(0, 0);

        console.log("exportColumns", exportColumns);
        console.log("customers", customers);
        doc.autoTable(exportColumns, customers);
        doc.save("customers.pdf");
      });
    });
  };

  const exportColumns = [
    { title: "User ID", dataKey: "userId" },
    { title: "First Name", dataKey: "fname" },
    { title: "Last Name", dataKey: "lname" },
    { title: "Email", dataKey: "email" },
    { title: "DOJ", dataKey: "date" },
    { title: "Status", dataKey: "status" },
  ];

  // Example of how to use exportColumns for exporting
  console.log("Export Columns: ", exportColumns);

  const exportExcel = () => {
    import("xlsx").then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(customers);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      saveAsExcelFile(excelBuffer, "customers");
    });
  };

  const saveAsExcelFile = (buffer: Uint8Array, fileName: string) => {
    import("file-saver").then((module) => {
      if (module && module.default) {
        const EXCEL_TYPE =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        const EXCEL_EXTENSION = ".xlsx";
        const data = new Blob([buffer], { type: EXCEL_TYPE });

        module.default.saveAs(
          data,
          `${fileName}_export_${new Date().getTime()}${EXCEL_EXTENSION}`
        );
      }
    });
  };

  const renderHeader = () => {
    return (
      <div className="flex flex-wrap gap-2 justify-content-between align-items-center">
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </IconField>
        <div className="totalContents flex">
          <p>Total List: Count &nbsp;&nbsp; | &nbsp;&nbsp;</p>
          <p>User Request: Count</p>
        </div>
        <div className="flex align-items-center justify-content-end gap-2">
          <Button
            type="button"
            icon="pi pi-file-excel"
            severity="success"
            rounded
            onClick={exportExcel}
            data-pr-tooltip="XLS"
          />
          <Button
            type="button"
            icon="pi pi-file-pdf"
            severity="danger"
            rounded
            onClick={exportPdf}
            data-pr-tooltip="PDF"
          />
        </div>
      </div>
    );
  };

  const statusBodyTemplate = (rowData: Customer) => {
    return (
      <Tag value={rowData.status} severity={getSeverity(rowData.status)} />
    );
  };

  const statusFilterTemplate = (
    options: ColumnFilterElementTemplateOptions
  ) => {
    return (
      <Dropdown
        value={options.value}
        options={statuses}
        onChange={(e: DropdownChangeEvent) =>
          options.filterCallback(e.value, options.index)
        }
        itemTemplate={statusItemTemplate}
        placeholder="Select One"
        className="p-column-filter"
        showClear
      />
    );
  };

  const statusItemTemplate = (option: string) => {
    return <Tag value={option} severity={getSeverity(option)} />;
  };

  const actionBodyTemplate = () => {
    return <i className="pi pi-cog" style={{ fontSize: "1.5rem" }}></i>;
  };

  const header = renderHeader();

  return (
    <div className="card">
      <DataTable
        value={customers}
        paginator
        header={header}
        rows={10}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        rowsPerPageOptions={[10, 25, 50]}
        dataKey="id"
        selectionMode="checkbox"
        selection={selectedCustomers}
        onSelectionChange={(e) => {
          const customers = e.value as Customer[];
          setSelectedCustomers(customers);
        }}
        filters={filters}
        filterDisplay="menu"
        scrollable
        scrollHeight="flex"
        globalFilterFields={[
          "name",
          "country.name",
          "representative.name",
          "balance",
          "status",
        ]}
        emptyMessage="No customers found."
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
      >
        <Column
          selectionMode="multiple"
          frozen
          headerStyle={{ width: "3rem" }}
        />
        <Column
          field="userId"
          header="User ID"
          sortable
          frozen
          filter
          filterPlaceholder="Search by name"
          style={{ width: "14rem" }}
        />
        <Column
          field="fname"
          header="First Name"
          sortable
          filter
          style={{ width: "20rem" }}
        />
        <Column
          field="lname"
          header="Last Name"
          sortable
          style={{ width: "20rem" }}
        />
        <Column
          field="email"
          header="Email"
          sortable
          style={{ width: "14rem" }}
          filterPlaceholder="Search by Email"
        />
        <Column
          field="date"
          header="DOJ"
          sortable
          filterField="date"
          dataType="date"
          style={{ width: "12rem" }}
        />

        <Column
          field="status1"
          header="Status 1"
          sortable
          filterMenuStyle={{ width: "14rem" }}
          style={{ width: "12rem" }}
          body={statusBodyTemplate}
          filter
          filterElement={statusFilterTemplate}
        />

        <Column
          field="status2"
          header="Status 2"
          sortable
          filterMenuStyle={{ width: "14rem" }}
          style={{ width: "12rem" }}
          body={statusBodyTemplate}
          filter
          filterElement={statusFilterTemplate}
        />

        <Column
          header="Action"
          bodyStyle={{ textAlign: "center", overflow: "visible" }}
          body={actionBodyTemplate}
        />
      </DataTable>
    </div>
  );
}
