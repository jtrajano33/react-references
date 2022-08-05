import React from "react";
import { useField, ErrorMessage } from "formik";

export const TextField = ({label, ...props}) => {
    const [field, meta] = useField(props)

    return(
        <div className="mb-3">
            <label htmlFor={field.name}>{label}</label>
            <input
             {...field} {...props}
             className= {`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
             autoComplete="off" 
            />
            <ErrorMessage name={field.name} component="div" className="error" />
        </div>
    )
}