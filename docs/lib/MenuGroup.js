import React from 'react';

class MenuGroup extends React.Component {
  render() {
    return <ul className='nav nav-sidebar'>{this.props.children}</ul>;
  }
}

export { MenuGroup };
