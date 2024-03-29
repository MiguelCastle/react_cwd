import React from 'react';

interface CardIconDescProps {
    title: string,
    desc: string,
    icon: JSX.Element,
    extraClass?: string,
    color?: string
}
export const CardIconDesc: React.FC<CardIconDescProps> = ({icon, title, desc, extraClass, color}) => {
    return (
      <article className={extraClass ? `cid-container ${extraClass}` : 'cid-container'}>
        <div className={color? color: ''}>
            {icon}
        </div>
        <p className='cid-title'>{title}</p>
        <p className='cid-desc'>
          {desc}
        </p>
      </article>
    );
}
export default CardIconDesc;