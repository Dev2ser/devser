import React from 'react';
import { ContactBox, Social } from '../../../components';

export default class Contact extends React.Component {
  componentDidMount() {
    require('../scss/Contact.scss');
  }

  render() {
    return (
      <div id="contact">
        <ContactBox />
        <div className="p-2 w-full text-center">
          <Social />
        </div>
      </div>
    );
  }
}
