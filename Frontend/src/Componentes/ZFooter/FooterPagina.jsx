import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="text-center text-white" style={{ backgroundColor: '#f1f1f1' }}>
      <div className="container pt-4">
        <section className="mb-4">
          {/* Facebook */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.facebook.com/"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>

          {/* Twitter */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://twitter.com/home"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          {/* Google */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={faGoogle} />
          </a>

          {/* Instagram */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          {/* Linkedin */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>

          {/* Github */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </section>
      </div>

      <div className="text-center text-dark p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 SinapSeed
        <a className="text-dark" href="https://mdbootstrap.com/">
          SinapSeed.cl
        </a>
      </div>
    </footer>
  );
};

