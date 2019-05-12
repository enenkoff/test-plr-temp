import React, { Component } from 'react';

class Article extends Component {
    render() {
        return (
            <li className="col col-lg-4 col-sm-6">
                <a target="_blank" href="https://plarium.com/en/blog/" className="item">
                    <div className="item-preview">
                        <div className="item-image">
                            <figure>
                                <img
                                    className="lazyload"
                                    data-src={
                                        'https://picsum.photos/600/400?random=' +
                                        this.props.imgIndex
                                    }
                                    alt="image"
                                    width="440"
                                />
                            </figure>
                        </div>
                    </div>
                    <div className="item-data">
                        <div className="item-title">{this.props.title}</div>
                        <div
                            className="item-descr"
                            dangerouslySetInnerHTML={{ __html: this.props.descr }}
                        />
                        <div className="item-readme">
                            <div className="ico" />
                            <span>Read me</span>
                        </div>
                    </div>
                </a>
            </li>
        );
    }
}

export default Article;
