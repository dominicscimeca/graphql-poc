import React from 'react';
import {QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import environment from './relay-environment'

export default class CompaniesRelay extends React.Component {
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                  query CompaniesRelayQuery {
                    companies {
                      id
                      ceo
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
                    return <div>CEO: {props.companies[0].ceo}, ID: {props.companies[0].id}</div>;
                }}
            />
        );
    }
}