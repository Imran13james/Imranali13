'use client';
import { FC, FormEvent, MouseEvent, useState } from 'react';
import Label from './ContactForm/Label';
import Button from './ui/Button';
import { useContact } from './Provider';
import { X } from 'lucide-react';
import { toast } from 'react-hot-toast';
import Spinner from './Spinner';

import Image from 'next/image';
interface ContactFormProps {}


const ContactForm: FC<ContactFormProps> = ({}) => {
    const { showForm, setFormVisibility } = useContact();
    const [loader, setLoader] = useState(false);
    const handleFormClick = (e: MouseEvent<HTMLFormElement>) => {
        // Prevent the click event from bubbling up to the outer div
        e.stopPropagation();
    };
console.log()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const readInput = ({ name, value }: { name: string; value: string }) => {
        setFormData({ ...formData, [name]: value });
    };

    // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    //     setLoader(true);
    //     e.preventDefault();
    //     const { name, email, message } = formData;
    //     if (name && email && message) {
    //         const triggerEmail = async () => {
    //             const response = await fetch(
    //                await `${process.env.NEXT_PUBLIC_EMAIL_ROUTE}`,
                    
    //                 {
    //                     method: 'POST',
    //                     body: JSON.stringify(formData),
    //                 }
    //             );
    //             setLoader(false);
    //             const result = await response.json();
    //             if (result.status == 'ok') {
    //                 toast.success('Thanks for your email!');
    //                 setFormVisibility();
    //             }
    //         };
    //      triggerEmail();
    //     }
    // };
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoader(true);
  
  const { name, email, message } = formData;
  
  if (name && email && message) {
    try {
      const response = await fetch( await `${process.env.RESEND_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(formData),
      });
      console.log(response)
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      
      const result = await response.json();
      
      if (result.status === 'ok') {
        toast.success('Thanks for your email!');
        setFormVisibility();
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while sending the email');
    } finally {
      setLoader(false);
    }
  }
};

    return (
        <>
            {showForm && (
                <div
                    className="h-screen bg-blur backdrop-filter backdrop-blur-sm bg-[rgba(0,0,0,0.9)] w-screen fixed z-40 flex items-center justify-center"
                    onClick={() => setFormVisibility()}
                >
                    <X className="text-primary absolute right-5 top-5 cursor-pointer" />
                    <form
                        method="POST"
                        onSubmit={handleSubmit}
                        onClick={handleFormClick}
                        className="grid gap-5 w-96 p-5 bg-cardPrimary rounded-lg text-info shadow-lg relative"
                    >
                        <Label
                            readInput={readInput}
                            value={formData.name}
                            name="name"
                            label="Full Name"
                        />
                        <Label
                            readInput={readInput}
                            value={formData.email}
                            name="email"
                            label="Email"
                            type="email"
                        />
                        <Label
                            readInput={readInput}
                            value={formData.message}
                            name="message"
                            label="Message"
                            type="textarea"
                        />
                        <Button
                            disabled={loader}
                            variant="highlight"
                            sizes="medium"
                            className="w-full"
                        >
                            {loader ? <Spinner /> : 'Submit'}
                        </Button>
                    </form>
                    <section className="bg-blur flex items-center justify-center backdrop-filter backdrop-blur-sm bg-[rgba(0,0,0,0.9)] flex font-medium items-center justify-center h-screen" >


</section>
                </div>
            )}
        </>
    );
};

export default ContactForm;
