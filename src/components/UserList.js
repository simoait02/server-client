import { useQuery, gql } from '@apollo/client';

const USERS_QUERY = gql`
  query GetUsers($page: Int, $limit: Int) {
    users(page: $page, limit: $limit) {
      data {
        id
        firstName
        lastName
        email
        location {
          locationCity
          locationCountry
        }
      }
      total
      page
      limit
    }
  }
`;

export default function UserList() {
    const { loading, error, data } = useQuery(USERS_QUERY, {
        variables: { page: 1, limit: 10 }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Users ({data?.users?.total})</h2>
            {data?.users?.data?.map(user => (
                <div key={user.id}>
                    <strong>{user.firstName} {user.lastName}</strong><br/>
                    {user.email}<br/>
                    {user.location?.locationCity}, {user.location?.locationCountry}
                </div>
            ))}
        </div>
    );
}