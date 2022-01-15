import { useEffect, useState } from "react";
import "./dashboard.css";
function Dashboard() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchUsers();
  }, [page]);
  const fetchUsers = () => {
    console.log("hoo");
    fetch(`http://localhost:3001/posts?_page=${page}&_limit=8`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        setList(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="dashBoard">
      <img
        style={{ width: "5%", height: "5%" }}
        src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/46/2019/04/GitHub-Mark.png"
        alt="imag"
      />
      <div className="gitusers">
        {list.map((e) => (
          <div>
            <img src={e.pic} alt="git" />
            <p>{e.first_name}</p>
            <p>{e.email}</p>
          </div>
        ))}
      </div>
      <button disabled={page === 1} onClick={() => setPage(page - 1)} className="Button">
        Prev
      </button>
      <button onClick={() => setPage(page + 1)} className="Button">Next</button>
    </div>
  );
}

export default Dashboard;
