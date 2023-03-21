import React, { Fragment } from "react";

const Footer = () => {
    return (
        <Fragment>
            <footer className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start">
                            <p>&copy; 2023 My App</p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <a href="#">Privacy Policy</a>
                            <span className="mx-2">|</span>
                            <a href="#">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;