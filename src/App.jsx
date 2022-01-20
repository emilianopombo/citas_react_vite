import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPaciente from './components/ListadoPaciente'



function App() {
  const [pacientes,setPacientes] = useState([]);
  const [paciente,setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
    }
    obtenerLS();
  },[]);


  useEffect(() => {
    localStorage.setItem('pacientes',JSON.stringify( pacientes) );

  },[pacientes])

  const eliminarPaciente = id => { //carga paciente que sean distintos al id pasado por parametro para conservarlos , dejando afuera el que es igual al id
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }
  

  return (
    <div className="container mx-auto mt-20">
      <Header
      
      />
      <div className='mt-12 md:flex'>
        <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}

        />
        <ListadoPaciente
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
