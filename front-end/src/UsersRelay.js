import React from 'react';
import {QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import environment from './relay-environment'

export default class UsersRelay extends React.Component {
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                  query UsersRelayQuery {
                    users {
                      favoriteBook
                      other
                    }
                  }
                `}
                variables={{}}
                render={({error, props}) => {
                    if (error) {
                        return <div>Error!</div>;
                    }
                    if (!props) {
                        return <div>Loading...</div>;
                    }
                    return <div>User ID: {props.users[0].favoriteBook}, {props.users[0].other}</div>;
                }}
            />
        );
    }
}