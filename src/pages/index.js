import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FacebookIcon from "@material-ui/icons/Facebook"
import EmailIcon from "@material-ui/icons/Email"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="updates">
      <h2>2021 Updates</h2>
      <p>
        Cheer fittings will be held @ Trailblazer- near concessions on
        Wednesday, May 26th from 530-730...
        <br />
        Any questions, please text Allison Lee @ 864-561-6633
      </p>
      <p>Save the date, and get excited! Devildogs unite!</p>
      <p>
        The TRHS football program will be holding a one-day summer football
        clinic!
        <br />
        When: July 21, 2021
        <br />
        Ages: 7-12 years old
        <br />
        Time: 10:00-12:00
      </p>
      <p>More information to come.</p>
    </div>
    <h2>Registration Forms</h2>
    <p>2021 Football Registration is closed.</p>
    <p>
      <a
        href="https://forms.gle/yiMC8ZvmZswC5Jv39"
        target="_blank"
        rel="nofollow"
      >
        2021 Cheer Registration
      </a>
    </p>
    <h2>Mission</h2>
    <p>
      The purpose of the Travelers Rest Youth Association is to provide
      organized athletic instructional opportunities and the ideals of good
      sportsmanship, competitiveness, honesty, loyalty, and instruction of the
      basic fundamentals of sports for the youth of our community.
    </p>
    <h2>Contact</h2>
    <p>
      <EmailIcon style={{ paddingTop: "10px" }} />
      <a target="_blank" rel="noreferrer" href="mailto://info.tryasc@gmail.com">
        info.tryasc@gmail.com
      </a>
      <br />
      <FacebookIcon style={{ paddingTop: "10px" }} />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/groups/345642595590502/"
      >
        Travelers Rest Youth Association Page
      </a>
    </p>
  </Layout>
)

export default IndexPage
