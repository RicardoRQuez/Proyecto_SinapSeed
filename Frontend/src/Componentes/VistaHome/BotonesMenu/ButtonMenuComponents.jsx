import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

const ButtonMenu = ({titleButton,content,titlecontent})=> {
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

  return (
    <Row>
    <Col md={12} >
      <Button onClick={toggleShowA} className="btn btn-secondary" >
        <strong>{titleButton}</strong>
      </Button>
      <Toast show={showA} onClose={toggleShowA} style={{ marginTop: '10px' }}>
      <Toast.Header>
            <strong className="me-auto">{titlecontent}</strong>
          </Toast.Header>
        <Toast.Body >{content}</Toast.Body>
      </Toast>
    </Col>
   </Row>
  );
}

export default ButtonMenu;