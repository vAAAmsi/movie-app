export default function Navbar(props){
    // console.log('props',props)
    return(
        <div  className="navbar" >
                <div {...props} className="navbar-text">{props.children}</div>
            </div>
    )
}