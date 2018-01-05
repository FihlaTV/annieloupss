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
      modalImg: null,
      carousel: {
        carousel_1: {
          picture:'http://via.placeholder.com/900x300',
          label:'First slide label',
          text:'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
        carousel_2: {
          picture:'http://via.placeholder.com/900x300',
          label:'Second slide label',
          text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        carousel_3: {
          picture:'http://via.placeholder.com/900x300',
          label:'Third slide label',
          text:'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        }
      },
      individualImages :{
        image_1:{
          thumbnail:'http://via.placeholder.com/171x180',
          fullsize:'http://via.placeholder.com/1710x1800'
        },
        image_2:{
          thumbnail:'http://via.placeholder.com/171x180',
          fullsize:'http://via.placeholder.com/1710x1800'
        },
        image_3:{
          thumbnail:'http://via.placeholder.com/171x180',
          fullsize:'http://via.placeholder.com/1710x1800'
        },
        image_4:{
          thumbnail:'http://via.placeholder.com/171x180',
          fullsize:'http://via.placeholder.com/1710x1800'
        },
        image_5:{
          thumbnail:'http://via.placeholder.com/171x180',
          fullsize:'http://via.placeholder.com/1710x1800'
        },
        image_6:{
          thumbnail:'http://via.placeholder.com/171x180',
          fullsize:'http://via.placeholder.com/1710x1800'
        },
        image_7:{
          thumbnail:'http://via.placeholder.com/171x180',
          fullsize:'http://via.placeholder.com/1710x1800'
        },
        image_8:{
          thumbnail:'http://via.placeholder.com/171x180',
          fullsize:'http://via.placeholder.com/1710x1800'
        },
        image_9:{
          thumbnail:'http://via.placeholder.com/171x180',
          fullsize:'http://via.placeholder.com/1710x1800'
        },
        image_10:{
          thumbnail:'http://via.placeholder.com/171x180',
          fullsize:'http://via.placeholder.com/1710x1800'
        },
        image_11:{
          thumbnail:'http://via.placeholder.com/171x180',
          fullsize:'http://via.placeholder.com/1710x1800'
        },
        image_12:{
          thumbnail:'http://via.placeholder.com/171x180',
          fullsize:'http://via.placeholder.com/1710x1800'
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
    const carouselInstance = (
      <Carousel.Item key={key}>
        <img width={900} height={300} alt="900x300" src={data.picture} />
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
    const imageInstance = (
      <Col xs={6} md={3} key={key}>
        <Thumbnail href="#" alt="171x180" src={data.thumbnail} onClick={() => { this.openModal(data.fullsize) }} />
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
    return (
      <Grid fluid={true} className="content customers">
        <div>
          <h1>Our Happy Customers</h1>
          <Row id="carouselRow">
            <br/>
            <p className="paddingLeft">Scroll through our gallery to see who gave us two paws up!</p>
            <p className="smallerText paddingLeft">(Alternating paws until they got treats, of course.)</p>
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
            <Image alt="Happy Customer" src={this.state.modalImg} responsive />
          </Modal.Body>
        </Modal>
      </Grid>
    );
  }
}

export default Customers;
