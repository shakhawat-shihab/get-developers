import React from 'react';
import logo from '../../logo.png';
import profile from '../../profile.png';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-nav fixed-top p-0">
                    <div className="container">
                        <a className="navbar-brand" href="/"> <img src={logo} alt="" className='' width='100px' /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item px-2 d-flex align-items-center">
                                    <a className="nav-link active py-2 px-3 " aria-current="page" href="/hire">Hire Developers </a>
                                </li>
                                <li className="nav-item px-2 d-flex align-items-center">
                                    <a className="nav-link py-2 px-3 " href="/review">Review</a>
                                </li>
                                <li className="nav-item px-2 d-flex align-items-center">
                                    <a className="nav-link py-2 px-3" href="/contact">Contact</a>
                                </li>
                                <li className="nav-item px-2 d-flex align-items-center ps-5">
                                    <a className="" href="/user"> <img src={profile} alt="" width='60px' /></a>
                                </li>
                            </ul>


                        </div>
                    </div>
                </nav>
            </div>
            <div className='d-flex  align-items-center mt-5 pt-4  g-0 bg-img font' style={{ height: '450px' }}  >
                <div className=' ms-md-5 ps-md-5 ms-2 ps-2 txt-color '  >
                    <h2 className='fw-bold my-4 '>Make Your Team.</h2>
                    <h3 className=' my-3'>Hire Experts from our Website and <br /> <span className=' fw-bold txt-color-secondary'> reign the world of programming.</span> </h3>
                    <h4>Your Budget is 400000. </h4>
                </div>
            </div>

        </div>
    );
};

export default Header;