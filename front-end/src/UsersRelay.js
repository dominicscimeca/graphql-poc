import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import environment from './relay-environment'

export default class UsersRelay extends React.Component {
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                  query UsersRelayQuery {
                    users {
                      name
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
                    return <div>User ID: {props.users[0].name}</div>;
                }}
            />
        );
    }
}