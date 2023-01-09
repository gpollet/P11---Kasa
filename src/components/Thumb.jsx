import React from 'react';

const Thumb = ({logement}) => {
  return (
    <div className='thumb'>
      <figure>{logement.name}</figure>
    </div>
  );
};

export default Thumb;