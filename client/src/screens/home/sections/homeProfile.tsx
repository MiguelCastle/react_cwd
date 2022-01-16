import ImgbckDesc from "../../../components/cards/imgbckDesc";

interface HomePortfolioProps {
    
}
 
const HomePortfolio: React.FC<HomePortfolioProps> = () => {
    return ( 
        <section id="hproject-section">
            <h4 className="theme-gradient">Our project</h4>
            <h2>Some of our Recent Works</h2>
            <p>
                There are many variations of passages of Lorem Ipsum available <br></br>
            </p>
            <ul>
                <li>
                    <ImgbckDesc title1={"development"} title2={"web design"} desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, veritatis."}/>
                </li>
                <li>
                    <ImgbckDesc title1={"product design"} title2={"app development"} desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, veritatis."}/>
                </li>
                <li>
                    <ImgbckDesc title1={"application"} title2={"photoshop design"} desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, veritatis."}/>
                </li>
            </ul>
        </section>
     );
}
 
export default HomePortfolio;