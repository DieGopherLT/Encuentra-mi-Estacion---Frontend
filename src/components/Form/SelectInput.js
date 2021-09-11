import React from 'react';
import styled from '@emotion/styled';

const SelectInput = () => {
    return (
        <Container>
            <Select>
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
        top: 2.5rem;
        right: 1rem;
        transform: rotate(90deg);
    }
`;

const Select = styled.select`
    margin: 1rem 0;
    width: 100%;
    height: 4rem;
    font-size: 1.6rem;
    padding-left: 1rem;
    border-radius: 1rem;
    border: 1px solid black;
    appearance: none;
`;

const Option = styled.option`
    height: 4rem;
`;

export default SelectInput;
