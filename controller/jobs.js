 const getAllJobs=async(req,res)=>{
    res.send("All jobs");
 }

 const getJobs=async(req,res)=>{
    res.send("Get jobs");
 } 
 const createJob=async(req,res)=>{
    res.send("Crete jobs");
 }
  const updateJob=async(req,res)=>{
    res.send("Upadte jobs");
 }
  const deleteJob=async(req,res)=>{
    res.send("Delete jobs");
 }
 
 module.exports={getAllJobs,getJobs,createJob,updateJob,deleteJob};