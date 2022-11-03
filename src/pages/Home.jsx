import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';


const Home = () => {
  return (
      <Container fluid >
         <Row>
            <Col>
               <h2 className="mt-3">Historial de encuentas</h2>
            </Col>
         </Row>

         <Row>
            <Col>
               <Table striped bordered hover variant="light">
                  <thead>
                     <tr>
                        <th>#</th>
                        <th>Folio</th>
                        <th>Trabajador</th>
                        <th>Fase 1</th>
                        <th>Fase 2</th>
                        <th>Fase 3</th>
                        <th>Fase 4</th>
                        <th>Acciones</th>
                     </tr>
                  </thead>

                  <tbody>
                     <tr>
                        <td>1</td>
                        <td>Gruas Santa Fe</td>
                        <td>María Luisa Bernal</td>
                        <td>Iniciar F1</td>
                        <td>Iniciar F2</td>
                        <td>Iniciar F3</td>
                        <td>Iniciar F4</td>
                        <td>Aqui van acciones</td>
                     </tr>
                     <tr>
                        <td>2</td>
                        <td>Gruas Santa Fe</td>
                        <td>Gerardo Hernandez</td>
                        <td>Iniciar F1</td>
                        <td>Iniciar F2</td>
                        <td>Iniciar F3</td>
                        <td>Iniciar F4</td>
                        <td>Aqui van acciones</td>
                     </tr>
                     <tr>
                        <td>3</td>
                        <td>Carpinteria</td>
                        <td>Francisco Guevara</td>
                        <td>Iniciar F1</td>
                        <td>Iniciar F2</td>
                        <td>Iniciar F3</td>
                        <td>Iniciar F4</td>
                        <td>Aqui van acciones</td>
                     </tr>
                     <tr>
                        <td>4</td>
                        <td>Carpinteria</td>
                        <td>Mario</td>
                        <td>Iniciar F1</td>
                        <td>Iniciar F2</td>
                        <td>Iniciar F3</td>
                        <td>Iniciar F4</td>
                        <td>Aqui van acciones</td>
                     </tr>
                  </tbody>
               </Table>
            </Col>
         </Row>
      </Container>
  )
}

export default Home