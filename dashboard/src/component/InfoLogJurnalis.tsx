import Table from "./Table";

const columns = [
  { label: "Username", key: "username" },
  { label: "Waktu Login", key: "time" },
];

const data = [
  { username: "Jurnalis", time: "2025-02-05 19:00:50" },
  { username: "Jurnalis2", time: "2025-02-05 19:00:50" },
  { username: "Jurnalis3", time: "2025-02-05 19:00:50" },
  { username: "Jurnalis4", time: "2025-02-05 19:00:50" },
  { username: "Jurnalis5", time: "2025-02-05 19:00:50" },
  { username: "Jurnalis6", time: "2025-02-05 19:00:50" },
];
export default function InfoLogJurnalis() {

  return (
    <main className="main">
      <div className="content-title">
        <h2>Info Login</h2>
      </div>
      <Table columns={columns} data={data} />
    </main>
  );
}
