(this["webpackJsonpvisualizador-naves"]=this["webpackJsonpvisualizador-naves"]||[]).push([[0],{19:function(e,a,t){e.exports=t(42)},41:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(18),l=t.n(c),r=t(2),i=t(3),o=t(5),p=t(4),m=t(8),u=t(6),v=t(7),h=t.n(v),d=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"classdiv"},s.a.createElement("div",{className:"executor"},s.a.createElement("label",{className:"title1"},this.props.name),s.a.createElement("label",{className:"text"},this.props.vehicle_class),s.a.createElement("div",{className:"line"}),s.a.createElement("label",{className:"title2"},"Fabricante"),s.a.createElement("label",{className:"text marg"},this.props.manufacturer),s.a.createElement("label",{className:"title2"},"Largo"),s.a.createElement("label",{className:"text marg"},this.props.length," fts."),s.a.createElement("label",{className:"title2"},"Valor"),s.a.createElement("label",{className:"text marg"},this.props.cost_in_credits," cr\xe9ditos"),s.a.createElement("label",{className:"title2"},"Cantidad pasajeros"),s.a.createElement("label",{className:"text marg"},this.props.passengers)),s.a.createElement("div",{className:"pasajeros"},s.a.createElement("label",{className:"title1"},"Pasajeros"),s.a.createElement("div",{className:"line"}),s.a.createElement("label",{className:"text"},"Chewbacca"),s.a.createElement("label",{className:"text"},"Han Solo"),s.a.createElement("label",{className:"text"},"Lando Calrissian"),s.a.createElement("label",{className:"text"},"Nien Nunb")))}}]),a}(n.Component),b=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.props.datanav.length>0?s.a.createElement(d,{key:this.props.datanav,name:this.props.datanav.name,model:this.props.datanav.model,manufacturer:this.props.datanav.manufacturer,cost_in_credits:this.props.datanav.cost_in_credits,length:this.props.datanav.length,max_atmosphering_speed:this.props.datanav.max_atmosphering_speed,crew:this.props.datanav.crew,passengers:this.props.datanav.passengers,cargo_capacity:this.props.datanav.cargo_capacity,consumables:this.props.datanav.consumables,vehicle_class:this.props.datanav.vehicle_class,pilots:this.props.datanav.pilots,created:this.props.datanav.created,edited:this.props.datanav.edited}):s.a.createElement("div",{className:"classdiv"},s.a.createElement("label",{className:"textnofound"},"Usted no ha Seleccionado ninguna Nave"))}}]),a}(n.Component),f=(t(41),function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(p.a)(a).call(this,e))).state={naves1:[],naves2:[],naves3:[],naves4:[],datanave:[],datapeople:[]},t.seleccionNave=t.seleccionNave.bind(Object(m.a)(t)),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://swapi.co/api/vehicles/?page=1").then((function(e){return e.data})).then((function(a){e.setState({naves1:a.results})}));h.a.get("https://swapi.co/api/vehicles/?page=2").then((function(e){return e.data})).then((function(a){e.setState({naves2:a.results})}));h.a.get("https://swapi.co/api/vehicles/?page=3").then((function(e){return e.data})).then((function(a){e.setState({naves3:a.results})}));h.a.get("https://swapi.co/api/vehicles/?page=4").then((function(e){return e.data})).then((function(a){e.setState({naves4:a.results})}))}},{key:"seleccionNave",value:function(e){var a=this,t=e.target.value;h.a.get(t).then((function(e){return e.data})).then((function(e){a.setState({datanave:e}),console.log(a.state.datanave)}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"divGlobal"},s.a.createElement("form",{className:"classform"},s.a.createElement("select",{onChange:this.seleccionNave},s.a.createElement("option",{value:""},"Selecciona una Nave"),this.state.naves1.map((function(e,a){return s.a.createElement("option",{key:a,value:e.url},e.name)})),this.state.naves2.map((function(e,a){return s.a.createElement("option",{key:a,value:e.url},e.name)})),this.state.naves3.map((function(e,a){return s.a.createElement("option",{key:a,value:e.url},e.name)})),this.state.naves4.map((function(e,a){return s.a.createElement("option",{key:a,value:e.url},e.name)})))),s.a.createElement(b,{datanav:this.state.datanave}))}}]),a}(n.Component));l.a.render(s.a.createElement(f,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.937e42fa.chunk.js.map