import React, { useState } from 'react'

export default function Home() {
    var [color, setColor] = useState('#ffffff')
    var [text, setText] = useState('black')
    var [todo, setTodo] = useState('')
    var [list, setItems] = useState([])

    const changeHandler = (event) => {
        if (event.target.checked === true) {
            setColor('#121212')
            setText('white')
        } else {
            setColor('#ffffff')
            setText('black')
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
            <div className="card-header">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                        onChange={changeHandler} />
                    <label className="form-check-label">Toggle Dark Mode</label>
                </div>
            </div>
            <div className="card-body" style={{backgroundColor: color, color: text}}>
                <div className='row'>
                    <div className='col-lg-2 col-sm-0'></div>
                    <div className='col-lg-8 col-sm-12'>
                        <h5 className="card-title">Your Todo List</h5><small>click your list to mark as done</small>
                        <div className="list-group my-2">
                            {list.map(data => { return (<li className="list-group-item" onClick={markDone} done={false} key={data}>{data}</li>) })}
                        </div>
                        <div className="input-group mb-3" style={{ backgroundColor: color, color: text }}>
                            <span className="input-group-text">Add Todo</span>
                            <input value={todo} onChange={keyBoardHandle} className="form-control" />
                            <button onClick={submitHandle} className="btn btn-warning">Add</button>
                        </div>
                    </div>
                    <div className='col-lg-2 col-sm-0'></div>
                </div>
            </div>
            <div className="card-footer text-muted">
                <center>
                    <button className="btn btn-danger btn-sm" onClick={reset}>Reset</button>
                </center>
            </div>
        </div>
    )
}
