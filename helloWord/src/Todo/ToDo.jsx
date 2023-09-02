import { useState } from "react";
import { Link } from "react-router-dom";

export default function UparImagem() {
//O "useState" está criando uma variável, chamada "selecionarImagem" e também a função "setSelecionar imagem" para que a função "selecionarImagem" seja atualizada. selecionarImagem está sendo definida como "null", pois ela não vai conter imagens até o usuário inserir.
//O useState permite que você adicione estado a um componente funcional no React.
    const [selecionarImagem, setSelecionarImagem] = useState(null);
    //a variável "lista" vai guardar o que o usuário digitar, formando uma lista
    const [lista, setLista] = useState([]);
    //A função "e.preventDefault()" está sendo chamada para evitar o comportamento padrão do documento HTML, que é recarregar a página quando o formulário é enviado
    const salvar = (e) => {e.preventDefault();
    //Após isso a lista é atualizada pela função "setLista". O conteúdo da lista está sendo salvo e em seguida é adicionado um novo trecho como o novo valor de selecionarImagem (valor esse que o usuário coloca no "input") 
    setLista([...lista, {selecionarImagem:selecionarImagem}]);};

    // A função "procurarArquivo" vai ser chamada quando o usuário escolher uma imagem
    const procurarArquivo = (e) => {
        //Essa const está acessando a propriedade files do elemento de input do arquivo (e.target.files). Como o "input" aceita vários arquivos, está sendo considerado apenas o primeiro, por isso o índice "[0]"
        const arquivoSelecionado = e.target.files[0];
        if(arquivoSelecionado){
            setSelecionarImagem(URL.createObjectURL(arquivoSelecionado));
        }
    }
    return (
        <div>
            <h1>To do List</h1>
            <Link to="/">Home</Link>
            <h1>Galeria de Pixel Art</h1>
            <form onSubmit={salvar}> 
                <input value={selecionarImagem}
                //O target é uma referência ao objeto que enviou o evento. Por exemplo, quando você quer captuar o que foi dgitado em um campo input de um form, você utiliza o "event.target.value", ou seja, você irá capturar do input do form o valor que foi digitado.
                onChange={(e)=> S(e.target.value)}/>
                <button>ADD</button>
            </form>
            {lista.map((ativ)=> <p>{ativ.selecionarImagem}</p>)}
        </div> 
         //O map vai percorrer cada item da lista. Isso vai fazer com que, para cada item, seja criado um parágrafo.
    );
}