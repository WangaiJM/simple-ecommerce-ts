import closeIcon from "../../assets/images/icon-close.svg";

import { useContext, useState, type FC } from "react";
import { ProductContext } from "../../context/ProductContext/ProductContext";
import type { Images } from "../../context/ProductContext/ProductContext";

import "./lightbox.scss";

const Lightbox: FC = () => {
  const context = useContext(ProductContext);

  if (!context) return null;

  const { products } = context;

  const images: Images[] = products[0]?.images || [];

  const [active, setActive] = useState(0);
  const [overlay, setOverlay] = useState(false);

  const handlePrev = (index: number) => {
    if (!images.length) return;

    if (index === 0) {
      setActive(images.length - 1);
    } else {
      setActive(index - 1);
    }
  };

  const handleNext = (index: number) => {
    if (!images.length) return;

    if (index === images.length - 1) {
      setActive(0);
    } else {
      setActive(index + 1);
    }
  };

  const handleOverlay = (index: number) => {
    setActive(index);
    setOverlay(true);
  };

  return (
    <section className="lightbox">
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image.main}
              alt=""
              key={index}
              className={active === index ? "active" : ""}
              onClick={() => handleOverlay(index)}
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
              key={index}
              className={active !== index ? "opaque" : ""}
              onClick={() => setActive(index)}
            >
              <img src={image.thumbnail} alt="" />
            </div>
          );
        })}
      </div>

      <div className={overlay ? "overlay" : "hidden"}>
        {images.map((image, index) => {
          if (index === active) {
            return <img src={image.main} alt="" key={index} />;
          }

          return null;
        })}

        <button className="btn btn-prev" onClick={() => handlePrev(active)}>
          &#8249;
        </button>

        <button className="btn btn-next" onClick={() => handleNext(active)}>
          &#8250;
        </button>

        <button className="btn btn-close" onClick={() => setOverlay(false)}>
          <img src={closeIcon} alt="Close Icon" />
        </button>

        <div className="thumbnails">
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className={active !== index ? "opaque" : ""}
                onClick={() => setActive(index)}
              >
                <img src={image.thumbnail} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Lightbox;
