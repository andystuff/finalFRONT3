/* eslint-disable no-unused-vars */
import React from 'react';
import face from '../images/ico-facebook.png'
import dh from '../images/DH.png'
import insta from '../images/ico-instagram.png'
import tik from '../images/ico-tiktok.png'
import wa from '../images/ico-whatsapp.png'


const Footer = () => {
  return (
    <footer>
        <p>Andrea Latuff - Frontend III </p>
        <a className='redes' href="https://playground.digitalhouse.com/"><img className='redh' src={dh} alt='DH-logo' /></a>
        <a className='redes' href="https://facebook.com/"><img className='red' src={face} alt="ico face" /></a>
        <a className='redes' href="https://instagram.com/"><img className='red' src={insta} alt="ico insta" /></a>
        <a className='redes' href="https://tiktok.com/"><img className='red' src={tik} alt="ico tik" /></a>
        <a className='redes' href="https://whatsapp.com/"><img className='red' src={wa} alt="ico wa" /></a>
        
    </footer>
  )
}

export default Footer
