import Section from './section'

export default function YourEvents(prop) {
    return (
        <>
            <Section
                title={prop.title}
                Card={prop.cardContent}>
            </Section>
        </>
    )
}