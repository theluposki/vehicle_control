import{_ as U,i as K,r as d,c as n,a as e,j as i,v as f,n as c,g,F as Q,k as F,l as b,m as O,o as u,p as R,d as Z}from"./index-D5_ZTehc.js";import{E as C}from"./Emitter-BG7KJySb.js";const l=r=>(R("data-v-4d074dac"),r=r(),Z(),r),z={class:"page int"},D={class:"form-control"},$=l(()=>e("label",{for:"placa",class:"label-required"},"Placa:",-1)),j={key:0,class:"error-message"},L={key:1,class:"error-message"},X={class:"form-control"},G=l(()=>e("label",{for:"modelo",class:"label-required"},"Modelo:",-1)),H={key:0,class:"error-message"},J={id:"modelos"},W=["value"],Y={class:"form-group",id:"segmentacao"},ee=l(()=>e("legend",null,"Segmentação",-1)),ae={class:"field"},oe=l(()=>e("label",{for:"consumidor",class:"label-radio consumidor"},"Consumidor",-1)),te={class:"field"},le=l(()=>e("label",{for:"revenda",class:"label-radio revenda"},"Revenda",-1)),se={class:"form-group",id:"tipo"},de=l(()=>e("legend",null,"Tipo de serviço",-1)),ie={class:"field"},ne=l(()=>e("label",{for:"tp",class:"label-radio tp"},"Troca de peça",-1)),ue={class:"field"},ce=l(()=>e("label",{for:"sm",class:"label-radio sm"},"Serviço mecânico",-1)),re={class:"form-control"},me=l(()=>e("label",{for:"qtdPecas",class:"label-required"},"Quantidade de Peças:",-1)),ve={key:0,class:"error-message"},pe=l(()=>e("summary",null,"Alguma observação sobre o veículo?",-1)),_e={class:"form-control"},fe=l(()=>e("label",{for:"observacao",class:"label"},"Observação:",-1)),ge=l(()=>e("i",{class:"ri-save-3-fill"},null,-1)),be={__name:"AddCar",setup(r){K(()=>{C.emit("add-car"),setTimeout(()=>{C.emit("name-route","Finalizar etapa troca de peças")},100)});const A=d(["Argo","Onix","Onix Plus","KA","Mobi"]),a=d({placa:null,modelo:null,segmentacao:null,tipo:null,qtdPecas:null,observacao:""}),m=d(!0),v=d(!0),p=d(!0),h=d(!0),V=d(!0),_=d(!0);function x(){if(!a.value.placa){document.getElementById("placa").scrollIntoView({behavior:"smooth"}),v.value=!1;return}v.value=!0;const s=a==null?void 0:a.value.placa.trim(),t=/^[A-Z]{3}\d[A-Z]\d{2}$/,o=/^[A-Z]{3}-\d{4}$/;m.value=t.test(s)||o.test(s),m.value||document.getElementById("placa").scrollIntoView({behavior:"smooth"})}let y,P,q;const M=()=>{y&&clearTimeout(y),y=setTimeout(()=>{x()},600)},N=()=>{P&&clearTimeout(P),P=setTimeout(()=>{T()},600)},S=()=>{q&&clearTimeout(q),q=setTimeout(()=>{B()},600)};function T(){const s=a.value.modelo;p.value=!0,(!s||s=="")&&(p.value=!1,document.getElementById("modelo").scrollIntoView({behavior:"smooth"}))}function E(){if(!a.value.segmentacao){document.getElementById("segmentacao").scrollIntoView({behavior:"smooth"}),h.value=!1;return}h.value=!0}function I(){if(!a.value.tipo){document.getElementById("tipo").scrollIntoView({behavior:"smooth"}),V.value=!1;return}V.value=!0}function B(){const s=a.value.qtdPecas;_.value=!0,(!s||s=="")&&(_.value=!1,document.getElementById("qtdPecas").scrollIntoView({behavior:"smooth"}))}const k=()=>{x(),T(),E(),I(),B()},w=()=>{if(!a.value.placa||!a.value.modelo||!a.value.segmentacao||!a.value.tipo||!a.value.qtdPecas){k();return}console.log("registrado")};return(s,t)=>(u(),n("main",z,[e("div",D,[$,i(e("input",{type:"text",tabindex:"1",class:c({input:!0,invalid:!m.value||!v.value}),"onUpdate:modelValue":t[0]||(t[0]=o=>a.value.placa=o),id:"placa",maxlength:"7",onKeyup:M,placeholder:"placa do veículo. EX: ABC1D123 ou ABC-1234",onBlur:x},null,34),[[f,a.value.placa]]),m.value?g("",!0):(u(),n("p",j,"Placa inválida!")),v.value?g("",!0):(u(),n("p",L,"Placa é obrigatória!"))]),e("div",X,[G,i(e("input",{type:"text",list:"modelos",tabindex:"2",class:c({input:!0,invalid:!p.value}),"onUpdate:modelValue":t[1]||(t[1]=o=>a.value.modelo=o),id:"modelo",onKeyup:N,placeholder:"modelo do veículo"},null,34),[[f,a.value.modelo]]),p.value?g("",!0):(u(),n("p",H,"ops, esqueceu de digitar o modelo!"))]),e("datalist",J,[(u(!0),n(Q,null,F(A.value,o=>(u(),n("option",{value:o},null,8,W))),256))]),e("div",Y,[e("fieldset",{class:c({fieldsetNotSelected:!h.value})},[ee,e("div",ae,[oe,i(e("input",{type:"radio",onChange:E,tabindex:"3",id:"consumidor",name:"segmentacao",class:"input-radio","onUpdate:modelValue":t[2]||(t[2]=o=>a.value.segmentacao=o),value:"consumidor"},null,544),[[b,a.value.segmentacao]])]),e("div",te,[le,i(e("input",{type:"radio",onChange:E,tabindex:"4",id:"revenda",name:"segmentacao",class:"input-radio","onUpdate:modelValue":t[3]||(t[3]=o=>a.value.segmentacao=o),value:"revenda"},null,544),[[b,a.value.segmentacao]])])],2)]),e("div",se,[e("fieldset",{class:c({fieldsetNotSelected:!V.value})},[de,e("div",ie,[ne,i(e("input",{type:"radio",onChange:I,tabindex:"5",id:"tp",name:"tipo",class:"input-radio","onUpdate:modelValue":t[4]||(t[4]=o=>a.value.tipo=o),value:"TP"},null,544),[[b,a.value.tipo]])]),e("div",ue,[ce,i(e("input",{type:"radio",onChange:I,tabindex:"6",id:"sm",name:"tipo",class:"input-radio","onUpdate:modelValue":t[5]||(t[5]=o=>a.value.tipo=o),value:"SM"},null,544),[[b,a.value.tipo]])])],2)]),e("div",re,[me,i(e("input",{type:"tel",min:"1",max:"2",maxlength:"2",tabindex:"7",class:c({input:!0,invalid:!_.value}),"onUpdate:modelValue":t[6]||(t[6]=o=>a.value.qtdPecas=o),id:"qtdPecas",placeholder:"Ex: 3",onKeyup:S},null,34),[[f,a.value.qtdPecas,void 0,{number:!0}]]),_.value?g("",!0):(u(),n("p",ve,"ops, esqueceu de digitar a quantidade de peças!"))]),e("details",null,[pe,e("div",_e,[fe,i(e("textarea",{class:"textarea","onUpdate:modelValue":t[7]||(t[7]=o=>a.value.observacao=o),id:"observacao",placeholder:"Ex: veículo com amassado na porta d/d."},null,512),[[f,a.value.observacao]])])]),e("div",{class:"form-control"},[e("button",{class:"btn",onClick:w,tabindex:"8"},[O(" Registrar "),ge])])]))}},xe=U(be,[["__scopeId","data-v-4d074dac"]]);export{xe as default};
