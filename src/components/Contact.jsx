import { BsDiscord, BsLinkedin, BsGithub, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { SectionTitle } from './SectionTitle'

export const Contact = () => {
  return (
    <div id="contact" className="h-screen md:pt-20 flex flex-col justify-center gap-10">

      <section className="w-full flex flex-col items-center">
        <SectionTitle className="flex justify-center w-full"> Contact Me</SectionTitle>
        <p className="font-light text-center text-gray-700 dark:text-gray-400 sm:text-xl">Do you have something to tell me?</p>
        <p className="font-light text-center text-gray-700 dark:text-gray-400 sm:text-xl">Write it here!</p>
        <form action="#" className='flex flex-col items-center gap-5 w-full show__component'>
          <div className='min-w-[80%]'>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input type="email" id="email" className="shadow-lg bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@example.com"/>
          </div>
          <div className='min-w-[80%]'>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
            <input type="text" id="text" className="shadow-lg bg-slate-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="What is the subject of your message?"/>
          </div>
          <div className="sm:col-span-2 min-w-[80%]">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your message</label>
            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-slate-300 rounded-lg shadow-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type='submit' className="inline-block min-w-[50%] px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-500 md:text-md hover:scale-105 duration-500">
            Send Message
          </button>
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

