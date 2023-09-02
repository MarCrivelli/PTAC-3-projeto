import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
//O "useState" está criando uma variável, chamada "atividade" e também a função "setAtividade". Atividade está sendo executada como uma string vazia, que vai guardar o que o usuário digitar.
//O useState permite que você adicione estado a um componente funcional no React.
    const [atividade, setAtividade] = useState("");
    //a variável "lista" vai guardar o que o usuário digitar, formando uma lista
    const [lista, setLista] = useState([]);
    //A função "e.preventDefault()" está sendo chamada para evitar o comportamento padrão do documento HTML, que é recarregar a página quando o formulário é enviado
    const salvar = (e) => {e.preventDefault();
    //Após isso a lista é atualizada pela função "setLista". O conteúdo da lista está sendo salvo e em seguida é adicionado um novo trecho como o novo valor de atividade (valor esse que o usuário coloca no "input")
    setLista([...lista, {atividade:atividade}]);};
    return (
        <div>
            <h1>To do List</h1>
            <Link to="/">Home</Link>
            <h1>Lista de atividades</h1>
            <p>{atividade}</p>
            <form onSubmit={salvar}> 
                <input value={atividade}
                //O target é uma referência ao objeto que enviou o evento. Por exemplo, quando você quer captuar o que foi dgitado em um campo input de um form, você utiliza o "event.target.value", ou seja, você irá capturar do input do form o valor que foi digitado.
                onChange={(e)=> setAtividade(e.target.value)}/>
                <button>ADD</button>
            </form>
            {lista.map((ativ)=> <p>{ativ.atividade}</p>)}
        </div> 
         //O map vai percorrer cada item da lista. Isso vai fazer com que, para cada item, seja criado um parágrafo.
    );
}