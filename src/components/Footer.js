import React from 'react'

const Footer = () => {
  return (
    <>
      <div style={{ background: "#000", color: "#fff", padding: "15px 0", display: "flex", justifyContent: "space-evenly", borderTop: "1px solid grey" }}>
        <ul style={{ listStyle: "none" }}>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>About</a></li>
          <li><a href='/'>Contact Us</a></li>
        </ul>
        <ul style={{ listStyle: "none" }}>
          <li><a href='https://www.facebook.com/'>Facebook</a></li>
          <li><a href='https://www.instagram.com/'>Instagram</a></li>
          <li><a href='https://twitter.com/Brajesh1871' >Twitter</a></li>
          <li><a href='https://www.pintrest.com/'>Pintrest</a></li>
        </ul>
      </div>
      <p className='text-center'>&copy; 2024| Created by <span>Brajesh</span> ❤️ </p>
    </>
  )
}

export default Footer