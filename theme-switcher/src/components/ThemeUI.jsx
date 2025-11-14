import { useContext, useEffect} from "react";
import {ThemeContext} from "../components/Theme.jsx";

function ThemeUI() {
    const {theme, setTheme, toggleTheme} = useContext(ThemeContext);

    useEffect(() => {
        if(theme === 'light'){
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            setTheme('light');
        } else {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            setTheme('dark');
        }
    }, [theme])

    return(
        <>
        <h1>Theme Changer</h1>
        <button onClick={toggleTheme}>Change Theme</button>
        </>
    )
}

export default ThemeUI;