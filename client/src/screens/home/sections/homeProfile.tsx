import ImgbckDesc from "../../../components/cards/imgbckDesc";

interface HomePortfolioProps {
    
}
 
const HomePortfolio: React.FC<HomePortfolioProps> = () => {
    return ( 
        <section id="hproject-section">
            <h4 className="theme-gradient">What we can do for you</h4>
            <h2>Some of our Recent Works</h2>
            <p>
                Take a look at what we can do for you
            </p>
            <ul>
                <li>
                    <ImgbckDesc title1={"Venue Rental"} title2={"Seattle Diamond Hall"} desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, veritatis."}/>
                </li>
                <li>
                    <ImgbckDesc title1={"Restaurant"} title2={"Restuarent Place"} desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, veritatis."}/>
                </li>
                <li>
                    <ImgbckDesc title1={"application"} title2={"photoshop design"} desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, veritatis."}/>
                </li>
            </ul>
        </section>
     );
}
 
export default HomePortfolio;