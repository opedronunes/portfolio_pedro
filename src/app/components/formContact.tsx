'use client'
import { useState } from 'react';
import axios from 'axios';
import LoadingSubmit from './LoadingSubmit';

export default function Contact() {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     phone: '',
    // });

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         await axios.post('/api/', formData);
    //         alert('Message sent successfully!');
    //         setFormData({ name: '', email: '', phone: '' });
    //     } catch (error) {
    //         console.error('Error sending message:', error);
    //         alert('An error occurred while sending the message.');
    //     }
    // };
    const [loading, setLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(event.target)
        try {

            const response = await fetch('/api/contact', {
                method: 'post',
                body: formData,
            });

            if (!response.ok) {
                console.log("falling over")
                throw new Error(`response status: ${response.status}`);
            }
            setLoading(false);
            const responseData = await response.json();
            console.log(responseData['message'])
            alert('Mensagem enviada, em breve será respondido. Obrigado.');
            event.target.reset();
            setFormSubmitted(true);
        } catch (err) {
            console.error(err);
            alert("Error, please try resubmitting the form");
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto w-full p-4 rounded-md ">
            <h1 className="text-2xl mb-4">Me conta a sua ideia</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-3'>
                    <div>
                        <label className="block text-sm mb-2">
                            Name:
                        </label>
                        <input
                            className="w-full bg-transparent px-3 py-2 border-0 rounded-md ring-1 ring-inset ring-texto focus:outline-0 focus:ring-2 focus:ring-inset focus:ring-tertiary"
                            type="text"
                            name="name"
                            autoComplete='name'
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-2">
                            Email:
                        </label>
                            <input
                                className="w-full bg-transparent px-3 py-2 border-0 rounded-md ring-1 ring-inset ring-texto focus:outline-0 focus:ring-2 focus:ring-inset focus:ring-tertiary"
                                type="email"
                                name="email"
                                autoComplete='email'
                                required
                            />
                    </div>
                    <div>
                        <label className="block text-sm mb-2">
                            Phone:
                        </label>
                            <input
                                className="w-full bg-transparent px-3 py-2 border-0 rounded-md ring-1 ring-inset ring-texto focus:outline-0 focus:ring-2 focus:ring-inset focus:ring-tertiary"
                                type="tel"
                                name="telefone"
                                autoComplete='telefone'
                            />
                    </div>
                    <div>
                        <label className="block text-sm mb-2">
                            Mensagem:
                        </label>
                            <textarea
                                className="w-full bg-transparent px-3 py-2 border-0 rounded-md ring-1 ring-inset ring-texto focus:outline-0 focus:ring-2 focus:ring-inset focus:ring-tertiary"
                                name="mensagem"
                                autoComplete='mensagem'
                                required
                            />
                    </div>
                    <div>
                        <button type="submit" disabled={loading || formSubmitted} className={`bg-tertiary font-semibold text-primary px-4 py-2 rounded-md flex items-center text-center justify-center hover:bg-primary hover:text-tertiary transition-all ${formSubmitted ? 'opacity-50 cursor-not-allowed' : ''}`}>
                            {loading ? <LoadingSubmit /> : 'Enviar'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}