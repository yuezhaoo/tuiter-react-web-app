import PostSummaryList from '../PostSummaryList/index.js';

const ExploreComponent = () => {
    return(`
        <div class="row">
                       <!-- search field and cog -->
            <div class="input-group float-start col-md-10">
                <div class="input-group-text wd-rounded-left wd-search-bar-color wd-no-right-border">
                    <i class="fa fa-search" style="color: black"></i>
                </div>
                
                <input type="text" class="form-control wd-rounded-right wd-no-left-border"
                       placeholder="Search Twitter">
                </div>

                <span class="float-start col-md-2">
                    <i class="fa fa-cog fa-2x" style="color:#0d6efd"></i>
                </span>
        </div>
        
        <ul class="nav mb-2 nav-pills">
                      <!-- tabs -->
            <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Entertainment</a>
            </li>
        
        </ul>
           <!-- image with overlaid text -->
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
