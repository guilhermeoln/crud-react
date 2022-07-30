import React,{ useState } from "react";
import firebase from '../../firebaseConnection';
import { toast } from 'react-toastify';
import './addAlunos.css'


function AdicionarAlunos(){

    const [nomeAluno, setNomeAluno] = useState('');
    const [idadeAluno, setIdadeAluno] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [plano, setPlano] = useState('');


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
        }).catch(() => toast.warn('Erro ao cadastrar o usuario!'))
    }






   return(
    <div className="container-add">
        <h3>Nome</h3>
        <input type='text' placeholder="Digite o nome do aluno" value={nomeAluno} onChange={(e) => setNomeAluno(e.target.value)}/>
        <h3>Idade</h3>
        <input type='text' placeholder="Digite a idade do aluno" value={idadeAluno}onChange={(e) => setIdadeAluno(e.target.value)}/>
        <h3>Plano</h3>
        <input type='text' placeholder="Digite o plano do aluno" value={plano}onChange={(e) => setPlano(e.target.value)}/>
        <h3>Vencimento</h3>
        <input type='text' placeholder="Digite o vencimento" value={vencimento}onChange={(e) => setVencimento(e.target.value)}/>
        <br/>
        <button onClick={ handleAdd }>Adicionar Aluno</button>
    </div>
   );
}


export default AdicionarAlunos;