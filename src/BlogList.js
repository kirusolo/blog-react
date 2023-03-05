const BlogList = ({ blogs, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(blogs);
    //this one is when comonts and hooks use together and should be understand fully in the next page 
  
    return (
      <div className="blog-list">
        <h2>{ title }</h2>
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.id} >
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default BlogList;