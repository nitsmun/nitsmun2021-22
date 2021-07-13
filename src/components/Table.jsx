import "./Table.css";

const Table = () => {

  return (
    <table id="apply-table">

      <thead>
        
        <tr>
          <td>Round</td>
          <td>Fees</td>
          <td>Open From</td>
        </tr>
        
      </thead>

      <tbody>

        <tr className="lower-border">
          <td>Early Bird</td>
          <td><span className="rupee">₹</span> 250</td>
          <td>9th-14th Feb 2021</td>
        </tr>

        <tr className="lower-border">
          <td>Round 1</td>
          <td><span className="rupee">₹</span> 300</td>
          <td>14th-20th Feb 2021</td>
        </tr>

        <tr>
          <td>Round 2</td>
          <td><span className="rupee">₹</span> 350</td>
          <td>20th-25th Feb 2021</td>
        </tr>

      </tbody>
    </table>
  )
}

export default Table;