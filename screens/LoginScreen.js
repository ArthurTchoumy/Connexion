import React from 'react';
import {  TouchableOpacity, ScrollView, Touchable ,StyleSheet} from 'react-native'
import {Box, Image, Text, View,NativeBaseProvider, Center, Heading, VStack,Input, Button, Pressable} from "native-base";
import Colors from "../components/color";
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
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
           <Heading>LOGIN</Heading>
           <VStack space={5} pt="6">
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
            <Text color={Colors.deepestGray}>SIGN UP</Text>
        </Pressable>*/}
           <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
           <Text color={Colors.clinot} underline>SIGN UP</Text>
          </TouchableOpacity>
           </Box>
           </Box>
           </NativeBaseProvider>
        );
    };
  

 