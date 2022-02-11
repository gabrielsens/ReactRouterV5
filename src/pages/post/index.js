import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
 
export default class Post extends React.Component {
constructor (props) {
    super(props);
    const { search } = this.props.location;
    this.queParams = new URLSearchParams(search);
}

    handleNavigate = () => {
        this.props.history.push('/')
    }

    render() {
        console.log(this.props.match.params)
        console.log(this.props.location.search)
        console.log(this.queParams.get('meuQueryParam'));
        return (
            <>
                <h1>Post Page</h1>
                <button onClick={this.handleNavigate}>voltar para a home</button>
            </>
        );
    }
}


// export default function Post() {
//     // Para pegar os parametros
//     const params = useParams();
//     // Para pegar as querys
//     const location = useLocation();
//     const { search } = useLocation();
//     const queryParams = useMemo(() => new URLSearchParams(search, [search]));
//     // Para pegar o parametro do query
//     console.log({ params, location, search}, queryParams.get('meuQueryParam'));

//     return (
//         <h1>Post...</h1>
//     );
// }a