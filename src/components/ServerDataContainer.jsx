import React, { useState } from 'react';
import { connect } from 'react-redux';
import ServerData from './ServerData';

class ServerDataContainer extends React.Component {
  render(){
      return <ServerData serverData={this.props.serverData} />
  }
}

const mapStateToProps = (state) => {
  return {
    serverData: state.putData.data
  }
  
}

export default connect(mapStateToProps, null)(ServerDataContainer);