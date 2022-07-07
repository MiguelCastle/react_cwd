import ImgbckDesc from "../../../components/cards/imgbckDesc";
import diamondhall from "../../../assets/images/compressed/backgrounds/seattlediamondhall_screenshot.webp";
import bagel from "../../../assets/images/compressed/backgrounds/bagelbundance_screenshot.webp";
import bck from '../../../assets/images/compressed/placeholders/coming-soon.webp';
interface HomePortfolioProps {
    
}
 
const HomePortfolio: React.FC<HomePortfolioProps> = () => {
    return ( 
        <section id="hproject-section">
            <h4 className="theme-gradient">What I can do for you</h4>
            <h2>Some of our Recent Works</h2>
            <p>
                If I am not working with a company I are developing prototype web apps. Take a look at company websites currently in development.
            </p>
            <ul>
                <li>
                    <a href="https://main.d20v9o8umiztc0.amplifyapp.com/" target="_blank" aria-label="A project for a venue rental place">
                        <ImgbckDesc title1={"Venue Rental"} title2={"Seattle Diamond Hall"} desc={"A demo website that has the basic foundation for a venue rental business to show off their space."} bck={diamondhall}/>
                    </a>
                </li>
                <li>
                    <a href='http://34.209.6.144/' target="_blank" aria-label="A project for a small bagel vendor">
                        <ImgbckDesc title1={"Basic eCommerce"} title2={"Bagel Bundance"} desc={"A simple eCommerce website to order home made bagels."}  bck={bagel}/>
                    </a>
                </li>
                <li>
                    <ImgbckDesc title1={"Coming Soon"} title2={"Course Management"} desc={"As a programming instructor I am developing an app that will help teach and quiz students live in class."}  bck={bck}/>
                </li>
            </ul>
        </section>
     );
}
 
export default HomePortfolio;