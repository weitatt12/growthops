import React from 'react';
import './App.css';
import Forms from './Forms.js';

// function handleSubmit(e) {
//   console.log("hello")
// }

function App() {
  return (
    <div className="App">
      {/* home */}
      <div className="home">
        <img className="home-img img-fluid" src='/images/home.png' srcSet='/images/home@2x.png, /images/home@3x.png' alt='home' />
      </div>

      {/* landing */}
      <div className="landing-page">
        <div>
          <img className="navbar-img img-fluid" src='/images/header.png' srcSet='/images/header@2x.png, /images/header@3x.png' alt="nav" />
        </div>

        <div>
          <div className='flex-area'>
            <div className='lines'>
              <img className="line img-fluid" src='images/line.png' srcSet='images/line@2x.png, /images/line@3x.png' alt='line' />
              <img className="line img-fluid" src='images/line.png' srcSet='images/line@2x.png, /images/line@3x.png' alt='line' />
            </div>
            <img className="left-img img img-fluid" src='/images/right.png' alt='right' />
            <p className="letter">WHAT WE <span className="special-letter">OFFER</span></p>
            <img className="right-img img img-fluid" src='/images/right.png' alt='right' />
            <div className="lines">
              <img className="line img-fluid" src='images/line.png' srcSet='images/line@2x.png, /images/line@3x.png' alt='line' />
              <img className="line img-fluid" src='images/line.png' srcSet='images/line@2x.png, /images/line@3x.png' alt='line' />
            </div>
          </div>
          <p className="description">We Offer our customers the best services & solutions. This is our main services list.</p>
        </div>

        <div className="work-area">
          <div className="work-tag col-md-4 col-12">
            <img className="img" src='/images/icon_3.png' srcSet="/images/icon_3@2x.png, /images/icon_3@3x.png" alt="" />
            <p className="head">responsive & multipurpose</p>
            <p className="body">Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.</p>
            <button className="read">read more</button>
          </div>

          <div className="work-tag col-md-4 col-12">
            <img className="img" src='/images/icon.png' srcSet="/images/icon@2x.png, /images/icon@3x.png" />
            <p className="head">easy customization</p>
            <p className="body">Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.</p>
            <button className="read">read more</button>
          </div>

          <div className="work-tag col-md-4 col-12">
          <img className="img" src='/images/icon_2.png' srcSet="/images/icon_2@2x.png, /images/icon_2@3x.png" alt="" />
            <p className="head">awesome friendly support</p>
            <p className="body">Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.</p>
            <button className="read">read more</button>
          </div>
        </div>
      </div>

      {/* skills */}
      <div className="skills">
        <div className="skill-title">
          <img className="left-img img img-fluid" src='/images/right.png' alt='right' />
          <p className="powerful">OUR POWERFUL <span className="powerful-letter">SKILLS</span></p>
          <img className="right-img img img-fluid" src='/images/right.png' alt='right' />
        </div>

        <p className="skill-desc">
          We’re good and experienced at different things and areas and we promise about qulity of our works
        </p>

        <div className="div-shapes">
          <div className="individual">
            <img className="shapes img-fluid" src="/images/shapes_3.png" srcSet="/images/shapes_3@2x.png, /images/shapes_3@3x.png" alt="75" />
            {/* <p className="words">75%</p> */}
            <p className="desc">web design</p>
          </div>
          <div className="individual">
            <img className="shapes img-fluid" src="/images/shapes_6.png" srcSet="/images/shapes_6@2x.png, /images/shapes_6@3x.png" alt="92" />
            {/* <p className="words">92%</p> */}
            <p className="desc">web development</p>
          </div>
          <div className="individual">
            <img className="shapes img-fluid" src="/images/shapes_2.png" srcSet="/images/shapes_2@2x.png, /images/shapes_2@3x.png" alt="68" />
            {/* <p className="words">68%</p> */}
            <p className="desc">speed optimization</p>
          </div>
          <div className="individual">
            <img className="shapes img-fluid" src="/images/shapes_5.png" srcSet="/images/shapes_5@2x.png, /images/shapes_5@3x.png" alt="100" />
            {/* <p className="words">100%</p> */}
            <p className="desc">customer support</p>
          </div>
          <div className="individual">
            <img className="shapes img-fluid" src="/images/shapes.png" srcSet="/images/shapes@2x.png, /images/shapes@3x.png" alt="83" />
            {/* <p className="words">83%</p> */}
            <p className="desc">marketing</p>
          </div>
          <div className="individual">
            <img className="shapes img-fluid" src="/images/shapes_4.png" srcSet="/images/shapes_4@2x.png, /images/shapes_4@3x.png" alt="50" />
            {/* <p className="words">50%</p> */}
            <p className="desc">advertisement</p>
          </div>
        </div>
      </div>

      {/* sub skills */}
      <div className="sub-skills">
          <div style={{display:'flex', flexWrap:'wrap'}}>
            <div className="skill-tag col-md-4 col-12">
              <div style={{width:100, height:40, paddingLeft:20}}>
                <img className="skill-img img-fluid" src="/images/icon_9.png" srcSet="/images/icon_9@2x.png, /images/icon_9@3x.png" alt="" />
              </div>
              <div>
                <p className="skills-title">responsive & multipurpose</p>
                <p className="skills-desc">Desktops, Tablets & Phones</p>
                <p className="skill-sub-desc">Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.</p>
              </div>
            </div>

            <div className="skill-tag col-md-4 col-12">
              <div style={{width:100, height:40, paddingLeft:20}}>
              <img className="skill-img img-fluid" src="/images/icon_8.png" srcSet="/images/icon_8@2x.png, /images/icon_8@3x.png" alt="" />
              </div>
              <div>
                <p className="skills-title">easy customization</p>
                <p className="skills-desc">One Click Demo Content Installation</p>
                <p className="skill-sub-desc">Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.</p>
              </div>
            </div>
            
            <div className="skill-tag col-md-4 col-12">
              <div style={{width:100, height:40, paddingLeft:20}}>
              <img className="skill-img img-fluid" src="/images/icon_7.png" srcSet="/images/icon_7@2x.png, /images/icon_7@3x.png" alt="" />
              </div>
              <div>
                <p className="skills-title">unlimited features</p>
                <p className="skills-desc">Shortcodes, Typography & Different Layouts</p>
                <p className="skill-sub-desc">Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.</p>
              </div>
            </div>

            <div className="skill-tag col-md-4 col-12">
              <div style={{width:100, height:40, paddingLeft:20}}>
              <img className="skill-img img-fluid" src="/images/icon_6.png" srcSet="/images/icon_6@2x.png, /images/icon_6@3x.png" alt="" />
              </div>
              <div>
                <p className="skills-title">clean & modular coding</p>
                <p className="skills-desc">100% Clean, Valid & Well-Commented Coding</p>
                <p className="skill-sub-desc">Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.</p>
              </div>
            </div>

            <div className="skill-tag col-md-4 col-12">
              <div style={{width:100, height:40, paddingLeft:20}}>
              <img className="skill-img img-fluid" src="/images/icon_5.png" srcSet="/images/icon_5@2x.png, /images/icon_5@3x.png" alt="" />
              </div>
              <div>
                <p className="skills-title">the best e-commerce solutions</p>
                <p className="skills-desc">WooCommerce Fully Integration</p>
                <p className="skill-sub-desc">Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.</p>
              </div>
            </div>

            <div className="skill-tag col-md-4 col-12">
              <div style={{width:100, height:40, paddingLeft:20}}>
              <img className="skill-img img-fluid" src="/images/icon_4.png" srcSet="/images/icon_4@2x.png, /images/icon_4@3x.png" alt="" />
              </div>
              <div>
                <p className="skills-title">awesome friendly support</p>
                <p className="skills-desc">Free Lifetime Support & Updates</p>
                <p className="skill-sub-desc">Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.</p>
              </div>
            </div>

          </div>
      </div>


      {/* work */}
      <div className="works-area">
          <div className="work">
            <img className="works img-fluid" src='/images/item-12.png' srcSet='/images/item-12@2x.png, /images/item-12@3x.png' alt='works' />
            <button className='all-works'>View All Works</button>
          </div>
      </div>


      {/* form */}
      <Forms />

      {/* ceo */}
      <div className="ceo">
        <div className="test">
          <div className="ceo-div">
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <p className="ceo-name">alexis simpson <span className="ceo-title">- CEO & Developer</span></p>
            </div>
          </div>
        </div>
        <p className="text">
          " Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo consequat magna, id molestie ipsum volutpat quis."
        </p>
      </div>

      {/* footer */}
      <div className="footer">
        <p className="footer-text">
          Copyright © 2017 APD Digital Services Sdn Bhd, All Rights Reserved.
        </p>
      </div>
      
    </div>
  );
}

export default App;
