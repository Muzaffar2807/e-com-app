import qs from "qs";
import storeProvider from "../store/StoreProvider";
import * as Storage from "./LocalStorage";
import axios from "axios";

const badRespnseCodes = [401, 400];

export const axiosService = (
  API,
  payload,
  authNeeded = true,
  type = "POST"
) => {
  const userInfo = storeProvider.getAdminUserInfo();

  let authData = {};
  if (authNeeded) {
    authData = {
      token: userInfo.token,
    };
  }
  let header = {
    "content-type": "application/x-www-form-urlencoded;charset=utf-8",
    Authorization: authData.token,
  };

  if (type === "GET") {
    header = {
      "content-type": "application/json",
      Authorization: authData.token,
    };
  }
  return axios({
    method: type,
    url: API,
    headers: header,
    params:
      type === "GET" || type === "DELETE"
        ? {
            ...payload,
          }
        : {},
    data: qs.stringify({
      ...authData,
      ...payload,
    }),
  })
    .then(function (response) {
      var resData = response.data;
      if (!resData.success) {
        const message = resData.message;
        const errorRes = {
          status: false,
          data: resData.data,
          code: resData.code,
          msg: message,
          success: true,
        };
        if (authNeeded) {
          const sessionResp = checkSession(errorRes);
          return sessionResp;
        } else {
          return errorRes;
        }
      }
      const apiResponse = resData;
      return { status: true, data: apiResponse, success: true };
    })
    .catch(function (res) {
      console.log(res.response.status);
      if (
        res &&
        res.response &&
        res.response.status &&
        badRespnseCodes.indexOf(res.response.status) > -1
      ) {
        checkResponseCode(res);
      }
      console.log(res);
      console.log("An error occurred in " + API + "  service");
      return {
        status: false,
        ...res.response.data,
      };
    });
};

const checkResponseCode = (data) => {
  Storage.clear();
  // window.location.reload();
};

const checkSession = function (data) {
  let message = data.msg;

  if (typeof message === "string" || message instanceof String) {
    message = message ? message.toLowerCase() : "";
    message = message.trim();
    if (
      message === "id or token wrong." ||
      message === "email id or token wrong." ||
      message === "invalid signature"
    ) {
      const sessionKey = storeProvider.getSessionKey();
      console.log(sessionKey);
      Storage.remove(sessionKey);
      window.location.reload();

      return { ...data, sessionExpired: true };
    }
  }

  return { ...data, sessionExpired: false };
};
