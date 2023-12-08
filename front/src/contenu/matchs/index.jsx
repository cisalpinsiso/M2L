import { useState } from 'react';
import './matchs.css';

function Matchs(props) {
  const equipes = props.equipes;
  
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (equipes.length == 0) return;

    for (let i = 0; i < 3; i++) {
      let randomTeam1 = Math.floor(Math.random() * equipes.length)
      let randomTeam2 = null;

      while (randomTeam2 == null || randomTeam2 == randomTeam1) {
        randomTeam2 = Math.floor(Math.random() * equipes.length)
      }

      let randomDate = new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 30), Math.floor(Math.random() * 24), Math.floor(Math.random() * 60), Math.floor(Math.random() * 60), Math.floor(Math.random() * 1000))

      setMatches([...matches, {
        equipe1: equipes[randomTeam1],
        equipe2: equipes[randomTeam2],
        date: randomDate
      }])
    }
  }, [props.equipes])

  return (
    <div className="matchs">
      <h3>Matchs à venir</h3>
      <table className="table table-striped overflow-hidden rounded-4">
        <thead>
          <tr>
            <th></th>
            <th>Equipe 1</th>
            <th></th>
            <th>Equipe 2</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            matches.map((match) => {
              return (
                <tr>
                  <td>
                    <img src={"/equipes" + match.equipe1.logo} alt="" />
                  </td>
                  <td>
                    <p>{match.equipe1.name}</p>
                  </td>
                  <td>
                    <img src={"/equipes" + match.equipe2.logo} alt="" />
                  </td>
                  <td>
                    <p>{match.equipe2.name}</p>
                  </td>
                  <td>
                    <p>{match.date.toLocaleString()}</p>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Matchs;