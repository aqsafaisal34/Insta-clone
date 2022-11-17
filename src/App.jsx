import React from "react";
import "./App.css";
import instagramlogo from "./images/Instagram_logo.svg.png";
import profileImg from "./images/profile.jpg";
import post1Img from "./images/post1.jpg";
import post2Img from "./images/post2.jpg";
import post3Img from "./images/post3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSearch,
  faCompass,
  faMessage,
  faHeart,
  faPlusCircle,
  faUserCircle,
  faBars,
  faComment,
  faLocationArrow,
  faBookmark,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="container">
      <div className="leftside">
        <img src={instagramlogo} alt="" width="180px" id="logo" />
        <div className="list">
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faHouse}
                className="Icon"
                active
                size="lg"
              />
              Home
            </li>
            <li>
              <FontAwesomeIcon icon={faSearch} className="Icon" size="lg" />
              Search
            </li>
            <li>
              <FontAwesomeIcon icon={faCompass} className="Icon" size="lg" />
              Explore
            </li>
            <li>
              <FontAwesomeIcon icon={faMessage} className="Icon" size="lg" />
              Messages
            </li>
            <li>
              <FontAwesomeIcon icon={faHeart} className="Icon" size="lg" />
              Notifications
            </li>
            <li>
              <FontAwesomeIcon icon={faPlusCircle} className="Icon" size="lg" />
              Create
            </li>
            <li>
              <FontAwesomeIcon icon={faUserCircle} className="Icon" size="lg" />
              Profile
            </li>
            <li>
              <FontAwesomeIcon icon={faBars} className="Icon" size="lg" />
              More
            </li>
          </ul>
        </div>
      </div>
      <div className="centre">
        <div class="posts">
          <header>
            <img className="profile" src={profileImg} alt="" />
            <h3>Aqsa Faisal</h3>
          </header>
          <img className="post1" src={post1Img} alt="" />
          <h3>200 Likes</h3>
          <p>View all Comments</p>
          <p>10 Hours ago</p>
          <div className="icons">
            <p className="icon">
              <FontAwesomeIcon icon={faHeart} className="icon1" />

              <a href="#showcomment" className="targetcomment">
                {" "}
                <FontAwesomeIcon icon={faComment} className="icon1" />
              </a>

              <FontAwesomeIcon icon={faLocationArrow} className="icon1" />

              <FontAwesomeIcon
                className="icon1"
                icon={faBookmark}
                id="bookmark"
              />
            </p>
          </div>
          <div className="footer1">
            <p className="addcomment">
              <FontAwesomeIcon icon={faFaceSmile} className="addcomment" />
              <span>
                <input
                  type="text"
                  id="input"
                  placeholder="Add a comment"
                  className="comment"
                />
              </span>{" "}
            </p>
            <button>post</button>
          </div>
        </div>
        <hr />
        <div class="posts">
          <header>
            <img className="profile" src={profileImg} alt="" />
            <h3>Aqsa Faisal</h3>{" "}
          </header>
          <img className="post1" src={post2Img} alt="" />
          <h3>200 Likes</h3>
          <p>View all Comments</p>
          <p>10 Hours ago</p>
          <div className="icons">
            <p className="icon">
              <FontAwesomeIcon icon={faHeart} className="icon1" />

              <a href="#showcomment" className="targetcomment">
                {" "}
                <FontAwesomeIcon icon={faComment} className="icon1" />
              </a>

              <FontAwesomeIcon icon={faLocationArrow} className="icon1" />

              <FontAwesomeIcon className="icon1" icon={faBookmark} />
            </p>
          </div>
          <div className="footer1">
            <p className="addcomment">
              <FontAwesomeIcon icon={faFaceSmile} className="addcomment" />
              <span>
                <input
                  type="text"
                  id="input"
                  placeholder="Add a comment"
                  className="comment"
                />
              </span>{" "}
            </p>
            <button>post</button>
          </div>
        </div>
        <hr />
        <div class="posts">
          <header>
            <img className="profile" src={profileImg} alt="" />
            <h3>Aqsa Faisal</h3>{" "}
          </header>
          <img className="post1" src={post3Img} alt="" />
          <h3>200 Likes</h3>
          <p>View all Comments</p>
          <p>10 Hours ago</p>
          <div className="icons">
            <p className="icon">
              <FontAwesomeIcon icon={faHeart} className="icon1" />

              <a href="#showcomment" className="targetcomment">
                {" "}
                <FontAwesomeIcon icon={faComment} className="icon1" />
              </a>

              <FontAwesomeIcon icon={faLocationArrow} className="icon1" />

              <FontAwesomeIcon className="icon1" icon={faBookmark} />
            </p>
          </div>
          <div className="footer1">
            <p className="addcomment">
              <FontAwesomeIcon icon={faFaceSmile} className="addcomment" />
              <span>
                <input
                  type="text"
                  id="input"
                  placeholder="Add a comment"
                  className="comment"
                />
              </span>{" "}
            </p>
            <button>post</button>
          </div>
        </div>
        <hr />
      </div>
      <div className="rightside">
        <div className="firstrow">
          <FontAwesomeIcon icon={faUserCircle} size="3x" id="profileLogo" />
          <span>
            aqsafaisal1 <br /> Aqsa Faisal
          </span>
          <button>Switch</button>
        </div>
        <div className="secondrow">
          <h6>Suggestions for you</h6>
          <ul>
            <li>
              <FontAwesomeIcon icon={faUserCircle} size="1x" />
              Tasmiyah Hussain
            </li>
            <li>
              <FontAwesomeIcon icon={faUserCircle} size="1x" />
              laiba Ali
            </li>
            <li>
              <FontAwesomeIcon icon={faUserCircle} size="1x" />
              Aisha Ahsan
            </li>
            <li>
              <FontAwesomeIcon icon={faUserCircle} size="1x" />
              Ahmed Raza
            </li>
          </ul>
        </div>
        <footer>
          <ul>
            <li>About</li>
            <li>.Help</li>
            <li>.Api</li>
            <li>.Jobs</li>
            <li>.Privacy</li>
            <li>.Terms</li>
            <li>.Location</li>
            <li>.Language</li>
          </ul>
          <p>2022 Instagram From Meta</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
