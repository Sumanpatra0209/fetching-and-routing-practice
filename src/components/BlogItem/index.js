// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogItemDetails

  return (
    <li className="blogItem">
      <Link className="blogItemLink" to={`/blogs/${id}`}>
        <div className="blogItemContainer">
          <img className="blogItemImage" src={imageUrl} alt={`item${id}`} />
          <div className="blogItemInfo">
            <p className="blogItemTopic">{topic}</p>
            <h1 className="blogItemTitle">{title}</h1>
            <div className="authorInfo">
              <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
              <p className="authorName">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
