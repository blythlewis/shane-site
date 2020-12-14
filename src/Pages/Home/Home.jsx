import React from "react";
import Section from "../../Components/Section/Section";
import "./Home.css";
import shane_face from "../../shane_face.png";

export const Home = () => {
  // media - about - contact - email - get in touch
  return (
    <>
      <Section />
      <div className="container">
        <div className="about-wrapper">
          <div className="about-img">
            <img id="about-img" src={shane_face}></img>
          </div>
          <div className="about-table">
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
    </>
  );
};

export default Home;
