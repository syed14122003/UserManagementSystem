//Write all data related logic
const storage = require('node-persist');
const bcrypt = require('bcrypt')

const getAllUsers = async (req,res)=>{  //using async await to handle promises. can also use .then and .catch method
    try{
        const values =await storage.values(); //will give all values. await tells it to wait->get the result->then return it. soo line 8 will wait to get data and then line 9 will run
    res.send(values)
    }catch (error){ //if nothing is returned, error will be displayed
        console.log(error)
    }
}

//func to get all users
const getUserById = async (req,res)=>{
    const id=req.params.id;
    const userData=await storage.getItem(id);
    if(userData)
        return res.status(200).send({'message':'user found',userData})
    else
        return res.status(404).send({'message':'User not found'})
}

//func to add new users
const addUser = (req,res)=>{
    const {id,name,email,country,password} = req.body; //destructuring of data from the user request (req.body)
    const hashPassword = bcrypt.hash(password,10)
    storage.setItem(id,{id,name,email,country,password:hashPassword}); //key (id in this case has to be a string. Soo either set it here, or ask used to dive ID as strinf itself, like "1","2")
    //setItem func takes key as id and full object as value
    res.status(201).send('New User Created')
}

//func to delete user by ID
const deleteUser = async(req,res)=>{ 
    const id=req.params.id; //id I am capturing from URL 
    const userData=await storage.getItem(id);
    if(userData){
        await storage.removeItem(id);
        res.send({message:'User Deleted successfully'})
    }else{
        res.send({message:`User with ID ${id} is not regestered with us`})
    }
}

//func to update user by id
const updateUserById = async(req,res)=>{
    const id=req.params.id;
    const userData=await storage.getItem(id);
    if(userData){
        const{name,email,country,password}=req.body;
        if(name)
            userData.name=name
        if(email)
            userData.email=email
        if(country)
            userData.country=country
        if(password)
            userData.password=await bcrypt.hash(password,10);
        await storage.updateItem(id,userData)
        res.status(200).send({message:`User ${id} updated successfully`})
    }else{
        res.send(`User with ID ${id} is not available to update`)
    }
    res.send(`User ${id} is updated successfully`)
}

const loginUser = async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password)
        return res.status(403).send({message:'All Fields are Mandatory'})
    const users = await storage.values();
    const user=users.find(u=>u.email === email);
    if(user){
        const result = await bcrypt.compare(password,user.password);
        if(result)
           return res.status(200).send({message:'Logged in successfully'})
        else
           return res.send('Invalid Credentials')
    }else{
        return res.send(`${email} is not regestered with us`)
    }
}

//func to get user by id
module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    deleteUser,
    updateUserById,
    loginUser
}