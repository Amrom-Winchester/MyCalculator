let Keypad = (props) => {
    return(
        <div className="Numbers">
            <div className="digits"
             onClick ={ (e)=>{
                 props.numberType(e);
             }}>0</div>
            <div className="digits"
            onClick ={ (e)=>{
                props.numberType(e);
            }}>1</div>
            <div className="digits"
            onClick ={ (e)=>{
                props.numberType(e);
            }}>2</div>
            <div className="digits"
            onClick ={ (e)=>{
                props.numberType(e);
            }}>3</div>
            <div className="digits"
            onClick ={ (e)=>{
                props.numberType(e);
            }}>4</div>
            <div className="digits"
            onClick ={ (e)=>{
                props.numberType(e);
            }}>5</div>
            <div className="digits"
            onClick ={ (e)=>{
                props.numberType(e);
            }}>6</div>
            <div className="digits"
            onClick ={ (e)=>{
                props.numberType(e);
            }}>7</div>
            <div className="digits"
            onClick ={ (e)=>{
                props.numberType(e);
            }}>8</div>
            <div className="digits"
            onClick ={ (e)=>{
                props.numberType(e);
            }}>9</div>
        </div>
    );
};

export default Keypad;