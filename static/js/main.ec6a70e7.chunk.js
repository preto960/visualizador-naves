(this["webpackJsonpvisualizador-naves"]=this["webpackJsonpvisualizador-naves"]||[]).push([[0],{19:function(e,a,t){e.exports=t(43)},24:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(18),l=t.n(c),r=(t(24),t(2)),i=t(3),o=t(5),u=t(4),m=t(8),v=t(6),h=t(7),p=t.n(h),d=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"executor"},s.a.createElement("label",{className:"title1"},this.props.name),s.a.createElement("label",{className:"text"},"Executor-class star dreadnought"),s.a.createElement("div",{className:"line"}),s.a.createElement("label",{className:"title2"},"Fabricante"),s.a.createElement("label",{className:"text marg"},"Kuat Drive Yards, Fondor Shipyards"),s.a.createElement("label",{className:"title2"},"Largo"),s.a.createElement("label",{className:"text marg"},"19.000 fts."),s.a.createElement("label",{className:"title2"},"Valor"),s.a.createElement("label",{className:"text marg"},"1.143.350.000 cr\xe9ditos"),s.a.createElement("label",{className:"title2"},"Cantidad pasajeros"),s.a.createElement("label",{className:"text marg"},"38.000")),s.a.createElement("div",{className:"pasajeros"},s.a.createElement("label",{className:"title1"},"Pasajeros"),s.a.createElement("div",{className:"line"}),s.a.createElement("label",{className:"text"},"Chewbacca"),s.a.createElement("label",{className:"text"},"Han Solo"),s.a.createElement("label",{className:"text"},"Lando Calrissian"),s.a.createElement("label",{className:"text"},"Nien Nunb")))}}]),a}(n.Component),b=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,this.props.datanav.map((function(e){return s.a.createElement(d,{key:e,name:e.name,model:e.model,manufacturer:e.manufacturer,cost_in_credits:e.cost_in_credits,length:e.length,max_atmosphering_speed:e.max_atmosphering_speed,crew:e.crew,passengers:e.passengers,cargo_capacity:e.cargo_capacity,consumables:e.consumables,vehicle_class:e.vehicle_class,pilots:e.pilots,created:e.created,edited:e.edited})})))}}]),a}(n.Component),f=(t(42),function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).state={naves1:[],naves2:[],naves3:[],naves4:[],datanave:[]},t.seleccionNave=t.seleccionNave.bind(Object(m.a)(t)),t}return Object(v.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://swapi.co/api/vehicles/?page=1").then((function(e){return e.data})).then((function(a){e.setState({naves1:a.results})}));p.a.get("https://swapi.co/api/vehicles/?page=2").then((function(e){return e.data})).then((function(a){e.setState({naves2:a.results})}));p.a.get("https://swapi.co/api/vehicles/?page=3").then((function(e){return e.data})).then((function(a){e.setState({naves3:a.results})}));p.a.get("https://swapi.co/api/vehicles/?page=4").then((function(e){return e.data})).then((function(a){e.setState({naves4:a.results})}))}},{key:"seleccionNave",value:function(e){var a=this,t=e.target.value;p.a.get(t).then((function(e){return e.data})).then((function(e){a.setState({dataNave:e})}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("form",null,s.a.createElement("select",{onChange:this.seleccionNave},s.a.createElement("option",{value:"Selecciona una Nave"},"Selecciona una Nave"),this.state.naves1.map((function(e,a){return s.a.createElement("option",{key:a,value:e.url},e.name)})),this.state.naves2.map((function(e,a){return s.a.createElement("option",{key:a,value:e.url},e.name)})),this.state.naves3.map((function(e,a){return s.a.createElement("option",{key:a,value:e.url},e.name)})),this.state.naves4.map((function(e,a){return s.a.createElement("option",{key:a,value:e.url},e.name)})))),s.a.createElement(b,{datanav:this.state.datanave}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.ec6a70e7.chunk.js.map