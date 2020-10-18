import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './index.css';

const Header = ({ siteTitle }) => (
  <header className={"header"}>
    <div className={"headerInner"}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header