import React from 'react'
import {useForm} from "react-hook-form"

export default function FormUser() {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    function renderError(errorMessage){
        return <span style={{color: "red"}}>{errorMessage}</span>
    }


    return (
        <form onSubmit={handleSubmit(console.log, console.error)}>
            <div className="mb-3">
                <label className='form-label'>Nome:</label>
                <input className='form-control' {...register("name", {required: {value: true, message: "Il campo Nome è richiesto!"}})} type="text" placeholder='Nome utente..'></input>
                {errors.name && renderError(errors.name.message)}
            </div>


            <button className='btn btn-success' type='submit' value="Submit">Submit</button>

        </form>
    )
}
