import React from 'react';
import { Header } from '../Header';
import { DropDown } from '../dropDown';
import { Button } from '../Button';
import { PageHeading } from '../PageHeading';
import { Breadcrumb } from '../Breadcrumb';

import DefaultImg from '../../img/kingdom-7.png';

const PageHeaders = () => {
  const items = [
    { to: '/', label: 'Home' },
    { to: '/users', label: 'Users' },
    { to: '/user/:id', label: 'user details' },
  ];

  return (
    <>
      <Header
        logo={DefaultImg}
        menu={
          <>
            <a href="#">Analytics</a>
            <DropDown title="Analytics 1">
              <a href="#">test 1</a>
              <a href="#">test 2</a>
            </DropDown>
            <a href="#">Analytics 2</a>
            <a href="#">Analytics 3</a>

            <DropDown title="Analytics">
              <a href="#">test 3</a>
              <a href="#">test 4</a>
            </DropDown>
          </>
        }
        navigationRight={<Button text="sign out" variant="primary" size="small" />}
      />
      <Breadcrumb>
        {items.map(({ to, label }) => (
          <a key={to} href={to}>
            {label}
          </a>
        ))}
      </Breadcrumb>
      <PageHeading title="heading">
        <>
          <span className="hidden sm:block">
            <Button
              variant="secondary"
              type="button"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3
              14.172V17h2.828l8.38-8.379-2.83-2.828z"
                  />
                </svg>
              }
              text="Edit"
              size="small"
              reverse={true}
            />
          </span>

          <span className="hidden sm:block ml-3">
            <Button
              variant="secondary"
              type="button"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4
                0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0
                1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2
                2 0 11-2.828-2.828l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              text="View"
              size="small"
              reverse={true}
            />
          </span>

          <span className="sm:ml-3">
            <Button
              variant="primary"
              type="button"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0
                    011.414-1.414L8 12.586l7.293-7.293a1
                1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              text="Publish"
              size="small"
              reverse={true}
            />
          </span>
        </>
      </PageHeading>
    </>
  );
};

export { PageHeaders };
