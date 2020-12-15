import React from "react";
import Section from "../../Components/Section/Section";
import "./Home.css";
import shane_face from "../../shane_face.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Home = () => {
  // media - about - contact - email - get in touch
  return (
    <>
      <Section />
      <div className="container">
        <div id="about" className="about-wrapper">
          <div className="about-img">
            <img id="about-img" src={shane_face}></img>
          </div>
          <div className="about-table">
            <Carousel>
              <div className="personal">
                <div className="name-placeholder">Name</div>
                <div className="name">Shane Smith</div>
                <div className="age-placeholder">Name</div>
                <div className="age">Shane Smith</div>
                <div className="location-placeholder">Name</div>
                <div className="location">Shane Smith</div>
              </div>
              <div className="tournaments">
                <table>
                  <tr>
                    <th>Tournaments</th>
                    <th>Dates</th>
                    <th>Results</th>
                  </tr>
                  <tr>
                    <td>Lecom Suncoast Classic</td>
                    <td>2/15 - 2/21</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>Chitimacha Louisiana Open</td>
                    <td>3/15 - 3/21</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>Emerald Coast Classic</td>
                    <td>3/29 - 4/4</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>Huntsville Championship</td>
                    <td>4/26 - 5/2</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>Witchita Open</td>
                    <td>6/14 - 6/20</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>Lincoln Land Championship</td>
                    <td>7/12 - 7/18</td>
                    <td>N/A</td>
                  </tr>
                </table>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="block-quotes"></div>
      {/* <div class="box">
        <i class="fas fa-quote-left fa2"></i>
        <div class="text">
          <i class="fas fa-quote-right fa1"></i>
          <div>
            <h3>Quote the day</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
