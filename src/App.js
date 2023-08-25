import React, { useEffect, useState } from "react";

import "./App.scss";
import Main from "./Main";

import axios from "axios";

import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "./context/Config";

function App() {
  const [configFetched, setConfigFetched] = useState(false);
  const [config, setConifg] = useState();

  useEffect(() => {
    axios
      .get("config/appConfig.json")
      .then(function (res) {
        var appconfig = res.data;
        setConifg(appconfig);
        setConfigFetched(true);
      })
      .catch(function (res) {
        console.log(res);
        console.log("An error occurred config in appjs");
      });
  }, []); 
  return (
    config &&
    configFetched && (
      <ConfigProvider>
        <Router basename={config.basePath}>
          <Main />
        </Router>
      </ConfigProvider>
    )
  );
}

export default App;
