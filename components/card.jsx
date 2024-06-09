import PropTypes from 'prop-types'
export default function Card({ url, descrizione }) {
    return (
        <div className="card">
            <img src={url}/>
            <p>{descrizione}</p>
            </div>
    )
}

Card.propTypes = {
    url: PropTypes.node,
    descrizione : PropTypes.node
}