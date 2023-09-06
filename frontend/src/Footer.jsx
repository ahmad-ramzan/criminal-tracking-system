import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <>
<footer class="footer px-0 pb-0 pt-0" id='footer'>
  <div class="has-text-centered has-background-black has-text-white py-3 container-fluid">
    <p>
    2023 Copyright <Link to="/"> SAFEX.com</Link>. The website content
      is licensed by Muhammad Ahmad.
    </p>
  </div>
</footer>
    </>
  )
}

export default Footer
