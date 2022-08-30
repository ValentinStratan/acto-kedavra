import React from 'react';
import './../styles/footer.css';

function Footer() {
  const currentDate = () => {
    return new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="footer">
      <div className="footer-date">{currentDate()}</div>
      <div className="footer-name">ActoKedavra</div>
    </div>
  );
}

export default Footer;
