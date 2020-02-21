import React, { Component } from 'react';


class ListPilots extends Component {
  
  render() {
    if(this.props.name_pi.length > 0){
        return (
            
            this.props.name_pi.map((name) => {
            return <label className="text" key={name}>{name}</label>
            })
            
        )
    }else{
        return (    <label className="text">
                        No Posee Pilotos
                    </label>)
    }
  }
}

export default ListPilots;