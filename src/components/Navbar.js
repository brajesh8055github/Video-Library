import React from 'react'
import logo from '../image/videopng.webp'
const Navbar = () => {
  return (
    <div>
      <nav class="navbar p-0 navbar-light navbar-expand-lg bg-dark  ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img style={{ width: "70px", height: "70px", padding: "0" }} src={logo} alt=''></img>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="https://www.youtube.com/feed/trending?bp=6gQJRkVleHBsb3Jl">Trending</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ">Music</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="https://www.youtube.com/feed/storefront?bp=ogUCKAI%3D">Movies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="/">Video</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="/all-videos">All Videos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar