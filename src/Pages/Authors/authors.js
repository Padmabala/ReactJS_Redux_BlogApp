import React,{Component} from 'react';
import { GET_AUTHORS_API } from '../../constants/serverUrls';
import {
    NavLink
  } from 'react-router-dom';
import routes from '../../routes/routes';
import xmlHTTPRequestData from '../../services/xmlHTTPRequestData';
import AuthorSummary from '../../CommonComponents/AuthorSummary';
import LoadingIndicator from '../../CommonComponents/LoadingIndicator';
import ErrorBoundaryV2 from '../../HigherOrderComponents/ErrorBoundaryV2';
import { bindActionCreators } from 'C:/Users/kpadm/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';
import {connect} from 'react-redux';
import { get_authors } from '../../redux/actions/authorActions';
class Authors extends Component{
    state={
        authors:[]
    };
    componentDidMount(){
        const {loadAuthors}=this.props;
        loadAuthors();
    }
   /*  loadAuthors=async()=>{
        try{
        const authors=await xmlHTTPRequestData(GET_AUTHORS_API,"GET");
        this.setState({authors});
        //console.log(authors);
        }
        catch(e){
            console.log(e);
        }
    } */
    render(){
        
    //undefined.function();
        const {authors}=this.props;        
        return(
            <div>
            {
                authors.length
                ?                
                authors.map((author)=>{
                    return(
                        
                            <AuthorSummary author={author}/>
                        
                    )
                })
            :
            <LoadingIndicator/>
            }
            </div>
        )
    };

}
const mapStateToProps=(state)=>{
    return{
        authors:state.authors
    };
}

const mapDispatchToProps=(dispatch)=>{
    return{
        loadAuthors:bindActionCreators(get_authors,dispatch)
    }
}

const connectHOC=connect(
    mapStateToProps,
    mapDispatchToProps
    );

export default connectHOC(ErrorBoundaryV2(Authors));