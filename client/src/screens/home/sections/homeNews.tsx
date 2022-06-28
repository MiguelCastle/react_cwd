import React from 'react';
import ImgbckDesc from '../../../components/cards/imgbckDesc';
import bck from '../../../assets/images/placeholders/blog-04.jpg'
// import bck from '../../assets/images/placeholders/blog-04.jpg';

interface HomeNewsProps {
    
}
 
const HomeNews: React.FC<HomeNewsProps> = () => {
    return (  
        <section id="hlastest-news-section">
        <h4 className="theme-gradient">what's stories on</h4>
        <h2>latest news</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alternation.
        </p>
        <ul>
          <li>
            <ImgbckDesc
              title1={"app development"}
              title2={"What is the difference between Web and Brand."}
              desc={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, veritatis."
              }
              bck={bck}
            />
          </li>
          <li>
            <ImgbckDesc
              title1={"react app"}
              title2={"A big ticket gone to be an interesting look New York"}
              desc={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, veritatis."
              }
              bck={bck}
            />
          </li>
          <li>
            <ImgbckDesc
              title1={"photoshop"}
              title2={"Getting tickets to the big show have a closer look"}
              desc={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, veritatis."
              }
              bck={bck}
            />
          </li>
        </ul>
      </section>
    );
}
 
export default HomeNews;