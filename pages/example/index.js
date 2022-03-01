import { gql } from "@apollo/client";
import client from "../../apollo-client";

export default function Example({ posts }) {
  return (
    <div>
      {posts.map((post) => {
        return <h2>{post.title.rendered}</h2>;
      })}
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts {
          posts {
            title {
              rendered
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: data.posts.posts,
    },
  };
}
