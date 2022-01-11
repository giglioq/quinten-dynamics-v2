import * as React from "react"
import Navbar from "./Navbar"
import "../styles/mystyles.scss"
import Bio from "./bio"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="block">
        <Navbar></Navbar>
      </div>
      <body className="mt-6">
        <br />
        <br />
        <br />
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-one-fifth">
              <Sidebar />
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
        <br />
      </body>
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