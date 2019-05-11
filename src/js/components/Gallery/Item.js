import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <a
                href={this.props.imgUrl}
                data-fancybox="gallery"
                data-caption={this.props.title}
                className="item"
            >
                <img src={this.props.thumbUrl} alt="Gallery" />
            </a>
        );
    }
}

export default Item;
