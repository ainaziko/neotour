import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from './BookingForm.module.css';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import CloseButton from 'react-bootstrap/CloseButton'
import exitIcon from '../../assets/close.svg'
import person from '../../assets/person.svg'
import incrementIcon from '../../assets/Vectorincrement.svg'
import decrementIcon from '../../assets/Vectordecrement.svg'



const BookingForm = ({ isFormVisible, setIsFormVisible }) => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(false);
    const [peopleCount, setPeopleCount] = useState(1);

    const onSubmit = (data) => {
        console.log(data);
    }

    const handleCloseForm = () => {
        setIsFormVisible(false);
    }

    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    }

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\d{10}$/;
        return phoneNumberPattern.test(phoneNumber);
    }

    const incrementPeople = () => {
        setPeopleCount(peopleCount + 1);
    }

    const decrementPeople = () => {
        if (peopleCount > 1) {
            setPeopleCount(peopleCount - 1);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.headings}>
                <p className={styles.title}>Info</p>
                <CloseButton className={styles.exitBtn} onClick={() => handleCloseForm()}><img src={exitIcon}/></CloseButton> 
            </div>
            
            <p className={styles.instruction}>To submit an application for a tour reservation, you need to fill in your information and select the number of people for the reservation</p>
            <p className={styles.subtitle}>Phone Number</p>
            
            <PhoneInput className={styles.phoneInput} international countrySelectProps={{ unicodeFlags: true }} defaultCountry="KG" placeholder="Enter phone number" value={phoneNumber} onChange={setPhoneNumber} />
            <p className={styles.subtitle}>Comments to trip</p>
            <input className={styles.commentsInfo} {...register("comments")} placeholder="Write your wishes to trip..." />
            <p className={styles.subtitle}>Number of people</p>

            <div className={styles.peopleCountContainer}>
                <div className={styles.counterBtnContainer}>
                    <button className={styles.decrementBtn} type="button" onClick={decrementPeople}><img src={decrementIcon} alt="decrement icon"/></button>
                    <p className={styles.countResShadow}>{peopleCount}</p>
                    <button className={styles.incrementBtn} type="button" onClick={incrementPeople}><img src={incrementIcon} alt="increment icon"/></button>
                </div>
                
                <div className={styles.countFinalContainer}>
                    <img className={styles.personIcon} src={person} alt="person icon"/>
                    <p className={styles.countRes}>{peopleCount} People</p>
                </div>
            </div>
            <div className={styles.submitBtnContainer}>
                <input className={styles.submitBtn} type="submit" />
            </div>
        </form>
    );
}

export default BookingForm;
