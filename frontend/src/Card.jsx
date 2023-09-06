import React from 'react'

const Card = ({name,image,desc}) => {
  return (
    <>
      <div class="card" id="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={image} alt="image"/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{name}</p>
      </div>
    </div>
    <div class="content">
      CCTV footage captures the arrest of a world criminal, putting an end to their global criminal activities.
    </div>
  </div>
</div>
    </>
  )
}

export default Card
