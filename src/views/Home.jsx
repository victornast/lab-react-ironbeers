import React from 'react';

import './Home.css';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <nav>
      <Link to="/beers" className="homepage-action">
        <img
          className="homepage-action__image"
          src="/images/beers.png"
          alt="All Beers"
        />
        <h2 className="homepage-action__title">All Beers</h2>
        <p className="homepage-action__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          esse commodi nihil at odio neque, quo quia impedit dignissimos placeat
          iste odit voluptate animi est fugiat aliquam natus, a excepturi!
        </p>
      </Link>
      <Link to="/random-beer" className="homepage-action">
        <img
          src="/images/random-beer.png"
          alt="All Beers"
          className="homepage-action__image"
        />
        <h2 className="homepage-action__title">Random Beer</h2>
        <p className="homepage-action__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          esse commodi nihil at odio neque, quo quia impedit dignissimos placeat
          iste odit voluptate animi est fugiat aliquam natus, a excepturi!
        </p>
      </Link>
      <Link to="/new-beer" className="homepage-action">
        <img
          src="/images/new-beer.png"
          alt="All Beers"
          className="homepage-action__image"
        />
        <h2 className="homepage-action__title">New Beer</h2>
        <p className="homepage-action__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          esse commodi nihil at odio neque, quo quia impedit dignissimos placeat
          iste odit voluptate animi est fugiat aliquam natus, a excepturi!
        </p>
      </Link>
    </nav>
  );
}

export default Home;
