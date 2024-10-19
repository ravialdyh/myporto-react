import React, { Suspense, ComponentType } from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../pages/BlogPage";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const PostContent = post.component as ComponentType;

  return (
    <div className="container max-w-4xl mx-auto py-6 px-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-muted-foreground mb-6">{post.date}</p>
      <Suspense fallback={<div>Loading post...</div>}>
        <PostContent />
      </Suspense>
    </div>
  );
};

export default BlogPost;