import React from "react";
import client from './ApolloClient';
import gql from "graphql-tag";
import {Query} from "react-apollo";
import Company from "./CompanyComponent"

const GET_COMPANIES = gql`
{
    companies {
        id
        employeeCount
        ceo
    }
}
`;

class CompaniesComponent extends React.Component {

    render() {
        return (
            <Query query={GET_COMPANIES} client={client}>
                {({loading, error, data}) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;

                    const companies = data.companies.map(company =>
                        <Company
                            key={company.id}
                            id={company.id}
                            ceo={company.ceo}
                            employeeCount={company.employeeCount}/>);

                    return (
                        <div>
                            {companies}
                        </div>
                    );
                }}
            </Query>
        )

    }
}

export default CompaniesComponent