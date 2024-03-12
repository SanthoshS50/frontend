import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{ backgroundColor: '#2F4F4F', color:'white'}}>
        <div className='me-lg-5'>
          <span><b>Get connected with us on social networks : </b></span>
        </div>
        <div>
          <a href='https://www.youtube.com/channel/UCeM5Bk3gV3BPZzuCkujOc0A' className='me-4 text-reset' style={{ fontSize: '20px' }} target='_blank'>
            <BsYoutube />
          </a>
          <a href='https://www.instagram.com/__.sweet._.sandy._.official.__/' className='me-4 text-reset' style={{ fontSize: '20px' }} target='_blank'>
            <BsInstagram />
          </a>
          <a href='https://chat.whatsapp.com/FYVyuzaErSHJXfhOVjZuEd' className='me-4 text-reset' style={{ fontSize: '20px' }} target='_blank'>
            <BsWhatsapp />
          </a>
          <a href='https://www.facebook.com/' className='me-4 text-reset' style={{ fontSize: '20px' }} target='_blank'>
            <BsFacebook />
          </a>
        </div>
      </section>

      <section className="py-3">
        <div className="container" style={{ marginTop: '20px' }}>
          <div className="row">
            <div className="col-md-4 mb-4">
              <h6 className="text-uppercase fw-bold mb-4" style={{ color: '#2F4F4F'}}>
                Wonder Aqua Garden
              </h6>
              <p>Your online shop for aquarium essentials. Browse through our extensive selection of products including accessories, foods, and live aquatic plants and fishes. Elevate your aquatic hobby with ease, all from the convenience of online shopping.</p>
            </div>

            <div className="col-md-4 mb-4 text-center">
              <h6 className="text-uppercase fw-bold mb-4" style={{ color: '#2F4F4F' }}>Quick Links</h6>
              <p>
                <a href='https://backend-2nri.onrender.com/login' className='text-reset' style={{ textDecoration: 'none' }}>Login</a>
              </p>
              <p>
                <a href='https://backend-2nri.onrender.com/cart' className='text-reset' style={{ textDecoration: 'none' }}>Cart</a>
              </p>
              <p>
                <a href='https://backend-2nri.onrender.com/orders' className='text-reset' style={{ textDecoration: 'none' }}>Orders</a>
              </p>
              <p>
                <a href='https://stcourier.com/track/shipment' className='text-reset' style={{ textDecoration: 'none' }}>Track Your Order</a>
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h6 className="text-uppercase fw-bold mb-4" style={{ color: '#2F4F4F' }}>Contact</h6>
              <p>
                <SiHomeassistantcommunitystore />&nbsp; 8/67 J P Kovil West Street, Kumbakonam - 612001.
              </p>
              <p style={{ whiteSpace: 'nowrap' }}>
                <IoMdMail />&nbsp; wonderaquagarden@gmail.com
              </p>
              <p>
                <FaPhoneVolume />&nbsp; +91 63859 16880
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: '#2F4F4F', color:'white'}}>
        © 2024 Copyright : &nbsp; 
        <a className='text-reset fw-bold' href='http://localhost:3000/' style={{ textDecoration: 'none' }}>
          Wonder Aqua Garden
        </a>
      </div>
    </MDBFooter>
  );
}
