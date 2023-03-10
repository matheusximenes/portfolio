import Image from "next/image";
import React from "react";

const Card = ({ title, description, img, linkUrl, target }) => {
  return (
    <a href={linkUrl} target={target || "_blank"} className="card">
      <div className="card__image">
        <Image
          src={img.src}
          alt="{img.description}"
          width={img.width}
          height={img.height}
          priority
        />
      </div>
      <div className="card__details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Card;
