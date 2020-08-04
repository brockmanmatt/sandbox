import React from 'react';
import { View } from 'react-native';

const Box = ({boxState}) => {
  console.log("bacon", boxState);
    return (
      <View>
        {boxState}
      </View>
    )
}

export default Box

