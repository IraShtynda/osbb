import './News.scss'
import NewsCard from './NewsCard';
import { news } from './news_data';
import { useState } from 'react';

const News = () => {
    const [isCompleted, setIsCompleted] = useState(true)
    const [index, setIndex] = useState(2)
    const initialNews = news.slice(0, index);

    const loadMore = () => {
        setIndex(index + 2)
        if (index >= news.length - index) {
            setIsCompleted(false)
        }
    }

    return (
        <main className='news'>
            <div className='container'>
                {initialNews.map(el => <NewsCard key={el.id} title={el.title} description={el.description} />)
                }
                {isCompleted && <button onClick={loadMore} className="btn">Читати більше</button>}
            </div>
        </main>
    );
}

export default News;