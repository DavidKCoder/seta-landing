import React from 'react';

function Footer({ year }) {
  return (
      <footer className="seta-footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <span className="fw-semibold seta-logo">Seta</span>
              <span className="small ms-2">
              &copy; {year} Seta. Բոլոր իրավունքները պաշտպանված են.
            </span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <a href="#" className="seta-footer-link">Գաղտնիության քաղաքականություն</a>
              <a href="#" className="seta-footer-link ms-3">Օգտագործման պայմաններ</a>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
