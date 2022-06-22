import axios from "axios";
const signupHandler = async(userInfo) => {
    const apiResponse = {token: "", username : "", error: ""}
    try{
        let response;
        response = await axios.post("/api/auth/signup", userInfo);
        if(response.status === 201){
            console.log("Account created")
            apiResponse.token = response.data.encodedToken;
            console.log(apiResponse.token);
            apiResponse.username = `${response.data.createdUser.firstName} ${response.data.createdUser.lastName}`;
        }
    } catch (err){
        apiResponse.error = "Account already exists" + err;
    }
    return apiResponse;
};
export { signupHandler }