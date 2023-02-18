const PostItem = (fullPost) => {
    return (`
        <div class="wd-border wd-border-color wd-bottom-24">
            <div class="wd-left-16 
                        wd-top-12 wd-inline">
                <img src=${fullPost.AvatarIcon} class="rounded-pill float-start" style="width: 48px; height:48px">


                <div class="wd-width-506 wd-float-left">
                    <span class="wd-author-style
                                 wd-relative-left">
                        ${fullPost.userName}
                    </span>
                    
                    <i class="fa fa-ellipsis-h float-end" style="color:#6c757d"></i>

                    <i class="fa fa-check-circle wd-relative-left" style="color: white"></i>

                    <span class="wd-light-gray
                                 wd-relative-left">
                        ${fullPost.handle}
                    </span>

                    <span class="wd-light-gray
                                 wd-relative-left">
                        ${fullPost.time}
                    </span>

                    <div class="wd-author-style
                                wd-relative-left
                                wd-right-16">
                        ${fullPost.title}
                    </div>

                    <div class="wd-relative-top
                                wd-border
                                wd-rounded-corners-all
                                wd-float-left">

                        <img class="wd-rounded-corners-all"
                             width="504px" height="264px"
                             src=${fullPost.image}/>

                        <div class="wd-bold-title
                                    wd-text-padding wd-line-height">
                            ${fullPost.postTitle}
                        </div>
                        
                        <div class="wd-light-gray
                                    wd-text-padding wd-line-height">
                            ${fullPost.postContent}
                        </div>

                        <div class="wd-light-gray
                                    wd-text-padding wd-line-height">
                            ${fullPost.site}
                        </div>

                    </div>

                    <div class="wd-relative-top">
                        <div class="wd-bottom-12
                                    wd-relative-top
                                    wd-light-gray
                                    wd-icon-equal">
                            <a href="#" class="wd-light-gray">
                                <i class='fa fa-comment wd-right-12'></i>${fullPost.commentAmount}</a>
                        </div>
                        <div class="wd-relative-top
                                    wd-light-gray
                                    wd-icon-equal">
                            <a href="#" class="wd-light-gray">
                                <i class='fa fa-sync-alt wd-right-12'></i>${fullPost.syncAmount}</a>
                        </div>
                        <div class="wd-relative-top
                                    wd-light-gray
                                    wd-icon-equal">
                            <a href="#" class="wd-light-gray">
                                <i class='fa fa-heart wd-right-12'></i>${fullPost.loveAmount}</a>
                        </div>
                        <div class="wd-relative-top
                                    wd-light-gray
                                    wd-icon-equal">
                            <a href="#" class="wd-light-gray">
                                <i class='fa fa-share wd-right-12'></i></a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    `);
}
export default PostItem;
