import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import NotificationService from '../Services/NotificationService'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.Container}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            NotificationService.addTest();
          }}
        >
          <Text style={styles.ButtonText}>
            Send notification
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
