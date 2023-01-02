import React from 'react';
import { Formik, Form, Field} from 'formik';

const CartForm = ({onSubmit}) => (
    <div>
        <Formik
            initialValues={{ nombre: '', apellido: '', email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={onSubmit}>
            <Form className='formulario'>
                <div className='formularios-input'><Field type="text" name="nombre" placeholder='Nombre'/></div>
                <div className='formularios-input'><Field type="text" name="apellido" placeholder='Apellido'/></div>
                <div className='formularios-input'><Field type="email" name="email" placeholder='example@email.com'/></div>
                <div className='formularios-input'><Field type="number" name="telefono" placeholder='Teléfono' /></div>
                <button type="submit">Enviar</button>
                <button type="submit">Borrar</button>
            </Form>
        </Formik>
    </div>
);

export default CartForm;