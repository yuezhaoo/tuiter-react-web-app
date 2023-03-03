const NavigationSidebar = (active) => {
    return(`
        <div class="list-group">
            <a class="list-group-item list-group-item-action" href="/">
                <i class="fab fa-twitter"></i>
            </a>
            <a class="list-group-item list-group-item-action ${active === "Home" ? "active" : ''}" 
               href="../HomeScreen/index.html">
                <i class="fa fa-home float-start"></i>
                <span class="d-none d-xl-block float-start ms-2">Home</span>
            </a>
            <a class="list-group-item list-group-item-action ${active === "Explore" ? "active" : ''}" 
               href="../ExploreScreen/index.html">
                <i class="fa fa-hashtag float-start"></i>
                <span class="d-none d-xl-block float-start ms-2">Explore</span>
            </a>
            <a class="list-group-item list-group-item-action" href="/">
                <i class="fa fa-bell float-start"></i>
                <span class="d-none d-xl-block float-start ms-2">Notifications</span>
            </a>
            <a class="list-group-item list-group-item-action" href="/">
                <i class="fa fa-envelope float-start"></i>
                <span class="d-none d-xl-block float-start ms-2">Messages</span>
            </a>
            <a class="list-group-item list-group-item-action" href="/">
                <i class="fa fa-bookmark float-start"></i>
                <span class="d-none d-xl-block float-start ms-2">Bookmarks</span>
            </a>
            <a class="list-group-item list-group-item-action" href="/">
                <i class="fa fa-list float-start"></i>
                <span class="d-none d-xl-block float-start ms-2">Lists</span>
            </a>
            <a class="list-group-item list-group-item-action" href="/">
                <i class="fa fa-user float-start"></i>
                <span class="d-none d-xl-block float-start ms-2">Profile</span>
            </a>
            <a class="list-group-item list-group-item-action" href="/">
                <i class="fa fa-circle float-start"></i>
                <span class="d-none d-xl-block float-start ms-2">More</span>
            </a>
        </div>
        
        <div class="d-grid mt-2">
            <a href="tweet.html"
               class="btn btn-primary btn-block rounded-pill">
               Tweet</a>
        </div>
    `);
}
export default NavigationSidebar;