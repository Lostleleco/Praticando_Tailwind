import Footer from './components/footer/footer';
import Produtos from './components/produtosApi/produtos';
import './index.css';

function App() {
  return (

    <>
      <h1 className="text-3xl font-bold text-center bg-slate-950 p-7 text-blue-500 mb-4">Bem vindos a minha loja de produtos Fakes</h1>
      <Produtos />
      <Footer />
    </>
  );
}

export default App;
