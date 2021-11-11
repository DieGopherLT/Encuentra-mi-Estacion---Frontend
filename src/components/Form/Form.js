import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import styled from '@emotion/styled';

import AxiosClient from '../../config/axios';

import StationSelect from './StationSelect';
import Button from '../Button';

import useForm from '../../hooks/useForm';

const Form = () => {

    const { form, onChangeHandler } = useForm({
        origin: '',
        destiny: '',
    });
    const [stations, setStations] = useState([]);

    useEffect(() => {
        AxiosClient.get('/station')
            .then(result => {
                setStations(result.data.stations);
            });
    }, []);

    const onSubmitHandler = event => {
        event.preventDefault();
        if (form.origin === form.destiny) {
            Swal.fire(
                'Estación origen y destino son las mismas',
                'Por favor, seleccione estaciones diferentes para origen y destino',
                'warning'
            );
            return;
        }
        console.log('submiting...');
    };

    return (
        <StyledForm onSubmit={ onSubmitHandler } >
            <SelectContainers>
                <StationSelect
                    value={ form.origin }
                    options={ stations }
                    name="origin"
                    onChange={ onChangeHandler }
                />
                <StationSelect
                    value={ form.destiny }
                    options={ stations }
                    name="destiny"
                    onChange={ onChangeHandler }
                />
            </SelectContainers>
            <SubmitButton type="submit">Buscar ruta</SubmitButton>
        </StyledForm>
    );
};

const StyledForm = styled.form`
    margin-top: 0.625rem;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        padding: 0.625rem;
    }
`;

const SelectContainers = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 768px) {
        width: 70%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.625rem;
    }

    @media (min-width: 1024px) {
        width: 50%;
    }
`;

const SubmitButton = styled(Button)`
    margin-top: 0.625rem;
    background-color: #00D100;

    &:hover {
        background-color: #007500;
    }

    @media (min-width: 768px) {
        width: 18.75rem;
    }

    @media (min-width: 1024px) {
        width: 12.5rem;
    }
`;

export default Form;
