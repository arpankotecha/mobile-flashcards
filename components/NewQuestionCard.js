import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'

export default class NewQuestionCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: ''
    }
  }

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={question => this.setState({ question })}
          placeholder='Question'
        />
        <TextInput
          style={{height:40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={answer => this.setState({ answer })}
          placeholder='Answer'
        />
        <TouchableOpacity>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
