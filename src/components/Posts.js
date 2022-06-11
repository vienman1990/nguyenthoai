import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { PostsItem } from "./PostsItem";
import { PostDetail } from "./PostDetail";
import { Pagination } from "./Pagination";
import { getPosts, loadingPosts } from "../features/postsSlice";

export function Posts() {
    const posts = useSelector((state) => state.posts.list)
    const postsCount = useSelector((state) => state.posts.count)
    const isLoading = useSelector((state) => state.posts.isLoading)
    const dispatch = useDispatch()
    
    let [currentPage, setCurrentPage] = useState(1)
    let [showPost, setshowPost] = useState(false)
    let [post, setPost] = useState({})

    useEffect(() => {
        dispatch(loadingPosts())
        fetch(process.env.WORDPRESS_API+"/posts?number=10&page="+currentPage)
            .then(response => response.json())
            .then(data => {
                dispatch(getPosts(data));
            })
        
    },[currentPage])

    const postsList = posts.map((item) => <PostsItem key={item.ID} post={item} getPost={getPost} />)
    const postLoading = <div className="loading">loading..</div>
    const showList = isLoading? postLoading : postsList;

    function changePage(page) {
        setCurrentPage(page)
    }

    function getPost(id) {
        let post = posts.find((item) => item.ID === id)
        setPost(post);
        setshowPost(true);
    }

    function closePost() {
        setPost({});
        setshowPost(false);
    }

    const showPostDetail = () => {
        if (showPost) {
            return <PostDetail closePost={closePost} post={post} />;
        }
        return <></>;
    }

    return (
        <div className="posts" >
            {showList}
            <Pagination 
                count={postsCount} 
                currentPage={currentPage}
                changePage={changePage}
            />
            {showPostDetail()}
        </div>
    )
}