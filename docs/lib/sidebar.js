import React from 'react';

class Sidebar extends React.Component {
  render() {
    return (
      <div className='col-sm-3 col-md-2 sidebar'>{this.props.children}</div>
    );
  }
}

export { Sidebar };
