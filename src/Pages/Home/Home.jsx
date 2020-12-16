import React from "react";
import Section from "../../Components/Section/Section";
import "./Home.css";
import shane_face from "../../shane_face.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import next_wav from "../../nextwave.png";
import korn_ferry from "../../korn_ferry_1.png";
import illinois from "../../illinois.png";

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
          </div>
        </div>
      </div>
      <div className="block-quotes-wrapper">
        <blockquote>
          <p>
            I am greatful for the position I am in, it's not often you get to
            try and fulfill a boy hood dream. I remind myself daily that playing
            the game I love is an oppertunity that not everyone gets. The chance
            to play on the best tour in the world is what drives me.
          </p>
          <span>Shane Smith</span>
        </blockquote>
        <div className="media">
          <div className="next_wave">
            <a
              target="_blank"
              href="https://podcasts.apple.com/us/podcast/golfs-next-wave/id1259875019"
            >
              <img src={next_wav}></img>
            </a>
          </div>
          <div className="korn_ferry">
            <a
              target="_blank"
              href="https://www.pgatour.com/korn-ferry-tour/tour-insider/2020/01/24/shane-smith-trades-recruiting-job-for-tour-membership-status.html"
            >
              <img src={korn_ferry}></img>
            </a>
          </div>
          <div className="illinios">
            <a
              target="_blank"
              href="https://www.iwusports.com/news/2019/12/16/mens-golf-shane-smith-qualifies-for-2020-korn-ferry-tour.aspx"
            >
              <img className="illinois-img" src={illinois}></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
