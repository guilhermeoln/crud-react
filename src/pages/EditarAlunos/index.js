import React, { useState } from 'react';
import { toast } from 'react-toastify';
import firebase from '../../firebaseConnection';
import './editarAlunos.css'



function EditarAlunos(){

    const [matricula, setMatricula] = useState('');
    const [nome, setNome] = useState('');
    const [plano, setPlano] = useState('');
    const [idade, setIdade] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [informacoes, setInformacoes] = useState(false)

    async function pesquisarAluno(){

        await firebase.firestore().collection('alunos').doc(matricula)
        .get()
        .then((snapshot) =>{
            setNome(snapshot.data().nome);
            setIdade(snapshot.data().idade);
            setVencimento(snapshot.data().Vencimento);
            setPlano(snapshot.data().plano);
            setInformacoes(true);
        }).catch((e) => toast.warn('Matrícula Inválida'))
    }

    async function editarInformacoes(){
        await firebase.firestore().collection('alunos').doc(matricula)
        .update({
            nome: nome,
            idade: idade,
            Vencimento: vencimento,
            plano: plano
        }).then(() =>{
            toast.success('Aluno editado com sucesso!')
            setIdade('');
            setMatricula('')
            setPlano('');
            setVencimento('');
            setNome('');
        }).catch(() => toast.warn('ERROR'))
    }


    return(
            <div className='container-edit'>
                <input type='text' value={matricula} placeholder='Digite a matricula' 
                onChange={(e) => setMatricula(e.target.value)} />
                {informacoes
                 ?
                 <div className='form-info'>
                    <h3>Nome</h3>
                    <input type='text' value={nome} onChange={(e) => setNome(e.target.value)}/>
                    <h3>Idade</h3>
                    <input type='number' min='8' value={idade} onChange={(e) => setIdade(e.target.value)}/>
                    <h3>Plano</h3>
                    <select value={plano} onChange={(e) => setPlano(e.target.value)}>
                        <option>Anual</option>
                        <option>Mensal</option>
                        <option>Trimestral</option>
                    </select>
                    <h3>Vencimento</h3>
                    <input type='text' value={vencimento} onChange={(e) => setVencimento(e.target.value)}/>
                    <button onClick={ editarInformacoes }>Editar</button>
                 </div>
                 :
                 ''
                }
                <button onClick={ pesquisarAluno }>Pesquisar</button>
            </div>
    );
}

export default EditarAlunos;