import React, {Component, Fragment} from 'react';
import "./home.scss"
import { addDataToAPI,getDataFromAPI,updateDataFromAPI, deleteDataFromAPI } from '../../Config/redux/action/action';
import "../../Config/redux/reducer/reducer"
import { connect } from 'react-redux';

class Dashboard extends Component{
    state= {
        title:'',
        content:'',
        date:'',
        textButton:'SIMPAN',
        noteId:''
    }

    componentDidMount(){
        const userData = JSON.parse(localStorage.getItem('userData'))
        this.props.getNotes(userData.uid);
    }

    handleSaveNotes = () => {
        const{title,content,textButton,noteId} = this.state;
        const{ saveNotes, updateNotes } = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'))
        
        const data = {
            title : title,
            content : content,
            date: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            userId: userData.uid
        }
        if(textButton === 'SIMPAN'){
            saveNotes(data)
        }
        else{
            data.noteId = noteId;
            updateNotes(data)
        }
        console.log(data)
    }

    onInputChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    updateNotes = (note) =>{
        console.log(note)
        this.setState({
            title: note.data.title,
            content:note.data.content,
            textButton:'UPDATE',
            noteId: note.id
        })
    }

    cancelUpdate = () =>{
        this.setState({
            title: '',
            content:'',
            textButton:'SIMPAN'
        })
    }

    deleteNote = (e,note) => {
        e.stopPropagation();
        const {deleteNote} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'))
        const data={
            userId: userData.uid,
            noteId: note.id,
        }
        alert('Apakah anda ingin menghapus Notes ini? ');
        deleteNote(data)
    }

    render(){
        const {textButton} = this.state;
        const {notes} = this.props;
        const {updateNotes, cancelUpdate, deleteNote} = this;
        console.log('notes: ',notes);
        return(

            <div className="container">
                <div className="input-form">
                    <input id="title" placeholder="title" type="text" className="input-title" onChange={this.onInputChange} value={this.state.title}/>
                    <textarea id="content" placeholder="content" type="text" className="input-content" onChange={this.onInputChange} value={this.state.content}>
                    </textarea>
                    <div className="action-wrapper">
                        {
                            textButton === 'UPDATE' ? (
                                <button onClick={this.handleSaveNotes} className="save-btn cancel" onClick={cancelUpdate}>Cancel</button>
                            ) : null
                        }     
                        <button onClick={this.handleSaveNotes} className="save-btn">{textButton}</button>
                    </div>
                    
                </div>
                <hr/>
                {
                    notes.length > 0 ? (
                        <Fragment>
                            {
                                notes.map(note => {
                                    return(
                                        <div className="card-content" key={note.id} onClick={() => updateNotes(note)}>
                                        <p className="title">{note.data.title}</p>
                                        <p className="date"> tanggal: {note.data.date} / bulan: {note.data.month} / tahun: {note.data.year}</p>
                                        <p className="content">{note.data.content}</p>
                                        <div className="delete-btn" onClick={(e) => deleteNote(e, note)}>x</div>
                                    </div>
                                    )
                                })
                            }
                        </Fragment>    
                     ) : null
                }    
            </div>
        )
    }
}
const reduxState = (state) => ({
    userData: state.user,
    notes: state.notes

})

const reduxDispatch = (dispatch) => ({
    saveNotes : (data) => dispatch(addDataToAPI(data)),
    getNotes: (data) => dispatch(getDataFromAPI(data)),
    updateNotes: (data) => dispatch(updateDataFromAPI(data)),
    deleteNote:(data) => dispatch(deleteDataFromAPI(data))
})

export default connect(reduxState,reduxDispatch)(Dashboard);