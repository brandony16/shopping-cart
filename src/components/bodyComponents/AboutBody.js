import React, { useEffect, useState } from "react";
import "../../styles/BodyStyles/AboutBody.css"

const AboutBody = () => {
  const [subfactVisibility, setSubfactVisibility] = useState({
    founding: false,
    sustainability: false,
    products: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const subfactElements = document.querySelectorAll('.factWrap');
  
      subfactElements.forEach(element => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const elementPosition = element.offsetTop + 100;
  
        if (scrollPosition > elementPosition) {
          setSubfactVisibility(prevVisibility => ({
            ...prevVisibility,
            [element.id]: true
          }));
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="aboutBody">
      <div className="mission">
        <div className="missionWrap">
            <h2 className="missionTitle">Who are we?</h2>
            <div className="missionTxt">
              Fashion Fusion is a curated online store that blends timeless elegance
              with contemporary trends, offering a diverse selection of high-quality
              clothing and accessories. With a commitment to sustainability and a
              focus on customer empowerment, Fashion Fusion provides a platform for
              individuals to express their unique style and embrace the art of
              fashion.
            </div>
        </div>
      </div>
      <div className="subFacts">
        <div className={`factWrap ${subfactVisibility.founding ? 'visible' : ''}`} id="founding">
          <h2 className="factTitle">Founding</h2>
          <div className="fact">
            Fashion Fusion was founded by Sarah Reynolds, a fashion enthusiast
            with a passion for creativity and a deep understanding of global
            fashion trends. With a curated collection of clothing and
            accessories from diverse designers, Fashion Fusion became known for
            its celebration of individuality and impeccable customer service.
            Today, it remains a destination for fashion enthusiasts seeking a
            fusion of timeless elegance and contemporary style, fueled by
            Sarah's unwavering commitment to the art of fashion.
          </div>
        </div>
        <div className={`factWrap ${subfactVisibility.sustainability ? 'visible' : ''}`} id="sustainability">
          <h2 className="factTitle">Sustainability</h2>
          <div className="fact">
            Fashion Fusion is deeply committed to sustainability and embraces a
            holistic approach to minimize its environmental impact and promote
            ethical practices. The company focuses on sourcing materials and
            products from sustainable and eco-friendly sources, and prioritizing
            organic and recycled fabrics. By integrating sustainability into its
            core values and operations, Fashion Fusion strives to create a
            fashion industry that is conscious, responsible, and in harmony with
            the planet and its communities.
          </div>
        </div>
        <div className={`factWrap ${subfactVisibility.products ? 'visible' : ''}`} id="products">
          <h2 className="factTitle">Products</h2>
          <div className="fact">
            Fashion Fusion offers a diverse range of high-quality clothing and
            accessories that blend timeless elegance with contemporary trends.
            The product selection includes carefully curated pieces from both
            emerging designers and established brands, ensuring a unique and
            varied collection. From sophisticated dresses, stylish tops, and
            tailored suits to accessories such as handbags, shoes, and jewelry,
            Fashion Fusion provides customers with the opportunity to express
            their individual style and embrace the latest fashion aesthetics.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBody;
