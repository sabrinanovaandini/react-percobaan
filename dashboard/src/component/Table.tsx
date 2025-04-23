type Column<T> = {
  key: keyof T | string;
  label: React.ReactNode;
};

type TableProps<T = any> = {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
};

export default function Table<T = any>({ columns, data, onRowClick }: TableProps<T>) {
  return (
  <>
  <div className="table-container">
    <table className="table-content">
      <thead>
        <tr>
          {columns.map((col, i) => (
            <th key={i} className={`border ${i === 0 ? "first-column" : ""}`}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} onClick={() => onRowClick?.(row)} style={{ cursor: onRowClick ? 'pointer' : 'default' }}>
            {columns.map((col, j) => (
              <td key={j} className={`border ${j === 0 ? "first-column" : ""}`}>
                {typeof col.key === "string" ? (row as any)[col.key] : ""}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </>
  );
}
