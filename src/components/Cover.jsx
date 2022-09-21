import React from 'react';
import extraction from '../images/extraction.jpg'

class  Cover  extends React.Component {
render() {

  return (
    <section id="intro">
      <div id="img-container">
        <img src={extraction} alt="bg" />
      </div>
    </section>
  );

};
}

export default Cover;