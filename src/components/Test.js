function Test(props){
    return (
        // <div style={{color: props.fontColor, fontFamily: `Tahoma`}}>
        //     <img src={props.avatar}
        //     style={ {width:`100px`, height:`100px`, borderRadius:`50%`} }>
        //     </img>
        //     <h4 className="text-info">Nama: { props.name }</h4>
        //     <h4 className="text-info">City: { props.city }</h4>
        //     <p>
        //         {props.children}
        //     </p>
        // </div>
        <div className="card" style={ {width: `18rem`} }>
            <img className="card-top" src={props.avatar} alt="image">
            </img>

            <div className="card-body">
                <h6 className="text-success">{props.name}</h6>
                <h6 className="text-success">From {props.name}</h6>

                <p>
                    {props.children}
                </p>
            </div>
        </div>
    )
}
export default Test;