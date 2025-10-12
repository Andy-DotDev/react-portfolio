import {useEffect } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";

import sun from "./Sun.svg";
import moon from "./Moon.svg";
import "./style.css";

const BtnDarkMode = () => {

    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

    useEffect(() => {
        if (darkMode ==="dark") {
            document.body.classList.add('dark')
            } else {
                document.body.classList.remove('dark');     
            }
    }, [darkMode]);

    useEffect(() => {
        window.matchMedia("(prefers-color-sheme: dark)").addEventListener('change', (event) => {
    const newColorSheme = event.matches ? "dark" : "light";
    setDarkMode(newColorSheme);
})

    }, [setDarkMode])

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === "light" ? "dark" : "light";
        });
    }

    const btnNormal = 'dark-mode-btn'
    const btnActive = 'dark-mode-btn dark-mode-btn--active'
    return ( 
        <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
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