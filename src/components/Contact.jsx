import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Bounce, Icons } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { BsDiscord, BsLinkedin, BsGithub, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { SectionTitle } from './SectionTitle';

export const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    input_email: '',
    input_issue: '',
    input_message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.input_email) {
      errors.email = 'Please enter your email address';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.input_email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.input_issue) {
      errors.subject = 'Please enter a subject';
      isValid = false;
    }

    if (!formData.input_message) {
      errors.message = 'Please enter a message';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
      .sendForm( 'service_g207eb7', 'template_smvuf4r', form.current, { publicKey: 'hu6ME5Z7vv5J47-H7' } )
        .then(
          () => {
            toast("🚀 Your email has been sent", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              transition: Bounce,
              className: "dark:bg-slate-950 bg-slate-400 shadow-custom-1 text-white"
            });
            setFormData({
              input_email: '',
              input_issue: '',
              input_message: ''
            });
            setErrors({ });
          },
          (error) => {
            console.log( 'FAILED...', error.text );
          }
        );
    }
  };

  return (
    <div id="contact" className="h-screen md:pt-20 flex flex-col justify-center gap-10">
      
      <ToastContainer icon={ true } />

      <section className="w-full flex flex-col items-center">

        <SectionTitle className="flex justify-center w-full"> Contact Me</SectionTitle>
        <p className="font-light text-center text-gray-700 dark:text-gray-400 sm:text-xl">Do you have something to tell me?</p>
        <p className="font-light text-center text-gray-700 dark:text-gray-400 sm:text-xl">Write it here!</p>

        <form className='flex flex-col items-center gap-5 w-full show__component' ref={form} onSubmit={sendEmail}>

          <div className='min-w-[80%]'>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input type="email" name="input_email" id="email" value={formData.input_email} onChange={handleChange} className="shadow-lg bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@example.com"/>
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className='min-w-[80%]'>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
            <input type="text" name="input_issue" id="subject" value={formData.input_issue} onChange={handleChange} className="shadow-lg bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="What is the subject of your message?"/>
            {errors.subject && <p className="text-red-500">{errors.subject}</p>}
          </div>
          <div className="sm:col-span-2 min-w-[80%]">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your message</label>
            <textarea id="message" name="input_message" rows="6" value={formData.input_message} onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900 bg-slate-300 rounded-lg shadow-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          <button type='submit' className="inline-block min-w-[50%] px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-500 md:text-md hover:scale-105 duration-500">Send Message</button>
  
        </form>

      </section>

      <div className="card__contact w-full h-20 flex justify-center gap-4 pb-2">
        <a href='https://www.instagram.com/oswaldoapf/' target="_blank" rel="noreferrer" className="social-link1 text-gray-600 dark:text-gray-200 hover:text-gray-200">
          <BsInstagram></BsInstagram>
        </a>
        <a href='https://github.com/OswaldoAPF/' target="_blank" rel="noreferrer" className="social-link2 text-gray-600 dark:text-gray-200 hover:text-gray-200">
          <BsGithub></BsGithub>
        </a>
        <a className="social-link3 text-gray-600 dark:text-gray-200 hover:text-gray-200">
          <BsDiscord></BsDiscord>
          <span>xryle</span>
        </a>
        <a href='https://www.linkedin.com/in/oswaldoapf' target="_blank" rel="noreferrer" className="social-link4 text-gray-600 dark:text-gray-200 hover:text-gray-200">
          <BsLinkedin></BsLinkedin>
        </a>
        <a href='https://api.whatsapp.com/send/?phone=5491161337491&text&type=phone_number&app_absent=0' target="_blank" rel="noreferrer" className="social-link5 text-gray-600 dark:text-gray-200 hover:text-gray-200 ">
          <BsWhatsapp></BsWhatsapp>
        </a>
      </div>

    </div>
  )
}

