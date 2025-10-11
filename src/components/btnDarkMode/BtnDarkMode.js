import { useState, useEffect } from "react";
import sun from "./Sun.svg";
import moon from "./Moon.svg";
import "./style.css";

const BtnDarkMode = () => {

    const [darkMode, setDarkMode] = useState("light");
    useEffect(() => {
        if (darkMode ==="dark") {
            document.body.classList.add('dark')
            } else {
                document.body.classList.remove('dark');
            }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === "light" ? "dark" : "light";
        });
    }

    return ( 
        <button className="dark-mode-btn " onClick={toggleDarkMode}>
              <img className="dark-mode-btn__icon" src={sun} alt="Light mode" />
              <img
                className="dark-mode-btn__icon"
                src={moon}
                alt="Light mode"
              />
            </button>
     );
}
 
export default BtnDarkMode;