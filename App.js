import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
/*import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;*/

import * as React from 'react';
import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // To import the AntDesign icon library
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




function HomeScreen({ navigation }) {
  const [searchText, setSearchText] = React.useState("");
  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search for:', searchText);
  };
  
  

  return (
    <View style={{ flex: 1, alignItems: 'center', /*justifyContent: 'center'*/ paddingTop: 20,}}>

      <Text>Welcome!</Text>
      
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', borderRadius: 20, overflow: 'hidden', backgroundColor: '#ecf0f1' }}>
        {/* Magnifying glass icon */}
        <AntDesign name="search1" size={24} color="#3498db" style={{ padding: 10 }} />

          {/* Search Bar */}
        <TextInput
          style={{
            height: 50,
            flex: 1,
            paddingHorizontal: 10,
            borderRadius: 7,
          }}
          placeholder="Search..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />

        {/* Search Button */}
        <TouchableOpacity
          style={{
            backgroundColor: '#3498db',
            padding: 10,
            borderRadius: 10, 
          }}
          onPress={handleSearch}
        >
          <Text style={{ color: 'white' }}>Search</Text>
        </TouchableOpacity>
      </View>
      
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}


function JobsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Jobs Screen</Text>
      <Button
        title="Go to Job Details"
        onPress={() => navigation.navigate('JobDetails')}
      />
    </View>
  );
}

function JobDetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('JobDetails')}
      />
    </View>
  );
}


function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      alert('Screen was focused');
      // Do something when the screen is focused
      return () => {
        alert('Screen was unfocused');
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}>
        
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home.." component={HomeScreen} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
          )}
          
        </Tab.Screen>

        <Tab.Screen name="Jobs" options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="pluscircle" size={size} color={color} />
            ),
          }}>
            
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Jobs.."
                component={JobsScreen}
              />
              <SettingsStack.Screen name="Profile" component={ProfileScreen} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen name="Settings"  options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="setting" size={size} color={color} />
            ),
          }}>
            
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Settings."
                component={SettingsScreen}
              />
              <SettingsStack.Screen name="Profile" component={ProfileScreen} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>

       
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}




