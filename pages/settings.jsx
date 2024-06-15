import React, { useEffect } from 'react'
import '../Styles/settings.css'

export default function Settings() {

    useEffect(() => {},[])

    const handleViewMode = (e) => {
        e.target.checked ?
            document.querySelector('body').setAttribute('viewMode', 'dark') : document.querySelector('body').setAttribute('viewMode', 'light') 
    }

    return (
        <div id="main-content">
            <h1>Impostazioni</h1>

            <div>
                <span className="option">Light Mode</span>
                <label className="switch">
                    <input type="checkbox" onChange={handleViewMode } />
                        <span className="slider round"></span>
                </label>
                <span className="option">Dark Mode</span>
            </div>
        </div>
    )
}