import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getInvoice, deleteInvoice } from '../data/invoices-data';
import Navbar from '../components/Navbar';

export default function Invoice() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <main>
      <Navbar />
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/about" + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}