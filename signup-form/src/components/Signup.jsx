import React, { useState } from 'react';

function Signup() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));

        if (success) setSuccess(false);
    };

    const validate = (values) => {
        const errors = {};

        if (!values.name.trim()) {
            errors.name = 'Name is required!';
        }
        if (!values.email.trim()) {
            errors.email = 'Email is required!';
        } else if (!values.email.includes("@")) {
            errors.email = "Email must include '@'";
        }
        if (!values.password) {
            errors.password = 'Password is required!';
        } else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false);

        const validationErrors = validate(form);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
            setSuccess(true);
            setForm({ name: "", email: "", password: "" });
        }, 2000);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>

                <label>Name: </label>
                <input name='name' value={form.name} onChange={handleChange} />
                <p style={{ color: "red" }}>{errors.name}</p>

                <label>Email: </label>
                <input name='email' value={form.email} onChange={handleChange} />
                <p style={{ color: "red" }}>{errors.email}</p>

                <label>Password: </label>
                <input name='password' type="password" value={form.password} onChange={handleChange} />
                <p style={{ color: "red" }}>{errors.password}</p>

                <button type='submit' disabled={submitting}>
                    {submitting ? "Submitting.." : "Submit"}
                </button>
            </form>

            {success && <h3 style={{ color: "green" }}>Signup successful!</h3>}
        </>
    );
}

export default Signup;
