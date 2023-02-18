import PostItem from "./PostItem.js";
import fullPosts from "./fullPosts.js";

const PostList = () => {
    return (`
        <div class="list-group">
            ${
            fullPosts.map(fullPost => {
                return(PostItem(fullPost));
            }).join('')
            }
        </div>
    `);
}
export default PostList;