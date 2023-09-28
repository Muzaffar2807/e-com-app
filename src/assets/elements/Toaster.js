import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toaster = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar
      theme="light"
    ></ToastContainer>
  );
};
export const notifySuccess = (text) => toast.success(text);
export const notifyError = (text) => toast.error(text);
export const notifyWarn = (text) => toast.warn(text);

export default Toaster;
