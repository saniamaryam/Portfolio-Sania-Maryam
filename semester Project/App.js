import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (email && password) {
      navigation.replace('MainApp');
    } else {
      Alert.alert('Login Failed', 'Please enter both email and password.');
    }
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.title}>HealthMonitor+</Text>
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" onChangeText={setPassword} secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const categories = [
  { name: 'Cardiology', icon: '❤️', details: 'Heart-related diseases like hypertension, arrhythmia, etc.' },
  { name: 'Neurology', icon: '🧠', details: 'Brain and nerve issues like epilepsy, stroke, etc.' },
  { name: 'Orthopedics', icon: '🦴', details: 'Bone problems like arthritis, fractures, etc.' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.page}>
      <Text style={styles.header}>Welcome to HealthMonitor+</Text>
      <Image source={{ uri: 'https://img.freepik.com/free-vector/healthcare-technology-illustration_23-2148480571.jpg' }} style={styles.banner} />
      <Text style={styles.subTitle}>Categories:</Text>
      {categories.map((cat, idx) => (
        <TouchableOpacity key={idx} onPress={() => navigation.navigate('Disease', { category: cat })} style={styles.card}>
          <Text>{cat.icon} {cat.name}</Text>
        </TouchableOpacity>
      ))}
      <Text>HealthMonitor+ app is to provide a convenient and accessible platform for patients to monitor their health remotely. It aims to simplify healthcare management by allowing users to:

Book medical appointments easily

Access information about diseases and symptoms by category

Make secure payments for healthcare services

Contact support when needed</Text>
<Image source={{ uri: 'data:image/jpeg;base64,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' }} style={styles.banner} />
    </ScrollView>
  );
};

const DiseaseScreen = ({ route, navigation }) => {
  const { category } = route.params;
  return (
    <View style={styles.page}>
      <Text style={styles.header}>{category.icon} {category.name}</Text>
      <Text style={styles.cardText}>{category.details}</Text>
      <Text style={styles.cardText}>Symptoms: Chest pain, fatigue, dizziness</Text>
      <Text style={styles.cardText}>Cure: Regular checkups, medication, surgery if needed</Text>
      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jScF4uWNMS8Ab5CD4jzzi1SIYw3Io4idnA&s' }} style={styles.banner} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const AppointmentsScreen = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const book = () => {
  if (name && date) {
    Alert.alert('Appointment Booked', `Thank you ${name}, your appointment on ${date} is confirmed.`);
    setName('');
    setDate('');
  } else {
    Alert.alert('Missing Information', 'Please enter both name and date.');
  }
};


  return (
    <View style={styles.page}>
      <Text style={styles.header}>Book Appointment</Text>
      <TextInput style={styles.input} placeholder="Full Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Preferred Date (e.g., 2025-05-20)" value={date} onChangeText={setDate} />
      <TouchableOpacity style={styles.button} onPress={book}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const PaymentScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [method, setMethod] = useState('Credit Card');

  const confirmPayment = () => {
  if (cardNumber.length >= 4 && method) {
    Alert.alert('Payment Confirmed', `Payment by ${method} ending in ${cardNumber.slice(-4)} confirmed.`);
    setCardNumber('');
    setMethod('Credit Card');
  } else {
    Alert.alert('Missing Information', 'Please enter card number and payment method.');
  }
};


  return (
    <View style={styles.page}>
      <Text style={styles.header}>Payment</Text>
      <TextInput style={styles.input} placeholder="Card Number" keyboardType="numeric" value={cardNumber} onChangeText={setCardNumber} />
      <TextInput style={styles.input} placeholder="Payment Method (e.g., Credit Card, PayPal)" value={method} onChangeText={setMethod} />
      <TouchableOpacity style={styles.button} onPress={confirmPayment}>
        <Text style={styles.buttonText}>Confirm Payment</Text>
      </TouchableOpacity>
    </View>
  );
};


const ContactScreen = ({ navigation }) => {
  const logout = () => navigation.replace('Login');
  return (
    <View style={styles.page}>
      <Text style={styles.header}>Contact Us</Text>
      <Text>Email: support@healthmonitor.com</Text>
      <Text>Phone: +1 800 123 4567</Text>
      <Text>Address: 123 Health St, Wellness City</Text>
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const MainTabs = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        const icons = {
          Home: 'home',
          Appointments: 'calendar',
          Payment: 'card',
          Contact: 'mail',
        };
        return <Ionicons name={icons[route.name]} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#007BFF',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Appointments" component={AppointmentsScreen} />
      <Tab.Screen name="Payment" component={PaymentScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainApp" component={MainTabs} />
        <Stack.Screen name="Disease" component={DiseaseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loginContainer: { flex: 1, justifyContent: 'center', backgroundColor: '#E6F0FF', padding: 20 },
  page: { flex: 1, backgroundColor: '#F8FAFC', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 30, color: '#004085' },
  input: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 15, borderColor: '#ccc', borderWidth: 1 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 25, marginTop: 35, color: '#007BFF' },
  banner: { width: '100%', height: 160, borderRadius: 10, marginBottom: 35 },
  subTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  card: { padding: 12, backgroundColor: '#fff', borderRadius: 8, marginBottom: 20, shadowColor: '#999', shadowOpacity: 0.2, shadowRadius: 3, elevation: 3 },
  cardText: { fontSize: 16, marginBottom: 10 },
  button: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 15 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default App;