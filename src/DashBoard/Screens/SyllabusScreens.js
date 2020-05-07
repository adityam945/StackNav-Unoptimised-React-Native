import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Container, Header, Content, Icon, Accordion, Card, CardItem, Right, Left } from "native-base";



function SyllabusScreen({ navigation }) {
  return (
    <Container style={{backgroundColor: '#e4ffcc'}}>
    <View style={{ flex: 1, padding: 10 }}>

      <View>
      <Card>
        <CardItem button onPress={() => navigation.navigate('Sem3')} button onLongPress={() => alert('Semester 8')}>
          <Left>
          <Text>Semester 3</Text>
          </Left>
          <Right>
          <Icon name="arrow-forward" />
          </Right>
        </CardItem>
      </Card>
    </View>

    <View>
      <Card>
        <CardItem button onPress={() => navigation.navigate('Sem4')} button onLongPress={() => alert('Semester 8')}>
          <Left>
          <Text>Semester 4</Text>
          </Left>
          <Right>
          <Icon name="arrow-forward" />
          </Right>
        </CardItem>
      </Card>
    </View>

    <View>
      <Card>
        <CardItem button onPress={() => navigation.navigate('Sem5')} button onLongPress={() => alert('Semester 8')}>
          <Left>
          <Text>Semester 5</Text>
          </Left>
          <Right>
          <Icon name="arrow-forward" />
          </Right>
        </CardItem>
      </Card>
    </View>

    <View>
      <Card>
        <CardItem button onPress={() => navigation.navigate('Sem6')} button onLongPress={() => alert('Semester 8')}>
          <Left>
          <Text>Semester 6</Text>
          </Left>
          <Right>
          <Icon name="arrow-forward" />
          </Right>
        </CardItem>
      </Card>
    </View>

    <View>
      <Card>
        <CardItem button onPress={() => navigation.navigate('Sem7')} button onLongPress={() => alert('Semester 8')}>
          <Left>
          <Text>Semester 7</Text>
          </Left>
          <Right>
          <Icon name="arrow-forward" />
          </Right>
        </CardItem>
      </Card>
    </View>

    <View>
      <Card>
        <CardItem button onPress={() => navigation.navigate('Sem8')} button onLongPress={() => alert('Semester 8')}>
          <Left>
          <Text>Semester 8</Text>
          </Left>
          <Right>
          <Icon name="arrow-forward" />
          </Right>
        </CardItem>
      </Card>
    </View>

    </View>
    </Container>
  );
}







export default SyllabusScreen;