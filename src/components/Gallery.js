import React from 'react'
import {Carousel} from 'react-bootstrap'
export default function Gallery() {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://secureservercdn.net/160.153.137.167/mhq.97f.myftpupload.com/wp-content/uploads/2018/07/cropped-IMG-20180105-WA0006.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://secureservercdn.net/160.153.137.167/mhq.97f.myftpupload.com/wp-content/uploads/2018/07/cropped-FB_IMG_1518667785539.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://secureservercdn.net/160.153.137.167/mhq.97f.myftpupload.com/wp-content/uploads/2018/07/cropped-IMG_7396.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}
