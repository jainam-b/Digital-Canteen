const zod = require("zod");

// Admin table
// username:string
// password:sring minimum 8 char
// role:string
// name:string
// email:string


// Used for signup
const createUser = zod.object({
  username: zod.string(),
  email: zod.string().email(),
  password: zod.string().min(8),
});
const loginUser = zod.object({
  username: zod.string(),
  password: zod.string().min(8),
   
});
module.exports={
 createUser,
    loginUser
}