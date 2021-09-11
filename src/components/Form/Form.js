import React from 'react';
import styled from '@emotion/styled';

import SelectInput from './SelectInput';
import Button from '../Button';

const Form = () => {

    const onSubmitHandler = event => {
        event.preventDefault();
        console.log('Submitted!');
    }

    return (
        <StyledForm
            onSubmit={ onSubmitHandler }
        >
            <SelectContainers>
                <SelectInput/>
                <SelectInput/>
            </SelectContainers>
            <SubmitButton
                type="submit"
            >
                Buscar ruta
            </SubmitButton>
        </StyledForm>
    );
};

const StyledForm = styled.form`
    margin-top: 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media(min-width: 768px) {
        padding: 1rem;
    }
`;

const SelectContainers = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    @media(min-width: 768px) {
        width: 70%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
    
    @media(min-width: 1024px) {
        width: 50%;
    }
`;

const SubmitButton = styled(Button)`
    margin-top: 1rem;
    background-color: #00D100;
    &:hover {
        background-color: #007500;
    }
    @media(min-width: 768px) {
        width: 30rem;
    }
    
    @media(min-width: 1024px) {
        width: 20rem;
    }
`;

export default Form;
