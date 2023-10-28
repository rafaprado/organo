import Field from "../Field";
import Select from "../Select";
import Button from '../../components/Button';
import { useState } from 'react';
import './Form.css';
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    const [teamName, setTeamName] = useState('');
    const [teamColor, setTeamColor] = useState('');
    const id = uuidv4();

    function onSave(event) {
        event.preventDefault();    

        props.onCreateEmployee({
            id,
            name,
            role,
            image,
            team,
            favorite: false
        });

        setName('');
        setRole('');
        setImage('');
        setTeam('');
    }


    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Field mandatory={true} valor={name} onSub={value => setName(value)} label="Nome" placeholder="Digite o seu nome" />
                <Field mandatory={true} label="Cargo" valor={role} onSub={value => setRole(value)} placeholder="Digite o seu cargo" />
                <Field label="Imagem" valor={image} onSub={value => setImage(value)} placeholder="Digite o endereço da imagem" />
                <Select mandatory={true} valor={team} onSub={value => setTeam(value)} label="Times" items={props.teams}></Select>
                <Button>
                    Criar card
                </Button>
            </form>
           
            <form onSubmit={event => {
                    event.preventDefault(); 
                    props.insertTeam({name: teamName, color: teamColor});
                }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Field mandatory valor={teamName} onSub={value => setTeamName(value)} label="Nome" placeholder="Digite o nome do time" />
                <Field mandatory={true} type="color" label="Cor" valor={teamColor} onSub={value => setTeamColor(value)} placeholder="Digite a cor do time" />
                <Button>
                    Criar um novo time
                </Button>
            </form>
        </section>
    )
};

export default Form;