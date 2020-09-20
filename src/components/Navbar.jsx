import React from "react";
import { connect } from "react-redux";
import {onClickHamburgerMenu, onClickMenuClose} from '../redux/actions';

class Navbar extends React.Component{
  
  updateDimensions = () => {
    this.setState({ width: window.innerWidth});
    if(this.state.width > 992){
      this.props.onClickMenuClose()
    }
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top sticky-top navbar-dark">
        <div className="container">
        <div className={this.props.hamburgerMenuClass}>
          <ul>
            <li>ELO bust services</li>
            <li>Buy lolaccount</li>
            <li>Valorant Boosting </li>
            <li>TFT Boosting</li>
            <li>Coaching</li>
            <li>Boosters</li>
            <li>Blog</li>
          </ul>
          <span className="close" onClick={()=>{this.props.onClickMenuClose()}}>X</span>
        </div>
          <a className="navbar-brand" href="#">
            <span className="logo hvr-pulse">
              <img
                src="https://www.boostroyal.com/assets/images/new/logo-icon.png"
                alt=""
              />
            </span>
            <span className="hvr-grow">
              <img
                src="https://www.boostroyal.com/assets/images/new/logo-text.png"
                alt=""
              />
            </span>
          </a>
          <button
            onClick={() => {
              this.props.onClickHamburgerMenu();
            }}
            className="navbar-toggler"
            type="button"
            // data-toggle="collapse" //  commented out for disabling bootstrap js-code
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active hvr-underline-reveal">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item hvr-underline-reveal">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item hvr-underline-reveal dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item hvr-underline-reveal">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hamburgerMenuClass: state.hamburgerMenu.classMenu,
  }
}

export default connect(mapStateToProps, {onClickHamburgerMenu, onClickMenuClose})(Navbar);

