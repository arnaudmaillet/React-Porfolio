import React from "react";

const Footer = () =>{
    return(
        <footer>
            <div className="container-fluid">
                <div className="row p-2">
                    <div className="col-12 col-md-8 d-flex borders">
                        <div className="row">
                            <div className="col-6 col-md-4 d-flex p-3">
                                <a href="http://www.saint-remi.net/" target="_blank" className="my-auto" rel="noreferrer">
                                    {/* <img src="img/logo.jpg" alt="logo" className="logo"> */}
                                    Logo St Remi
                                </a>
                            </div>
                            <div className="col-6 col-md-8 d-flex">
                                <div className="my-auto d-flex mentions">
                                    <a rel="noreferrer" className="font-weight-bold ml-4">Mentions legales</a>
                                    <a rel="noreferrer" href="https://github.com/arnaudmaillet" className="font-weight-bold ml-4">Infos supplémentaires</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 social-media borders text-center d-flex">
                        <div className="m-auto">
                            <a href="https://github.com/arnaudmaillet"><i className="fab fa-facebook fa-4x m-4" rel="noreferrer"></i></a>
                            <a href="https://github.com/arnaudmaillet"><i className="fab fa-twitter fa-4x m-4" rel="noreferrer"></i></a>
                            <a href="https://github.com/arnaudmaillet"><i className="fab fa-instagram fa-4x m-4" rel="noreferrer"></i></a>
                            <a href="https://github.com/arnaudmaillet"><i className="fab fa-linkedin-in fa-4x m-4" rel="noreferrer"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row p-4">
                    <div className="col-12 col-md-8 d-flex">
                        <p className="my-auto rights-text">© 2020 Created By Arnaud MAILLET All Rights Reserved</p>
                    </div>
                    <div className="col-12 col-md-4 d-flex">
                        <div className="d-flex up m-auto">
                            <i className="fas fa-sort-up fa-2x mr-2"></i>
                            <a href="https://github.com/arnaudmaillet" rel="noreferrer">
                                <p>Remonter en haut de page</p>
                            </a>
                            <i className="fas fa-sort-up fa-2x ml-2"></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;