import React, { useState } from 'react'
import '../CssFiles/Faq.css'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
const Faq = () => {
    const [open, setOpen] = useState(null)
    const faq = [
        {
            question: "What is this app about?",
            answer: "This app helps users track and improve their daily habits.",
        },
        {
            question: "How do I reset my password?",
            answer: "Click on 'Forgot Password' on the login screen and follow instructions.",
        },
        {
            question: "Can I use this app offline?",
            answer: "Yes, some features are available offline after the initial setup.",
        },
    ]
    const folderOpen = (index) => {
        setOpen((prev) => (prev === index ? null : index))
    }

    return (
        <div className='faq-container'>
            <h1 className='faq-title'> Frequently Asked Questions</h1>
            {faq?.map((item, index) => (
                <div className='faq-item' key={index}>
                    <button className='faq-question' onClick={() => folderOpen(index)}>
                        <span > {item.question}</span>
                        {open === index ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    {open === index && (
                        <div className='faq-answer'>{item.answer} </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Faq
