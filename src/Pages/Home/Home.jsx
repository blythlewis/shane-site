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
                <th>Past Finish</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
              <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
              </tr>
              <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
              </tr>
              <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
              </tr>
              <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
