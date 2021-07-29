import { Suspense } from "react";
import Loading from "./Loading";
import "./Table.css";

const Table = () => {

  return (
    <Suspense fallback={<Loading/>}>
      <table id="apply-table">

        <thead>
          
          <tr>
            <td>Registration</td>
            <td>Fees</td>
          </tr>
          
        </thead>

        <tbody>

          <tr className="lower-border">
            <td>Individual</td>
            <td><span className="rupee">₹</span> 150</td>
          </tr>

          <tr className="lower-border">
            <td>Delegation (5 or more)</td>
            <td><span className="rupee">₹</span> 125 / Individual</td>
          </tr>

        </tbody>
      </table>
    </Suspense>
  )
}

export default Table;