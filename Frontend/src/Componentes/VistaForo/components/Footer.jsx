import React from 'react';
import styles from './Footer.module.css'


function Footer() {
  return (
    <footer>
      <div className="container">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className="page-item disabled">
              <a className={`page-link ${styles['page-link']}`}>Previous</a>
            </li>
            <li className="page-item"><a className={`page-link ${styles['page-link']}`} href="#">1</a></li>
            <li className="page-item"><a className={`page-link ${styles['page-link']}`} href="#">2</a></li>
            <li className="page-item"><a className={`page-link ${styles['page-link']}`} href="#">3</a></li>
            <li className="page-item">
              <a className={`page-link ${styles['page-link']}`}>Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
