import React from 'react'
import { useState, useEffect } from 'react'
import ImageCard from './Components/ImageCard';
import ImageSearch from './Components/ImageSearch';

const App = () => {

  // Setting state for images
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const apiKey = '45376318-d1760d8a2892d9d27456a7bb3';
  
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true`)
    .then((res) => res.json())
    .then((data) => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err)
    })
  }, [term])

  return (
    <>
    <ImageSearch searchText={(text) => setTerm(text)}/>
    <div className='mainContainer'>
      {!isLoading && images.length === 0 && <h1 className='loadingContainer'>No Images Found</h1>}
      {isLoading ? <h1 className="loadingContainer">Loading...</h1> : 
        <>{images.map(image => (
          <ImageCard key={image.id} image={image}/>
        ))}
        </>
      }
    </div>
    </>
  )
}

export default App