import React from 'react';
import {  TouchableOpacity, ScrollView, Touchable ,StyleSheet} from 'react-native'
import {Box, Image, Text, View,NativeBaseProvider, Center, Heading, VStack,Input, Button, Pressable} from "native-base";
//import { View, Text, Image, StyleSheet, Button, Box } from 'react-native';
import Colors from "../components/color";
import {FontAwesome, Ionicons, MaterialIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {
    const navigation = useNavigation();
        return (
            <NativeBaseProvider>
           <Box flex={1} bg={Colors.black}>
            <Image
            flex={1}
            alt="Logo"
            resizeMode='cover'
            size="lg"
            w="full"
            source={require("../ressources/ess3.png")}
            />
           
           <Box 
            w="full"
            h="full" 
            position="absolute" 
            top="0" 
            px="6" 
            justifyContent="center">
           <Heading>SIGN UP</Heading>
           <VStack space={5} pt="6">
            {/*USER*/}
            <Input 
           InputLeftElement={
            <FontAwesome name="user" size={20} color={Colors.blueu}/>
           }
           variant="underlined"
           placeholder="username" 
           w="70%" 
           pl={2}
           color={Colors.clinot} 
           borderBottomColor={Colors.blueu}
           />
            {/*EMAIL*/}
           <Input 
           InputLeftElement={
            <MaterialIcons name="email" size={20} color={Colors.blueu}/>
           }
           variant="underlined"
           placeholder="user@gmail.com" 
           w="70%" 
           pl={2}
           color={Colors.clinot} 
           borderBottomColor={Colors.blueu}
           />
            {/*EMAIL*/}
            <Input 
           InputLeftElement={
            <MaterialIcons name="phone" size={20} color={Colors.blueu}/>
           }
           variant="underlined"
           placeholder="Enter your phone number" 
           w="70%" 
           pl={2}
           color={Colors.clinot} 
           borderBottomColor={Colors.blueu}
           />
           {/*PASSWORD*/}
           <Input 
           InputLeftElement={
            <Ionicons name="eye" size={24} color={Colors.blueu}/>
           }
           variant="underlined"
           placeholder="*********" 
           w="70%" 
           type="password"
           pl={2}
           color={Colors.clinot} 
           borderBottomColor={Colors.blueu}
           />
           </VStack>
           <Button 
           _pressed={{
            bg: Colors.clinot,
           }}
           my={30} 
           w="40%" 
           rounded={50} 
           bg={Colors.blueu}>
           OK
           </Button>
           {/*<Pressable mt={4}>
            <Text color={Colors.deepestGray}>LOGIN</Text>
        </Pressable>*/}
           <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
           <Text color={Colors.clinot} underline>LOGIN</Text>
          </TouchableOpacity>
           </Box>
           </Box>
           </NativeBaseProvider>
        );
    };
  

 