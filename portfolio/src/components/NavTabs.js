import React from 'react';

// const styles = {
//   text: {
//     color: 'black'
//   }
// }

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <section>
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                <ul id="nav" className="nav">
                    <li className="current">
                        <a
                            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                            href="#home"
                            onClick={() => handlePageChange('Home')}

                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                            href="#resume"
                            onClick={() => handlePageChange('Resume')}
                        >
                            Resume
                        </a>
                    </li>
                    <li>
                        <a
                            className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                            href="#work"
                            onClick={() => handlePageChange('Work')}
                        >
                            Work
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
  );
}

export default NavTabs;

