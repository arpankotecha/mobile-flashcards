import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'

export default class NewDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text>
          What is the title of your new deck?
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={title => this.setState({ title })}
          placeholder='Deck Title'
        />
        <TouchableOpacity>
          <Text>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
