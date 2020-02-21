import React, { Component } from 'react';
import ListPilots from './ListPilots';


class Item extends Component {
  
  render() {
    return (
        <div className="classdiv">
            <div className="executor">
                <label className="title1">{this.props.name}</label>
                <label className="text">{this.props.vehicle_class}</label>
                <div className="line"></div>
                <label className="title2">Fabricante</label>
                <label className="text marg">{this.props.manufacturer}</label>
                <label className="title2">Largo</label>
                <label className="text marg">{this.props.length} fts.</label>
                <label className="title2">Valor</label>
                <label className="text marg">{this.props.cost_in_credits} créditos</label>
                <label className="title2">Cantidad pasajeros</label>
                <label className="text marg">{this.props.passengers}</label>
            </div>
            <div className="pasajeros">
                <label className="title1">Pilotos</label>
                <div className="line"></div>
                <ListPilots name_pi={this.props.name_pilots}/>
            </div>
        </div>
    )
  }
}

export default Item;