import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import News from "../components/News";
import PropTypes from "prop-types";
import Login from "../components/Login";
import ModeSwitch from "../components/ModeSwitch";
import Register from "../components/Register";
import ForgotPass from "../components/ForgotPass";
import VerfiyOTP from "../components/VerfiyOTP";
import ProtectedRoute from "./ProtectedRoute";

function AppRoute() {
  News.defaultProps = {
    newsCountry: "in",
    newsCategory: "general",
    newsNumber: 12,
  };

  News.propTypes = {
    newsNumber: PropTypes.number,
    newsCategory: PropTypes.string,
  };

  const [modeTxt, setModeTxt] = useState("Enable Dark Mode");
  const [hColor, setHColor] = useState("text-black");
  const [badgeColor, setBadgeColor] = useState("bg-dark");
  const [bodyColor, setBodyColor] = useState("bg-light");
  const [mode, setMode] = useState("bg-light");

  const toggleMode = () => {
    if (mode === "bg-light") {
      setMode("bg-dark");
      setModeTxt("Enable Light Mode");
      setHColor("text-white");
      setBadgeColor("bg-danger");
      setBodyColor("bg-dark");
    } else {
      setMode("bg-light");
      setModeTxt("Enable Dark Mode");
      setMode("bg-light");
      setHColor("text-black");
      setBadgeColor("bg-dark");
      setBodyColor("bg-light");
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/forgotpass" element={<ForgotPass />} />
      <Route path="/verifyotp" element={<VerfiyOTP />} />
      <Route
        path="/:name"
        element={
          <ProtectedRoute
            element={() => (
              <News
                key="general"
                newsCategory="general"
                bodyColorProp={bodyColor}
                hColorProp={hColor}
                modeProp={mode}
                badgeColorProp={badgeColor}
                modeSwitchProp={
                  <ModeSwitch toggleMode={toggleMode} modeTxt={modeTxt} />
                }
              />
            )}
          />
        }
      />
      <Route
        path="/news/general/:name"
        element={
          <ProtectedRoute
            element={() => (
              <News
                key="general"
                newsCategory="general"
                bodyColorProp={bodyColor}
                hColorProp={hColor}
                modeProp={mode}
                badgeColorProp={badgeColor}
                modeSwitchProp={
                  <ModeSwitch toggleMode={toggleMode} modeTxt={modeTxt} />
                }
              />
            )}
          />
        }
      />
      <Route
        path="/news/sports/:name"
        element={
          <ProtectedRoute
            element={() => (
              <News
                key="sports"
                newsCategory="sports"
                bodyColorProp={bodyColor}
                hColorProp={hColor}
                modeProp={mode}
                badgeColorProp={badgeColor}
                modeSwitchProp={
                  <ModeSwitch toggleMode={toggleMode} modeTxt={modeTxt} />
                }
              />
            )}
          />
        }
      />
      <Route
        path="/news/science/:name"
        element={
          <ProtectedRoute
            element={() => (
              <News
                key="science"
                newsCategory="science"
                bodyColorProp={bodyColor}
                hColorProp={hColor}
                modeProp={mode}
                badgeColorProp={badgeColor}
                modeSwitchProp={
                  <ModeSwitch toggleMode={toggleMode} modeTxt={modeTxt} />
                }
              />
            )}
          />
        }
      />
      <Route
        path="/news/technology/:name"
        element={
          <ProtectedRoute
            element={() => (
              <News
                key="technology"
                newsCategory="technology"
                bodyColorProp={bodyColor}
                hColorProp={hColor}
                modeProp={mode}
                badgeColorProp={badgeColor}
                modeSwitchProp={
                  <ModeSwitch toggleMode={toggleMode} modeTxt={modeTxt} />
                }
              />
            )}
          />
        }
      />
      <Route
        path="/news/health/:name"
        element={
          <ProtectedRoute
            element={() => (
              <News
                key="health"
                newsCategory="health"
                bodyColorProp={bodyColor}
                hColorProp={hColor}
                modeProp={mode}
                badgeColorProp={badgeColor}
                modeSwitchProp={
                  <ModeSwitch toggleMode={toggleMode} modeTxt={modeTxt} />
                }
              />
            )}
          />
        }
      />
      <Route
        path="/news/business/:name"
        element={
          <ProtectedRoute
            element={() => (
              <News
                key="business"
                newsCategory="business"
                bodyColorProp={bodyColor}
                hColorProp={hColor}
                modeProp={mode}
                badgeColorProp={badgeColor}
                modeSwitchProp={
                  <ModeSwitch toggleMode={toggleMode} modeTxt={modeTxt} />
                }
              />
            )}
          />
        }
      />
      <Route
        path="/news/politics/:name"
        element={
          <ProtectedRoute
            element={() => (
              <News
                key="politics"
                newsCategory="politics"
                bodyColorProp={bodyColor}
                hColorProp={hColor}
                modeProp={mode}
                badgeColorProp={badgeColor}
                modeSwitchProp={
                  <ModeSwitch toggleMode={toggleMode} modeTxt={modeTxt} />
                }
              />
            )}
          />
        }
      />
      <Route
        path="/news/entertainment/:name"
        element={
          <ProtectedRoute
            element={() => (
              <News
                key="entertainment"
                newsCategory="entertainment"
                bodyColorProp={bodyColor}
                hColorProp={hColor}
                modeProp={mode}
                badgeColorProp={badgeColor}
                modeSwitchProp={
                  <ModeSwitch toggleMode={toggleMode} modeTxt={modeTxt} />
                }
              />
            )}
          />
        }
      />
    </Routes>
  );
}

export default AppRoute;
