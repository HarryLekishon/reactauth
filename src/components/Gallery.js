import React from 'react'
import "./gallery.css"

function Gallery() {
  return (

<div className='gallery'>
<h1>Golden Life Foundation Gallery</h1>
<div className="containerg">

  <div className="gallery-container w-3 h-2">
    <div className="gallery-item">
      <div className="image">
        <img src={process.env.PUBLIC_URL + '/images/children.jpg'} alt="nature"/>
      </div>
      <div className="text">School based therapy</div>
    </div>
  </div>

  <div className="gallery-container w-3 h-3">
    <div className="gallery-item">
      <div className="image">
        <img src={process.env.PUBLIC_URL + '/images/children2.jpg'} alt="people"/>
      </div>
      <div className="text">People</div>
    </div>
  </div>

  <div className="gallery-container h-2 w-3">
    <div className="gallery-item">
      <div className="image">
        <img src={process.env.PUBLIC_URL + '/images/watoto.jpg'} alt="sport"/>
      </div>
      <div className="text">Community projects</div>
    </div>
  </div>


  <div className="gallery-container w-2 h-1">
    <div className="gallery-item">
      <div className="image">
        <img src={process.env.PUBLIC_URL + '/images/watoto.jpg'} alt="food"/>
      </div>
      <div className="text">Community projects</div>
    </div>
  </div>

  <div className="gallery-container">
    <div className="gallery-item">
      <div className="image">
        <img src={process.env.PUBLIC_URL + '/images/community.jpg'} alt="travel"/>
      </div>
      <div className="text">Adolescent therapy </div>
    </div>
  </div>

  <div className="gallery-container h-2">
    <div className="gallery-item">
      <div className="image">
        <img src={process.env.PUBLIC_URL + '/images/van.jpg'} alt="art"/>
      </div>
      <div className="text">Reahbilitation</div>
    </div>
  </div>

  <div className="gallery-container w-5 h-2">
    <div className="gallery-item">
      <div className="image">
        <img src={process.env.PUBLIC_URL + '/images/children.jpg'} alt="cars"/>
      </div>
      <div className="text">Career Guidance</div>
    </div>
  </div>

</div>
</div>
  )
}

export default Gallery
