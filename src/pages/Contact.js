import React from 'react'
import { links } from '../portfolio'
import { SocialIcon } from 'react-social-icons'
import Fade from 'react-reveal/Fade'
import './contact.css'
import GitHubCalendar from 'react-github-calendar/build'

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="contact-title2">My Recent Contributions</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <div>
          <img
            width="100%"
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=itsvickyanand&show_icons=true&locale=en"
            alt="itsvickyanand"
          />
        </div>

        <div>
          <img
            width="100%"
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=itsvickyanand&"
            alt="itsvickyanand"
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItem: 'center',
        }}
      >
        <GitHubCalendar year="2022" username="itsvickyanand" />
      </div>
      <h1 className="contact-title">
        <Fade bottom cascade duration={2500}>
          Reach Out To Me!
        </Fade>
      </h1>
      <div className="icon">
        {links.map((link) => (
          <div className="icons">
            {' '}
            <SocialIcon url={link} target="_blank" />{' '}
          </div>
        ))}
      </div>
      <center>
        <hr className="style-f" />
      </center>
      <p className="copyright">
        Socializing and Connecting is really important, which leads to great
        ideas and major breakthroughs. <br />
        You can contact me at the places mentioned above or You can call me at
        +91 9739941546
      </p>
    </div>
  )
}

export default Contact
