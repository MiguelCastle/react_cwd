import React from "react";
import staffImg from '../../../assets/images/placeholders/testimonial-1.jpg'
interface HomeStaffProps {
    
}
 
const HomeStaff: React.FC<HomeStaffProps> = () => {
    return ( 
        <section id="hstaff-section">
          <div>
            <h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
              pariatur! Odio numquam blanditiis quisquam hic repellendus esse
              iusto ipsa soluta.
            </h2>
            <p>
              <span className="primary">
                <b>jogn doe</b>
              </span>{" "}
              - COO, COPERTATION, INC.{" "}
            </p>
          </div>
          <ul>
            <li>
              <img src={staffImg} alt="staff" />
            </li>
            <li>
              <img src={staffImg} alt="staff" />
            </li>
            <li>
              <img src={staffImg} alt="staff" />
            </li>
            <li>
              <img src={staffImg} alt="staff" />
            </li>
            <li>
              <img src={staffImg} alt="staff" />
            </li>
            <li>
              <img src={staffImg} alt="staff" />
            </li>
            <li>
              <img src={staffImg} alt="staff" />
            </li>
            <li>
              <img src={staffImg} alt="staff" />
            </li>
          </ul>
        </section>
     );
}
 
export default HomeStaff;