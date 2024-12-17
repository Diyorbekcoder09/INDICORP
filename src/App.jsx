import './App.css';
import { BiMenuAltRight } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import header_logo from "./assets/images/header_logo.png"
import main_icon1 from "./assets/images/main_icon1.png"
import main_icon2 from "./assets/images/main_icon2.png"
import main_icon3 from "./assets/images/main_icon3.png"
import section_icon1 from "./assets/images/section_card_icon1.png"
import section_icon2 from "./assets/images/section_card_icon2.png"
import section_icon3 from "./assets/images/section_card_icon3.png"
import section_icon4 from "./assets/images/section_card_icon4.png"
import img1 from "./assets/images/img1.png"
import img2 from "./assets/images/img2.png"
import img3 from "./assets/images/img3.png"
import img4 from "./assets/images/img4.png"
import vedio from "./assets/images/vedio_img.png"
import vedio_icon1 from "./assets/images/vedio_icon.png"
import vedio_icon2 from "./assets/images/vedio_icon2.png"
import firma1 from "./assets/images/firma1.png"
import firma2 from "./assets/images/firma2.png"
import firma3 from "./assets/images/firma3.png"
import firma4 from "./assets/images/firma4.png"
import firma5 from "./assets/images/firma5.png"
import firma6 from "./assets/images/firma6.png"
import aloqa1 from "./assets/images/s1.png"
import aloqa2 from "./assets/images/s2.png"
import aloqa3 from "./assets/images/s3.png"
import footer_icon1 from "./assets/images/Vector.png"
import footer_icon2 from "./assets/images/vector2.png"
import footer_icon3 from "./assets/images/vector3.png"



function App() {

  function menuFunc() {
    const menuEl = document.querySelector(".menu_card");

    menuEl.style.marginLeft = "0px";

  }

  function closeFunc() {
    const menuEl = document.querySelector(".menu_card");

    menuEl.style.marginLeft = "-300px";

  }

  return (
    <div className="idekorp">
      <div className="container">
        <div className="header_main">
          <header className="header">
            <div className="menu_card">
              <IoClose onClick={() => closeFunc()} className='close' />
              <ul className="header_item2">
                <li className="header_text2">Home</li>
                <li className="header_text2">Product</li>
                <li className="header_text2">Pricing</li>
                <li className="header_text2">Contact</li>
              </ul>

            </div>
            <div className="header_left_content">
              <img src={header_logo} alt="" className="header_logo" />
              <ul className="header_item">
                <li className="header_text">Home</li>
                <li className="header_text">Product</li>
                <li className="header_text">Pricing</li>
                <li className="header_text">Contact</li>
              </ul>
            </div>
            <div className="header_links">
              <CiSearch className='shop_icon' />
              <RiShoppingCart2Line className='shop_icon' />
              <BiMenuAltRight className='header_icon' onClick={() => menuFunc()} />
            </div>

          </header>
          <main className="main">
            <p className="main_text">EMPOWER YOUR BUSINESS</p>
            <p className="main_text1">We know how large objects will act,
              but things on a small scale.</p>
            <div className="main_btnlar">
              <button className="main_btn1">Get Quote Now</button>
              <button className="main_btn2">Learn More</button>
            </div>
            <div className="main_cards">
              <div className="main_card">
                <img src={main_icon1} alt="" className="main_icon" />
                <p className="main_card_text">Digital Marketing</p>
                <p className="main_card_text2">We focus on ergonomics and
                  meeting you where you work. </p>

              </div>
              <div className="main_card">
                <img src={main_icon2} alt="" className="main_icon" />
                <p className="main_card_text">National top 50 firms</p>
                <p className="main_card_text2">Just type what's on your mind
                  and we'll get you there.</p>

              </div>
              <div className="main_card2">
                <img src={main_icon3} alt="" className="main_icon" />
                <p className="main_card_text">Digital Marketing</p>
                <p className="main_card_text2">the quick fox jumps over the
                  lazy dog</p>

              </div>
            </div>
          </main>

        </div>
        <section className="section">
          <p className="section_text">WHY CHOOSE US</p>
          <p className="section_text1">Problems trying to resolve the conflict between the two major realms
            <br />
            of Classical physics: Newtonian mechanics </p>
          <div className="section_cards">
            <div className="section_card">
              <img src={section_icon1} alt="" className="section_card_icon" />
              <p className="section_card_text">3K</p>
              <p className="section_card_text2">CASES DONE</p>
            </div>
            <div className="section_card">
              <img src={section_icon2} alt="" className="section_card_icon" />
              <p className="section_card_text1">45</p>
              <p className="section_card_text2">HAPPY CUSTOMERS</p>
            </div>
            <div className="section_card">
              <img src={section_icon3} alt="" className="section_card_icon" />
              <p className="section_card_text">12+</p>
              <p className="section_card_text2">AWARD WINNING</p>
            </div>
            <div className="section_card">
              <img src={section_icon4} alt="" className="section_card_icon" />
              <p className="section_card_text">1.5K</p>
              <p className="section_card_text2">CASES DONE</p>
            </div>
          </div>
        </section>
        <section className="section2">
          <p className="pech">Practice Advice</p>
          <p className="pech1">Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics </p>
          <div className="cards">
            <div className="card">
              <p className="pech2">A single source of truth</p>
              <p className="pech3">Newton thought that
                light was made up of
                particles, but then it
                was discovered </p>
              <img src={img1} alt="" className="img" />
            </div>
            <div className="card">
              <p className="pech2">Fastest way to organize</p>
              <p className="pech3">“Quantum mechanics”
                is the description of the
                behaviour of matter</p>
              <img src={img2} alt="" className="img" />
            </div>
            <div className="card">
              <p className="pech2">Fastest way to take action</p>
              <p className="pech3">They describe a
                universe consisting of
                bodies moving</p>
              <img src={img3} alt="" className="img" />
            </div>
            <div className="card">
              <p className="pech2">Work better together</p>
              <p className="pech3">They finally obtained
                a consistent description
                of the behaviour </p>
              <img src={img4} alt="" className="img" />
            </div>
          </div>
        </section>
        <section className="vedio_section">
          <p className="v_text">We are providing <br /> best business service.</p>
          <p className="v_text1">Problems trying to resolve the conflict between the two major realms
            <br />
            of Classical physics: Newtonian mechanics </p>
          <div className="vedio">
            <img src={vedio} alt="" className="vedio_img" />
            <div className="vedio_title">
              <p className="v_text2">Most trusted in our field</p>
              <p className="v_text3">Most calendars are designed for teams. Slate
                is designed for freelancers who want a
                simple way to plan their schedule.</p>
              <div className="guruh">
                <img src={vedio_icon1} alt="" className="v_icon" />
                <div className="p1">
                  <p className="v_text4">the quick fox jumps over the lazy
                    dog</p>
                  <p className="v_text5">Things on a very small scale ...</p>
                </div>
              </div>
              <div className="guruh">
                <img src={vedio_icon2} alt="" className="v_icon" />
                <div className="p1">
                  <p className="v_text4">the quick fox jumps over the lazy
                    dog</p>
                  <p className="v_text5">Things on a very small scale ...</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="fermalar">
          <a href="https://www.hoolisoftware.com/services/"><img src={firma1} alt="" className="firma" /></a>
          <a href="https://lya.com/"><img src={firma2} alt="" className="firma" /></a>
          <a href="#"><img src={firma3} alt="" className="firma" /></a>
          <a href="https://stripe.com/"><img src={firma4} alt="" className="firma" /></a>
          <a href="https://aws.amazon.com/ru/"><img src={firma5} alt="" className="firma" /></a>
          <a href="#"><img src={firma6} alt="" className="firma" /></a>
        </section>
        <section className='section_form'>
          <form className="form">
            <p className="form_text">Subscribe For Latest
              Newsletter</p>
            <div className="inputs">
              <input type="text" required placeholder='Your Email' className='input' />
              <button className="input_btn">Subscribe</button>
            </div>
          </form>
        </section>
      </div>
      <div className="section_color"></div>
      <div className="container">
        <section className="section5">
          <p className="aloqa_title">Get In Touch</p>
          <p className="aloqa_title2">Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics </p>
          <div className="aloqa">
            <div className="aloqa_card">
              <img src={aloqa1} alt="" className="aloqa_img" />
              <p className="aloqa_text">georgia.young@example.com <br />georgia.young@ple.com</p>
              <p className="aloqa_text2">Get Support</p>
              <button className="aloqa_btn">Submit Request</button>
            </div>
            <div className="aloqa_card1">
              <img src={aloqa2} alt="" className="aloqa_img" />
              <p className="aloqa_text">georgia.young@example.com <br />georgia.young@ple.com</p>
              <p className="aloqa_text2">Get Support</p>
              <button className="aloqa_btn2">Submit Request</button>
            </div>
            <div className="aloqa_card">
              <img src={aloqa3} alt="" className="aloqa_img" />
              <p className="aloqa_text">georgia.young@example.com <br />georgia.young@ple.com</p>
              <p className="aloqa_text2">Get Support</p>
              <button className="aloqa_btn">Submit Request</button>
            </div>
          </div>
        </section>

      </div>
      <section className="section6">
        <div className="dog">
          <div className="dog_title">
            <p className="dog_text">Consulting Agency For Your Business</p>
            <p className="dog_text2">the quick fox jumps over the lazy dog</p>
          </div>
          <button className="dog_btn">Contact Us</button>
        </div>
      </section>
      <footer className="footer">
        <div className="footer_title">
          <p className="footer_text">Company Info</p>
          <ul className="footer_item">
            <li className="footer_text1">About Us</li>
            <li className="footer_text1">Carrier</li>
            <li className="footer_text1">We are hiring</li>
            <li className="footer_text1">Blog</li>
          </ul>
        </div>

        <div className="footer_title2">
          <p className="footer_text">Legal</p>
          <ul className="footer_item">
            <li className="footer_text1">About Us</li>
            <li className="footer_text1">Carrier</li>
            <li className="footer_text1">We are hiring</li>
            <li className="footer_text1">Blog</li>
          </ul>
        </div>

        <div className="footer_title2">
          <p className="footer_text">Features</p>
          <ul className="footer_item">
            <li className="footer_text1">About Us</li>
            <li className="footer_text1">User Analytic</li>
            <li className="footer_text1">Live Chat</li>
            <li className="footer_text1">Unlimited Support</li>
          </ul>
        </div>

        <div className="footer_title">
          <p className="footer_text">Resources</p>
          <ul className="footer_item">
            <li className="footer_text1">IOS & Android</li>
            <li className="footer_text1">Watch a Demo</li>
            <li className="footer_text1">Customers</li>
            <li className="footer_text1">API</li>
          </ul>
        </div>


        <div className="footer_title2">
          <p className="footer_text">Resources</p>
          <ul className="footer_item">
            <div className="footer_guruh">
              <img src={footer_icon1} alt="" className="footer_icon" />
              <li className="footer_text3"><a href="tel:">(480) 555-0103</a></li>
            </div>
            <div className="footer_guruh">
              <img src={footer_icon2} alt="" className="footer_icon" />
              <li className="footer_text3">4517 Washington Ave. </li>
            </div>
            <div className="footer_guruh">
              <img src={footer_icon3} alt="" className="footer_icon" />
              <li className="footer_text3">debra.holt@example.com</li>
            </div>

          </ul>
        </div>
      </footer>
      <div className="footer_link">
        <div className="footer_link_text">Made With Love By Figmaland All Right Reserved </div>
        <div className="f_links">
          <a href="https://www.facebook.com/"><IoLogoFacebook className='face' /></a>
          <a href="https://www.instagram.com/"><FaInstagram className='ins' /></a>
          <a href="https://x.com/?lang=en"><FaTwitter className='twi' /></a>
          <a href="https://www.youtube.com/"><FaYoutube className='you' /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
