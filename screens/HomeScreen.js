import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

import { CheckBox } from 'react-native-elements'

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {todos: []};
  }

  onPress(item) => {
      // updater functions are preferred for transactional updates
      this.setState((state) => {
        state
        return {selected};
      });
    };

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 22}}>
        <TextInput
          style={{fontSize: 40, minWidth: 20}}
          placeholder="Add ToDo!"
          onSubmitEditing={(event) => {
            let todos = this.state.todos
            this.setState({todos: todos.concat({text: event.nativeEvent.text, done: "false",})})
            }
          }
        />
        <FlatList
          data={this.state.todos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) =>
          <TouchableOpacity
            onPress={() => this.onPress(item)}
            <View style={styles.item}>
              <CheckBox
                containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent'}}
                title={item.text}
                checked={item.done === "true"}
              />
            </View>
          </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
});
