import React from 'react';
import { Text } from 'react-native';
import checkIfFirstLaunch from '../../Utils/CheckForFirstTime';


export default class FirstComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFirstLaunch: false,
      hasCheckedAsyncStorage: false,
    };
  }

  async componentWillMount() {
    const isFirstLaunch = await checkIfFirstLaunch();
    this.setState({ isFirstLaunch, hasCheckedAsyncStorage: true });
  }

  render() {

    const {navigate} = this.props.navigation;  //Navigate Screens

    const { hasCheckedAsyncStorage, isFirstLaunch } = this.state;

    if (!hasCheckedAsyncStorage) {
      return null;
    }

    return isFirstLaunch ?
        navigate('IntroScreen') :
        navigate('Dashboard')
    ;
  }
}