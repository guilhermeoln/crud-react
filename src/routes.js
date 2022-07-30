import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Header from './Components/Header'
import ListarAlunos from "./pages/ListarAlunos";
import AdicionarAlunos from "./pages/AdicionarAlunos";
import EditarAlunos from "./pages/EditarAlunos";



function RoutesApp(){
    return(
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path='/listaAlunos' element={ <ListarAlunos />} />
            <Route path='/adicionarAlunos' element={ <AdicionarAlunos />} />
            <Route path='/editarAlunos' element={ <EditarAlunos />} />
        </Routes>
    </BrowserRouter>
    );

}


export default RoutesApp;