import bcryptJs from 'bcryptjs';

const users = [{
    name:'elham akbarpoor',
    email:'e.akbarpoor66@gmail.com',
    password:bcryptJs.hashSync('123456',10),
    isAdmin:true
},{
    name:'jack smith',
    email:'jackSmith@gmail.com',
    password:bcryptJs.hashSync('123456',10)
},{
    name:'john doe',
    email:'johnDoe@gmail.com',
    password:bcryptJs.hashSync('123456',10)
    
}];

export default users;