import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/';
import Team from './components/Team';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57C278',
    },

    {
      id: uuidv4(),
      name: 'Front-end',
      color: '#82CFFA',
    },

    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#AED157',
    },

    {
      id: uuidv4(),
      name: 'Devops',
      color: '#E06B69',
    },

    {
      id: uuidv4(),
      name: 'Ux e Design',
      color: '#DB6EBF',
    },

    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05',
    },

    {
      id: uuidv4(),
      name: 'Inovação e gestão',
      color: '#FF8A29',
    },
  ]);

  const[employees, setEmployee] = useState([]);

  const onAdd = (employee) => {
    setEmployee([...employees, employee]);
    console.log(employees);
  }

  const deleteEmployee = (id) => {
    setEmployee(employees.filter(employee => employee.id !== id))
  }

  function changeColor(color, id) {
    setTeams(teams.map(team => {
      if(team.id === id) {
        team.color = color;
      }

      return team;
    }));
  }

  function insertTeam(newTeam) {
    console.log(newTeam)
    setTeams([...teams, {id: uuidv4(), ...newTeam}]);
  }

  function solveFavorite(id) {
    setEmployee(employees.map(employee => {
      if(employee.id === id) employee.favorite = !employee.favorite;
      return employee
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form insertTeam={insertTeam} teams={teams.map(team => team.name)} onCreateEmployee={employee => onAdd(employee)}/>
      {teams.map(team => <Team
        onFavorite={solveFavorite}
        changeColor={changeColor}
        key={team.name} 
        name={team.name} 
        id={team.id}
        primaryColor={team.color} 
        employees={employees.filter(employee => employee.team === team.name)}
        onDelete={deleteEmployee}
        />)}
      <Footer />
    </div>
  );
}

export default App;
