import React, { Component } from 'react';
import { createStore, bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import { changeFistName, changeSecondName } from "../store/actions";



class App extends Component {
  render() {
      const dispatch = this.props.dispatch;
      const {fistName, secondName,changeFistName,changeSecondName} = this.props;
    return (
      <div >
         <div>
             <input type="text"
                    value={fistName}
                    placeholder="Fist name"
                    onChange ={(event)=> {changeFistName(event.target.value)
                    }}
             />

         </div>
          <div>
              <input type="text"
                     value={secondName}
                     placeholder="Second name"
                     onChange ={(event)=> {changeSecondName(event.target.value)
                     }}
              />
          </div>
          <div>{`${fistName} ${secondName}`}</div>
      </div>
    );
  }
}

const mapStateToProps =(state) => {
    return {
        fistName: state.fistName,
        secondName: state.secondName
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        changeFistName: bindActionCreators(changeFistName, dispatch),
        changeSecondName: bindActionCreators(changeSecondName, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);


