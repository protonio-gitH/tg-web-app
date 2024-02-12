import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [name , setName] = useState();
    const [problem , setProblem] = useState();

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeProblem = (e) => {
        setProblem(e.target.value);
    }

    return (
        <div className={'form__wrapper'}>
            <div className={'container'}>
                <form action="" className={'form'}>
                    <h2 className={'form__title'}>Проблема с товаром</h2>
                    <input type="text" placeholder={'Название'} className={'form__input form__input-name'} value={name} onChange={onChangeName}/>
                    
                    <textarea name="" id="" cols="30" rows="10" placeholder='Опишите проблему' className={'form__textarea'} value={problem} onChange={onChangeProblem}></textarea>
                </form>
            </div>
        </div>
    );
};

export default Form;