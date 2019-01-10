import { ApolloServer } from 'apollo-server'
import { mergeSchemas } from 'graphql-tools';
import userServiceSchema from './userServiceSchema';
import companyServiceSchema from './companyServiceSchema';



const getSchema = async () => {
    const userService = await userServiceSchema();
    const companyService = await companyServiceSchema();

    return mergeSchemas({
        schemas: [
            userService,
            companyService,
        ],
    });
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
