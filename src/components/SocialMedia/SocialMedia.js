import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import './SocialMedia.css';

export function SocialMediaRounded() {
  return (
    <div className="wrapper">
      <ul>
        <li className="facebook">
          <FaFacebookF className="fa" />
          <div className="slider">
            <p>facebook</p>
          </div>
        </li>

        <li className="twitter">
          <FaTwitter className="fa" />
          <div className="slider">
            <p>twitter</p>
          </div>
        </li>

        <li className="instagram">
          <FaInstagram className="fa" />
          <div className="slider">
            <p>instagram</p>
          </div>
        </li>

        <li className="google">
          <FaGoogle className="fa" />
          <div className="slider">
            <p>google</p>
          </div>
        </li>

        <li className="whatsapp">
          <FaWhatsapp className="fa" />
          <div className="slider">
            <p>whatsapp</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
