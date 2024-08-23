import{_ as Q,i as Z,r as d,c as i,a as e,j as c,v as V,n as m,g as r,F as z,k as D,l as y,m as F,s as L,o as n,p as $,d as j}from"./index-Dtj6bbRc.js";import{E as N}from"./Emitter-BG7KJySb.js";const s=v=>($("data-v-535c6851"),v=v(),j(),v),G={class:"page int"},H={class:"form-control"},X=s(()=>e("label",{for:"placa",class:"label-required"},"Placa:",-1)),W={key:0,class:"error-message"},Y={key:1,class:"error-message"},ee={class:"form-control"},ae=s(()=>e("label",{for:"modelo",class:"label-required"},"Modelo:",-1)),oe={key:0,class:"error-message"},te={id:"modelos"},le=["value"],se={class:"form-group",id:"segmentacao"},ie=s(()=>e("legend",null,"Segmentação",-1)),ne={class:"field"},de=s(()=>e("label",{for:"consumidor",class:"label-radio consumidor"},"Consumidor",-1)),ce={class:"field"},ue=s(()=>e("label",{for:"revenda",class:"label-radio revenda"},"Revenda",-1)),re={key:0,class:"error-message"},me={class:"form-group",id:"tipo"},ve=s(()=>e("legend",null,"Tipo de serviço",-1)),pe={class:"field"},_e=s(()=>e("label",{for:"tp",class:"label-radio tp"},"Troca de peça",-1)),ge={class:"field"},fe=s(()=>e("label",{for:"sm",class:"label-radio sm"},"Serviço mecânico",-1)),he={key:0,class:"error-message"},be={class:"form-control"},Ve=s(()=>e("label",{for:"qtdPecas",class:"label-required"},"Quantidade de Peças:",-1)),ye={key:0,class:"error-message"},xe={id:"detailsObservacao"},Pe=s(()=>e("summary",null,"Alguma observação sobre o veículo?",-1)),Ie={class:"form-control"},Ee=s(()=>e("label",{for:"observacao",class:"label"},"Observação:",-1)),qe=s(()=>e("i",{class:"ri-save-3-fill"},null,-1)),A="currentVehicle",Se={__name:"AddCar",setup(v){Z(()=>{N.emit("add-car"),setTimeout(()=>{N.emit("name-route","finalizar etapa troca de peças")},100),R()});const k=d(["Argo","Onix","Onix Plus","KA","Mobi"]),a=d({placa:null,modelo:null,segmentacao:null,tipo:null,qtdPecas:null,observacao:""}),p=d(!0),_=d(!0),g=d(!0),f=d(!0),h=d(!0),b=d(!0);function x(){if(!a.value.placa){document.getElementById("placa").scrollIntoView({behavior:"smooth"}),_.value=!1;return}_.value=!0;const l=a==null?void 0:a.value.placa.trim(),o=/^[A-Z]{3}\d[A-Z]\d{2}$/,t=/^[A-Z]{3}-\d{4}$/;p.value=o.test(l)||t.test(l),p.value||document.getElementById("placa").scrollIntoView({behavior:"smooth"})}let P,I,E,q;const M=()=>{P&&clearTimeout(P),P=setTimeout(()=>{x(),u()},600)},O=()=>{I&&clearTimeout(I),I=setTimeout(()=>{C(),u()},600)},w=()=>{E&&clearTimeout(E),E=setTimeout(()=>{B(),u()},600)},U=()=>{q&&clearTimeout(q),q=setTimeout(()=>{u()},600)};function C(){const l=a.value.modelo;g.value=!0,(!l||l=="")&&(g.value=!1,document.getElementById("modelo").scrollIntoView({behavior:"smooth"}))}function S(){if(!a.value.segmentacao){document.getElementById("segmentacao").scrollIntoView({behavior:"smooth"}),f.value=!1;return}f.value=!0,u()}function T(){if(!a.value.tipo){document.getElementById("tipo").scrollIntoView({behavior:"smooth"}),h.value=!1;return}h.value=!0,u()}function B(){const l=a.value.qtdPecas;b.value=!0,(!l||l=="")&&(b.value=!1,document.getElementById("qtdPecas").scrollIntoView({behavior:"smooth"}))}const K=()=>{x(),C(),S(),T(),B()},u=()=>{const l=a.value,o=JSON.stringify(l);localStorage.setItem(A,o)},R=()=>{if(localStorage.getItem(A)){const l=localStorage.getItem(A),o=JSON.parse(l);a.value=o,a.value.observacao&&(document.querySelector("#detailsObservacao").open=!0)}},J=()=>{if(!a.value.placa||!a.value.modelo||!a.value.segmentacao||!a.value.tipo||!a.value.qtdPecas){K();return}console.log("registrado"),L("Registrado com sucesso!","success")};return(l,o)=>(n(),i("main",G,[e("div",H,[X,c(e("input",{type:"text",tabindex:"1",class:m({input:!0,invalid:!p.value||!_.value}),"onUpdate:modelValue":o[0]||(o[0]=t=>a.value.placa=t),id:"placa",maxlength:"7",onKeyup:M,placeholder:"placa do veículo. EX: ABC1D123 ou ABC-1234",onBlur:x},null,34),[[V,a.value.placa]]),p.value?r("",!0):(n(),i("p",W,"Placa inválida!")),_.value?r("",!0):(n(),i("p",Y,"Placa é obrigatória!"))]),e("div",ee,[ae,c(e("input",{type:"text",list:"modelos",tabindex:"2",class:m({input:!0,invalid:!g.value}),"onUpdate:modelValue":o[1]||(o[1]=t=>a.value.modelo=t),id:"modelo",onKeyup:O,placeholder:"modelo do veículo"},null,34),[[V,a.value.modelo]]),g.value?r("",!0):(n(),i("p",oe,"ops, esqueceu de digitar o modelo!"))]),e("datalist",te,[(n(!0),i(z,null,D(k.value,t=>(n(),i("option",{value:t},null,8,le))),256))]),e("div",se,[e("fieldset",{class:m({fieldsetNotSelected:!f.value})},[ie,e("div",ne,[de,c(e("input",{type:"radio",onChange:S,tabindex:"3",id:"consumidor",name:"segmentacao",class:"input-radio","onUpdate:modelValue":o[2]||(o[2]=t=>a.value.segmentacao=t),value:"consumidor"},null,544),[[y,a.value.segmentacao]])]),e("div",ce,[ue,c(e("input",{type:"radio",onChange:S,tabindex:"4",id:"revenda",name:"segmentacao",class:"input-radio","onUpdate:modelValue":o[3]||(o[3]=t=>a.value.segmentacao=t),value:"revenda"},null,544),[[y,a.value.segmentacao]])]),f.value?r("",!0):(n(),i("p",re,"selecione!"))],2)]),e("div",me,[e("fieldset",{class:m({fieldsetNotSelected:!h.value})},[ve,e("div",pe,[_e,c(e("input",{type:"radio",onChange:T,tabindex:"5",id:"tp",name:"tipo",class:"input-radio","onUpdate:modelValue":o[4]||(o[4]=t=>a.value.tipo=t),value:"TP"},null,544),[[y,a.value.tipo]])]),e("div",ge,[fe,c(e("input",{type:"radio",onChange:T,tabindex:"6",id:"sm",name:"tipo",class:"input-radio","onUpdate:modelValue":o[5]||(o[5]=t=>a.value.tipo=t),value:"SM"},null,544),[[y,a.value.tipo]])]),h.value?r("",!0):(n(),i("p",he,"selecione!"))],2)]),e("div",be,[Ve,c(e("input",{type:"tel",min:"1",max:"2",maxlength:"2",tabindex:"7",class:m({input:!0,invalid:!b.value}),"onUpdate:modelValue":o[6]||(o[6]=t=>a.value.qtdPecas=t),id:"qtdPecas",placeholder:"Ex: 3",onKeyup:w},null,34),[[V,a.value.qtdPecas,void 0,{number:!0}]]),b.value?r("",!0):(n(),i("p",ye,"ops, esqueceu de digitar a quantidade de peças!"))]),e("details",xe,[Pe,e("div",Ie,[Ee,c(e("textarea",{class:"textarea",onKeyup:U,"onUpdate:modelValue":o[7]||(o[7]=t=>a.value.observacao=t),id:"observacao",placeholder:"Ex: veículo com amassado na porta d/d."},null,544),[[V,a.value.observacao]])])]),e("div",{class:"form-control"},[e("button",{class:"btn",onClick:J,tabindex:"8"},[F(" Registrar "),qe])])]))}},Ce=Q(Se,[["__scopeId","data-v-535c6851"]]);export{Ce as default};
