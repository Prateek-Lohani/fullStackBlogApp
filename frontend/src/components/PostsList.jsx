import PostCard from "./PostCard";

const PostsList=({ posts }) =>{
  if (posts.length === 0) {
    return (
      <div className="text-center w-full flex-grow py-24 animate-scaleIn">
        <button onClick={()=>{}} className="hover:cursor-pointer inline-block p-8 bg-white/70 backdrop-blur rounded-lg border-2 border-dashed border-cyan-300">
          <p className="title-font text-3xl text-cyan-900 mb-2">No posts yet</p>
          <p className="text-cyan-700 text-sm">Create your first post to get started</p>
          <p className="text-cyan-700 text-md">➕</p>
        </button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {posts.map((post, index) => (
        // <PostCard
        //   key={post.id}
        //   post={post}
        //   onEdit={onEdit}
        //   onDelete={onDelete}
        //   index={index}
        // />
        <h2>hi</h2>
      ))}
    </div>
  );
}

export default PostsList;