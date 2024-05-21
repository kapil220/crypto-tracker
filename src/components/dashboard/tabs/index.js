import React, { useState } from "react";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { color } from "framer-motion";
import { ThemeProvider, createTheme } from "@mui/material";
import "./style.css";
import Grid from "../grid";
import List from "../list";

export default function TabComponents({ coins }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontFamily: "Inter",
    textTransform: "capitalize",
    fontWeight: 600,
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#438ddc",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="grid" value="grid" sx={style} />
            <Tab label="list" value="list" sx={style} />
          </TabList>
        </div>
        <TabPanel value="grid">
          <div className="grid-flex">
            {coins.map((coin, i) => {
              return <Grid coin={coin} key={i} />;
            })}
            ;
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="list-table">
            {coins.map((item, i) => {
              return <List coin={item} key={i} />;
            })}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
