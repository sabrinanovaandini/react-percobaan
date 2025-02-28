import { useState } from "react";

export default function FormEdit({ fields, title, onSubmit }) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.key]: field.default || "" }), {})
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] }); // Simpan file pertama yang dipilih
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    onSubmit(formData);
  };

  return (
    <div className="form-container">
      <div className="formedit-title">
        <h2>{title}</h2>
      </div>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.key} className="form-group">
            <label>{field.label}:</label>
            {field.type === "textarea" ? (
              <textarea
                name={field.key}
                value={formData[field.key]}
                onChange={handleChange}
                disabled={!isEditing}
                rows={field.rows || 3} // Bisa atur jumlah baris textarea
              />
            ) : field.type === "select" ? (
              <select name={field.key} value={formData[field.key]} onChange={handleChange} disabled={!isEditing}>
                {field.options.map((option, index) => (
                  <option key={index} value={option.value}>{option.label}</option>
                ))}
              </select>
            ) : field.type === "radio" ? (
              <div className="radio-group">
                {field.options.map((option, index) => (
                  <label key={index} className="radio-label">
                    <input
                      type="radio"
                      name={field.key}
                      value={option.value}
                      checked={formData[field.key] === option.value}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            ) : field.type === "file" ? (
              <input type="file" name={field.key} onChange={handleChange} disabled={!isEditing} />
            ) : (
              <input
                type={field.type || "text"}
                name={field.key}
                value={formData[field.key]}
                onChange={handleChange}
                disabled={!isEditing}
              />
            )}
          </div>
        ))}
        <div className="button-col">
          <button type="button" onClick={toggleEdit}>
            {isEditing ? "Batal" : "Edit"}
          </button>
          {isEditing && <button type="submit">Simpan</button>}
        </div>
      </form>
    </div>
  );
}
