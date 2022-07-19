import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { setValue as setValueAc, startGame} from "../store/reducer"


const Main = (props) => {
    const navigate = useNavigate()

    const isLoose = () => {
        if (props.errors > 3) { 
            props.dispatch(startGame())
            navigate('/lose')
        }
    }
    const isWon = () => {
        for (const arr of props.start) {
            if(arr.includes(0)) return
        }
        props.dispatch(startGame())
        navigate('/won')
    }
    useEffect(()=>{
        isWon()
        isLoose()
    },[props.start, props.errors])
    const setValue = (e) => {
        const action = setValueAc(e.target.textContent, indexArr)
        props.dispatch(action)
    }

    const [indexArr, newIndexArr] = useState([0, 0])
    const setActiveCell = (a, b) => {
        newIndexArr([a, b])
    }
    let values = props.dataValues.map(value => {
        return (
            <li key={value} onClick={setValue}>{value}</li>
        )
    })
    let tbody = props.start.map((tr, trIndex, matrix) => {
        return (
            <tr key={trIndex}>{
                tr.map((td, tdIndex) => {
                    return (
                        <td key={`_${trIndex}_${tdIndex}`}
                            className={(indexArr[0] === trIndex && indexArr[1] === tdIndex) ? 'cell-active' : 'cell'}
                            onClick={() => {
                                setActiveCell(trIndex, tdIndex)

                            }}>{td || ''}</td>
                    )
                })
            }</tr>
        )
    })
    return (
        <div className="container">
            <table className="table">
                <tbody>
                    {tbody}
                </tbody>
            </table>
            <ul className="values">{values}</ul>
            <div className="errors">Errors: {props.errors} / 3</div>
        </div>
    )
}
export default Main