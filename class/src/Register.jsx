// import React from 'react'
import { Form, useForm } from 'react-hook-form'

function Register() {
    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }


  return (
    <div>
        <h3>Hook form</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder='First Name' {...register('firstname')} />
            <input type='submit' />
        </Form>
    </div>
  )
}

export default Register