function Employee(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <img src={props.gambar}>
                    </img>
                </div>
                
                <div className="col-lg-4">
                    <row>
                        <h5 className="text-info">
                            Nama
                        </h5>
                        <h6>
                            {props.name}
                        </h6>
                    </row>

                    <row>
                        <h5 className="text-info">
                            Tanggal Lahir
                        </h5>
                        <h6>
                            {props.tgl_lahir}
                        </h6>
                    </row>

                    <row>
                        <h5 className="text-info">
                            Gender
                        </h5>
                        <h6>
                            {props.gender}
                        </h6>
                    </row>
                </div>

                <div className="col-lg-5">
                    <row>
                        <h5 className="text-info">
                            Email
                        </h5>
                        <h6>
                            {props.email}
                        </h6>
                    </row>

                    <row>
                        <h5 className="text-info">
                            Telepon
                        </h5>
                        <h6>
                            {props.telepon}
                        </h6>
                    </row>

                    <row>
                        <h5>
                            Divisi
                        </h5>
                        <h6>
                            {props.divisi}
                        </h6>
                    </row>
                </div>
            </div>
        </div>
    )
}

export default Employee;