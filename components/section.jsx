import PropTypes from 'prop-types'
import Card from './card'

export default function Section({ title, cardContent }) {

    return (
        <section>
            <h2>{title}</h2>
            <div className="section">
                {cardContent?.map((c, index) => <Card key={index} url={c.url} descrizione={c.descrizione} />)}
            </div>
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.node,
    cardContent : PropTypes.node
}