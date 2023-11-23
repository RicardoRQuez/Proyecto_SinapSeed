import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from './RegistroExistoso.module.css'; 
import { useAuth } from '../../../VistaLogIn/AuthContext.jsx'


function RegistroExitoso({ show, handleClose }) {
const { showLogin, setShowLogin} = useAuth();


  const toggleLogin = () => {
    setShowLogin(!showLogin);
    handleClose(); 
  };
  
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className={styles.modalHeader}>
          <Modal.Title>
            <span className={styles.textTile}>Registro de Usuario </span> Realizado con éxito!
          </Modal.Title>
        </Modal.Header>
  
        <Modal.Body className={styles.modalBody}>
          <p>Bienvenido a SinapSeed, ¿estás listo para explorar nuestro contenido?</p>
        </Modal.Body>
  
        <Modal.Footer className={styles.modalFooter}>
          <Button
            className={`${styles.buttonCustom}`}
            variant="primary"
            style={{ backgroundColor: '#8b4b8b' }}
            onClick={handleClose}
          >
            Cerrar
          </Button>
            <Button
              className={`${styles.buttonCustom}`}
              variant="primary"
              style={{ backgroundColor: '#8b4b8b' }}
              onClick={toggleLogin}
            >
              Ir a Login
            </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default RegistroExitoso;