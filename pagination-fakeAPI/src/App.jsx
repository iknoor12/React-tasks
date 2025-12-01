import { useEffect, useState } from 'react'
import Pagination from './compopnents/Pagination.jsx';
import PostCard from './compopnents/PostCard';
import './App.css'


function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <>
    <div className='post-container'>
      <h1>Pagination Example</h1>

      {currentPosts.map(p => (
        <PostCard key={p.id} post={p}/>
      ))}

      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        setCurrentPage={setCurrentPage}
      />
    </div>
    </>
  );
}

export default App
