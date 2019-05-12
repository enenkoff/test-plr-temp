import React, { Component } from 'react';
import Gallery from './Gallery';

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

Item.displayName = 'Item';

export default Item;
