import React, { useState } from 'react'

export default function Home() {
    var [todo, setTodo] = useState('')
    var [list, setItems] = useState([])
    const [DarkMode, setTheme] = useState(sessionStorage.getItem("DarkMode"))
    
    if(DarkMode === null){
        sessionStorage.setItem('DarkMode','false')
        setTheme('false')
      }else if(DarkMode === 'true'){
        document.body.setAttribute("style", "background-image: url('https://us.123rf.com/450wm/lisaalisaill/lisaalisaill1801/lisaalisaill180100097/93447879-starry-sky-hand-draw-seamless-pattern-doodle-rings-and-crosses-in-galaxy-and-stars-style-endless-bac.jpg?ver=6')")
    }else{
        document.body.setAttribute("style","background-image: none")
    }

    const changeHandler = (event) => {
        if (event.target.checked === true) {
            sessionStorage.setItem("DarkMode","true")
            setTheme('true')
        } else {
            
            sessionStorage.setItem("DarkMode","false")
            setTheme('false')
        }
    }
    const keyBoardHandle = (event) => {
        setTodo(event.target.value)
    }

    const submitHandle = () => {
        setItems(oldItems => [...oldItems, todo])
        setTodo('')
    }
    const markDone = (event) => {
        if (event.target.style.textDecoration === '') {
            event.target.style = 'text-decoration: line-through'
        } else {
            event.target.style = 'text-decoration: '
        }
    }
    const reset = () => {
        setItems([])
    }
    return (
        <div className="card">
            <div className="card-header" style={DarkMode === 'false'?{backgroundColor: '#ffffff'}:{background: 'linear-gradient(180deg, rgba(56,56,56,1) 0%, rgba(36,36,36,1) 5%, rgba(0,0,0,1) 100%)'}}>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                        onChange={changeHandler} defaultChecked={DarkMode === 'false'? false: true} />
                    <label className="form-check-label" style={DarkMode === 'true'?{color: 'white'}:{color: 'black'}}>Toggle Dark Mode</label>
                </div>
            </div>
            <div className="card-body" style={DarkMode === 'false'?{backgroundColor: '#ffffff', color: 'black'}:{backgroundColor: '#121212', color: 'white'}}>
                <div className='row'>
                    <div className='col-lg-2 col-sm-0'></div>
                    <div className='col-lg-8 col-sm-12'>
                        <h5 className="card-title">Your Todo List</h5><small>click your list to mark as done</small>
                        <div className="list-group my-2">
                            {list.map(data => { return (<li className="list-group-item" style={DarkMode === 'true'?{color: 'white', backgroundColor: '#121212'}:{color: 'black',backgroundColor: 'white'}} onClick={markDone} key={data}>{data}</li>) })}
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Add Todo</span>
                            <input value={todo} onChange={keyBoardHandle} className="form-control" />
                            <button onClick={submitHandle} className="btn btn-warning">Add</button>
                        </div>
                    </div>
                    <div className='col-lg-2 col-sm-0'></div>
                </div>
            </div>
            <div className="card-footer text-muted" style={DarkMode === 'false'?{backgroundColor: '#ffffff'}:{background: 'linear-gradient(0deg, rgba(56,56,56,1) 0%, rgba(36,36,36,1) 5%, rgba(0,0,0,1) 100%)'}}>
                <center>
                    <button className="btn btn-danger btn-sm" onClick={reset}>Reset</button>
                </center>
            </div>
        </div>
    )
}
