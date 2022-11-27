import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home'
import Work from './pages/Work';
import Resume from './pages/Resume';
// import Contact from './pages/Contact';

export default function Container() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    // if (currentPage === 'Contact') {
    //   return <Contact />;
    // }
    if (currentPage === 'Work') {
      return <Work />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
