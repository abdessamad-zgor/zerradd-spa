import React from 'react'
import {useForm} from 'react-hook-form'
import {useTranslation} from 'react-i18next'

function Contactform() {
    let {register, handleSubmit, formState:{errors}} = useForm();
    let {t} = useTranslation()
    const submit = (data)=>{
        window.open(`https://wa.me/212623264950?text=${encodeURIComponent(data.message)}`);
    }
  return (
    <form id="main-contact-form" name="contact-form"  onSubmit={handleSubmit(submit)} >
    <div className="form-group">
      <input type="text" name="name" value={register('name')} className="form-control" placeholder="Name" required />
    </div>
    
    <div className="form-group">
      <textarea name="message" className="form-control" value={register('message')} rows="8" placeholder="Message" required></textarea>
    </div>
    <button type="submit" className="btn btn-primary">{t("home-contact-btn")}</button>
  </form>
  )
}

export default Contactform