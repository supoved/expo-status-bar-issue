import {Text, StyleSheet} from 'react-native';
import { Link, Stack } from 'expo-router';
import { Page } from '../components/page';
import { StatusBar } from 'expo-status-bar';

export default function Index() {

    return <Page>
    <Stack.Screen options={{
    headerEnabled:false,
    // works
    // navigationBarColor: "blue",
    // statusBarColor: "blue",
    }} />

    {/* not working on android */}
    <StatusBar style="light" backgroundColor='blue' />
    <Link href="/white">White</Link>
    <Link href="/red">Red</Link>
    <Link href="/blue">--Blue--</Link>
    </Page>;
}