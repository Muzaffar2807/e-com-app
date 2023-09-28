import React, { useEffect, useState } from "react";

import "./App.scss";
import Main from "./Main";

import axios from "axios";

import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "./context/Config";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import storeProvider from "./store/StoreProvider";
import storeFactory from "./store";

function App() {
  const [configFetched, setConfigFetched] = useState(false);
  const [config, setConifg] = useState({});

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

  storeProvider.init(storeFactory);
  const store = storeProvider.getStore();
  const saveState = () =>
    localStorage.setItem(config.reduxkey, JSON.stringify(store.getState()));
  store.subscribe(saveState);

  return (
    config &&
    configFetched && (
      <Provider store={store}>
        <ConfigProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Router basename={config.basePath}>
            <Main />
          </Router>
          <ToastContainer />
        </ConfigProvider>
      </Provider>
    )
  );
}

export default App;
