import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Relay, { QueryRenderer, graphql, DefaultNetworkLayer } from 'react-relay';
import environment from '../environment';

export default class Viewer extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ViewerQuery {
            viewer(name: "Anonymous") {
              projects(first: 100, state: "draft") {
                edges {
                  node {
                    id
                    description
                    name
                    pid
                    state
                  }
                }
              }
            }
          }     
        `}
        render={({error, props}) => {
          if (error) {
            return <Text>THE ERROR IS {error.message}</Text>;
          } else if (props) {
            // return <Project project={props.edges[0]} />
            return <Text>{JSON.stringify(props)} is great!</Text>;
          }
          return <Text>Loading</Text>;
        }}
      />
    );
  }
}