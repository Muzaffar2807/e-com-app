import storeProvider from "../store/StoreProvider";
import * as fetchServices from "./FetchServices";
import endPoints from "./ApiServices";
import axios from "axios";

const MainServices = {
  customerSignin: function (details) {
    const api = storeProvider.getApi();
    let API =  endPoints.customerSignin;

    let payload = {
      ...details,
    };

    return fetchServices.axiosService(API, payload, false).then((res) => {
      return res;
    });
  },
};

export default MainServices