import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { Container } from 'native-base';


function OthersScreen() {
    return (
      <Container style={{backgroundColor: '#e4ffcc'}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>OthersScreen</Text>
      </View>
      </Container>
    );
  }

  export default OthersScreen;