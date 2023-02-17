import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
           <div class="list-group">
               <span class="fw-bold list-group-item">Who to follow</span>
               ${
                who.map(who => {
                    return(WhoToFollowListItem(who));
                }).join('')
                }
           </div>
    `);
}
export default WhoToFollowList;