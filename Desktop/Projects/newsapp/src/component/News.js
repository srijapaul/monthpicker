import React, { useEffect,useState} from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
    const [articles, setArticles] = useState([]);
    const [loading, setfadedCircles] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
   
   
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
   
   const updateNews =async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=in&&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setfadedCircles(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(60);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setfadedCircles(false);
        props.setProgress(100);
    }
    useEffect(() => {
        document.title = `NewsPanda - ${capitalizeFirstLetter(props.category)}`;
        // eslint-disable-next-line
        updateNews();
    }, [])
    

       const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        setfadedCircles(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        //setfadedCircles(false);
    };
        return (
            <div className="container my-3">
                <h2>NewsPanda - News Flash</h2>
                {/* {props.fadedCircles && <Spinner/>} */}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length <= totalResults}
                    loader={loading && <Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {articles.filter(article => article).map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <Newsitems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </div>

        );
    
}
    News.defaultProps = {
        country: 'in',
        pageSize: 5,
        category: 'general'
    };
    News.propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

export default News
