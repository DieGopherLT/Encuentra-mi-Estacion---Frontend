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
`;

const SelectContainers = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const SubmitButton = styled(Button)`
    margin-top: 1rem;
    background-color: #00D100;
    &:hover {
        background-color: #007500;
    }
    @media(min-width: 768px) {
        width: 20rem;
    }
`;

export default Form;
