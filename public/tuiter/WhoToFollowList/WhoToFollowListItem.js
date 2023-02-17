const WhoToFollowListItem = (who) => {
    return (`
        <div class="list-group-item">
            <div class="row">
                <div class="col-xxl-2 col-xl-2 col-lg-2 px-1">                             
                    <span class="img-fluid rounded-pill" style="width: 48px">
                        ${who.avatarIcon}
                    </span>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6">
                    <span class="fw-bold">${who.userName}</span>
                    <i class="fa fa-circle"></i><br>
                    ${who.handle}
                </div>
                <span class="col-xxl-2 col-xl-3 col-lg-4 px-4">
                    <span class="btn btn-primary rounded-pill">Follow</span>
                </span>
            </div>
        </div>
    `);
}
export default WhoToFollowListItem;

