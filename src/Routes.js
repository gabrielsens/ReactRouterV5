import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring'; 

import Home from './pages/Home';
import Posts from './pages/Posts'
import NotFound from './pages/NotFound';
import Post from './pages/Post';

export default function Routes() {
    const location = useLocation();
    const transition = useTransition(location, {
        from: { opacity: 0, transform: 'translateY(50px)', position: 'absolute' },
        enter: { opacity: 1, transform: 'translateY(0px)', position: 'absolute' },
        leave: { opacity: 0, transform: 'translateY(50px)', position: 'absolute' },
    });

    return transition((props, item) => 
        (
            // Path é para onde é direcionado ou seja a ROTA e Component é o que será renderizado
            // O * é o wild card  (curinga) que vai renderizar os componentes não encontrados
            // Caso queira não precisa passar o path="*" pode deixar vazio passando somente o component
            //Switch Irá realizar a renderização somente da primeira rota que for identificada como válida
            // Devido a isso o notfound deve ser sempre o ultimo na ordem de renderizacão
            <animated.div style={props}>
                <Switch location={item}>
        
                    <Route exact path="/" component={Home} />
        
                    <Route exact path="/posts" component={Posts} />
                    <Route  path="/posts/:id" component={Post} />
        
                    <Route path="*" component={NotFound} />
                </Switch>
            </animated.div>
    
        )
    );
    
    
    
    
}

