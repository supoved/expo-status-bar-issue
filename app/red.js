import { Link, Stack } from 'expo-router';
import {Text, StyleSheet} from 'react-native';
import { Page } from '../components/page';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
    return <Page><Stack.Screen options={{
        headerEnabled:false,
        navigationBarColor: "red",
        // statusBarColor: "red",
        // statusBarStyle: "white"
      }} />
      <StatusBar style="light" backgroundColor='red' />
    <Link href="/white">White</Link>
    <Link href="/red">--Red--</Link>
    <Link href="/blue">Blue</Link>
    </Page>;
}