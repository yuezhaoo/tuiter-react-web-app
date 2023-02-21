function HouseScreen (props) {
    console.log(props)
    const house = props.house
    //     {
    //     rooms: 3,
    //     baths: 2,
    //     sqft: 1500
    //
    // }
    return(
        <div>
            <h2>House</h2>
            Rooms: {house.rooms}<br/>
            Baths: {house.baths}<br/>
            SQFT: {house.sqft}<br/>
        </div>
    )
}
export default HouseScreen