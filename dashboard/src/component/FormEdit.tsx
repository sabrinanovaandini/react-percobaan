import { useState } from "react";

// Define types for the field object
export interface Field {
  key: string;
  label: string;
  type: "text" | "textarea" | "select" | "radio" | "file" | "email" | "password";
  default?: string;
  options?: { value: string; label: string }[];
  rows?: number;
}


// Define the props for the FormEdit component
interface FormEditProps {
  fields: Field[];
  title: string;
  onSubmit: (formData: Record<string, string | File>) => void; // Function that handles form submission
}

export default function FormEdit({ fields, title, onSubmit }: FormEditProps) {
  const [formData, setFormData] = useState<Record<string, string | File>>(
    fields.reduce(
      (acc, field) => ({ ...acc, [field.key]: field.default || "" }),
      {}
    )
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, type, value } = e.target;

    if (type === "file") {
      const target = e.target as HTMLInputElement; // Narrow the type to HTMLInputElement
      if (target.files) {
        setFormData({ ...formData, [name]: target.files[0] }); // Access the file property safely
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (e: React.FormEvent) => {
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
                value={formData[field.key] as string}
                onChange={handleChange}
                disabled={!isEditing}
                rows={field.rows || 3}
              />
            ) : field.type === "select" ? (
              <select name={field.key} value={formData[field.key] as string} onChange={handleChange} disabled={!isEditing}>
                {field.options?.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === "radio" ? (
              <div className="radio-group">
                {field.options?.map((option, index) => (
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
                value={formData[field.key] as string}
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
