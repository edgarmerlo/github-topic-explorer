import {
    ApolloClient,
    InMemoryCache,
    createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

export class GitHubService {
    static connection;

    static httpLink = createHttpLink({
        uri: process.env.REACT_APP_GRAPHQL_URL,
    });
    
    static authLink = setContext((_, { headers }) => {
        // get the authentication token from local storage if it exists
        const token = process.env.REACT_APP_GITHUB_KEY;
        // return the headers to the context so httpLink can read them
        return {
            headers: {
            ...headers,
            authorization: token ? `bearer ${token}` : "",
            }
        }
    });
    
    static getClient(){
        // if the connection already exists return it, if not create a new client
        if(!Boolean(this.connection)) {
            this.connection = new ApolloClient({
                link: this.authLink.concat(this.httpLink),
                cache: new InMemoryCache()
            });
        }
        return this.connection;
    }

    static makeQuery(query, variables) {
        const client = this.getClient();
        return client.query({query, variables});
    }
}