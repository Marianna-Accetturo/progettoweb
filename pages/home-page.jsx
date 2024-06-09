import React, {useState, useEffect } from 'react'
import contentData from '../content.json'
import Section from '../components/section'

export default function Home() {
    const [content, setContent] = useState(null);
    useEffect(() => {setContent(contentData)},[])

    return (
        <>
        <div id="home-page">
                {content?.data.map((s, index) => <Section key={index} title={s.title} cardContent={s.cardContent} />)}
            </div>
        </>
    )
}