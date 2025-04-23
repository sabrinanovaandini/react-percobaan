import FormEdit from "./FormEdit";
import type { Field } from "./FormEdit"; // ⬅️ Pastikan Field sudah diexport dari FormEdit.tsx

export default function ProfilJurnalis() {
    const fields: Field[] = [
        { label: "Username", key: "username", type: "text", default: "Jurnalis" },
        { label: "Email", key: "email", type: "email", default: "jurnalis@email.com" },
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
