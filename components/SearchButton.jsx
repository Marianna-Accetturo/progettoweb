import { useState } from 'react'

export default function SearchButton() {

    const [hidden, setHidden] = useState(true)

    const handleHidden = () => {
        setHidden(!hidden)
    }

    return (
        <>
            <button id="search-btn" onClick={() => handleHidden()}>Cerca</button>
            <form id="search-bar" hidden={hidden}>
                <input type="text" id="search-input" placeholder="Cosa cerchi?" />
            </form>
        </>
    )
}