import React from 'react';

import { CardProps } from './Card.types';

import './style.css';

const Card = (props: CardProps) => {
  const { image, content, title, subTitle, meta, className = '', vertical = false, onClick } = props;
  return (
    <div
      className={`card ${className && className} ${vertical ? 'card--vertical' : ''} ${onClick ? 'card--cursor' : ''}`}
      onClick={onClick}
    >
      <div className={`card__image ${vertical ? 'card__image--vertical' : ''}`}>
        <img src={image} alt=".." />
      </div>
      <div className={`card__content ${vertical ? 'card__content--vertical' : ''}`}>
        {title && (
          <header className="card__header">
            <h3 className="card__title">{title}</h3>
            {subTitle && (
              <div className="card__subtitle">
                <p>{subTitle}</p>
              </div>
            )}
          </header>
        )}

        <footer className="card__footer">
          <p className="card__text">{content}</p>
          {meta && <p className="card__meta">{meta}</p>}
        </footer>
      </div>
    </div>
  );
};

export { Card };
