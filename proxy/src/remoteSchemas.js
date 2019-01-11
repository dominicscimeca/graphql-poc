import remoteSchema from "./remoteSchema";
import {mergeSchemas} from "graphql-tools";
import R from 'ramda'

export default async (uris) => {
    const schemas = await Promise.all(R.map(remoteSchema, uris));

    return mergeSchemas({schemas});
};