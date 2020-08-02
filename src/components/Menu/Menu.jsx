import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  FormControl,
  Button,
  Card,
  CardDeck,
} from "react-bootstrap";
import IconoBuscar from "../../img/IconoBuscar.svg";
import IconoClear from "../../img/IconoClear.svg";
import RepoAvatar from "../../img/Repoimg.jpg";
import { connect } from "react-redux";
import * as actions from "../../actions/actions"




class Menu extends Component{

  state ={
    user: ""
  }
  
handleChange = (e) =>{
  const {value} = e.target
  e.preventDefault();
  this.setState({ user: value})
}

  render(){
      const{lista, info}=this.props;
      const{user} = this.state;
    return (
      <div>
        <header className="header">
          <h1 className="tituloBienvenido">Bienvenido {user!=="" && user} !</h1>
          <span>Consulta tus repos </span>
        </header>

        <Container className="Buscar">
          <Row>
            <Col md={{ span: 6, offset: 3 }} className="d-flex">
              <InputGroup className=" mr-sm-2">
                <FormControl
                  id="inlineFormInputGroupUsername2"
                  placeholder="Buscar..."
                  onChange={this.handleChange} value={user} 
                />
                <Button type="submit" className="btnBuscar" alt="Buscar" onClick={()=>{ this.props.hacerFetch(user); this.props.hacerFetchUser(user)}} >
                  <img src={IconoBuscar} className="IconoBuscar"   />
                </Button>
              </InputGroup>
  
              <Button type="submit" className="btnRound">
                <img src={IconoClear} className="IconoClear" alt="Clear" onClick={this.imprimir} />
              </Button>
            </Col>
          </Row>
        </Container>
        <Container className="cards">
          <Row className="justify-content-md-center">
            <CardDeck className="mt-4">
        {lista[0] !== null  ? 
            info === [undefined] ?
            <h1>No encontrado</h1>
            :
              <React.Fragment> <Col md={4}>
                     <Card>
                        <Card.Img variant="top" src={info.avatar_url} /> 
                            <Card.Body>
                              <Card.Title>
                                  User <span className="type">{info.login}</span>
                                   </Card.Title>
                                   <Card.Text>
                                     <div className="title">
                                       <div className="subTitle"> location</div>{info.location}
                                     </div>
                                     <div className="title">
                                       <div className="subTitle">url: </div>
                                      {info.url}
                                     </div>
                                     <div className="title">
                                       <div className="subTitle">Date: </div>{info.created_at}
                                     </div>
                          </Card.Text>
                      </Card.Body>
                    </Card>
                 </Col>  
               
                {lista.map(
                 (repo) =>{
                  return(
                    <Col md={4}>
                               <Card>
                                 <p>{repo.name}</p>
             
                               </Card>
                      </Col>
                  )
                  }
                ) 
                }  
                </React.Fragment>   
                :      
                <Col xs={8}>
                  <Card>
                    <h3>Ingresa usuario para buscar</h3>
                  </Card>
                </Col> 
            }
   
            </CardDeck>
          </Row>
        </Container>
      </div>
    );
  }

}

const mapStatetoProps = state =>({
    user:state.user,
    cargando: state.cargando,
    lista: state.lista,
    info: state.userInfo
  });
  
  const mapDispatchToProps = {
    traerTodas: actions.traerTodas,
    hacerFetch: actions.hacerFetch,
    hacerFetchUser : actions.hacerFetchUser,

  };
  
  export default connect(
    mapStatetoProps,
    mapDispatchToProps
  )(Menu);