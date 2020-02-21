import React, { Component } from 'react';
import axios from 'axios';
import Listnaves from './ListNaves';
import './Style.css';

class Home extends Component {
    constructor(props) {
        super(props)
        
        this.state = { 
            naves1: [],
            naves2: [],
            naves3: [],
            naves4: [],
            datanave: [],
            datapilots: [],
            classdiv: 0,
            pilots: []
        }
        this.seleccionNave = this.seleccionNave.bind(this);
      }
    componentDidMount() {
        const nav1 = `https://swapi.co/api/vehicles/?page=1`;
        axios.get(nav1).then(response => response.data)
        .then((data) => {
          this.setState({ naves1: data.results });
        })
        const nav2 = `https://swapi.co/api/vehicles/?page=2`;
        axios.get(nav2).then(response => response.data)
        .then((data) => {
          this.setState({ naves2: data.results });
        })
        const nav3 = `https://swapi.co/api/vehicles/?page=3`;
        axios.get(nav3).then(response => response.data)
        .then((data) => {
          this.setState({ naves3: data.results });
        })
        const nav4 = `https://swapi.co/api/vehicles/?page=4`;
        axios.get(nav4).then(response => response.data)
        .then((data) => {
          this.setState({ naves4: data.results });
        })
    }

    seleccionNave(e) {
        let value = e.target.value;
        if(value.length > 0){
            axios.get(value).then(response => response.data)
            .then((data) => {
                this.setState({ classdiv: 1 });
                this.setState({ datanave: data });
                this.setState({ pilots: data.pilots });

                if(this.state.pilots.length > 0){
                    this.setState({datapilots: []});
                    return this.state.pilots.map((pilot) => 
                        axios.get(pilot).then(response => response.data)
                        .then((data) => {
                            this.setState({datapilots: [this.state.datapilots, data.name]});
                        })
                    );
                }else{
                    this.setState({datapilots: []});
                }
            })
        }else{
            this.setState({ classdiv: 0 });
        }

        
    }

    render() {
        return (
            <div className="divGlobal">
                <form className="classform">
                    <select onChange={this.seleccionNave}>
                        <option value="">Selecciona una Nave</option>
                        {this.state.naves1.map((nav1each,nav1id) => {
                            return <option key={nav1id} value={nav1each.url}>{nav1each.name}</option>
                        })}
                        {this.state.naves2.map((nav2each,nav2id) => {
                            return <option key={nav2id} value={nav2each.url}>{nav2each.name}</option>
                        })}
                        {this.state.naves3.map((nav3each,nav3id) => {
                            return <option key={nav3id} value={nav3each.url}>{nav3each.name}</option>
                        })}
                        {this.state.naves4.map((nav4each,nav4id) => {
                            return <option key={nav4id} value={nav4each.url}>{nav4each.name}</option>
                        })}
                    </select>
                </form>
                <Listnaves datanav={this.state.datanave} datapil={this.state.datapilots} classdiv={this.state.classdiv}/>
            </div>
        );
    }

}

export default Home;
