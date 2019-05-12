import React, { Component } from 'react';
import Article from './Article';
import initialArticle from './ArticlesData';

class News extends Component {
    constructor() {
        super();

        this.state = {
            articles: initialArticle,
            displayedNewArticles: 0,
            moreArticles: [],
            error: null,
            isLoaded: false,
        };

        this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(
                result => {
                    const rev_results = result.reverse();
                    this.setState({
                        isLoaded: true,
                        moreArticles: rev_results,
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                },
            );

        lazyload();

        this.timerID = setInterval(() => this.tick(), 600);
    }

    tick() {
        lazyload();
    }

    loadAdditionalMovies() {
        let currentArticles = this.state.articles,
            currentNewArticles = this.state.displayedNewArticles,
            newAddedArticlesCount = currentNewArticles + 6;
        let newArticles = this.state.moreArticles.slice(currentNewArticles, newAddedArticlesCount);
        newArticles = currentArticles.concat(newArticles);

        this.setState({
            articles: newArticles,
            displayedNewArticles: newAddedArticlesCount,
        });

        if (newAddedArticlesCount >= this.state.moreArticles.length) {
            document
                .getElementById('news')
                .querySelector('.read-more')
                .remove();
        }
    }

    render() {
        return (
            <section className="section home-news">
                <div className="content">
                    <div className="row">
                        <div className="col col-lg-12">
                            <h3 className="section-title">Latest News</h3>
                        </div>
                    </div>
                    <div className="listing">
                        <ul className="row">
                            {this.state.articles.map((item, index) => (
                                <Article
                                    link="#"
                                    key={index}
                                    imgIndex={index}
                                    title={item.title}
                                    descr={item.body}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="read-more">
                    <button onClick={this.loadAdditionalMovies} className="link">
                        More News
                    </button>
                </div>
            </section>
        );
    }
}

export default News;
