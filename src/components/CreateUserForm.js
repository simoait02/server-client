import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_USER = gql`
  mutation CreateUser($input: UserCreateInput!) {
    createUser(input: $input) {
      id
      email
    }
  }
`;

export default function CreateUserForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser({
            variables: { input: formData }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={e => setFormData({ ...formData, password: e.target.value })}
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Creating...' : 'Create User'}
            </button>
            {error && <p style={{color: 'red'}}>{error.message}</p>}
        </form>
    );
}