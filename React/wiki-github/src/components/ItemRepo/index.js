/* eslint-disable jsx-a11y/anchor-is-valid */


import { ItemContainer } from "./styles";



function ItemRepo ({item, removerItem }) {

    const remover = () => {
        removerItem(item.id)
    }

    return(
        <ItemContainer>
            <h3>{item.name}</h3>
            <br/>
            <a href={item.html_url} rel="noreferrer" target="_blank">Ver Repositorio</a>
            <a href="#" onClick={remover} className="remove">Remover</a>

            <hr/>
        </ItemContainer>
    );
}

export default ItemRepo;