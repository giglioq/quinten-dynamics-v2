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
              <div className="sidebar block">
                <Sidebar />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
              
            </div>
            <div className="column is-4-fifths">
            <hr className="has-background-link mr-3 mb-1 mt-1"></hr>
            <hr className="has-background-warning ml-3 mt-0"></hr>
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