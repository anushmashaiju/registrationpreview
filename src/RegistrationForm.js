// RegistrationForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css'; // Import CSS file

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    birthday: "",
    marriage: "",
    qualification: "",
    nationality: "",
    address: "",
    phone: "",
    email: "",
    photo: null, // State to hold the uploaded image file
    photoPreview: null // State to hold the preview URL of the image
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // Handle different input types
    if (type === 'file') {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData({ ...formData, [name]: file, photoPreview: reader.result });
      };

      reader.readAsDataURL(file);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any necessary validation here before navigating
    navigate('/preview', { state: formData });
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <h1>REGISTRATION FORM</h1>

      <label htmlFor="name">Full name:</label>
      <input type="text" name="name" id="name" placeholder="In capitals" required value={formData.name} onChange={handleChange} />

      <label htmlFor="gender">Gender:</label>
      <input type="radio" name="gender" value="male" required onChange={handleChange} /> Male
      <input type="radio" name="gender" value="female" onChange={handleChange} /> Female
      <input type="radio" name="gender" value="other" onChange={handleChange} /> Other

      <label htmlFor="birthday">Date of birth:</label>
      <input type="date" name="birthday" id="birthday" required value={formData.birthday} onChange={handleChange} />
      <label htmlFor="religion">Religion:</label>
      <select name="religion" id="religion" required onChange={handleChange}>
        <option value="">Select</option>
        <option value="Hindu">Hindu</option>
        <option value="Muslim">Muslim</option>
        <option value="Christian">Christian</option>
        <option value="Others">Others</option>
      </select>

      <label htmlFor="marriage">Marital status:</label>
      <input type="radio" name="marriage" value="yes" required checked={formData.marriage === "yes"} onChange={handleChange} /> Yes
      <input type="radio" name="marriage" value="no" checked={formData.marriage === "no"} onChange={handleChange} /> No

      <label htmlFor="qualification">Educational Qualification:</label>
      <select name="qualification" id="qualification" required value={formData.qualification} onChange={handleChange}>
        <option value="">Select</option>
        <option value="PhD">PhD</option>
        <option value="Postgraduate">Postgraduate</option>
        <option value="Graduate">Graduate</option>
        <option value="Diploma">Diploma</option>
        <option value="Higher Secondary">Higher Secondary</option>
        <option value="Others">Others</option>
      </select>

      <label htmlFor="nationality">Nationality:</label>
      <select name="nationality" id="nationality" required value={formData.nationality} onChange={handleChange}>
        <option value="">Select</option>
        <option value="Indian">Indian</option>
        <option value="Others">Others</option>
      </select>

      <label htmlFor="address">Address:</label>
      <textarea name="address" id="address" placeholder="Permanent address" rows="5" required value={formData.address} onChange={handleChange}></textarea>

      <label htmlFor="phone">Mobile No:</label>
      <input type="tel" name="phone" id="phone" placeholder="10 digit" required value={formData.phone} onChange={handleChange} />

      <label htmlFor="email">E-mail ID:</label>
      <input type="email" name="email" id="email" placeholder="gmail" required value={formData.email} onChange={handleChange} />

      <label htmlFor="photo">Upload photo:</label>
      <input type="file" name="photo" id="photo" accept="image/*" required onChange={handleChange} />

      <input type="checkbox" id="terms" required />
      <label htmlFor="terms">I agree to all the above terms and conditions</label>

      <div style={{ textAlign: "center" }}>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
}

export default RegistrationForm;
