import { useState } from 'react'
export default function NewsButton() {

    const [hidden, setHidden] = useState(true)

    const hideNews = () => {
        setHidden(true)
    }

    const showNews = () => {
        setHidden(false)
    }


    return (
        <>
        <button id="news-btn" onClick={() => showNews() }>News</button>
        </>
    )
}

