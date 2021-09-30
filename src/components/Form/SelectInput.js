import React from 'react';
import styled from '@emotion/styled';

const SelectInput = ({ value, name, onChange }) => {

    const translatedName = () => {
        let translation = '';
        switch(name) {
            case 'origin':
                translation = 'origen';
                break;
            case 'destiny':
                translation = 'destino';
                break;
            default:
                return name;
        }
        return translation;
    }

    return (
        <Container>
            <Label>{ translatedName() }</Label>
            <Select
                value={ value }
                name={ name }
                onChange={ onChange }
            >
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
            </Select>
        </Container>
    );
};

const Container = styled.div`
    position: relative;

    &::after {
        content: "\\25b6";
        position: absolute;
        top: 2.65625rem;
        right: 0.625rem;
        transform: rotate(90deg);
    }
`;

const Label = styled.label`
    text-transform: capitalize;
    font-size: 1rem;
    text-align: center;
    display: block;
`;

const Select = styled.select`
    margin: 0.625rem 0;
    width: 100%;
    height: 2.5rem;
    font-size: 1rem;
    padding-left: 0.625rem;
    border-radius: 0.625rem;
    border: 1px solid black;
    appearance: none;
`;

const Option = styled.option`
    height: 2.5rem;
`;

export default SelectInput;
