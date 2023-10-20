import { func } from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UparImagem() {
//O "useState" está criando uma variável, chamada "selecionarImagem" e também a função "setSelecionar imagem" para que a função "selecionarImagem" seja atualizada. selecionarImagem está sendo definida como "null", pois ela não vai conter imagens até o usuário inserir.
//O useState permite que você adicione estado a um componente funcional no React.
    const [selecionarImagem, setSelecionarImagem] = useState(null);


    //a variável "lista" vai guardar o que o usuário digitar, formando uma lista
    const [lista, setLista] = useState( listaLocalStorage || []);
    
    const listaLocalStorage = localStorage.getItem("Lista");

    console.log(localStorage)

    useEffect(() => {localStorage.setItem("Lista", JSON.stringify(lista))},[lista]);

    // A função "procurarArquivo" vai ser chamada quando o usuário escolher uma imagem
    const procurarArquivo = (e) => {

        //Essa const está acessando a propriedade files do elemento de input do arquivo (e.target.files). Como o "input" aceita vários arquivos, está sendo considerado apenas o primeiro, por isso o índice "[0]"
        //O target é uma referência ao objeto que enviou o evento. Por exemplo, quando você quer captuar o que foi dgitado em um campo input de um form, você utiliza o "event.target.value", ou seja, você irá capturar do input do form o valor que foi digitado.
        const arquivoSelecionado = e.target.files[0];

        //Esse if vai verificar se, caso o arquivo não seja "null" ou indefinido, o usuário selecionou um arquivo
        if(arquivoSelecionado){

            //Se um arquivo foi selecionado, a função "URL.createObjectURL" vai criar uma URL para meio que "representar" o arquivo que vai ser selecionado. A mesma é atribuida a variável "arquivoSelecionado" usando setSelecionarImagem, o que faz com que a imagem seja exibida na página.
            const imagemURL = URL.createObjectURL(arquivoSelecionado);
            setSelecionarImagem(imagemURL);
        }
    };

    const salvar = () => {
        // o "if (selecionarImagem)" vai ver se uma imagem foi selecionada
        if (selecionarImagem){
            //o "setLista" vai pegar a imagem que o usuário selecionou e vai atualizar o estado "lista"
            setLista([...lista, selecionarImagem]);
            //a seleção de imagem é definida como nula novamente, permitindo que outra imagem seja selecionada
            setSelecionarImagem(null);
        }
    };

    const removerImagem = (index) => {
        //é feita uma cópia da lista existe, chamada "novaLista"
        const novaLista = [...lista];


        //a função "novaLista.splice(index, 1);" vai remover a imagem de acordo com o índice
        novaLista.splice(index, 1);


        //então a lista é definida como "novaLista", sem a imagem removida
        setLista(novaLista);
    };
    //formulário que contém um campo de seleção de arquivo e botões para salvar e remover imagens.
    //o "input" faz com que seja criado um campo de seleção de arquivo que permite ao usuário escolher uma imagem. Quando uma imagem é selecionada, a função procurarArquivo é chamada
    //"{selecionarImagem && (" é uma condição que verifica se há uma imagem selecionada (selecionarImagem) e, se houver, ativa a o que tem dentro dela
    //"<button onClick={() => removerImagem(index)}>Remover</button>"" cria um botão "Remover" que chama a função "removerImagem" com o índice da imagem, quando clicada
    //"{lista.map(...)}" mapeia a lista de imagens e renderiza cada imagem da lista, com um botão "Remover" em cada.
    return (
        <div>
            <Link style={{backgroundColor:"#FF00A2", border:"3px solid #CB0081", borderRadius:"5px", color:"white", fontSize:"30px", textDecoration:"none", padding:"10px 99% 10px 10px", position:"absolute", left:"0", right:"0", display:"flex"}} to="/">Home</Link>
            <h1>Galeria de arte digital</h1>
            <p>deixe aqui a sua 😃</p>
            <form> 
                <input style={{margin:" 10px 0px 10px 0px"}} type="file" accept="image/*" onChange={procurarArquivo}/>
                {selecionarImagem && (
                  <div>
                    <img
                    src= {selecionarImagem}
                    alt="Image selecionada"
                    className="imagemSelecionada"
                    style={{
                        maxWidth: selecionarImagem.width > selecionarImagem.height ? "400px" : "300px",
                        maxHeight: selecionarImagem.width > selecionarImagem.height ? "300px" : "400px",
                        boxShadow:"6px 5px grey"
                    }}
                    />
                    <button style={{alignItems:"right", padding:"7px"}} onClick={salvar}>Salvar</button>
                    <button style={{alignItems:"right", padding:"7px", marginLeft:"9.4%", marginTop:"10px"}} onClick={() => removerImagem(index)}>Remover</button>
                  </div>
                )}
            </form>
            <div style={{ display:"flex", flexWrap:"wrap"}}>
                {lista.map((imagemURL, index) => (
                 <div key={index} style={{margin:"1%", textAlign:"center"}}>
                    <div style={{display:"inline-block"}}>
                     <img
                     src={imagemURL}
                     alt={`Imagem ${index + 1}`}   
                     className="imagemSelecionada"
                     style={{
                        maxWidth: imagemURL.width > imagemURL.height ? "400px" : "300px",
                        maxHeight: imagemURL.width > imagemURL.height ? "300px" : "400px",
                        boxShadow: "6px 5px grey"
                    }}
                    />
                    <div>
                    <button style={{width: "100%", padding:"10px", marginTop: '10px', border: "2px solid #8F07F7", borderRadius: "5px", color: "white", backgroundColor: "#8F07F7", boxShadow: "3px 4px #7106C3"}}onClick={() => removerImagem(index)}>Remover</button>
                </div>
            </div>
        </div>  
                ))}
            </div>
        </div>
        //O map vai percorrer cada item da lista. Isso vai fazer com que, para cada item, seja criado um parágrafo.
    );
}    
