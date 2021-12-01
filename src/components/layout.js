import * as React from "react"
import Navbar from "./Navbar"
import "../styles/mystyles.scss"
import Bio from "./bio"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="container is-fluid">
        <div className="columns">
          <div className="column is-one-fifth">
            <br />
            <h1>Side Bar</h1>
            <p>Sidebar-Bio is small and collapses on scroll</p>
          </div>
          <div className="column is-4-fifths">
            <div>{children}</div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer className="footer">
        <div class="content has-text-centered">
          <Bio />
          <p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout