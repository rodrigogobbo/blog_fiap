import React, { useState, useEffect } from 'react';
import { client } from '../util/createClient'; 

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(1); 
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        fetchPosts();
    }, [currentPage]); 

    const fetchPosts = async () => {
        setIsLoading(true);
        try {
            const response = await client.getEntries({
                content_type: 'fiapBlogPost', 
                skip: (currentPage - 1) * postsPerPage,
                limit: postsPerPage,
                order: '-sys.createdAt'
            });
            if (response.items.length > 0) {
                setPosts(response.items); 
                setHasMore(response.items.length === postsPerPage);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Error fetching posts: ", error);
        }
        setIsLoading(false);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        if (hasMore) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    return (
        <div>
            <h1>Todos os Posts</h1>
            {isLoading ? <p>Carregando...</p> : (
                <ul>
                    {posts.map(post => (
                        <li key={post.sys.id}>{post.fields.postTitle}</li>
                    ))}
                </ul>
            )}
            <div>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Anterior</button>
                <button onClick={handleNextPage} disabled={!hasMore}>Próximo</button>
            </div>
        </div>
    );
}

export default AllPosts;
