import './home.css'
import { Link } from 'react-router-dom';

import { FcConferenceCall } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcSettings } from 'react-icons/fc'
import { FcPlus } from "react-icons/fc";



function Home(){

    return(
        <div className='container-home'>
            <div className='box'>
                <p> <FcConferenceCall className='icons'/> </p>
                <Link to='/adicionarAlunos' className='btn btn-add'><FcPlus className='btn-add'/>Adicionar Aluno</Link>
            </div>
            <div className='box'>
                <p><FcTodoList className='icons'/></p>
                <Link to='/listaAlunos' className='btn btn-exibir'><FcTodoList className='icon-exibir'/>Exibir Alunos</Link>
            </div>
            <div className='box'>
                <p><FcPortraitMode className='icons'/></p>
                <Link to='/editarAlunos' className='btn btn-edit'><FcSettings className='icon-edit'/>Editar Alunos</Link>
            </div>
        </div>
    );
}

export default Home;