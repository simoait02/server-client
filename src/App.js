import { ApolloProvider } from '@apollo/client';
import { client } from './ApolloClient';
import UserList from './components/UserList';
import PostList from './components/PostList';
import CreateUserForm from './components/CreateUserForm';

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <h1>My App</h1>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1, padding: '20px' }}>
                        <UserList />
                    </div>
                    <div style={{ flex: 1, padding: '20px' }}>
                        <PostList />
                    </div>
                </div>
                <div style={{ padding: '20px' }}>
                    <h2>Create User</h2>
                    <CreateUserForm />
                </div>
            </div>
        </ApolloProvider>
    );
}

export default App;