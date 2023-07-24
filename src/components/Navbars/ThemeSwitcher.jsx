import React, { useState } from 'react';
import { Sun, Moon } from 'react-feather';

const ThemeSwitcher = () => {
    // Initialize the checkbox state with the value from localStorage or false as default
    const [isChecked, setIsChecked] = useState(localStorage.getItem('phoenixTheme') === 'dark');

    // Function to toggle the checkbox state when it is clicked
    const handleCheckboxToggle = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        localStorage.setItem('phoenixTheme', newCheckedState ? 'dark' : 'light');
        // Update the body class directly based on the theme
        document.documentElement.classList.toggle('dark', newCheckedState);
    };

    return (
        <label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle">
            <input
                className="form-check-input ms-0 theme-control-toggle-input"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxToggle}
                id="themeControlToggle"
            />
            <span data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme">
                {isChecked ? <Moon size={16} /> : <Sun size={16} />}
            </span>
        </label>
    );
};

export default ThemeSwitcher;
