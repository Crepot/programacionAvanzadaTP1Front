import { Component } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import { useParams } from 'react-router';
import NavBar from '../components/NavBar/NavBar';
import '../css/App.css';
import Board from '../components/Board/Board';
import ScoreBoard from '../components/ScoreBoard/ScoreBoard';
import Cookies from 'universal-cookie';
import useTable from '../hooks/useTable'

const cookie = new Cookies();
const token = cookie.get('authToken')

// class Application extends Component{
export default function Application() {
    const tablaId = useParams()
    console.log('tablaId => ',tablaId)


    const {table,loading,error} = useTable(token,tablaId)


    // console.log('este es un => ',game)
    // const token = cookie.get('authToken')
    // console.log('EL TOKEN DE LA COOKIE ES: ',token)
    console.log('loading ==> ',loading)
    console.log('tabla ==> ',table)

    return loading ? (
        <div>
        <div className='navbar'>
        <NavBar>{}</NavBar>
        </div>
        <div className='container'> 
        <Board turn={''} squares={''} onClick={''} winningSquares={''}/>
        <ScoreBoard scoreO={''} scoreX={''} />
        </div>
        </div>
    ):(
        <h1>Loading...</h1>
    );
    
};

// function mapStateToProps(state){
//     console.log('mapStateToProps => ',state)
//     // return{
//     //   table: state.table.table
//     // }
// }

//export default Application;
//export default connect(mapStateToProps ,{ showCurrentTable })(Application);
