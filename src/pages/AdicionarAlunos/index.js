import React,{ useState } from "react";
import firebase from '../../firebaseConnection';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FcHome } from "react-icons/fc";
import './addAlunos.css'


function AdicionarAlunos(){

    const [nomeAluno, setNomeAluno] = useState('');
    const [idadeAluno, setIdadeAluno] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [plano, setPlano] = useState('');

    const navigate = useNavigate();


    async function handleAdd(){
        await firebase.firestore().collection('alunos')
        .add({
            Vencimento: vencimento,
            idade: idadeAluno,
            plano: plano,
            nome: nomeAluno
        }).then(()=>{
            toast.success('Aluno cadastrado com sucesso!')
            setIdadeAluno('');
            setNomeAluno('');
            setPlano('');
            setVencimento('');
            navigate('/', { replace: true})
        }).catch(() => toast.warn('Erro ao cadastrar o usuario!'))
    }

    function goHome(){
        navigate('/', { replace: true})
    }






   return(
    <div className="container-add">
        <h3>Nome</h3>
        <input type='text' placeholder="Digite o nome do aluno" value={nomeAluno} onChange={(e) => setNomeAluno(e.target.value)}/>
        <h3>Idade</h3>
        <input type='number' min='8' placeholder="Digite a idade do aluno" 
        value={idadeAluno}onChange={(e) => setIdadeAluno(e.target.value)}/>
        <h3>Plano</h3>
        <select value={plano} onChange={(e) => setPlano(e.target.value)}>
            <option>Anual</option>
            <option>Mensal</option>
            <option>Trimestral</option>
        </select>
        <h3>Vencimento</h3>
        <input type='text' min='1' max=''placeholder="Digite o vencimento" value={vencimento}onChange={(e) => setVencimento(e.target.value)}/>
        <br/>
        <button onClick={ handleAdd }>Adicionar Aluno</button>
        <button onClick={ goHome } className='btn-home'><FcHome className="icon-home"/>Home</button>
    </div>
   );
}


export default AdicionarAlunos;