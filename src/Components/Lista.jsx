import series from "../Services/dados"

const Lista = () =>{
    return(
        <div>
            {series.map(serie => 
              <div key={serie.id}>
                  <img width={100} src={serie.imagem}/>
                  <h1>{serie.nome}</h1>
                  <h2>{serie.descrição}</h2>
              </div>               
           )}
        </div>
    )
}

export default Lista