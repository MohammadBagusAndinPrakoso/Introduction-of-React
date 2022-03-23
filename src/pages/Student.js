import { useState, useEffect } from "react"
/**
 * useState -> digunakan untuk mendefinisikan state
 * useEffect -> adalah sebuah fungsi yang dijalankan/dieksekusi ketika komponennya telah ditampilkan
 */
import { Modal } from "bootstrap"

export default function Student(props) {
    let [students, setStudents] = useState([])
    let [modalStudent, setModalStudent] = useState(null)
    let [id, setId] = useState(0)
    let [name, setName] = useState("")
    let [birthdate, setBirthdate] = useState("")
    let [action, setAction] = useState("")
    let [readId, setReadId] = useState(true)

    useEffect(() => {
        let arrayStudents = [
            { id: 1, name: `Dito`, birthdate: `1 Maret 1900` },
            { id: 2, name: `Faiza`, birthdate: `500 SM` }
        ]
        setStudents(arrayStudents)

        setModalStudent(new Modal(document.getElementById(`modal_student`)))
    }, [])

    let addStudent = () => {
        // open modal
        modalStudent.show()

        // reset isi dari setiap inutan
        setId(0)
        setName("")
        setBirthdate("")
        setAction("insert")
        setReadId(true)
    }

    let saveStudent = () => {
        // closa modal
        modalStudent.hide()

        if (action === `insert`) {
            let newData = {
                id: id, name: name, birthdate: birthdate
            }

            // store array from students
            let temp = [...students]

            // add new data
            temp.push(newData)

            // store to students again
            setStudents(temp)
        } else if (action === `edit`) {
            // store dat students to temp
            let temp = [...students] // array student

            // find index of selected data by ID
            let index = temp.findIndex(siswa => siswa.id === id)

            // update data based on founded index
            temp[index].name = name
            temp[index].birthdate = birthdate

            // restore to students from temp
            setStudents(temp)
        }
    }

    let editStudent = siswa => {
        // open the modal
        modalStudent.show()
        setId(siswa.id)
        setName(siswa.name)
        setBirthdate(siswa.birthdate)
        setAction(`edit`)
        setReadId(false)
    }

    let deleteStudent = siswa => {
        if (window.confirm(`Are you ure want to delete this data?`)) {
            // store array students to temp
            let temp = [...students]

            // find index of selected data in array
            let index = temp.findIndex(sis => sis.id === siswa.id)

            // delete data from array based on founded index
            temp.splice(index, 1)

            // restore ke array students
            setStudents(temp)
        }
    }

    return (
        <div>
            <div className="card col-10">
                <div className="card-header bg-success">
                    <h3 className="text-white">
                        List of My Students
                    </h3>
                </div>
                <div className="card-body">
                    {/*
                    .map() -> fungsi dari array untuk scanning setiap data dalam array
                    */}
                    {students.map(siswa => (
                        <div className="row" key={`key${siswa.id}`}>
                            <div className="col-2">
                                <small>
                                    ID
                                </small>
                                <h5>
                                    {siswa.id}
                                </h5>
                            </div>

                            <div className="col-4">
                                <small>
                                    Nama
                                </small>
                                <h5>
                                    {siswa.name}
                                </h5>
                            </div>

                            <div className="col-2">
                                <small>
                                    Birthdate
                                </small>
                                <h5>
                                    {siswa.birthdate}
                                </h5>
                            </div>

                            <div className="col-2">
                                <small>Action</small> <br />
                                <button className="btn btn-dark mx-2" onClick={() => editStudent(siswa)}>
                                    Edit
                                </button>
                                <button className="btn btn-outline-danger">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* button add data */}
                    <button className="btn btn-dark" onClick={() => addStudent()}>
                        Add
                    </button>

                    {/* create dropdown using name */}
                    <select>
                        {students.map(item => (
                            <option value={item.id} type="radio">
                                {item.name}
                            </option>
                        ))}
                    </select>

                    {/* create radio butten using name*/}
                    {students.map(item => (
                        <div>
                            <input type={`radio`} name={`name`} 
                            value={item.id}/>
                            <label>{item.name} (Tgl: {item.birthdate})</label>
                        </div>
                    ))}

                    {/* modal component */}
                    <div className="modal" id="modal_student">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>
                                        Form Student
                                    </h4>
                                </div>
                                <div className="modal-body">
                                    ID
                                    <input type={`number`} className="form-control mb-2"
                                        value={id}
                                        onChange={ev => setId(ev.target.value)} />

                                    Name
                                    <input type={`text`} className="form-control mb-2"
                                        value={name}
                                        onChange={ev => setName(ev.target.value)} />

                                    Birthdate
                                    <input type={`text`} className="form-control mb-2"
                                        value={birthdate}
                                        onChange={ev => setBirthdate(ev.target.value)} />

                                    <button className="btn btn-info" onClick={() => saveStudent()}>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end of modal */}
                </div>
            </div>
        </div>
    )
}