const register=async(req,res)=>{
    res.send("Registe");
}

const login=async(req,res)=>{
    res.send("Login");
}

module.exports = {register,login};