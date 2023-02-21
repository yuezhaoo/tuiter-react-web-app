export default function AddScreen ({a, b}) {
    //console.log(props)
    // const a = props.a
    // const b = props.b
    //const {a, b} = props

    return(
        <div>
            <h2>Add</h2>
            a = {a}<br/>
            b = {b}<br/>
            {a} + {b} = {a+b}
        </div>
    )
}