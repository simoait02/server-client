import { useQuery, gql } from '@apollo/client';

const POSTS_QUERY = gql`
  query GetPosts($page: Int, $limit: Int) {
    posts(page: $page, limit: $limit) {
      data {
        postId
        postText
        postImage
        postLikes
        postTags
        postPublishDate
        ownerId {
          id
          firstName
          lastName
        }
      }
      total
    }
  }
`;

export default function PostList() {
    const { loading, error, data } = useQuery(POSTS_QUERY, {
        variables: { page: 1, limit: 5 }
    });

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Posts ({data?.posts?.total})</h2>
            {data?.posts?.data?.map(post => (
                <div key={post.postId}>
                    <img src={post.postImage} alt="Post" style={{maxWidth: '300px'}}/>
                    <p>{post.postText}</p>
                    <small>
                        Likes: {post.postLikes} |
                        By: {post.ownerId.firstName} |
                        Tags: {post.postTags.join(', ')}
                    </small>
                </div>
            ))}
        </div>
    );
}