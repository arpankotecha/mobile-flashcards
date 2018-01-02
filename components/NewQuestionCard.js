import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  View, 
  TextInput, 
  TouchableOpacity, 
  Text,
  StyleSheet
} from 'react-native'
import { newQuestion } from '../actions'
import { NavigationActions } from 'react-navigation'
import { addNewQuestion } from '../utils/api'

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

    addNewQuestion(
      this.props.navigation.state.params.title,
      this.state.question, 
      this.state.answer
    )

    this.props.navigation.dispatch(NavigationActions.back())
  }

  render() {
    return (
      <View style={{padding: 20, flex: 1}}>
        <TextInput
          style={styles.textInput}
          onChangeText={question => this.setState({ question })}
          placeholder='Question'
        />
        <TextInput
          style={styles.textInput}
          onChangeText={answer => this.setState({ answer })}
          placeholder='Answer'
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.submit}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    padding: 50,
    marginTop: 20,
    fontSize: 65,
    fontWeight: 'bold'
  },
  button: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 7,
    borderWidth: 1,
    marginRight: 50,
    marginLeft: 50,
    marginBottom: 5,
    backgroundColor: 'black'
  },
  textInput: {
    padding: 10,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 10,
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    color: 'black',
    fontSize: 15
  }
})

export default connect()(NewQuestionCard)
