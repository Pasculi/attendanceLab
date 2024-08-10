import { useEffect, useState } from "react";
import './MostrarAsistencia.css'
import moment from "moment";


const MostrarAsistencia = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "http://localhost:5000/api/v1/asistencia";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.attendance))
      .catch((error) => error);

  }, [])

  return (
    <div className="mostrar">
      <h1 className="mostrar__title">Mostrar</h1>
      <table className="mostrar__tabla">
        <th>Docente</th>
        <th>Curso</th>
        <th>Matricula</th>
        <th>Asistencia</th>
        <th>Fecha</th>
        <th>Herramientas utilizadas</th>
        <th>Objetivos</th>

        {data?.map((item, index) => {
          return (
            <>
              <tr>
                <td key={index}>{item.nameDocente}</td>
                <td>{item.nameCourse}</td>
                <td>{item.matricula}</td>
                <td>{item.attendance}</td>
                <td>{moment(item.date).format("L")}</td>
                <td>{item.herramientas}</td>
                <td>{item.objetivo}</td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default MostrarAsistencia
