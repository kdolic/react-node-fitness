import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../css/Gallery.css";

const Gallery = () => {
  return (
    <section id="gallery" className="mainContainer">
      <div className="gallery-top">
        <h1>
          Ga<span className="title-span gradient">lle</span>ry
        </h1>
        <p>See how others have used DEV.FIT to achieve their goals.</p>
      </div>
      <Container className="galleryContainer">
        <Row>
          <Col>
            <img
              src="https://source.unsplash.com/collection/8172461/1200xauto"
              alt="fitness"
            />
          </Col>
          <Col>
            <img
              src="https://source.unsplash.com/collection/54391451/1200xauto"
              alt="nutrition"
            />
          </Col>
          <Col>
            <img
              src="https://source.unsplash.com/collection/8615095/1200xauto"
              alt="gym"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src="https://source.unsplash.com/collection/8325170/1200xauto"
              alt="fitness2"
            />
          </Col>
          <Col>
            <img
              src="https://source.unsplash.com/collection/3631428/1200xauto"
              alt="nutrition2"
            />
          </Col>
          <Col>
            <img
              src="https://source.unsplash.com/collection/8674085/1200xauto"
              alt="gym2"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src="https://source.unsplash.com/collection/9419482/1200xauto"
              alt="fitness3"
            />
          </Col>
          <Col>
            <img
              src="https://source.unsplash.com/collection/10068695/1200xauto"
              alt="nutrition3"
            />
          </Col>
          <Col>
            <img
              src="https://source.unsplash.com/collection/9700132/1200xauto"
              alt="gym3"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
