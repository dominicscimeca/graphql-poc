import { ApolloServer } from 'apollo-server'
import {mergeSchemas} from "graphql-tools";

import getRemoteSchemas from './remoteSchemas';
import carsSchema from './carsSchema'

const getSchema = async () => {
    const remoteSchemas = await getRemoteSchemas([
        'http://localhost:4000',
        'http://localhost:5000'
    ]);

    return mergeSchemas({schemas:[
        remoteSchemas,
        carsSchema
    ]})
};

const app = async () => {
    const schema = await getSchema();
    const server = new ApolloServer({ schema });

    // normal ApolloServer listen call but url will contain /graphql
    server.listen({port: 1919}).then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`)
    });
};

app();
