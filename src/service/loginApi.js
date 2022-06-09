import axios from "axios";

const loginHandler = async(userInfo) => {
    const apiResponse = { token : "", username : "", error : "" }
    try{
        let response;
        response = await axios.post("/api/auth/login", userInfo);
        if(response.status === 200){
            apiResponse.token = response.data.encodedToken;
            apiResponse.username = `${response.data.firstName} ${response.data.lastName}`;
        }
    } catch (err){
        apiResponse.password = err.response.data.errors[0];
        console.log(apiResponse.password);
    }
    return apiResponse;
}
export { loginHandler }