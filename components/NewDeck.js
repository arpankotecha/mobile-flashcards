import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { newDeck } from '../actions'
import { NavigationActions } from 'react-navigation'

class NewDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  submit = () => {
    this.props.dispatch(newDeck(this.state.title))

    this.props.navigation.dispatch(NavigationActions.back())
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
        <TouchableOpacity
          onPress={this.submit}>
          <Text>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(NewDeck)
