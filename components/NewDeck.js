import React, { Component } from 'react'
import { 
  Text, 
  KeyboardAvoidingView, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity,
  Keyboard
} from 'react-native'
import { connect } from 'react-redux'
import { newDeck } from '../actions'
import { NavigationActions } from 'react-navigation'
import { addNewDeck } from '../utils/api'

class NewDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  submit = () => {
    addNewDeck(this.state.title)

    this.props.dispatch(newDeck(this.state.title))

    this.setState({ title: '' })

    Keyboard.dismiss()

    this.props.navigation.navigate(
      'Deck', 
      {
        title: this.state.title,
        questions: {}
      })
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='position'>
        <Text style={styles.title}>
          What is the title of your new deck?
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={title => this.setState({ title })}
          placeholder='Deck Title'
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.submit}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            Submit
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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

export default connect()(NewDeck)
