import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {Icon} from 'react-native-elements';

export default class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Icon
                        name='user'
                        type='font-awesome'
                        color='#379392'
                        size= {100}
                        onPress={() => this.props.navigation.navigate('Profile')}
                    />
                    <Text style={styles.title}>
                        Perfil
                    </Text>
                </View>
                <View style={styles.card}>
                    <Icon
                        name='magnet'
                        type='font-awesome'
                        color='#379392'
                        size= {100}
                        onPress={() => this.props.navigation.navigate('Tools')}
                    />
                    <Text style={styles.title}>
                        Equipamentos
                    </Text>
                </View>
                <View style={styles.card}>
                    <Icon
                        name='database'
                        type='font-awesome'
                        color='#379392'
                        size= {100}
                        onPress={() => this.props.navigation.navigate('showData')}
                    />
                    <Text style={styles.title}>
                        Mostrar
                    </Text>
                </View>
                <View style={styles.card}>
                    <Icon
                        name='database'
                        type='font-awesome'
                        color='#379392'
                        size= {100}
                        onPress={() => this.props.navigation.navigate('addData')}
                    />
                    <Text style={styles.title}>
                        Adicionar
                    </Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    title:{
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    card:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})