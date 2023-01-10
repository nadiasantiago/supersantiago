import React from 'react';
import { Formik, Form, Field} from 'formik';

const CartForm = ({onSubmit}) => (
    <div>
        <h1 className='titulo-form'>Datos de entrega</h1>
        <Formik
            initialValues={{ nombre: '', apellido: '', email: '', direccion:'', telefono:'' }}
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
                <div><Field className='formulario-input' type="text" name="nombre" placeholder='Nombre'/></div>
                <div><Field className='formulario-input' type="text" name="apellido" placeholder='Apellido'/></div>
                <div><Field className='formulario-input' type="email" name="email" placeholder='example@email.com'/></div>
                <div><Field className='formulario-input' type="number" name="telefono" placeholder='Teléfono' /></div>
                <div><Field className='formulario-input' type="text" name="direccion" placeholder='Direccion' /></div>
                <button className='btn-datosEntrega' type='submit'>Enviar</button>
                <button className='btn-datosEntrega' type='reset'>Borrar</button>
            </Form>
        </Formik>
    </div>
);

export default CartForm;