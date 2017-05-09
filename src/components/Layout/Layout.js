import React from 'react';
import PropTypes from 'prop-types';
import {
  FontIcon,
  MenuItem,
  Avatar,
  IconButton,
  AppBar,
  Drawer
} from 'material-ui';
import { white, indigo500 } from 'material-ui/styles/colors';

const titleIcon = (
  <FontIcon color={white} className='material-icons'>person_outline</FontIcon>
);

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lnOpen: false
    };
  }

  handleToggleLeftNav = () => this.setState({ lnOpen: !this.state.lnOpen })

  renderRightIcons() {
    const { logout } = this.props;
    return (
      <div>
        <IconButton>
          <FontIcon color={white} className='material-icons'>settings</FontIcon>
        </IconButton>
        <IconButton onClick={logout}>
          <FontIcon color={white} className='material-icons'>power_settings_new</FontIcon>
        </IconButton>
      </div>
    );
  }

  renderNavMenu() {
    const { logout } = this.props;
    return [
      <MenuItem key="settings" onClick={() => { }} leftIcon={<FontIcon color={indigo500} className='material-icons'>settings</FontIcon>}>Settings</MenuItem>,
      <MenuItem key="logout" onClick={logout} leftIcon={<FontIcon color={indigo500} className='material-icons'>power_settings_new</FontIcon>}>Logout</MenuItem>
    ];
  }

  render() {
    const { lnOpen } = this.state;
    const { children } = this.props;
    return (
      <div>
        <AppBar
          title={<Avatar icon={titleIcon} />}
          zDepth={0}
          onLeftIconButtonTouchTap={this.handleToggleLeftNav}
          iconElementRight={this.renderRightIcons()} />
        <Drawer docked={false} width={300} open={lnOpen}>
          <AppBar
            title="Menu"
            zDepth={0}
            iconElementLeft={<IconButton iconClassName="material-icons">arrow_back</IconButton>}
            onLeftIconButtonTouchTap={this.handleToggleLeftNav}
          />
          {this.renderNavMenu()}
        </Drawer>
        <div id="Layout" className="container Layout">
          {children}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  logout: PropTypes.func
};

export default Layout;
