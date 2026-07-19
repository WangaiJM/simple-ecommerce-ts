import closeIcon from "../../assets/images/icon-close.svg";

import { useEffect, useState, type FC } from "react";

import "./lightbox.scss";

const Lightbox: FC = () => {
  type GalleryImage = { image: string; thumbnail: string };
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [active, setActive] = useState<number>(0);
  const [overlay, setOverlay] = useState<boolean>(false);

  useEffect(() => {
    fetch("data/images.json")
      .then((res) => res.json())
      .then((data: GalleryImage[]) => setImages(data));
  }, []);

  const handlePrev = (index: number) => {
    if (!images.length) return;
    index === 0 ? setActive(images.length - 1) : setActive(index - 1);
  };
  const handleNext = (index: number) => {
    if (!images.length) return;
    index === images.length - 1 ? setActive(0) : setActive(index + 1);
  };

  const handleOverlay = (index: number) => {
    setActive(index);
    setOverlay(true);
  };

  return (
    <section className="lightbox">
      <div className="gallery">
        {images.map((image, index) => {
          const activeClass: string = active === index ? "active" : "";

          return (
            <img
              src={image.image}
              key={index}
              alt=""
              className={active === index ? activeClass : ""}
              onClick={() => handleOverlay(active)}
            />
          );
        })}
        <button className="btn btn-prev" onClick={() => handlePrev(active)}>
          &#8249;
        </button>
        <button className="btn btn-next" onClick={() => handleNext(active)}>
          &#8250;
        </button>
      </div>
      <div className="thumbnails">
        {images.map((image, index) => {
          return (
            <div
              className={active !== index ? "opaque" : ""}
              onClick={() => setActive(index)}
            >
              <img src={image.thumbnail} alt="" key={index} />
            </div>
          );
        })}
      </div>
      <div className={overlay ? "overlay" : "hidden"}>
        {images.map((image, index) => {
          return (
            index === active && <img src={image.image} alt="" key={index} />
          );
        })}
        <button className="btn btn-prev" onClick={() => handlePrev(active)}>
          &#8249;
        </button>
        <button className="btn btn-next" onClick={() => handleNext(active)}>
          &#8250;
        </button>
        <button className="btn btn-close" onClick={() => setOverlay(false)}>
          <img src={closeIcon} alt="" aria-label="Close Icon" />
        </button>

        <div className="thumbnails">
          {images.map((image, index) => {
            return (
              <div
                className={active !== index ? "opaque" : ""}
                onClick={() => setActive(index)}
              >
                <img src={image.thumbnail} alt="" key={index} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Lightbox;
