import React from 'react';

function Map() {
  return (
    <div className='col-lg-5'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d886.1981947199697!2d79.37833046953482!3d10.954040215995464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1709825642229!5m2!1sen!2sin'
        style={{ borderRadius: '50px',marginTop:'25px' ,height: '400px', width: '100%' }}
        loading='lazy'
      ></iframe>
    </div>
  );
}

export default Map;
