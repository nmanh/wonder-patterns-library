import React from 'react';
import { Header } from '../general-components';
import { MainContent } from './MainContent';

const HomePage = () => (
  <div>
    <Header />
    <div className="row">
      <div className="medium-9 columns">
        <MainContent />
      </div>
      <div className="medium-3 columns">

      </div>
    </div>
  </div>
);

export default HomePage;
