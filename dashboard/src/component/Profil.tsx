import FormEdit from "./FormEdit";
import type { Field } from "./FormEdit"; // Pastikan ini ada kalau Field di-export

export default function Profil() {
  const fields: Field[] = [
    { label: "Username", key: "username", type: "text", default: "Admin" },
    { label: "Email", key: "email", type: "email", default: "admin@email.com" },
    { label: "Password", key: "password", type: "password", default: "12345" },
  ];

  const handleSubmit = (data: Record<string, string | File>) => {
    console.log("Data Tersimpan:", data);
  };

  return (
    <main className="main">
      <FormEdit fields={fields} title="Profil" onSubmit={handleSubmit} />
    </main>
  );
}
