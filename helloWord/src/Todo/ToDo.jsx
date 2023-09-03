import { useState } from "react";
import { Link } from "react-router-dom";

export default function UparImagem() {
//O "useState" está criando uma variável, chamada "selecionarImagem" e também a função "setSelecionar imagem" para que a função "selecionarImagem" seja atualizada. selecionarImagem está sendo definida como "null", pois ela não vai conter imagens até o usuário inserir.
//O useState permite que você adicione estado a um componente funcional no React.
    const [selecionarImagem, setSelecionarImagem] = useState(null);


    //a variável "lista" vai guardar o que o usuário digitar, formando uma lista
    const [lista, setLista] = useState([]);


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
        if (selecionarImagem){
            setLista([...lista, selecionarImagem]);
            setSelecionarImagem(null);
        }
    };

    const removerImagem = (index) => {
        const novaLista = [...lista];
        novaLista.splice(index, 1);
        setLista(novaLista);
    };

    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Galeria de Pixel Art</h1>
            <p>deixe aqui sua Pixel art 😃</p>
            <form> 
                <input type="file" accept="image/*" onChange={procurarArquivo}/>
                {selecionarImagem && (
                  <div>
                    <img
                    src= {selecionarImagem}
                    alt="Image selecionada"
                    className="imagemSelecionada"
                    style={{
                        maxWidth: selecionarImagem.width > selecionarImagem.height ? "400px" : "300px",
                        maxHeight: selecionarImagem.width > selecionarImagem.height ? "300px" : "400px"
                    }}
                    />
                    <button onClick={salvar}>Salvar</button>
                    <button onClick={() => removerImagem(index)}>Remover</button>
                  </div>
                )}
            </form>
            <div>
                {lista.map((imagemURL, index) => (
                 <div key={index}>
                     <img
                     src={imagemURL}
                     alt={`Imagem ${index + 1}`}   
                     className="imagemSelecionada"
                     style={{
                        maxWidth: imagemURL.width > imagemURL.height ? "400px" : "300px",
                        maxHeight: imagemURL.width > imagemURL.height ? "300px" : "400px"
                    }}
                    />
                    <button onClick={() => removerImagem(index)}>Remover</button>
                </div>
                ))}
            </div>
        </div>
        //O map vai percorrer cada item da lista. Isso vai fazer com que, para cada item, seja criado um parágrafo.
    );
}    
