import users from "./data"
export const login = ({email,password}) => {

    const userData = users.filter((user)=>user.email===email)[0];

    
    return new Promise((resolve,reject)=>{
        if(userData){
            if(userData.password===password){
                setTimeout(()=>resolve(userData),3000)
            }else{
                setTimeout(()=>reject({error:{password:"Password Incorrect"}}),3000)
            }
        }else{
            setTimeout(()=>reject({error:{email:"User not found"}}),3000)
        }
    })
}   