import Table from "./Table";

const columns = [
  { label: "Username", key: "username" },
  { label: "Waktu Login", key: "time" },
];

const data = [
  { username: "Admin", time: "2025-02-05 19:00:50" },
  { username: "Admin", time: "2025-02-05 19:00:50" },
  { username: "Admin", time: "2025-02-05 19:00:50" },
  { username: "Admin", time: "2025-02-05 19:00:50" },
  { username: "Admin", time: "2025-02-05 19:00:50" },
  { username: "Admin", time: "2025-02-05 19:00:50" },
];
export default function InfoLogin() {

  return (
    <main className="main">
      <div className="content-title">
        <h2>Info Login</h2>
      </div>
      <Table columns={columns} data={data} />
    </main>
  );
}
