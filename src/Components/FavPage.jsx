import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../Provider/AuthProvider";
import { getfav } from "../services/users";

const FavPage = () => {
   const [quote, setQuote] = useState([])
    const { user } = useAuth();
    
    useEffect(() => {
        async function fetchQuotes() {
            try {
                const fetch = await getfav(user);
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
        <div>  <Link to="/favpage" > Fav  </Link> </div>
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


export default FavPage;


