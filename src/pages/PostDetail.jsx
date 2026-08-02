import { useParams } from "react-router-dom";
import posts from "../data/posts";

const PostDetail = () => {
  const { id } = useParams();
  
  // Use String comparison to safely match both numbers and strings
  const post = posts.find((p) => String(p.id) === String(id));

  if (!post) {
    return <h2>Post not found.</h2>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;