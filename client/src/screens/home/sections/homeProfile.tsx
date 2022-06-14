import ImgbckDesc from "../../../components/cards/imgbckDesc";
import diamondhall from "../../../assets/images/compressed/backgrounds/seattlediamondhall_screenshot.webp";
import bck from '../../../assets/images/compressed/placeholders/coming-soon.webp';
interface HomePortfolioProps {
    
}
 
const HomePortfolio: React.FC<HomePortfolioProps> = () => {
    return ( 
        <section id="hproject-section">
            <h4 className="theme-gradient">What we can do for you</h4>
            <h2>Some of our Recent Works</h2>
            <p>
                If we are not working with a company we are developing prototype web apps. Take a look at company websites we have developed or claim a prototype you like. 
            </p>
            <ul>
                <li onClick={() => window.open('https://www.seattlediamondhall.com/', '_blank')}>
                    <ImgbckDesc title1={"Venue Rental"} title2={"Seattle Diamond Hall"} desc={"I partnered with a local business owner to design and develop a simple web app to display the venue."} bck={diamondhall}/>
                </li>
                <li>
                    <ImgbckDesc title1={"Coming Soon"} title2={"Bagel Bundance"} desc={"Currently working on a bagel ecommerce web app to order bagels. Includes a managment system for orders."}  bck={bck}/>
                </li>
                <li>
                    <ImgbckDesc title1={"Coming Soon"} title2={"Course Management"} desc={"As a programming instructor I am developing an app that will help teach and quiz students live in class."}  bck={bck}/>
                </li>
            </ul>
        </section>
     );
}
 
export default HomePortfolio;