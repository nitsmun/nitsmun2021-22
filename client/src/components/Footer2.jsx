import "./Footer2.css";
import {Link} from 'react-router-dom';


function Footer2() {
    return (
        <footer className="footer mt-5 pt-5 pb-5" style={{fontFamily: "var(--font2)"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-xs-12">
                    <h2>NITS MUN</h2>
                    <p className="pr-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
                        ante mollis quam tristique convallis </p>
                    <p><a href="/"><i className="fab fa-facebook-square px-1"></i></a><a href="/"><i
                                className="fa fa-linkedin-square px-1"></i></a>
                        <a href="/"><i className="fab fa-instagram px-1"></i></a>
                    </p>
                </div>
                <div className="col-lg-3 col-xs-12 links">
                    <h4 className="mt-lg-0 mt-sm-3">Links</h4>
                    <ul className="m-0 p-0">
                        <li><Link to="/">Lorem ipsum</Link></li>
                        <li><Link to="/">Nam mauris velit</Link></li>
                        <li><Link to="/">Etiam vitae mauris</Link></li>
                        <li><Link to="/">Fusce scelerisque</Link></li>
                        <li><Link to="/">Sed faucibus</Link></li>
                        <li><Link to="/">Mauris efficitur nulla</Link></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-xs-12 location">
                    <h4 className="mt-lg-0 mt-3"><i className="fas fa-map-marker-alt" style={{fontSize: "20px"}}></i> Location</h4>
                    <p>Lorem ipsum dolor, consectetur adipiscing</p>
                    <p className="mb-0"><i className="fa fa-phone mr-3"></i> +91 1234567890</p>
                    <p><i className="fa fa-envelope-o mr-3"></i> info@nitsmun2021.com</p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col copyright">
                    <p className=""><small className="text-white-50">© NITS MUN 2021. All Rights Reserved.</small></p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer2
