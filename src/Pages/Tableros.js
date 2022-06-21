import { Component } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Cookies from 'universal-cookie';
import {connect} from 'react-redux';
import { showTables } from '../actions';
import Cookies from 'universal-cookie'
import { Table,Button  } from 'react-bootstrap';
import moment from 'moment'
import {newTable} from '../api/table/newTable'
import {joinTable} from '../api/table/joinTable'
import NavBar from '../components/NavBar/NavBar';

const cookie = new Cookies();
const token = cookie.get('authToken')
const playerId = cookie.get('playerId')


class Tableros extends Component{

    componentDidMount(){
        // console.log('will mount')
        // TODO: Descomentar setInterval
        setInterval(() => this.props.showTables(token), 1000); // Con esto estoy haciendo las peticiones a la api cada X ms
        //this.props.showTables(token)
        //console.log('this.props.showTables() => ',this.props.showTables(token))
    }

    renderTablesList(){

        const games = this.props.tables.filter((g) => g.status_game ==='creado') //Filtro solamente los creados
        return games.map((table) => {
            return (     
                <tr key={table.id} className='tablero'>
                    <td>
                        {`${table.id} created: ${moment(table.created_at).format('Do MMMM YYYY, h:mm')}`}
                    </td>
                    <td> {table.status_game}</td>
                    <td>
                    <Button variant='primary' key={table.id} onClick={() => 
                    {
                        joinTable(token,table.id,playerId).then((res) =>{
                            console.log('esta es la res => ',res)
                            window.location.href=`/App/${res.table.id}`
                        }).catch((err) => {
                            console.log('error => ',err);
                        })

                        // newTable(token).then((res) => {
                        //     // console.log('ESTA ES LA RES => ',res.table.id);
                        //     window.location.href=`/App/${res.table.id}`

                        // });
                    }
                }>Join</Button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return(
            <div>
            <div className='navbar'> 
            <NavBar></NavBar>
            </div>
            <div className='container'>
            <div className='tableContainer'>
                <h1>Tables List</h1>
                <Table responsive className='tablero'>
                    <thead className='tablero'>
                        <tr className='tablero'>
                            <th >ID</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTablesList()}
                    </tbody>
                </Table>
                </div>
                <Button variant='success' onClick={() => 
                {
                    newTable(token).then((res) => {
                        // console.log('ESTA ES LA RES => ',res.table.id);
                        window.location.href=`/App/${res.table.id}`

                    });
                }
                }>New Game</Button>
            </div>
            </div>

        )
    }
}

function mapStateToProps(state){
    console.log('mapStateToProps => ',state)

    return{
      tables: state.tables.tables
    }
}

export default connect(mapStateToProps ,{ showTables })(Tableros);