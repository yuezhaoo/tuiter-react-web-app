import PostSummaryList from '../PostSummaryList/index.js';

const ExploreComponent = () => {
    return(`
        <div class="row">
        <!-- search field and cog -->
            <div class="col-11">
                <input class="wd-search-bar-color wd-background-gray
                          form-control rounded-pill
                          fa float-start"
                       type="text"
                       placeholder="&#xF002;   Search Twitter"
                       style="font-family:Arial, FontAwesome"/>
            </div>
            <div class="float-start col-1 ps-2">
                <i class="fa fa-cog fa-2x" style="color: #2a9fd6"></i>
            </div>
        </div>
                       
        
        <ul class="nav mt-2 mb-2 nav-tabs">
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
                <a class="nav-link" href="#">
                  <span class="d-none d-md-block">Entertainment</span>
                </a>
            </li>
        
        </ul>
        
        <div class="wd-text-over-img mt-2 fw-bold">
        <!-- image with overlaid text -->
            <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1"
                class="img-fluid"/>
            <span class="wd-bottom-left">SpaceX's Starship</span>
        </div>
           
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
