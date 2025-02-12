export default function Table({ columns, data }) {
    return (
      <>
      <div className="table-container">
        <table className="table-content">
          <thead>
            <tr className="head-colum">
              {columns.map((col, index) => (
                <th key={index} className="border">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="head-colum">
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="border">
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
  