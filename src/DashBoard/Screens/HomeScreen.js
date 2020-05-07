import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Icon, Right, Left , Iconreverse} from 'native-base';
import { Ionicons } from "@expo/vector-icons";


function HomeScreen({ navigation }) {
  return (
    <Container style={{backgroundColor: '#e4ffcc'}}>
   <View style={{padding:5,paddingLeft: 10,paddingTop: 20 ,}}>
       <View >
       <Text style={{fontSize: 28, fontWeight: 'bold'}}>
                   Computer Science and Engineering
               </Text>
           
           <Right style={{paddingLeft: 200}}>
           <Icon
  name='home'
  type='AntDesign'
  color='tomato'
  onPress={() => console.log('hello')}
/>
</Right>
<Right style={{ paddingLeft: 280}}> 
<Icon
  name='team'
  type='AntDesign'
  color='tomato'
  onPress={() => console.log('hey')}
/>
</Right>
       </View>
       
                    <View style={{flex:1, paddingTop:50 , }}>
                        <Card style={styles.mainStyleSyllabus}  >       
                        <CardItem style={styles.cardItemStyleSyllabus} button onPress={() => navigation.navigate('Syllabus')}>                        
                            <Text style={styles.textStyleSyllabus}>Syllubus</Text>
                        </CardItem>                        
                        </Card>
                    </View>

                    <View style={{paddingLeft: 200}}>
                        <Card style={styles.mainStyleSM}  >       
                        <CardItem style={styles.cardItemStyleSM} button onPress={() =>  navigation.navigate('SMaterail')}>                        
                            <Text style={styles.textStyleSM}>Study Material</Text>
                        </CardItem>                        
                        </Card>  
                    </View>   

                    <View style={{flex:1, paddingTop: 50}}>
                    <Card style={styles.mainStyleQP}  >       
                        <CardItem style={styles.cardItemStyleQP} button onPress={() => navigation.navigate('QPaper')}>                        
                            <Text style={styles.textStyleQP}>Question Papers</Text>
                        </CardItem>                        
                    </Card>
                    </View>  

                    <View style={{flex:1, paddingTop: 3, paddingLeft: 200}}>
                    <Card style={styles.mainStyleOther}  >       
                        <CardItem style={styles.cardItemStyleOther} button onPress={() => navigation.navigate('Others')}>                        
                            <Text style={styles.textStyleOther}>Others</Text>
                        </CardItem>                        
                    </Card>
                    </View>      
                              
   </View>
   </Container>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
    //Syllabus style
    mainStyleSyllabus: {width: '40%', 
    height: 150, 
    borderRadius: 20,
    backgroundColor: 'white',
    maxWidth: '40%',

        },
    cardItemStyleSyllabus: { backgroundColor: 'orange',
    width: '100%', 
    height: '100%', 
    borderRadius: 20, 
    paddingTop: 70, 
    paddingLeft: 55,
    
    },
    textStyleSyllabus: {fontWeight: 'bold',
     fontFamily: 'sans-serif', 
     textAlignVertical: "bottom", 
     fontSize: 20
    },
    //study material styles
    mainStyleSM: {width: '85%', 
    height: 150, 
    borderRadius: 20,
    backgroundColor: 'white',
        },
    cardItemStyleSM: { backgroundColor: 'tomato',
    width: '100%', 
    height: '100%', 
    borderRadius: 20, 
    paddingTop: 70, 
    paddingLeft: 45
    },
    textStyleSM: {fontWeight: 'bold',
     fontFamily: 'sans-serif', 
     textAlignVertical: "bottom", 
     fontSize: 20,
     textAlign:"right"
    },
    //Question papers styles
    mainStyleQP: {width: '40%', 
    height: 150, 
    borderRadius: 20,
    backgroundColor: 'white',
        },
    cardItemStyleQP: { backgroundColor: 'lightblue',
    width: '100%', 
    height: '100%', 
    borderRadius: 20, 
    paddingTop: 70, 
    paddingLeft: 25
    },
    textStyleQP: {fontWeight: 'bold',
     fontFamily: 'sans-serif', 
     textAlignVertical: "bottom", 
     fontSize: 20,
     textAlign:"right"
    },
    //Others Style
    mainStyleOther: {width: '85%', 
    height: 150, 
    borderRadius: 20,
    backgroundColor: 'white',
        },
    cardItemStyleOther: { backgroundColor: '#d4d43d',
    width: '100%', 
    height: '100%', 
    borderRadius: 20, 
    paddingTop: 90, 
    paddingLeft: 60
    },
    textStyleOther: {fontWeight: 'bold',
     fontFamily: 'sans-serif', 
     textAlignVertical: "bottom", 
     fontSize: 20,
     textAlign:"right"
    }

})