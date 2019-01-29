import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import fetch from 'node-fetch';
import { introspectSchema, makeRemoteExecutableSchema } from 'graphql-tools';


export default async (uri) => {
    const http = new HttpLink({ uri, fetch });

    const link = setContext((request, {graphqlContext}) => {
        return 'undefined' == typeof graphqlContext ? {} : { headers: graphqlContext.headers };
    }).concat(http);

    const schema = await introspectSchema(link);

    return makeRemoteExecutableSchema({
        schema,
        link,
    });
}