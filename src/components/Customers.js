import React, { Component } from 'react';
import { 
  Carousel,
  Grid,
  Row,
  Col,
  Thumbnail,
  Popover,
  Tooltip,
  Modal,
  Button,
  Image } from 'react-bootstrap';

class Customers extends Component {
  constructor() {
    super();
    this.renderCarousel = this.renderCarousel.bind(this);
    this.renderThumbnails = this.renderThumbnails.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      showModal: false,
      modalImg: 'pup1-lg.jpeg',
      carousel: {
        carousel_1: {
          picture:'pup-banner-1.jpeg',
          label:'Tug of War!',
          text:'All visits include playtime!'
        },
        carousel_2: {
          picture:'pup-banner-2.jpeg',
          label:'Out for a stroll...',
          text:'We love walking as much as they do!',
        },
        carousel_3: {
          picture:'pup-banner-3.jpeg',
          label:'Ready for my close-up',
          text:'Regardless if they\'re a playful pup or a lazy dog, we love all personalities!'
        }
      },
      individualImages :{
        image_1:{
          thumbnail:'pup1-sm.jpeg',
          fullsize:'pup1-lg.jpeg'
        },
        image_2:{
          thumbnail:'pup2-sm.jpeg',
          fullsize:'pup2-lg.jpeg'
        },
        image_3:{
          thumbnail:'pup3-sm.jpg',
          fullsize:'pup3-lg.jpg'
        },
        image_4:{
          thumbnail:'pup4-sm.jpeg',
          fullsize:'pup4-lg.jpeg'
        },
        image_5:{
          thumbnail:'pup5-sm.jpeg',
          fullsize:'pup5-lg.jpeg'
        },
        image_6:{
          thumbnail:'pup6-sm.jpeg',
          fullsize:'pup6-lg.jpeg'
        },
        image_7:{
          thumbnail:'pup7-sm.jpeg',
          fullsize:'pup7-lg.jpeg'
        },
        image_8:{
          thumbnail:'pup8-sm.jpeg',
          fullsize:'pup8-lg.jpeg'
        },
        image_9:{
          thumbnail:'pup9-sm.jpeg',
          fullsize:'pup9-lg.jpeg'
        },
        image_10:{
          thumbnail:'pup10-sm.jpeg',
          fullsize:'pup10-lg.jpeg'
        },
        image_11:{
          thumbnail:'pup11-sm.jpeg',
          fullsize:'pup11-lg.jpeg'
        },
        image_12:{
          thumbnail:'pup12-sm.jpeg',
          fullsize:'pup12-lg.jpeg'
        }
      }
    }
  }

  closeModal() {
    const show = {...this.state};
    show.showModal = false;
    this.setState(show);
  }

  openModal(img) {
    const show = {...this.state};
    show.showModal = true;
    show.modalImg = img;
    this.setState(show);
  }

  renderCarousel(key) {
    const data = this.state.carousel[key];
    const carouselImg = require(`../img/${data.picture}`);
    const carouselInstance = (
      <Carousel.Item key={key}>
        <img width={900} height={300} alt="900x300" src={carouselImg} />
        <Carousel.Caption>
          <h3>{data.label}</h3>
          <p>{data.text}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
    return carouselInstance
  }

  renderThumbnails(key){
    const data = this.state.individualImages[key];
    const thumbImg = require(`../img/${data.thumbnail}`);
    const imageInstance = (
      <Col xs={6} md={3} key={key}>
        <Thumbnail href="#" alt="171x180" src={thumbImg} onClick={() => { this.openModal(data.fullsize) }} />
      </Col>
    );
    return imageInstance
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );

    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    const modalImg = require(`../img/${this.state.modalImg}`);

    return (
      <Grid fluid={true} className="content customers">
        <div>
          <h1>Our Happy Customers</h1>
          <Row id="carouselRow">
            <br/>
            <p className="paddingLeft">Scroll through our gallery to see who gave us two paws up!</p>
            <p className="smallerText paddingLeft">(Alternating paws until they got treats, of course.)</p>
            <br/>
          <Carousel>
            {Object.keys(this.state.carousel).map(this.renderCarousel)}
          </Carousel>
          </Row>
        </div>
        <Row id="thumbnailRow">
            {Object.keys(this.state.individualImages).map(this.renderThumbnails)}
        </Row>
        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Another Happy Customer!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image alt="Happy Customer" src={modalImg} responsive />
          </Modal.Body>
        </Modal>
      </Grid>
    );
  }
}

export default Customers;
