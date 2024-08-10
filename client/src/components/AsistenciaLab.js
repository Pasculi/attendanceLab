import React from "react";
import "./AsistenciaLab.css";
import logo from "../images/logo.png";

const AsistenciaLab = (onPupop) => {
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}/${month}/${year}`;
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onPupop(true);
    console.log("Ingresando datos...");
  }

  return (
    <div className="container">
      <div className="header">
        <img className="header__logo" src={logo} alt="" />
        <h1 className="header__title">
          Asistencia a laboratorio de computación
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="form__asistencia-lab" action="">
        <div className="container__fecha">
          <label htmlFor="fecha" id="fecha_titulo">
            Fecha:
          </label>{" "}
          <input
            type="text"
            name="fecha"
            id="fecha"
            placeholder={getDate()}
            value={getDate()}
            disabled
          />
        </div>
        <div className="div">
          <div className="div-group">
            <label htmlFor="curso">Curso</label>{" "}
            <select type="text" name="curso" className="curso">
              <option value="null">--Seleccionar--</option>
              <option value="">NT1A</option>
              <option value="">NT1B</option>
              <option value="">NT2A</option>
              <option value="">NT2B</option>
              <option value="">1ero Básico A</option>
              <option value="">1ero Básico B</option>
              <option value="">2do Báscico A</option>
              <option value="">2do Báscico B</option>
              <option value="">3er Básico A</option>
              <option value="">3er Básico B</option>
              <option value="">4to Básico A</option>
              <option value="">4to Básico A</option>
            </select>
          </div>
          <div className="div-group">
            <label htmlFor="matricula">Matricula</label>{" "}
            <input type="text" name="matricula" id="matricula" />{" "}
          </div>
          <div className="div-group">
            <label htmlFor="asistencia">Asistencia</label>{" "}
            <input type="text" name="asistencia" id="asistencia" />{" "}
          </div>
        </div>
        <div className="div-docente">
          <label className="label-titulo" htmlFor="docente">
            Docente
          </label>{" "}
          <select type="text" name="docente" id="docente">
            <option value="">--Seleccionar--</option>
            <option value="">LESLIE SILVANA MARTINEZ PINO</option>
            <option value="">CAROLINA ANDREA ELLWANGER VELIZ</option>
            <option value="">ALEJANDRA BEATRIZ GONZÁLEZ GALLARDO</option>
            <option value="">PATRICIA EUGENIA ESCAREZ PAZ</option>
            <option value="">RENATA VALENTINA MONSERRAT JARAMILLO MUÑOZ</option>
            <option value="">VICTORIA FRANCISCA MENA VERA</option>
            <option value="">JAVIERA FERNANDA KOPP ZÀRATE</option>
            <option value="">ROXANA ANDREA OPORTO AICHELE</option>
            <option value="">LILIAN DEL CARMEN MARTINEZ MORALES</option>
            <option value="">CRISTOBAL FRANCISCO SANTIBAÑEZ LEHNEBACH</option>
            <option value="">CLAUDIA MABEL LARA LEAL</option>
            <option value="">JUANA RETAMAL JIMENEZ</option>
            <option value="">CHRISTOPHER MAURICIO WISTUBA GALAZ</option>
            <option value="">CAROLA HERNA PERALTA MUÑOZ</option>
          </select>
        </div>
        <label htmlFor="herramientas" className="herramientas label-titulo">
          Herramientas a utilizar
        </label>{" "}
        <textarea
          className="area__herramientas"
          name="herramientas"
          id="herramientas"
        ></textarea>
        <label htmlFor="objetivo" className="objetivo label-titulo">
          Objetivo
        </label>{" "}
        <textarea className="area__objetivo" name="objetivo" id="objetivo" />
        <button
          onClick={onPupop}
          className="btn btn__asistencia-lab"
          type="submit"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default AsistenciaLab;
