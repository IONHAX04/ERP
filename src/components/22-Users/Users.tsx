import React, { useState } from "react";
import "./Users.css";

import { Divider } from "primereact/divider";

import Datatables from "../../pages/Datatable/Datatable";

import { MultiSelect, MultiSelectChangeEvent } from "primereact/multiselect";

interface City {
  name: string;
  code: string;
}

const Users: React.FC = () => {
  const [selectedCities, setSelectedCities] = useState<City | null>(null);
  const cities: City[] = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <div className="usersTable">
      <div className="componentHeader">
        <div className="componentTitle">Users Data</div>
        <div className="quickAcces">
          <div className="p-link layout-topbar-button">
            <i className="pi pi-user"></i>
          </div>
          <h3 className="ml-2 mr-5">User Name</h3>
        </div>
      </div>
      <div className="routesCont">
        <div className="routeContents">
          <div className="filterHeaders">
            <div className="card filterContents w-full md:w-10/12 mx-auto">
              <div className="filter w-full md:w-3/12 mx-auto">
                <MultiSelect
                  value={selectedCities}
                  onChange={(e: MultiSelectChangeEvent) =>
                    setSelectedCities(e.value)
                  }
                  options={cities}
                  optionLabel="name"
                  filter
                  placeholder="Select Cities"
                  maxSelectedLabels={3}
                  className="w-16rem"
                />
              </div>
              <div className="filter w-full md:w-3/12 mx-auto">
                <MultiSelect
                  value={selectedCities}
                  onChange={(e: MultiSelectChangeEvent) =>
                    setSelectedCities(e.value)
                  }
                  options={cities}
                  optionLabel="name"
                  filter
                  placeholder="Select Cities"
                  maxSelectedLabels={3}
                  className="w-16rem"
                />
              </div>
              <div className="filter w-full md:w-3/12 mx-auto">
                <MultiSelect
                  value={selectedCities}
                  onChange={(e: MultiSelectChangeEvent) =>
                    setSelectedCities(e.value)
                  }
                  options={cities}
                  optionLabel="name"
                  filter
                  placeholder="Select Cities"
                  maxSelectedLabels={3}
                  className="w-16rem"
                />
              </div>
              <div className="filter filterContents w-full md:w-3/12 mx-auto">
                <p>Clear Filter</p>
                <p>Apply Filter</p>
              </div>
            </div>
          </div>
          <Divider />

          <Datatables />
        </div>
      </div>
    </div>
  );
};

export default Users;
