import React,{Component} from 'react';
import ErrorScreen from '../Pages/ErrorScreen/ErrorScreen';

//when u export home component, u export it as anan parameter for errorBoundaryV2
//now after this check the inspector..u'll see a new component above home
const ErrorBoundaryV2=ChildComponent=>{
    //Anonymous class since it'll be used immediately
    
    return class extends Component{
    state={
        hasError:false,
    };
    componentDidCatch(error){
        if(error){
            this.setState({
                hasError:true
            });
        }
    }
        render(){
        const {props}=this;
        const {hasError}=this.state;
        if(hasError) return <ErrorScreen/>;
            return <ChildComponent {...props}/>;
        };
    }
};  

export default ErrorBoundaryV2;


//object.assign is same as the spread operator...does deep copy