import React from 'react';
import { Route, Switch } from 'react-router-dom';
 
import Home from './pages/Home';
import Posts from './pages/Posts'
import NotFound from './pages/NotFound';


export default function Routes() {
    return (
        // Path é para onde é direcionado ou seja a ROTA e Component é o que será renderizado
        // O * é o wild card  (curinga) que vai renderizar os componentes não encontrados
        // Caso queira não precisa passar o path="*" pode deixar vazio passando somente o component
        //Switch Irá realizar a renderização somente da primeira rota que for identificada como válida
        // Devido a isso o notfound deve ser sempre o ultimo na ordem de renderizacão
        <Switch>

            <Route exact path="/" component={Home} />

            <Route  path="/posts" component={Posts} />

            <Route path="*" component={NotFound} />
        </Switch>

    )
}

