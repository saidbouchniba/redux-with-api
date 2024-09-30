import axios from "axios"
import { GETUSERES } from "./Actiontype";

export const getusers = () => async (dispatch) => {
    try {

        const response = await axios.get("http://192.168.2.38:4556/api/user/get")
        console.log(response);
        dispatch({ type: GETUSERES, payload: response.data.getuser })
    } catch (error) {
        console.log(error);

    }

}

export const deleteuser = (id) => async (dispatch) => {
    try {

        const response = await axios.delete("http://192.168.2.38:4556/api/user/delete/" + id)
        console.log(response);
        dispatch(getusers())
    } catch (error) {
        console.log(error);

    }

}
export const adduser = (data) => async (dispatch) => {
    try {
        const response = await axios.post("http://192.168.2.38:4556/api/user/add", data)
        console.log(response);
        dispatch(getusers())

    } catch (error) {
        console.log(error);

    }
}
export const edituser = (id, data) => async (dispatch) => {
    try {
        const response = await axios.put("http://192.168.2.38:4556/api/user/update/" + id, data)
        console.log(response);
        dispatch(getusers())

    } catch (error) {
        console.log(error);

    }
}

