import React from 'react'
import {searchLogs} from '../../actions/logAction';
import {connect} from 'react-redux';
const SearchBox=(props)=> {
    const seachText=(text)=>{
        console.log(text)
        props.dispatch(searchLogs(text))
    }
    return (
        <nav style={{marginBottom:'30px' }} className="blue">
        <div className="nav-wrapper">
        <form>
            <div className="input-field">
          <input id="search" type="search" required
              onChange={(e)=>{seachText(e.target.value)}}
          />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
            </div>
        </form>
     </div>
    </nav>
    )
}

export default connect(null,null)(SearchBox)
