import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
   const { about } = useContext(PortfolioContext);
   const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

   return (
      <section id="about">
         <Container>
            <Title title="About Me" />

            <Row className="about-wrapper">
               <Col md={6} sm={12}>
                  <div className="about-wrapper__image">
                     <AboutImg alt="profile picture" filename={img} />
                  </div>
               </Col>

               <Col md={6} sm={12}>
                  <div className="about-wrapper__info">
                     <p className="about-wrapper__info-text">
                        {paragraphOne ||
                           'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                     </p>
                     <p className="about-wrapper__info-text">
                        {paragraphTwo ||
                           'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                     </p>
                     <p className="about-wrapper__info-text">
                        {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                     </p>

                     {resume && (
                        <span className="d-flex mt-3">
                           <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cta-btn cta-btn--resume"
                              href={resume}
                           >
                              Resume
                           </a>
                        </span>
                     )}
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   );
};

export default About;
