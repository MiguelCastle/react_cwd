import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../../../utils/http-request";

const CreateUser: React.FC<{}> = () => {
    interface ErrorInterface {
        name?:string,
        email?: string,
        password?: string,
    }
    type errorOptionsType = {
        [key: string]: string
    }

    const initialData = {
        name: "",
        email: "",
        password: "",
        profession: "",
        city: "",
        country: ""
    }
    const navigate = useNavigate()
    const [data, setData] = useState(initialData);
    const [errors, setErrors] = useState<ErrorInterface | undefined>(undefined)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({...data, [e.currentTarget.name]:e.currentTarget.value})
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('sending ')
        console.log(data)
        postData('http://localhost:8000/api/teaching/createuser', data)
        .then(({res, status}) => {
            console.log(status)
            console.log(res)
            if(status == 400){ 
                throw res
            }
            else {
                setErrors(undefined)
                setData(initialData)
                navigate('/teaching/login')
            }
        }).catch(err => {
            let errs: errorOptionsType = {};
            for (const [key, value] of Object.entries(err['errors'])) {
                errs[key] = err['errors'][key]['message']
              }
            console.log(errs)
            setErrors(errs)
        })
    }
    return (
        <div style={{ backgroundColor: '#fff', height: '100vh'}}>
            <main style={{width: '100%', height: '100%',padding: '4%', backgroundColor: 'green'}}>
                <h1 style={{paddingBottom: '5vh' , paddingTop: '5vh' }}>Welcome! Please fill out this form below</h1>
                <form onSubmit={(e) => handleSubmit(e)} style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap', gap: '1vh'}} action="/#">
                    <input style={{width: '100%', height: '6vh'}} placeholder="Your Full Name" type="text" value={data['name']} name="name" onChange={(e) => handleChange(e)}/>
                    {errors && errors['name']?  <p className='validation-error'> {errors['name']}</p> : ''}
                    <input style={{width: '100%', height: '6vh'}} placeholder="Email" type="email" value={data['email']} name="email" onChange={(e) => handleChange(e)}/>
                    {errors && errors['email']?  <p className='validation-error'> {errors['email']}</p> : ''}
                    <input style={{width: '100%', height: '6vh'}} placeholder="*********" type="password" value={data['password']} name="password" onChange={(e) => handleChange(e)}/>
                    {errors && errors['password']?  <p className='validation-error'> {errors['password']}</p> : ''}
                    <input style={{width: '100%', height: '6vh'}} placeholder="Profession" type="text" value={data['profession']} name="profession" onChange={(e) => handleChange(e)}/>
                    <input style={{width: '48%', height: '6vh'}} placeholder="City" type="text" value={data['city']} name="city" onChange={(e) => handleChange(e)}/>
                    <input style={{width: '48%', height: '6vh'}} placeholder="Country" type="text" value={data['country']} name="country" onChange={(e) => handleChange(e)}/>
                    <input type="submit" value="CREATE USER" style={{padding: '4% 8%', backgroundColor: '#fff'}}/>
                </form>
            </main>
        </div>
    )
}

export default CreateUser;