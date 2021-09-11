import { useState, useCallback } from 'react';

const useForm = initialState => {

    const [form, setForm] = useState(initialState);

    const onChangeHandler = useCallback(event => {
        setForm(prevForm => {
            return {
                ...prevForm,
                [event.target.name]: event.target.value,
            };
        });
    }, []);

    const resetForm = useCallback(() => setForm(initialState), [initialState]);

    return {
        form,
        onChangeHandler,
        resetForm,
    };
};

export default useForm;
