import React from "react";
import "./index.css";
const HeroImage = ({ imageUrl, altText }) => {
  return (
    <section className="hero-image">
          <div className="flex">
            <img
              src={"https://cdn.discordapp.com/attachments/1096249170999918683/1097707801985421353/Gray_Brown_Modern_Photo_Collage_SEEK_Cover_Image_1.png"}
              alt={"sometext"}
            />
          </div>
    </section>
  );
};

export default HeroImage;