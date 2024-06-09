import Card from './card'
import News from './news' 
export default function NewsPopUp() {
    return (
        <>
            <button onClick={closeNews}>X</button>
            <h3>News</h3>
            <div>
                <Card
                    url={News.url}
                    descrizione={News.descrizione}>
                </Card>
            </div>
        </>
    )

    function closeNews() {

    }
}