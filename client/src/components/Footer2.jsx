import React from 'react'
import "./Footer2.css";

function Footer2() {
    return (
        <footer class="footer mt-5 pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-xs-12">
                    <h2>NITS MUN</h2>
                    <p class="pr-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
                        ante mollis quam tristique convallis </p>
                    <p><a href="#"><i class="fab fa-facebook-square px-1"></i></a><a href="#"><i
                                class="fa fa-linkedin-square px-1"></i></a>
                        <a href="#"><i class="fab fa-instagram px-1"></i></a>
                    </p>
                </div>
                <div class="col-lg-3 col-xs-12 links">
                    <h4 class="mt-lg-0 mt-sm-3">Links</h4>
                    <ul class="m-0 p-0">
                        <li><a href="#">Lorem ipsum</a></li>
                        <li><a href="#">Nam mauris velit</a></li>
                        <li><a href="#">Etiam vitae mauris</a></li>
                        <li><a href="#">Fusce scelerisque</a></li>
                        <li><a href="#">Sed faucibus</a></li>
                        <li><a href="#">Mauris efficitur nulla</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-xs-12 location">
                    <h4 class="mt-lg-0 mt-3"><i class="fas fa-map-marker-alt" style={{fontSize: "20px"}}></i> Location</h4>
                    <p>Lorem ipsum dolor, consectetur adipiscing</p>
                    <p class="mb-0"><i class="fa fa-phone mr-3"></i> +91 1234567890</p>
                    <p><i class="fa fa-envelope-o mr-3"></i> info@nitsmun2021.com</p>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col copyright">
                    <p class=""><small class="text-white-50">© NITS MUN 2021. All Rights Reserved.</small></p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer2
