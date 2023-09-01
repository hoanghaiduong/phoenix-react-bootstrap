import React, { useState } from 'react';
import { Sun, Moon } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { setPhoenixThemeAction } from '../../redux/Actions';

const ThemeSwitcher = () => {
    // Initialize the checkbox state with the value from localStorage or false as default

    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const { phoenixTheme } = selector;
    // Function to toggle the checkbox state when it is clicked
    const handleChangeTheme = (e) => {
        dispatch(setPhoenixThemeAction(e.target.value));
    };

    return (
        <label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle">
            <input
                className="form-check-input ms-0 theme-control-toggle-input"
                type="checkbox"
                value={phoenixTheme === 'light' ? 'dark' : 'light'}
                onChange={handleChangeTheme}
                id="themeControlToggle"
            />
            <span data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme">
                {phoenixTheme === 'dark' ? <Moon size={19} /> : <Sun size={16} />}
            </span>
        </label>
    );
};

export default ThemeSwitcher;
