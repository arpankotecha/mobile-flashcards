import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { newQuestion } from '../actions'
import { NavigationActions } from 'react-navigation'

class NewQuestionCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: ''
    }
  }

  submit = () => {
    this.props.dispatch(newQuestion({
      deckTitle: this.props.navigation.state.params.title,
      question: this.state.question,
      answer: this.state.answer
    }))

    this.props.navigation.dispatch(NavigationActions.back())
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
        <TouchableOpacity
          onPress={this.submit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(NewQuestionCard)
