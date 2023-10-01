import "./Login.scss";
import { Formik } from "formik";
import axios from "axios";
import MainServices from "../../../services/MainServices";
import validate from "../../../validations";
import * as Storage from "../../../services/LocalStorage";
import { useNavigate } from "react-router-dom";
import { updateUserProfile } from "../../../store/slices/user";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { notifySuccess, notifyError } from "../../../assets/elements/Toaster";
import { ScaleLoader } from "react-spinners";
import usericon from "../../../assets/images/icons/user-login.svg";
import lockicon from "../../../assets/images/icons/lock.svg";
import showicon from "../../../assets/images/icons/eye-slash.svg";
import hideicon from "../../../assets/images/icons/eye-open.svg"; 
import Logo from "../../../assets/images/icons/logo-png.png"


export default function LoginMain() {
  const [loginLoading, setLoginLoading] = useState();
  const [passwordHidden, setPasswordHidden] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { fileBasicPath, portal, tagline, sessionKey, moto } =
    useSelector((state) => state.config);

  const customerSignin = (values) => {
    setLoginLoading(true);
    const details = {
      email: values.email,
      password: values.password,
    };

    axios
      .all([MainServices.customerSignin(details)])
      .then(function (res) {
        if (res[0]) {
          let resData = res[0];
          let message = resData.message;
          if (resData.success) {
            let authData = resData.data ? resData.data : {};
            authData = authData.data ? authData.data : {};
            let data = {
              token: authData.access_token,
              email: authData.email,
              phone: authData.phone,
              role: authData.role,
              name: authData.name,
              userId: authData._id,
              seq_no: authData.sequence_no,
            };
            let key = sessionKey;
            Storage.set(key, JSON.stringify(data));
            dispatch(updateUserProfile(data));
            notifySuccess("Logged In  Succesfully");
            let plants = authData.plants || [];
            if (plants.length === 1) {
              let plant = plants[0];
              let temp = {
                plant_name: plant?.plant_name,
                sequence_no: plant?.sequence_no,
                _id: plant?._id,
              };
              Storage.setPlant(JSON.stringify(temp));
              navigate(`/Dashboard`);
              window.location.reload();
            } else {
              navigate(`/plant-selection`);
            }
            setLoginLoading(false);
          } else {
            notifyError(message);
            setLoginLoading(false);
          }
        } else {
        }
      })
      .catch(function (res) {
        console.log(res);
        if (res.message) console.log("An error occurred in Customer` Signin");
      });
  };
  return (
    <div className="login-main">
      <div class="row container-login">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 p-0  ">
          <div className="login-main-bg-blue">
            <div className=" himsidebar-logo">
              <div className="himsidebar-logo-main">
                <img src={Logo} alt="logo" />
              </div>
             
            </div> 
          </div>
          
        </div>

        <div class="bg-white col-12 col-sm-12 col-md-6 col-lg-6 p-0">
          <div className="login-form-main-form">
            <div className="login-form">
              <div class="brand-logo">
                <h4>WELCOME BACK....</h4>
              </div>

              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  name: "",
                  phone: "",
                }}
                validationSchema={validate.loginSchema}
                onSubmit={(values) => {
                  customerSignin(values);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <form>
                    <div style={{ padding: "40px 0px", paddingBottom: "5px" }}>
                      <div class="form-group">
                        <div class="form-control-wrap">
                          <img src={usericon} alt="" />
                          <input
                            type="email"
                            class="form-control form-control-lg"
                            id="default-01"
                            placeholder="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            name="email"
                          />
                        </div>
                        {validate.displayError(touched, errors, "email")}
                      </div>

                      <div class="form-group">
                        <div class="form-control-wrap">
                          <img src={lockicon} alt="" />
                          <input
                            type={passwordHidden ? "password" : "text"}
                            class="form-control form-control-lg"
                            id="password"
                            placeholder="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            name="password"
                          />
                          <img
                            style={{ cursor: "pointer" }}
                            onClick={() => setPasswordHidden(!passwordHidden)}
                            src={passwordHidden ? showicon : hideicon}
                            alt="show"
                          />
                        </div>
                        {validate.displayError(touched, errors, "password")}
                      </div>
                    </div>

                    <div class="form-group">
                      {loginLoading ? (
                        <div style={{ margin: "0 auto", textAlign: "center" }}>
                          <ScaleLoader color="#0F93C3 " />
                        </div>
                      ) : (
                        <button
                          class="btn btn-lg btn-primary btn-block"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSubmit();
                          }}
                        >
                          LOGIN
                        </button>
                      )}
                      <div className="signup-container">
                        <h6>
                          Don't have a Account?{" "}
                          <span
                            style={{ color: "#4caeda", cursor: "pointer" }}
                            onClick={() => navigate("/signup")}
                          >
                            Register
                          </span>
                        </h6>
                      </div>

                      <h4 style={{ textAlign: 'center'}}>
                        Or
                      </h4>

                      {/* Add Google sign in here*/}
                      
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
