import  express from "express";
import post from '../model/post.js'
const router = express.Router()

//get all users
router.get("/",(req,res)=>{
    post.find().then((value)=>{
        res.json(value)
    }).catch((err)=>{
        res.status(500).json({
            message: err
        })
    })
})
//create user
router.post("/",(req,res)=>{
    let posts = new post({
        name:req.body.name,
        age: req.body.age,
})
posts.save().then((value)=>{
    res.status(201).json(posts)
}).catch((err)=>{
    res.status(400).json({
        message:err
    })
})
})



//get one user
router.get("/:id",(req,res)=>{
    let userid = post.findById(req.params.id).then((value)=>{
        res.usertest = value
            if(userid != null){
                return res.status(200).json(value)
            }else{
                return res.status(400).json({
                    Message:"user not found"
                })
            }
    }).catch((err)=>{
        res.status(500).json({
            message: "user not found"
        })
    })
    
})
//update one user
router.patch("/:id",(req,res)=>{
    let userid = post.findById(req.params.id).then((value)=>{
            if(userid != null){
                console.log(req.body.name)
                console.log(value.name)
                console.log(req.body.age)
                console.log(value.age)
                if(req.body.name != null){
                value.name = req.body.name
                }
                if(req.body.age != null){
                    value.age = req.body.age
                }
                value.save().then((val)=>{
                    res.json({
                        message: val,
                        value : "file updated sucessfull"
                    })
                }).catch((err)=>{
                    res.json({
                        message:err
                    })
                })
            }else{
                return res.status(400).json({
                    Message:"user not found"
                })
            }
    }).catch((err)=>{
        res.status(500).json({
            message: "user not found"
        })
    })
    
})
//delect a user
router.delete("/:id",(req,res)=>{
    let userid = post.findById(req.params.id).then((value)=>{
        res.usertest = value
            if(userid != null){
                value.remove().then((value)=>{
                    res.send('deleted')
                }).then((err)=>{
                    send.status(400).json({
                        message: "bad request"
                    })
                })
            }else{
                return res.status(404).json({
                    Message:"user not found"
                })
            }
    }).catch((err)=>{
        res.status(500).json({
            message: "user not found"
        })
    })
})


export default router