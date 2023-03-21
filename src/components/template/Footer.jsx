import React, { Fragment } from "react";

const Footer = () => {
    return (
        <Fragment>
            <footer class="bg-light py-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start">
                            <p>&copy; 2023 My App</p>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <a href="#">Privacy Policy</a>
                            <span class="mx-2">|</span>
                            <a href="#">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;