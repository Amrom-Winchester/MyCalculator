let Result = (props) => {
    return(
        <button className="equal"
                onClick = { ()=>{
                    props.resultEval(props.expression);
                }
                }>=</button>
    )
}

export default Result;