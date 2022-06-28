import React from "react";
interface StepCardProps {
    title: string,
    desc: string
}

const StepCard: React.FC<StepCardProps> = (props) => {
  return (
    <article className="step-card-container">
      <h3 className="sc-title">{props.title}</h3>
      <div className="sc-svg">
        {props.children}
      </div>
      <p className="sc-desc">
        {props.desc}
      </p>
      <button className="nlg-btn">
          learn more
      </button>
    </article>
  );
};

export default StepCard;
