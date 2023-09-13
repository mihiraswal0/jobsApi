const notfound=(req,res)=>{
    res.status(404).json("Route not found");
}
module.exports = notfound;