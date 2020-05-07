import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { Container, Header, Content, Icon, Accordion, Card, CardItem, Right, Left } from "native-base";


function SMaterialScreen({ navigation }) {
    return (
      <Container style={{backgroundColor: '#e4ffcc'}}>
      <View style={{padding:10}}>
       <View>
         <Card>
           <CardItem button onPress={() => navigation.navigate('Sem3SM')} button onLongPress={() => alert('Semester 3')}>
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
           <CardItem button onPress={() => navigation.navigate('Sem4SM')} button onLongPress={() => alert('Semester 4')}>
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
           <CardItem button onPress={() => navigation.navigate('Sem5SM')} button onLongPress={() => alert('Semester 5')}>
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
           <CardItem button onPress={() => navigation.navigate('Sem6SM')} button onLongPress={() => alert('Semester 6')}>
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
           <CardItem button onPress={() => navigation.navigate('Sem7SM')} button onLongPress={() => alert('Semester 7')}>
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
           <CardItem button onPress={() => navigation.navigate('Sem8SM')} button onLongPress={() => alert('Semester 8')}>
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

  export default SMaterialScreen;