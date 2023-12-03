'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

const Form = () => {

{/* MY EMAIL JS SETUP*/}
const form = useRef();

  const sendEmail = (e) => {
    {/* 
  */ }
  
  emailjs.sendForm('service_y0cd9v4', 'template_9oryhgi', form.current, '9AcptJjorGo6eGvE9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
        console.log(error.text);
        e.preventDefault();
      });
      
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-4'>
      {/* input */}
      <div className='relative flex items-center'>
        <Input type='name' name="user_name" id='name' placeholder='Name' />
        <User className='absolute right-6' size={20} />
      </div>
      {/* input */}
      <div className='relative flex items-center'>
        <Input type='email' name="user_email" id='email' placeholder='Email' />
        <MailIcon className='absolute right-6' size={20} />
      </div>
      {/* textarea */}
      <div className='relative flex items-center'>
        <Textarea name="message" id="user_msg" placeholder='Type Your Message Here.' />
        <MessageSquare className='absolute top-4 right-6' size={20} />
      </div>
      <Button type="submit" value="Send" className='flex items-center gap-x-1 max-w-[166px]'>
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
