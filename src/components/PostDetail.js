import moment from "moment";

export function PostDetail(props) {
    let post = props.post;
    
    const postCategories = Object.keys(post.categories).map((key) => 
        <div key={post.categories[key].ID}>{post.categories[key].name}</div>
    )

    const postTags = Object.keys(post.tags).map((key) => 
        <div key={post.tags[key].ID}>{post.tags[key].name}</div>
    )

    return (
        <div className="post--detail" >
            <div className="post--detail--close" onClick={() => props.closePost()}></div>
            <div className="post--detail--wapper">
                <h3 dangerouslySetInnerHTML={{__html: post.title}}></h3>
                <div className="post--detail--date">{moment(post.date).format('DD / MM / YYYY')}</div>
                <div className="post--detail--category">{postCategories}</div>
                <div dangerouslySetInnerHTML={{__html: post.content}} />
                <hr/>
                <div className="post--detail--tag">{postTags}</div>
                <div className="post--detail--originalurl" >
                    <a href={post.guid} >Bài viết gốc</a>
                </div>
                <div className="post--detail--btnclose" onClick={() => props.closePost()}>Trở về</div>
            </div>
        </div>
    )

}