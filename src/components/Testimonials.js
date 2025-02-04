import React, { useEffect, useRef, useState, useMemo } from "react";
import image1 from "../assets/Bague REZA - 5 _ Bleu foncé.jpg";
import image2 from "../assets/High polish gold wedding band with palm leaf, 6 mm wide.jpg";
import image3 from "../assets/The 5 Reasons Not to Buy a Rose Cut Diamond _ Frank Darling.jpg";
import image4 from "../assets/Zircon Charm Pendant Necklace - 5.jpg";
import image5 from "../assets/peacock.jpg";
import image6 from "../assets/purple.jpg";
import "../theme/Testimonials.css";

const JewelryCollage = () => {
  const [isVisible, setIsVisible] = useState({
    image1: false,
    image2: false,
    image3: false,
    image4: false,
    image5: false,
    image6: false,
  });

  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);
  const image5Ref = useRef(null);
  const image6Ref = useRef(null);

  const imageRefs = useMemo(
    () => ({
      image1Ref,
      image2Ref,
      image3Ref,
      image4Ref,
      image5Ref,
      image6Ref,
    }),
    []
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const imageRef = entry.target.dataset.ref;
          setIsVisible((prevState) => ({
            ...prevState,
            [imageRef]: true,
          }));
        } else {
          const imageRef = entry.target.dataset.ref;
          setIsVisible((prevState) => ({
            ...prevState,
            [imageRef]: false,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Start observing each image reference
    Object.values(imageRefs).forEach((imageRef) => {
      if (imageRef.current) {
        observer.observe(imageRef.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [imageRefs]);

  return (
    <div>
      {/* Floating particles container */}
      <div className="particles-container">
        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
      </div>

      {/* Jewelry Collage Section */}
      <section className="jewelry-collage">
        <h2 className="text-center text-4xl font-poppins mb-8 text-gray-800">
          Find the perfect gift this festive season
        </h2>

        <div className="grid">
          <div className="relative" ref={imageRefs.image1Ref} data-ref="image1">
            <img
              src={image1}
              alt="Jewelry 1"
              className={`jewelry-image ${
                isVisible.image1 ? "animate-fade-up" : ""
              }`}
            />
          </div>

          <div className="relative" ref={imageRefs.image2Ref} data-ref="image2">
            <img
              src={image2}
              alt="Jewelry 2"
              className={`jewelry-image ${
                isVisible.image2 ? "animate-fade-up" : ""
              }`}
            />
          </div>

          <div className="relative" ref={imageRefs.image3Ref} data-ref="image3">
            <img
              src={image3}
              alt="Jewelry 3"
              className={`jewelry-image ${
                isVisible.image3 ? "animate-fade-up" : ""
              }`}
            />
          </div>

          <div className="relative" ref={imageRefs.image4Ref} data-ref="image4">
            <img
              src={image4}
              alt="Jewelry 4"
              className={`jewelry-image ${
                isVisible.image4 ? "animate-fade-up" : ""
              }`}
            />
          </div>

          <div
            className="relative col-span-2 md:col-span-1"
            ref={imageRefs.image5Ref}
            data-ref="image5"
          >
            <img
              src={image5}
              alt="Jewelry 5"
              className={`jewelry-image ${
                isVisible.image5 ? "animate-fade-up" : ""
              }`}
            />
          </div>

          <div className="relative" ref={imageRefs.image6Ref} data-ref="image6">
            <img
              src={image6}
              alt="Jewelry 6"
              className={`jewelry-image ${
                isVisible.image6 ? "animate-fade-up" : ""
              }`}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default JewelryCollage;
