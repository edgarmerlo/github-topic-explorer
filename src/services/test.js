import {
    ApolloClient,
    InMemoryCache,
    useQuery,
    createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

export class GraphQlService {
    static connection;

    static getConnection() {

    }

    static httpLink = createHttpLink({
        uri: 'https://api.github.com/graphql',
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
        console.log(client, query)
        return client.query({query, variables});
    }
}