import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createFragmentContainer, graphql} from 'react-relay';

class ProjectList extends React.Component {
  render() {
    return (
      <Text>Open up App.js to start working on your app!</Text>
    )    
  }
}

export default createFragmentContainer(ProjectList, {
  viewer: graphql`
    fragment ProjectList_viewer on User {
      projects(first: 100) {
        edges {
          node {
            id
            name
            description
            pid
          }
        }        
      }
    }
  `,
});