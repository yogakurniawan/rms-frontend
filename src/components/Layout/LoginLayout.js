import React from 'react';
import PropTypes from 'prop-types';
import logoUrl from './rms-logo.png';
import './LoginLayout.css';

function Component({ children }) {
  return (
    <div>
      <div className="fixedHeaderContainer">
        <div className="row center-xs">
          <div className="col-xs-12">
            <span><img src={logoUrl} alt="RMS" /></span>
          </div>
        </div>
      </div>
      { children }
    </div>
  )
}

Component.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Component;

