export const USER_STATE_CHANGE = 'USER_STATE_CHANGE';
export const USER_POSTS_STATE_CHANGE = 'USER_POSTS_STATE_CHANGE';
export const USER_FOLLOWING_STATE_CHANGE = 'USER_FOLLOWING_STATE_CHANGE';
export const USER_CHATS_STATE_CHANGE = 'USER_CHATS_STATE_CHANGE';

export const USERS_POSTS_STATE_CHANGE = 'USERS_POSTS_STATE_CHANGE';
export const USERS_LIKES_STATE_CHANGE = 'USERS_LIKES_STATE_CHANGE';
export const USERS_DATA_STATE_CHANGE = 'USERS_DATA_STATE_CHANGE';

export const USER_FRIENDS_REQUESTS_SENT_STATE_CHANGE =
  'USER_FRIDENDS_REQUESTS_SENT_STATE_CHANGE';
export const USER_FRIENDS_REQUESTS_RECEIVED_STATE_CHANGE =
  'USER_FRIDENDS_REQUESTS_RECEIVED_STATE_CHANGE';
export const USER_FRIENDS_STATE_CHANGE = 'USER_FRIDENDS_STATE_CHANGE';

export const USER_CLEAR_FRIENDS = 'USER_CLEAR_FRIENDS';

export const CLEAR_DATA = 'CLEAR_DATA';
// import firebase from 'firebase';
// import React, { useState } from 'react';
// import { Button, Text, TextInput, View } from 'react-native';
// import { container, form } from '../styles';

// export default function Login(props) {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const onSignUp = () => {
//         firebase.auth().signInWithEmailAndPassword(email, password)
//     }

//     return (
//         <View style={container.center}>
//             <View style={container.formCenter}>
//                 <TextInput
//                     style={form.textInput}
//                     placeholder="email"
//                     onChangeText={(email) => setEmail(email)}
//                 />
//                 <TextInput
//                     style={form.textInput}
//                     placeholder="password"
//                     secureTextEntry={true}
//                     onChangeText={(password) => setPassword(password)}
//                 />

//                 <Button
//                     style={form.button}
//                     onPress={() => onSignUp()}
//                     title="Sign In"
//                 />
//             </View>

//             <View style={form.bottomButton} >
//                 <Text
//                     title="Register"
//                     onPress={() => props.navigation.navigate("Register")} >
//                     Don't have an account? SignUp.
//                 </Text>
//             </View>
//         </View>
//     )
// }
