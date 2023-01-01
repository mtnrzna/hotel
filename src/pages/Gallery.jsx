import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryPage/GalleryGrid";

const Gallery = () => {
    return (
        <div>
            <Navbar />
            <GalleryGrid />
            <Footer />
        </div>
    );
};

export default Gallery;
