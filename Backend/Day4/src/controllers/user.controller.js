// import {asyncHandler} from "../utils/asyncHandler.js"

// const registerUser = asyncHandler( async (req, res) => {
    // get user details from frontend
    // validation username and email empty toh nhi bhj diya and guilt username and password toh nahi hai yeh validation ki help se check ho jaata hai
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response 
    // check for user creation
    // return response
    
    
//     const { fullName, username, email, password } = req.body

//     console.log(fullName, username, email, password);
    
// })

// export {registerUser}

import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"

const registerUser = asyncHandler(async (req, res) => {
    const { fullName, username, email, password } = req.body

    console.log("email: ", email)

    if (
        [fullName, username, email, password].some((field) => field?.trim() === "")
        ) {
            throw new ApiError(400, "All fields are required")
        }   
    }

) 

export { registerUser }