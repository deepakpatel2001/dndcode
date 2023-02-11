import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import './index.css';

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
});

function App() {
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [searchBtn, setSearchBtn] = useState("");
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);

  const columns = [
    { name: "Name", options: { filterOptions: { fullWidth: true } } },
    "Title",
    "Location"
  ];
  const options = {
    search: true,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: true,
    filterType: "dropdown",
    onColumnOrderChange: (order) => {
      console.log("Indices after swapping the column:", order);
      localStorage.setItem("columnOrder", JSON.stringify(order));
    },
    draggableColumns: {
      enabled: true,
    },
    responsive,
    tableBodyHeight,
  };

  const savedColumnOrder = JSON.parse(localStorage.getItem("columnOrder")) || [0, 1, 2];

  const data = [
    ["Gabby George", "Business Analyst", "Minneapolis"],
    [
      "Aiden Lloyd",
      "Business Consultant for an International Company and CEO of Tony's Burger Palace",
      "Dallas"
    ]
  ];

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
        <div className="formControl">
          <FormControl className="formControl">
            <InputLabel id="demo-simple-select-label">
              Responsive Option
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={responsive}
              style={{ width: "150px", marginBottom: "10px", marginRight: 10 }}
              onChange={(e) => setResponsive(e.target.value)}
            >
              <MenuItem value={"vertical"}>vertical</MenuItem>
              <MenuItem value={"standard"}>standard</MenuItem>
              <MenuItem value={"simple"}>simple</MenuItem>

              <MenuItem value={"scroll"}>scroll (deprecated)</MenuItem>
              <MenuItem value={"scrollMaxHeight"}>
                scrollMaxHeight (deprecated)
              </MenuItem>
              <MenuItem value={"stacked"}>stacked (deprecated)</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">
              Table Body Height
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={tableBodyHeight}
              style={{ width: "150px", marginBottom: "10px", marginRight: 10 }}
              onChange={(e) => setTableBodyHeight(e.target.value)}
            >
              <MenuItem value={""}>[blank]</MenuItem>
              <MenuItem value={"400px"}>400px</MenuItem>
              <MenuItem value={"800px"}>800px</MenuItem>
              <MenuItem value={"100%"}>100%</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">
              Max Table Body Height
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              style={{ width: "150px", marginBottom: "10px", marginRight: 10 }}
            >
              <MenuItem value={""}>[blank]</MenuItem>
              <MenuItem value={"400px"}>400px</MenuItem>
              <MenuItem value={"800px"}>800px</MenuItem>
              <MenuItem value={"100%"}>100%</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Search Button</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={searchBtn}
              style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
              onChange={(e) => setSearchBtn(e.target.value)}
            >
              <MenuItem value={"true"}>{"true"}</MenuItem>
              <MenuItem value={"false"}>{"false"}</MenuItem>
              <MenuItem value={"disabled"}>disabled</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Download Button</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={downloadBtn}
              style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
              onChange={(e) => setDownloadBtn(e.target.value)}
            >
              <MenuItem value={"true"}>{"true"}</MenuItem>
              <MenuItem value={"false"}>{"false"}</MenuItem>
              <MenuItem value={"disabled"}>disabled</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Print Button</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={printBtn}
              style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
              onChange={(e) => setPrintBtn(e.target.value)}
            >
              <MenuItem value={"true"}>{"true"}</MenuItem>
              <MenuItem value={"false"}>{"false"}</MenuItem>
              <MenuItem value={"disabled"}>disabled</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">
              View Column Button
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={viewColumnBtn}
              style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
              onChange={(e) => setViewColumnBtn(e.target.value)}
            >
              <MenuItem value={"true"}>{"true"}</MenuItem>
              <MenuItem value={"false"}>{"false"}</MenuItem>
              <MenuItem value={"disabled"}>disabled</MenuItem>
            </Select>
          </FormControl>
          <MUIDataTable
            title={"ACME Employee list"}
            debounceTime={500}
            columns={columns}
            data={data}
            options={{ ...options, columnOrder: savedColumnOrder }}
          />

        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;