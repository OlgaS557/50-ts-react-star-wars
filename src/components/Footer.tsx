import style from '../css_modules/email.module.css';

const Footer = () => {
    return (
        <footer className="row align-items-center m-0 w-100">
            <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <div className="btn btn-danger">
                    <p className="m-0 text-center">
                        <a href="mailto:olga.solopova21@gmail.com" className="text-white">
                            Send me an <span className={`${style.email} text-uppercase`}>email</span>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
