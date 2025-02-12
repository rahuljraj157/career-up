//Backend\routes\user\userData.js
import express from 'express';
import { 
    addEducation, addProfession, createJob, deleteEducation, deleteJob, deleteProfession, 
    displayJobs, editEducation, editJob, editProfession, getEditData, getOwnPostedJobs 
    } 
from '../../controllers/user/userDataController.js';
const router = express.Router();
import { verify } from '../../middlewares/userAuth.js';
import { getIndustries } from '../../controllers/user/userController.js';

//getting for edit data
router.get(`/editdata/:id` , verify , getEditData);  

//routes-education of user
router.post('/add_edu/:id', verify, addEducation);

router.put('/editedu/:educationId' ,verify, editEducation); 

router.delete('/delete_edu/:educationId' ,verify, deleteEducation); 


//routes-profession of user
router.post('/add_pro/:id' ,verify, addProfession);

router.put('/editpro/:professionId' ,verify, editProfession);

router.delete('/delete_pro/:professionId' ,verify, deleteProfession);                                                                                                                


//routes-job posts of company
router.get('/postedjobs' , verify , getOwnPostedJobs);       

router.post('/postjob' ,verify, createJob);

router.put('/editjob/:jobId' , verify , editJob);

router.delete('/deletejob/:jobId' , verify , deleteJob);

router.get('/jobs' , verify , displayJobs);

router.get('/getIndustries' , verify, getIndustries);

export default router;