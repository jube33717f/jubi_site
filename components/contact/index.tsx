/**
 * @file Contact form component
 * @date 2021-04-01
 * @author Jubi
 * @lastModify Jubi 2021-04-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import {contact_form} from './style'
import emailjs from 'emailjs-com';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const ContactForm = ()=>{
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/ 
    const [email,setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [feedback, setFeedBack] = useState('')
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    const sendFeedback = async (templateId:string, variables:object)=> {
        const userID= "user_pMiF80loZQBp2KIqs9Qe9";
        const res = await emailjs.send('gmail', templateId,variables,userID)
        if(res){
            setFeedBack('Thanks for submitting!')
        }
      }
    
    const handleSubmit = ()=> {
        const templateId = 'template_SuPmdfBi';
        const sender = name+'(Email:'+ email+")";
        
        sendFeedback(templateId, {
            message_html: message, 
            from_name: sender , 
            from_email:email, 
            reply_to: "jubi33717f@gmail.com"})
    }
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    {/** Contact form */}
    return <form css={contact_form} >
        <TextField
          required
          id="outlined-required"
          label="Name"
          margin="dense"
          fullWidth
          variant="outlined"
          value={name}
          onChange={(e)=>{
              setName(e.target.value)
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          fullWidth
          margin="dense"
          variant="outlined"
          placeholder='Email'
          style={{marginBottom:'1.2em'}}
          value={email}
          onChange={(e)=>{
              setEmail(e.target.value)
          }}
        />
        <TextField
          required
          id="outlined-multiline-static"
          placeholder="Type here to leave me message if you want..."         
          fullWidth
          multiline
          rows={5}
          value={message}
          onChange={(e)=>{
              setMessage(e.target.value)
          }}
          variant="outlined"
        />
        <section>
            <input type="submit" value="Submit" className='contact_form__submit' onClick={handleSubmit}></input>
            <p>{feedback}</p>
        </section>
    </form>
}
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default ContactForm;
