export default function Table({ columns, data, rowClick }) {
  return (
    <>
      <div className="table-container">
        <table className="table-content">
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index} className={`border ${index === 0 ? 'first-column' : ''}`}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} onClick={() => rowClick(row)}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className={`border ${colIndex === 0 ? 'first-column' : ''}`}>
                    {row[col.key]}
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
