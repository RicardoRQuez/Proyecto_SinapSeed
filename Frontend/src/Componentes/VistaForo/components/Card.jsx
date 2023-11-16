import React from 'react';
import imgSrc from '../image/cursox2.jpg'
import styles  from './Card.module.css'


const CardCurso = ({ imgSrc, title, description }) => {
  return (
    
      <div className={`card mb-3 ${styles.card}`}>
        <div className="row g-0">
          <div className="col-md-6">
            <img src={imgSrc} className="img-fluid"  alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className={`card-title ${styles['card-title']}`}>{title}</h5>
              <p className={`card-text ${styles['card-text']}`}>{description}</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CardCurso;
