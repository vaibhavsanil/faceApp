import React, { Component } from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from 'reactstrap';

class ProfileIcon extends Component {
  constructor(props) {
    super(props);
    // this.toggle = this.toggle.bind(this);
    // this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  };

  render() {
    return (
      <>
        <div className="pa-4 tc">
          <div className="d-flex justify-content-center p-5">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle
                tag="span"
                data-toggle="dropdown"
                aria-expanded={this.state.dropdownOpen}
              >
                <img
                  src="http://tachyons.io/img/logo.jpg"
                  className="br-100 h3 w3 dib"
                  alt="avatar"
                />
              </DropdownToggle>
              <DropdownMenu
                right
                className="b--transparent shadow-5"
                style={{
                  marginTop: '20px',
                  backgroundColor: 'rgba(255,255,255,0.5)',
                }}
              >
                <DropdownItem onClick={this.props.toggleModal}>
                  View Profile
                </DropdownItem>
                <DropdownItem
                  onClick={() => this.props.onRouteChange('signout')}
                >
                  Sign Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileIcon;
