import React, { useCallback, useEffect, useState } from 'react';
import './Form.css';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
    const [name , setName] = useState();
    const [problem , setProblem] = useState();
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            name,
            problem,
        }
        tg.sendData(JSON.stringify(data));
    }, [name,problem])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);
        return () =>{
            tg.offEvent('mainButtonClicked', onSendData);
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if (!name || !problem){
            tg.MainButton.hide();
        }else{
            tg.MainButton.show();
        }
    },[name,problem])

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
                    <input type="text" placeholder={'Название товара'} className={'form__input form__input-name'} value={name} onChange={onChangeName}/> 
                    <textarea name="" id="" cols="30" rows="10" placeholder='Опишите проблему' className={'form__textarea'} value={problem} onChange={onChangeProblem}></textarea>
                    <h3 className={'form__title-img'}>Загрузите фотографии</h3>
                    <input type='file' accept=".png,.jpg,.jpeg,.gif"/>
                </form>
            </div>
        </div>
    );
};

export default Form;