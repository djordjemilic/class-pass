import {media} from '@wix/api-client';

const Card = ({service}) => {
    const image = media.getImageUrl(service.media.coverMedia.image)

    return (
        <article className="card">
            <div className="card-info__container">
                <div className="card-img__container">
                    <img src={image.url} alt={service.name}/>
                </div>
                <div className="card-text__container">
                    <h3>{service.name}</h3>
                    <p>{service.tagLine}</p>
                </div>
            </div>
            <div>
                <p className="card-description__container">{service.description}</p>
            </div>
        </article>
    )
}

export default Card;