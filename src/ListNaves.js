import React, { Component } from 'react';
import Item from './Item';


class ListNaves extends Component {

  render() {
    if (this.props.datanav.length > 0 && this.props.classdiv === 1) {
        return (
            <Item   key={this.props.datanav}
                            name={this.props.datanav.name}
                            model={this.props.datanav.model}
                            manufacturer={this.props.datanav.manufacturer}
                            cost_in_credits={this.props.datanav.cost_in_credits}
                            length={this.props.datanav.length}
                            max_atmosphering_speed={this.props.datanav.max_atmosphering_speed}
                            crew={this.props.datanav.crew}
                            passengers={this.props.datanav.passengers}
                            cargo_capacity={this.props.datanav.cargo_capacity}
                            consumables={this.props.datanav.consumables}
                            vehicle_class={this.props.datanav.vehicle_class}
                            pilots={this.props.datanav.pilots}
                            created={this.props.datanav.created}
                            edited={this.props.datanav.edited}
                            name_pilots={this.props.datapil.length > 0 ? this.props.datapil : ''}
                            />
        )
    }else{
        return ( <div className="classdiv">
                    <label className="textnofound">
                        Seleccione una Nave
                    </label>
                </div>)
    }
  }
}

export default ListNaves;