import React, { Component } from 'react';
import Item from './Item';

const galleryElements = 24;
const galleryCollection = 5;

class Gallery extends Component {
    constructor() {
        super();

        this.state = {
            gallery: [],
            error: null,
            isLoaded: false,
        };
    }
    componentWillUnmount() {}
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(
                result => {
                    let galleryItems = result.filter((el, i) => {
                        return el.albumId == galleryCollection;
                    });
                    galleryItems = galleryItems.slice(0, galleryElements);
                    this.setState({
                        isLoaded: true,
                        gallery: galleryItems,
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                },
            );

        jQuery('[data-fancybox="gallery"]').fancybox({
            buttons: ['close'],
            infobar: true,
        });
    }
    render() {
        return (
            <section className="section home-gallery">
                <div className="content">
                    <div className="row">
                        <div className="col col-lg-12">
                            <h3 className="section-title">INSIDE Company</h3>
                        </div>
                    </div>
                </div>
                <div className="gallery-box">
                    <div className="gallery">
                        {this.state.gallery.map((item, index) => (
                            <Item
                                key={index}
                                imgUrl={item.url}
                                thumbUrl={item.thumbnailUrl}
                                title={item.title}
                            />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Gallery;
