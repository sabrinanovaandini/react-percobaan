import FormEdit from "./FormEdit";

export default function ProfilJurnalis() {
    const fields = [
        { label: "Username", key: "username", type: "text", default: "Jurnalis" },
        { label: "Email", key: "email", type: "email", default: "jurnalis@email.com" },
        { label: "Password", key: "password", type: "password", default: "12345" },
    ];

    const handleSubmit = (data) => {
        console.log("Data Tersimpan:", data);
    };

    return(
    <main className="main">
        <FormEdit fields={fields} title="Profil" onSubmit={handleSubmit} />
    </main>
    )
}