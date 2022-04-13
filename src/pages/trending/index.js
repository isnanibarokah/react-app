/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Gif from "../../components/gif";
import { getTrendingImages } from "../../setup/fetchApi";

export default function Trending() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getTrendingImages(12).then((result) => setImages(result.data));
    }, []);

    return (
        <div className="container">
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