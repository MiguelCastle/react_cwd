import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postData } from '../../../utils/http-request';

const LoginUser: React.FC<{}> = () => {
    interface ErrorInterface {
        msg: string,
    }
    const initialData = {
        email: '',
        password: ''
    }

    let navigate = useNavigate()
    const [data, setData] = useState(initialData)
    const [errors, setErrors] = useState<ErrorInterface | undefined>(undefined)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({...data, [e.currentTarget.name]:e.currentTarget.value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('sending ')
        console.log(data)
        postData('/api/teaching/login', data)
        .then(({res, status}) => {
            console.log(status)
            console.log(res)
            if(status == 400){ 
                throw res
            }
            else if(status == 200){
                setErrors(undefined)
                setData(initialData)
                console.log(res)
                navigate('/teaching/student/dashboard')
            }
        }).catch(err => {
            console.log(err)
            // let errs: errorOptionsType = {};
            // for (const [key, value] of Object.entries(err['errors'])) {
            //     errs[key] = err['errors'][key]['message']
            //   }
            // console.log(errs)
            setErrors(err)
        })
    }

    return (
        <div style={{ backgroundColor: '#fff', height: '100vh'}}>
            <main style={{width: '100%', height: '100%',padding: '4%', backgroundColor: 'green'}}>
                <h1>Welcome! Please login</h1>
                <form onSubmit={(e) => {handleSubmit(e)}} style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap', gap: '1vh'}}>
                    <input style={{width: '100%', height: '6vh'}} placeholder="Email"  type="email" name="email" value={data['email']} onChange={(e) => handleChange(e)} />
                    <input style={{width: '100%', height: '6vh'}} placeholder="password"  type="password" name="password" value={data['password']}  onChange={(e) => handleChange(e)}/>
                    {errors && errors['msg'] ? <p className='validation-error'>{errors['msg']}</p> : ''}
                    <input style={{width: '100%', height: '6vh'}}  type="submit" value="login" />
                </form>
            </main>
        </div>
    )
}

export default LoginUser;