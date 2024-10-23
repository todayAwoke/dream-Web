import React, { useState } from 'react';
import './Register.css';
const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        gender: '',
        age: '',
        grades: '',
        academicBackground: '',
        address: '',
        tutoringLocations: '',
        phoneNumber: '',
        tutoringExperience: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., send data to a server
        console.log(formData);
    };

    return (
        <div className="form-container">
            <h1>🤝 Welcome to Dream Tutorial and Training Service!</h1>
            <h2>Application Form</h2>
            <p>👉 Please provide the following information in a sequential manner.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    1. Your full name:
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                </label>
                <label>
                    2. Your gender:
                    <select name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <label>
                    3. Your age:
                    <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                </label>
                <label>
                    4. Grade(s) you are able to tutor:
                    <input type="text" name="grades" value={formData.grades} onChange={handleChange} required />
                </label>
                <label>
                    5. Your academic background (photographs or pdf formats):
                    <textarea name="academicBackground" value={formData.academicBackground} onChange={handleChange} required />
                </label>
                <label>
                    6. Your specific address:
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                </label>
                <label>
                    7. Locations where you can offer tutoring:
                    <input type="text" name="tutoringLocations" value={formData.tutoringLocations} onChange={handleChange} required />
                </label>
                <label>
                    8. Your phone number:
                    <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                </label>
                <label>
                    9. Any experience of tutoring or teaching:
                    <textarea name="tutoringExperience" value={formData.tutoringExperience} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Register;