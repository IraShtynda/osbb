import './News.scss'

const NewsCard = ({title, description}) => {
    return (
        <div className='news__card'>
            <h2>{title}</h2>
            <p className='news__card-description'>{description}</p>
        </div>
    );
}

export default NewsCard;