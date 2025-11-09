import { useEffect, useState } from "react";
import { getAllQuotesbyId } from "../services/users";
import { useAuth } from "../Provider/AuthProvider";


const MyQuotes = () => {
   const [quote, setQuote] = useState([])
   const { user, setUser } = useAuth();

    useEffect(() => {
        async function fetchQuotes() {
            try {
                const fetch = await getAllQuotesbyId({user});
                // ensure we always set an array
                setQuote(fetch);
            } catch (err) {
                console.error('Failed to load quotes', err);
                setQuote([]);
            }
        }
        fetchQuotes();

    }, [])
    

  return (
    <div className='container'>
        <h1>Quotes around the world</h1>
        <table className="table table-bordered col-6 ">
            <tbody>
                {quote.map((q) => (
                    <tr key={q.id}>
                        <td>{q.contents}</td>
                        <td>{q.author}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}


export default MyQuotes;


