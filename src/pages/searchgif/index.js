/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import Gif from "../../components/gif";
import SearchBar from "../../components/searchbar";

export default function SearchGif() {
    const [images, setImages] = useState([]);
  
    const onSuccess = (images) => {
      setImages(images);
    };
  
    return (
      <div className="container">
        <SearchBar onSuccess={onSuccess} />
        <div className="gif-wrapper">
           {images.map((image) => (
              <Gif
                 url={image.images.fixed_width.url}
                 title={image.title}
                 key={image.id}
              />
           ))}
        </div>
      </div>
    );
  }