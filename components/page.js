import {View, StyleSheet} from 'react-native';

export const Page = (props) => {
    return <View style={styles.layout}>
        {props.children}
        </View>
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});