import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

// IT IS IMPORTANT TO SET WIDTH ON SIDE DRAWER WITH DIMENSIONS!!
class SideDrawer extends Component {
  render() {
    return (
      <View style={{ width: Dimensions.get("window").width * 0.8 }}>
        {/* <View > */}
        <Text>SideDrawer</Text>
      </View>
    );
  }
}

export default SideDrawer;