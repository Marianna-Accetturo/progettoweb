import PropTypes from 'prop-types'
import Section from './section'

export default function contentPage({ filter, content }) {

    return (
            <div>
            {/*content?.data.map((s, index) => <Section key={index} title={s.title} cardContent={s.cardContent} />)*/
                content?.data.filter(f => (!filter && f) || (f.title === filter)).map((s, index) => <Section key={index} title={s.title} cardContent={s.cardContent} />)}
            </div>
    )
}

contentPage.propTypes = {
    filter: PropTypes.node,
    content: PropTypes.node
}