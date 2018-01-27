import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createFragmentContainer, graphql} from 'react-relay';

class Project extends React.Component {
  render() {
    return (
      <Text>Open up App.js to start working on your app!</Text>
    )    
  }
}

export default createFragmentContainer(Project, {
  project: graphql`
    fragment Project_project on Project {
      id
      name
      description
      pid
    }
  `,
});