import React from 'react'

const ImageCard = ({image}) => {

    const tags = image.tags.split(',', 2);

  return (
    <div className='cardContainer'>
      <div className='imageContainer'>
        <img src={image.webformatURL} alt="No_Image" />
      </div>
      <p className='photoBy'><span style={{fontStyle: 'normal'}}><i className="fa-solid fa-image"></i> Photo by</span> <b>{image.user}</b></p>
      <div className="imageInfoContainer">
        <p><i className="fa-solid fa-heart"></i> <span className="likesCount">{image.likes}</span></p>
        <p><i className="fa-regular fa-comment"></i> <span className="commentsCount">{image.comments}</span></p>
        <p><i className="fa-solid fa-eye"></i> <span className="viewsCount">{image.views}</span></p>
        <p><i className="fa-solid fa-download"></i> <span className="downloadsCount">{image.downloads}</span></p>
      </div>
      <div className="tagsContainer">
        {tags.map((tag, index) => (
            <p key={index} className='tag'>#{tag}</p>
        ))}
      </div>
    </div>
  )
}

export default ImageCard