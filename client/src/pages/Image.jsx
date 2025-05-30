import React, { useState } from "react";

const ImageGallery = () => {
    const [urls, setUrls] = useState("");
    const [images, setImages] = useState([]);

    const handleInputChange = (e) => {
        setUrls(e.target.value);
    };

    const handlePaste = (e) => {
        setUrls(e.clipboardData.getData("Text"));
    };

    const handleShowImages = () => {
        
        const urlList = urls
            .split(/[\n,]+/)
            .map((url) => url.trim())
            .filter((url) => url.length > 0);
        setImages(urlList);
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Paste Multiple Image URLs</h2>
            <textarea
                rows={6}
                style={{ width: "100%", marginBottom: 10 }}
                placeholder="Paste image URLs here, separated by new lines or commas"
                value={urls}
                onChange={handleInputChange}
                onPaste={handlePaste}
            />
            <br />
            <button onClick={handleShowImages}>Show Images</button>
            <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 10 }}>
                {images.map((url, idx) => (
                    <img
                        key={idx}
                        src={url}
                        alt={`img-${idx}`}
                        style={{ maxWidth: 200, maxHeight: 200, objectFit: "cover", border: "1px solid #ccc" }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;