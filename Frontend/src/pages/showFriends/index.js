import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import api from '../../services/api';
import { 
    Icon,
    TextInput,
    BottomHeader, 
    ContainerInput, 
    Container, 
    SelectedFriends,
    FriendsList, 
    UserImage,
    UserContainer,
    OkButton,
    FriendsContainer
} from './styles';
import Header from '../../components/Header';

import Person from '../../assets/person.png'
import Person2 from '../../assets/person2.png'
import Person3 from '../../assets/person3.png'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ShowFriends = () => {
    const navigation = useNavigation();
    const [selectedFriends, setSelectedFriends] = useState([]);
    
    useEffect(() => {
      console.log(selectedFriends.length)
    },[])
    const friends = [
    {
      name: 'Caio',
      avatar: Person3
    } ,
    {
      name: 'Gabriel',
      avatar: Person2
    } ,
    {
      name: 'Natalia',
      avatar: Person
    }
  ]


    const handleAddFriends = (friend)=>{
       setSelectedFriends([...selectedFriends, friend]);
    }
    
    return(
        <Container>
             <Header>Dividir Conta</Header>
            <BottomHeader >
                <ContainerInput >
                    <TextInput placeholder="Informe o nome e-mail ou telefone" >
                    </TextInput>
                    <Icon name="search1" size={20} color="#2D3277" />
                </ContainerInput>
            </BottomHeader>

           {
             selectedFriends.length > 0 && (
              selectedFriends.map(selectedFriend => {
                return (
                  <SelectedFriends key={selectedFriend.name}>
                  <UserContainer>
                      <UserImage source={selectedFriend.avatar}/>
                      <Text>{selectedFriend.name}</Text>
                  </UserContainer>
                 </SelectedFriends>
                )
              })
             )
           }
            <FriendsList>
              {
                friends.map(friend => {
                  return (
                    <TouchableOpacity key={friend.name}  onPress={() => handleAddFriends(friend)}>
                      <FriendsContainer >
                          <UserImage source={friend.avatar}/>
                       <Text>{friend.name}</Text>
                      </FriendsContainer>
                   </TouchableOpacity>
                  )
                })
              }
            </FriendsList>
            <OkButton onPress={() => navigation.navigate('SplitBill')} >
                <Feather name="arrow-right" size={34} color="#fff" />
            </OkButton>
        </Container>
    )
}



export default ShowFriends;