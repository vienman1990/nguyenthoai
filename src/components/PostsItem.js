import moment from "moment";

export function PostsItem(props) {
    let post = props.post;

    const postCategories = Object.keys(post.categories).map((key) => 
        <div key={post.categories[key].ID}>{post.categories[key].name}</div>
    )

    const postTags = Object.keys(post.tags).map((key) => 
        <div key={post.tags[key].ID}>{post.tags[key].name}</div>
    )

    return (
        <div className="posts--item" onClick={() => props.getPost(post.ID)} >
            <h3 dangerouslySetInnerHTML={{__html: post.title}}></h3>
            <div className="posts--item--date">{moment(post.date).format('DD / MM / YYYY')}</div>
            <div className="posts--item--category">{postCategories}</div>
            <div dangerouslySetInnerHTML={{__html: post.excerpt}} />
            <div className="posts--item--tag">{postTags}</div>
        </div>
    )
}