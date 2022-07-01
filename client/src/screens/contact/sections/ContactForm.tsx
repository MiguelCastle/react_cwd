import React, { useState } from 'react';
import logo from "../../../assets/images/logo/logo-green.webp";
import ReCAPTCHA from "react-google-recaptcha";
import { postData } from '../../../utils/http-request';

const ContactForm:React.FC<{}> = () => {
    interface ErrorInterface {
        name?:string,
        email?: string,
        phone?: string,
        subject?: string,
        message?: string
    }

    type errorOptionsType = {
        [key: string]: string
    }

    const intialData = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    }
    const [captcha, setCaptcha] = useState(false)
    const [data, setData] = useState(intialData)
    const [errors, setErrors] = useState<ErrorInterface | undefined>(undefined)

    const hanldeContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrors(undefined)
        setData(intialData)
        // postData('http://localhost:8000/api/contact/', data)
        // .then(({res, status}) => {
        //     if(status == 400){ 
        //         throw res['details']
        //     }
        //     else {
        //         setErrors(undefined)
        //         setData(intialData)
        //     }
        // }).catch(err => {
        //     let errs: errorOptionsType = {};
        //     for(let i = 0; i < err.length; i++){
        //         const errName = err[i]['path'][0]
        //         errs[errName] = err[i]['message']
        //     }
     
        //     setErrors(errs)
        // })
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({...data, [e.currentTarget.name]:e.currentTarget.value})
    }
    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setData({...data, [e.currentTarget.name]:e.currentTarget.value})
    }
    const handleCaptchaChange = (value: any) => {
        setCaptcha(true)
    }

    return (
        <section id="cform-section">
            <img src={logo} alt="castillo development logo"/>
            <div>
                <h4 className="theme-gradient">Let's Say Hi</h4>
                <h2>Contact Us.</h2>
                <ul>
                    <li><p>Call us directly: </p><p>Please email for phone</p></li>
                    <li><p>Contact Email: </p><p>example@gmail.com</p></li>
                </ul>
                <form onSubmit={(e) => hanldeContactSubmit(e)} method="post">
                    <input type="text" name="name" value={data['name']} placeholder='Your Name' onChange={(e) => handleInputChange(e)}/>
                    {errors && errors['name']?  <p className='validation-error'> {errors['name']}</p> : ''}
                    <input type="email" name="email" value={data['email']} placeholder='Your Email' onChange={(e) => handleInputChange(e)}/>
                    {errors && errors['email']? <p className='validation-error'> {errors['email']}</p> : ''}
                    <input type="text" name="phone" value={data['phone']} placeholder='Phone Number' onChange={(e) => handleInputChange(e)}/>
                    {errors && errors['phone']? <p className='validation-error'> {errors['phone']}</p> : ''}
                    <input type="text" name="subject" value={data['subject']} placeholder='Subject' onChange={(e) => handleInputChange(e)}/>
                    {errors && errors['subject']? <p className='validation-error'> {errors['subject']}</p> : ''}
                    <textarea name="message" value={data['message']} onChange={(e) => handleTextAreaChange(e)} cols={30} rows={10} placeholder="Message"></textarea>
                    {errors && errors['message']? <p className='validation-error'> {errors['message']}</p> : ''}
                    {captcha ? <input type="submit" name="name" value="submit now" className='btn-default lightgreen-btn' />
                    : <ReCAPTCHA
                        sitekey="6Le8ntobAAAAAOlv9Rh-Csqj2hvFKNg1dPKc36QI"
                        onChange={handleCaptchaChange}
                    />}
                </form>
            </div>
        </section>
    )
}

export default ContactForm;