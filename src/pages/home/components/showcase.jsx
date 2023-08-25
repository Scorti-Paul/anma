import React from "react";
import FancyBox from "../../../components/fancybox";

const Showcase = () => {
  return (
    <FancyBox
      options={{
        Carousel: {
          infinite: false,
        },
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-9">
        <a data-fancybox="gallery" href="/assets/images/img2.jpg">
          <img alt="" src="/assets/images/img2.jpg" className="rounded-tl-xl" />
        </a>
        <a data-fancybox="gallery" href="/assets/images/img3.jpg">
          <img
            alt=""
            src="/assets/images/img3.jpg"
            className="rounded-tr-xl md:rounded-none"
          />
        </a>
        <a data-fancybox="gallery" href="/assets/images/img4.jpg">
          <img
            alt=""
            src="/assets/images/img4.jpg"
            className="rounded-none md:rounded-tr-xl"
          />
        </a>

        <a data-fancybox="gallery" href="/assets/images/img6.jpg">
          <img alt="" src="/assets/images/img6.jpg" />
        </a>
        <a data-fancybox="gallery" href="/assets/images/img7.jpg">
          <img alt="" src="/assets/images/img7.jpg" />
        </a>
        <a data-fancybox="gallery" href="/assets/images/img8.jpg">
          <img alt="" src="/assets/images/img8.jpg" />
        </a>
        <a data-fancybox="gallery" href="/assets/images/img9.jpg">
          <img alt="" src="/assets/images/img9.jpg" className="rounded-bl-xl" />
        </a>
        <a data-fancybox="gallery" href="/assets/images/img10.jpg">
          <img
            alt=""
            src="/assets/images/img10.jpg"
            className="rounded-br-xl md:rounded-none"
          />
        </a>
        <a
          data-fancybox="gallery"
          href="/assets/images/outsite1.jpg"
          className="hidden md:block"
        >
          <img
            alt=""
            src="/assets/images/outsite1.jpg"
            className="rounded-br-xl"
          />
        </a>
      </div>
    </FancyBox>
  );
};

export default Showcase;
