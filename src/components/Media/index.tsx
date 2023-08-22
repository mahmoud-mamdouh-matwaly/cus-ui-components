import React from 'react';

import DefaultAvatar from './img/avatar.svg';
import { MediaProps } from './Media.types';

import './style.css';

const Media = (props: MediaProps) => {
  const { avatar, link, className = '', title, vertical = false, subTitle } = props;
  return (
    <div
      className={`media ${className && className} ${vertical ? 'media--vertical' : ''} ${title ? 'media--width' : ''}`}
    >
      {avatar && (
        <div className="media__img">
          <a href={link} target="_blank" rel="noreferrer">
            <img src={avatar} alt="" />
          </a>
        </div>
      )}
      {!avatar && (
        <div className="media__img">
          <a href={link} target="_blank" rel="noreferrer">
            <img src={DefaultAvatar} alt="" />
          </a>
        </div>
      )}
      {title && (
        <div className="media__content">
          <h3 className="media__title">{title}</h3>
          {subTitle && (
            <div className="media__subtitle">
              <p>{subTitle}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { Media };
