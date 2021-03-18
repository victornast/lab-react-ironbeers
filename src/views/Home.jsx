import React from 'react';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <nav>
      <Link to="/beers">
        <img src="/images/beers.png" alt="All Beers" />
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          esse commodi nihil at odio neque, quo quia impedit dignissimos placeat
          iste odit voluptate animi est fugiat aliquam natus, a excepturi!
        </p>
      </Link>
      <Link to="/random-beer">
        <img src="/images/random-beer.png" alt="All Beers" />
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          esse commodi nihil at odio neque, quo quia impedit dignissimos placeat
          iste odit voluptate animi est fugiat aliquam natus, a excepturi!
        </p>
      </Link>
      <Link to="/new-beer">
        <img src="/images/new-beer.png" alt="All Beers" />
        <h2>New Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          esse commodi nihil at odio neque, quo quia impedit dignissimos placeat
          iste odit voluptate animi est fugiat aliquam natus, a excepturi!
        </p>
      </Link>
    </nav>
  );
}

export default Home;
