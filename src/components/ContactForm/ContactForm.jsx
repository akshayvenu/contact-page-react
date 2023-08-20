import Button from '../Button/Button'
import styles from './ContactForm.module.css'
import { MdMessage } from "react-icons/md";
import {HiPhone} from "react-icons/hi";
import {HiMail} from "react-icons/hi";

const ContactForm = () => {
  return (
    <section className={`${styles.container}`}>
        <div className={`${styles.contact_form}`}>
          <div className={`${styles.top_btn}`}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
            <Button text="VIA CALL" icon={<HiPhone fontSize="24px" />} />
            </div>
            <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} />

            <form>
             <div className={styles.form_controler}>
             <label htmlFor="name">Name</label>
              <input type="text" name='name' />
             </div>

             <div className={styles.form_controler}>
             <label htmlFor="email">Email</label>
              <input type="email" name='email' />
             </div>

             <div className={styles.form_controler}>
             <label htmlFor="text">Text</label>
              <textarea  name="text" rows="5" />
             </div>
<div
style={
  {display:'flex',
  justifyContent:'end'
}
}>
             <Button text="SUMIT" />

             </div>
            </form>

        </div>
        <div className={`${styles.contact_image}`}>
          <img src="./images/Service 24_7-pana 1.png" alt="contact img" />
        </div>

    </section>
  )
}

export default ContactForm