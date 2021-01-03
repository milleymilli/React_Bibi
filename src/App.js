import React, { useState, useReducer } from 'react';
import { useRoutes } from 'hookrouter';
import Routes from './routes';
import Context from './utils/context';
import Header from './bib/Header';
import Footer from './bib/footer';
import '../src/App.css';
//main app 
const App = () => {
  const routes = useRoutes(Routes);

  return (
    <div className="container">
      <Context.Provider value={{}}>
        <Header />
        <section className="header__form">
          <input type="text" />
          <button >cancel</button>
        </section>
        <section className="main_section">
          {routes}
        </section>
        <Footer />
      </Context.Provider>
    </div>
  );
};



export default App;
