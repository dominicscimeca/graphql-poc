import React from "react";
import client from './ApolloClient';
import gql from "graphql-tag";
import {Query} from "react-apollo";

const GET_CARS = gql`
{
    cars {
        size
        make
    }
}
`;

const Cars = () => (
<Query query={GET_CARS} client={client}>
    {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
            <div>
                Cars: Size: {data.cars[0].size} Make: {data.cars[0].make}
            </div>
        );
    }}
</Query>
);

export default Cars