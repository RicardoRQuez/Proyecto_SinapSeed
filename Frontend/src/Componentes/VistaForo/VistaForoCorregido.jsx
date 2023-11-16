import React from 'react';
import ImageContainer from './components/ImageContainer';
import CardCurso from './components/Card';
import TemasRelacionados from './components/TemasRelacionados';
import CommentComponent from './components/Comments.jsx';
import Footer from './components/Footer.jsx';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imgSrc from './image/cursox2.jpg'




export const VistaForo = () => {
  return (
  <>
    <ImageContainer />
    <br />
   <div className='container'>
    <Row>
        <Col sm={8}>
        <CommentComponent/>
        </Col>
        <Col sm={4}> <TemasRelacionados/></Col>
      </Row>
      <Row>
      <Col md={{ span: 4, offset: 8 }}>
        <CardCurso
        imgSrc={imgSrc}
        title="Cursos React"
        description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."/>
        <CardCurso
        imgSrc={imgSrc}
        title="Cursos React"
        description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      /></Col>
      </Row>
      </div>
     <Footer/>
     </>
  );
}
