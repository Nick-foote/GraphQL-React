import logo from './logo.svg';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import GetUsers from './Components/GetUsers';
import Form from './Components/Form';



const SERVER_ADDRESS = 'http://localhost:6969/graphql/';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
     graphqlErrors.map(({ message, location }) => {
      alert(`GraphQL error ${message}`);
     });
  };
});
 
const serverLink = from([
  errorLink,
  new HttpLink({ uri: SERVER_ADDRESS }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: serverLink,
})

function App() {
  {/* serves Graphql API */}
  return (
    <ApolloProvider client={client} >
      {' '}
      {/* <GetUsers /> */}
      <Form></Form>
    </ApolloProvider>
    );
}

export default App;
