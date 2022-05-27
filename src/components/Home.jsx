import React from 'react'
import { Link, Element } from 'react-scroll'
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  batch,
  Fade,
  FadeIn,
  MoveOut,
  MoveIn,
} from 'react-scroll-motion'
import './css/Home.css'
import {desert, drStrange,mirrorDimension,mountains} from './assets/images';
export default function Home() {
  return (
    <React.Fragment>
      <main >
        <ScrollContainer>
          <div id="homeNavBar">
            <Link to="first" smooth={true} duration={700}>
              <span className="homeNavLinks">FIRST</span>
            </Link>
            <Link to="second" smooth={true} duration={700}>
              <span className="homeNavLinks">SECOND</span>
            </Link>
            <Link to="third" smooth={true} duration={700}>
              <span className="homeNavLinks">THIRD</span>
            </Link>
            <Link to="fourth" smooth={true} duration={700}>
              <span className="homeNavLinks">FOURTH</span>
            </Link>
          </div>
          {/* page 1 */}
          <ScrollPage page={0}>
            <Element id="first" className="homeSection">
              <Animator animation={batch(Fade(), MoveOut(-1000, -200))}>
                <p className="homePara">First section</p>
              </Animator>
              <Animator animation={batch(Fade(), MoveOut(1000, -200))}>
                <img
                  className="egImage"
                  src={desert}
                  alt="GTA-sanandreas-game"
                />
              </Animator>
            </Element>
          </ScrollPage>
          {/* page 2 */}
          <ScrollPage page={1}>
            <Element id="second" className="homeSection">
              <Animator animation={batch(Fade(), MoveOut(-500, 200), MoveIn(-500, 0))}>
                <p className="homePara">second section</p>
              </Animator>
              <Animator animation={batch(Fade(), MoveOut(500, -200), MoveIn(-500, 1000))}>
                <img
                  className="egImage"
                  src={drStrange}
                  alt="GTA-sanandreas-game"
                />
              </Animator>
            </Element>
          </ScrollPage>
          {/* page 3 */}
          <ScrollPage page={2}>
            <Element id="third" className="homeSection">
              <Animator animation={batch(FadeIn(-200, 300), MoveIn(0, -500))}>
                <p className="homePara">third section</p>
              </Animator>
              <Animator animation={batch(FadeIn(200, 300), MoveIn(0, 500))}>
                <img
                  className="egImage"
                  src={mirrorDimension}
                  alt="GTA-sanandreas-game"
                />
              </Animator>
            </Element>
          </ScrollPage>
          {/* page 4 */}
          <ScrollPage page={3}>
            <Element id="fourth" className="homeSection">
              <Animator animation={batch(Fade(), MoveOut(-20, -200))}>
                <p className="homePara">fourth section</p>
              </Animator>
              <Animator animation={batch(Fade(), MoveOut(0, -200))}>
                <img
                  className="egImage"
                  src={mountains}
                  alt="GTA-sanandreas-game"
                />
              </Animator>
            </Element>
          </ScrollPage>
        </ScrollContainer>
      </main>
    </React.Fragment>
  )
}
