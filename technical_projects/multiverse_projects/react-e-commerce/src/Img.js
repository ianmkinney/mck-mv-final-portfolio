import { useState } from "react"

export const Img = props => {
    const [title, setTitle] = useState('')
    const [heart, setHeart] = useState(true)
    
    const overlayStyles = {
        position: 'absolute',
        bottom: '.5rem',
        left: '.5rem',
        fontSize: '2rem'
    }

    const showTitle = () => {
        setTitle(props.props[0].title)
    }
    const hideTitle = () => {
        setTitle('')
    }
    return (
        <figure 
            style={{position: 'relative'}} 
            onClick={() => setHeart(!heart)}
            onMouseEnter={showTitle}
            onMouseLeave={hideTitle}
            >
            <img src={props.props[0].imageSrc} alt={props.props[0].title} />
            <figcaption style={overlayStyles}>{heart ? '❤️' : ''} {title}</figcaption>
        </figure>
    )
}