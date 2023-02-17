const PostSummaryItem = (post) => {
    return (`
        <div class="list-group-item py-2" style="padding: 3px 10px">
            <div class="float-end ms-2" style="width: 100px; height:100px;">
                <img src=${post.image}>
                
            </div> 
            <div style="color:#6c757d">${post.topic}</div>
            <span class="fw-bold">${post.userName}</span>
            <i class="fa fa-circle"></i>
            <span style="color:#6c757d">${post.time}</span>
            <div class="fw-bold">${post.title}</div>
        
        </div>
    `);
}
export default PostSummaryItem;