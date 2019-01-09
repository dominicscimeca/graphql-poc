const SERVICE_CONFIG = {
    user_service: {
        address: 'http://localhost:4000/graphql',
    },
    // company_service: {
    //     address: 'http://localhost:5000/graphql',
    // },
};

import registerServices from '@workpop/graphql-proxy';
import express from 'express';
// import masterTypeDefs from './typeDefs';

// Create an express server instance
const server = express();

registerServices({
    server,
    SERVICE_CONFIG,
    // masterTypeDefs,
}).then(() => {
    server.listen(3020, () => {
        console.log('RUNNING ROXY');
    });
});