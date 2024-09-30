import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteuser } from '../Redux/Action';
function Dashbord() {
    const users = useSelector(state => state.users)
    console.log(users);
    const dispatch = useDispatch()

    return (
        <div>
            <Table style={{ width: "80%", marginLeft: "10%" }} striped bordered hover>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Password</th>
                        <th>Edit or delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>
                        <tr>
                            <td><img src={user.image} style={{ width: "50%", height: "50px", }} /></td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>{user.password}</td>
                            <td style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                                <button>Edit</button>
                                <button onClick={() => dispatch(deleteuser(user._id))}>Delete</button>
                            </td>
                        </tr>
                    )}

                </tbody>
            </Table>
        </div>
    )
}

export default Dashbord