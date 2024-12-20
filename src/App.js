import { useState } from 'react';
import Banner from './components/Banner';
import { Formulario } from './components/Form';
import Team from './components/Team';
import Footer from "./components/Footer";
import Organization from './components/Organization';

function App() {

  const teams = [
    {
      name: 'Front End',
      firstColor: '#E8F8FF',
      secondColor: '#82CFFA'
    },
    {
      name: 'Programação',
      firstColor: '#D9F7E9',
      secondColor: '#57C278'
    },
    {
      name: 'Mobile',
      firstColor: '#FFF5D9',
      secondColor: '#FFBA05'
    },
    {
      name: 'Inovação e Gestão',
      firstColor: '#FFEEDF',
      secondColor: '#FF8A29'
    },
    {
      name: 'Devops',
      firstColor: '#FDE7E8',
      secondColor: '#E06B69'
    },
    {
      name: 'Data Science',
      firstColor: '#F0F8E2',
      secondColor: '#A6D157'
    },
    {
      name: 'UX e Design',
      firstColor: '#FAE9F5',
      secondColor: '#DB6EBF'
    },
  ];

  const [colaborators, setColaborators] = useState([]);

  const onRegister = (colaborator) => {
    // Debugger ferramenta utilizada para debeugar o código no navegador.
    // debugger
    setColaborators([...colaborators, colaborator]);
  }

  return (
    <>
      <Banner />
      <Formulario teams={teams.map(team => team.name)}
        onRegister={colaborator => onRegister(colaborator)} />

      <Organization />

      {teams.map(team =>
        <Team
          key={team.name}
          name={team.name}
          firstColor={team.firstColor}
          secondColor={team.secondColor}
          colaborators={
            colaborators.filter(colaborator => colaborator.team == team.name)
          }
        />)}

      <Footer />
    </>
  );
}

export default App;
