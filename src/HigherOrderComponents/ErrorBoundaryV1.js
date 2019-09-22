import React from 'react';
import ErrorScreen from '../Pages/ErrorScreen/ErrorScreen';
class ErrorBoundaryV1 extends React.Component{
    state={
        hasError:false
    }
    componentDidCatch(error){
        this.setState({hasError:true});
    }
    render(){
        const {children}=this.props;
        const {hasError}=this.state;
        if(hasError) return <ErrorScreen/>;
        return children;        
    };
}
export default ErrorBoundaryV1;