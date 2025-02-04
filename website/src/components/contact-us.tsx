import { faFacebookF, faInstagram, faTiktok, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFax, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactUs() {
    return(
        <div className="contact-us">
            <div className="contact">

                <div className="social">
                    <h2>Hubungi Kami Melalui</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consequatur laborum, officiis saepe minima repudiandae necessitatibus nemo</p>
                    <div className="social-group">
                        <div className="social-icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className="social-content">
                            <h3>Email</h3>
                            <p>smkn2magelang@yahoo.com</p>
                        </div>
                    </div>
                    <div className="social-group">
                        <div className="social-icon">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className="social-content">
                            <h3>Telp</h3>
                            <p>(0293) 362577</p>
                        </div>
                    </div>
                    <div className="social-group">
                        <div className="social-icon">
                            <FontAwesomeIcon icon={faFax} />
                        </div>
                        <div className="social-content">
                            <h3>Fax</h3>
                            <p>(0293) 313172</p>
                        </div>
                    </div>
                    <div className="media-sosial">
                        <h3>Ikuti Kami</h3>
                        <div className="ms">
                            <a href="https://www.instagram.com/username" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.instagram.com/username" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                            <a href="https://www.instagram.com/username" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://www.instagram.com/username" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="https://www.instagram.com/username" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="message">
                    <div className="form-message">
                        <h2>Kirimi Kami Pesan</h2>
                        <form action="">
                            <div className="form-group">
                                <input type="text" id="nama" name="nama" placeholder="Nama Anda" required/>
                            </div>
                            <div className="form-group">
                                <input type="text" id="email" name="email" placeholder="Email" required/>
                            </div>
                            <div className="form-group">
                                <textarea id="pesan" name="pesan" placeholder="Tulis Pesan" required></textarea>
                            </div>
                            <button className="button">Kirim</button>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    )
}