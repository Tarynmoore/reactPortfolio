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
    // <ul className="nav line">
    //   <li className="nav-item">
    //     <a
    //       style={styles.text}
    //       href="#aboutMe"
    //       onClick={() => handlePageChange('AboutMe')}
    //       className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
    //     >
    //       About Me
    //     </a>
    //   </li>
    //   {/* <li className="vl nav-item">
    //     <a
    //       style={styles.text}
    //       href="#contact"
    //       onClick={() => handlePageChange('Contact')}
    //       className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Contact
    //     </a>
    //   </li> */}
    //   <li className="vl nav-item">
    //     <a
    //       style={styles.text}
    //       href="#portfolio"
    //       onClick={() => handlePageChange('Portfolio')}
    //       className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Portfolio
    //     </a>
    //   </li>
    //   <li className="vl nav-item">
    //     <a
    //       style={styles.text}
    //       href="#resume"
    //       onClick={() => handlePageChange('Resume')}
    //       className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Resume
    //     </a>
    //   </li>
    // </ul>
  );
}

export default NavTabs;

