import firebase from '../../firebaseConnection';
import React, {useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './listaAlunos.css'

function ListarAlunos(){

    const [listaAlunos, setListaAlunos] = useState([]);
    const navigate = useNavigate();



    useEffect(() =>{

        async function loadLista(){

            let lista = [];

            await firebase.firestore().collection('alunos')
            .onSnapshot((doc) =>{
                doc.forEach((item) =>{
                    lista.push({
                        id: item.id,
                        vencimento: item.data().Vencimento,
                        nome: item.data().nome,
                        plano: item.data().plano,
                        idade: item.data().idade
                    })
                })

                setListaAlunos(lista)
            })

        }

        loadLista();



        
    },[])

    async function excluirAluno(id){

        await firebase.firestore().collection('alunos').doc(id).delete()
        .then(() =>{
            toast.warn('Aluno Excluido com sucesso! ')
            navigate('/', { replace: true})
        })

    }




    return(
        <div className='container-lista'>
            <ul>
                {listaAlunos.map((element) =>{
                    return(
                        <li key={element.id}>
                            <span>Matricula : {element.id}</span><br/>
                            <span>Nome: {element.nome}</span><br/>
                            <span>Idade: {element.idade}</span><br/>
                            <span>Plano: {element.plano}</span><br/>
                            <span>Vencimento: {element.vencimento}</span><br/>
                            <button onClick={() => excluirAluno(element.id)}>Excluir Aluno</button>
                        </li>
                    );
                })}
            </ul>

        </div>
    );
}


export default ListarAlunos;