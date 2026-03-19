import { Component } from "react";


class ClassComponent extends Component{
    constructor(){
        super() ;
        this.state={
            count:0
        }
    }

    render(){
        return(
            <div>
                <h1>This is Class Based Component</h1>
                <p> 
                    <button onClick={()=>{
                        this.setState((state)=>{
                            return {count:state.count+1};
                        })
                    }}>Increment</button>  
                    State Count :{this.state.count}
                    <button  onClick={()=>{
                        this.setState((state)=>{
                            return {count:state.count-1}
                        })
                    }}>Decrement</button>  
                    </p>
            </div>
        )
    }
}

export default ClassComponent;