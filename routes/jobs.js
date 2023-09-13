const { getAllJobs, getJobs, createJob, updateJob,deleteJob } = require("../controller/jobs");
const exress=require('express');
const router=express.Router();

router.get('/',getAllJobs);
router.get('/:id',getJobs);
router.post('/',createJob);  
router.patch('/:id',updateJob);
router.delete('/:id',deleteJob);

module.exports = router;