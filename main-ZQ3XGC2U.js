import{n as s$1,r as t,t as r$1}from"./chunk-C9yOwMO6.js";import{$n as kl,An as ct,Ar as ue$2,At as Q_,B as GH,Br as ys,C as Dm,Cr as re,Dt as Q,F as Fo,Fn as g$1,Fr as xa,G as Hl,Gt as Sw,Hn as he,Hr as zs,Jn as je,Jt as Tm,K as I,L as Ft,Ln as gT,Lt as Rm,M as Fa,Mt as R,Nn as fI,Nr as wr$1,Nt as RC,O as Eb,On as cm,Ot as QC,P as Fl,Pt as RI,Q as KC,Qt as Ul,Rn as ga,Rt as Rn,S as Dh,Sr as qs,Tn as bo,Tr as rp,Un as hm,Ur as zt,V as Gf,Vr as zf,W as Gn$1,Wn as ho,Wr as zu,Wt as Sv,X as Jd,Xn as kC,Xt as UC,Y as JC,Yn as jv,Z as Jg,_r as p_,a as AC,ar as m$1,at as Lr,b as Ct$1,bn as _m,br as qC,cn as Xg,d as B,dn as Ym,dt as Mv,er as kn,et as Kl,f as BU,fn as Yo,fr as om,gr as pC,hn as Yy,i as $s,j as FC,jn as dm,jt as Qg,kn as cr,kt as QU,l as As,lr as ne$1,m as Bl,mr as op,n as $_,nn as Vl,or as mU,ot as Lt,p as Bb,qn as j_,r as $d,rr as lm,s as Ab,tn as V_,tr as ko,tt as LC,u as Av,un as Ye$1,ur as nm,ut as Mr$1,vr as pm,wn as bU,wr as rm,wt as Po,xt as Pa,yn as _D,yr as pp,yt as Ol,z as G,zn as ge$1,zr as yr$1,zt as Rr}from"./chunk-BQL1EHuG.js";import{C as _c,F as ia,G as sa,H as nn,I as ie,L as io,N as gc,O as ca,R as jn,S as Y$1,U as ra,V as lo,a as Cc,b as Va,c as Fi,d as Ht,f as Kd,i as Br,k as ci,l as Gr,p as Lt$1,q as se,r as Ba,s as Ei,t as A,u as Hr,x as X$1,z as kd}from"./chunk-B3ccmtye.js";import{c as Xe$1,o as Qe$1,t as A$1}from"./chunk-BBxjTQYN.js";import{A as Uo,E as Se,G as or$1,H as md,K as rr$1,L as gs,P as ar$1,R as it,S as Qs,U as nt,_ as Nn,a as De$1,c as Er$1,d as Jt,f as Le,h as Me,i as Co,o as Do,q as sr$1,t as An,w as Rr$1,y as Or,z as jd}from"./chunk-Ccj1yJpl.js";import{i as o$2,o as s$2,t as E$2}from"./chunk-B-MzoeW9.js";import{t as m$2}from"./chunk-DzssrJM5.js";var h={production:!0,apiUrl:`/api`,useMock:!0};var v=[{titulo:`General`,items:[{label:`Dashboard`,icon:`dashboard`,ruta:`/dashboard`,permisos:[E$2.DASHBOARD_VER]}]},{titulo:`Operación`,items:[{label:`Órdenes de servicio`,icon:`assignment`,ruta:`/ordenes`,permisos:[E$2.ORDENES_VER],exacto:!0},{label:`Nueva orden`,icon:`add_circle`,ruta:`/ordenes/nueva`,permisos:[E$2.ORDENES_CREAR]},{label:`Clientes`,icon:`groups`,ruta:`/clientes`,permisos:[E$2.CLIENTES_VER]}]},{titulo:`Administración`,items:[{label:`Técnicos`,icon:`engineering`,ruta:`/tecnicos`,permisos:[E$2.TECNICOS_VER]},{label:`Usuarios`,icon:`manage_accounts`,ruta:`/usuarios`,permisos:[E$2.USUARIOS_VER]},{label:`Roles y permisos`,icon:`admin_panel_settings`,ruta:`/roles`,permisos:[E$2.ROLES_VER]}]}];var n$2=`solservices.sesion`;var E$1=class s{http=g$1(ga);router=g$1(Lt$1);sesion=cr(this.restaurarSesion());usuario=Bb(()=>this.sesion()?.usuario??null);token=Bb(()=>this.sesion()?.token??null);autenticado=Bb(()=>this.sesion()!==null);rol=Bb(()=>this.usuario()?.rol??null);permisos=Bb(()=>{let e=this.usuario();return e?new Set(e.permisos?.length?e.permisos:s$2[e.rol]??[]):new Set});login(e,o){return this.http.post(`${h.apiUrl}/auth/login`,e).pipe(Q(r=>this.normalizarRespuesta(r)),Gn$1(r=>this.guardarSesion(r,o)),Q(r=>r.usuario))}logout(e=!0){this.sesion.set(null);try{localStorage.removeItem(n$2),sessionStorage.removeItem(n$2)}catch{}e&&this.router.navigate([`/login`])}tienePermiso(e,o=`alguno`){let r=Array.isArray(e)?e:[e];if(r.length===0)return!0;let c=this.permisos();return o===`todos`?r.every(a=>c.has(a)):r.some(a=>c.has(a))}tieneRol(...e){let o=this.rol();return o!==null&&e.includes(o)}rutaInicio(){for(let e of v)for(let o of e.items)if(this.tienePermiso(o.permisos??[]))return o.ruta;return`/acceso-denegado`}normalizarRespuesta(e){let o=String(e.usuario.rol??``),r=s$1(r$1({},e.usuario),{rol:o.replace(/^ROLE_/,``)});return{token:e.token,expira:e.expiraEn?Date.now()+e.expiraEn*1e3:null,usuario:r}}guardarSesion(e,o){this.sesion.set(e);try{(o?localStorage:sessionStorage).setItem(n$2,JSON.stringify(e))}catch{}}restaurarSesion(){try{let e=localStorage.getItem(n$2)??sessionStorage.getItem(n$2);if(!e)return null;let o=JSON.parse(e);return o.expira!==null&&o.expira<Date.now()?null:o}catch{return null}}static ɵfac=function(o){return new(o||s)};static ɵprov=R({token:s,factory:s.ɵfac,providedIn:`root`})};var F=(r,a)=>{let n=g$1(E$1),t=g$1(Or);return a(r).pipe(Mr$1(i=>!(i instanceof kn)||r.url.endsWith(`/auth/login`)?Fa(()=>i):(i.status===401?(t.aviso(`Tu sesión expiró. Vuelve a iniciar sesión.`),n.logout()):i.status===403?t.error(`Acceso denegado: ${D(i)}`):i.status===0?t.error(`Sin conexión: no se pudo conectar con el servidor.`):t.error(D(i)),Fa(()=>i))))};function D(r){let a=r.error;return typeof a==`string`&&a?a:a&&typeof a==`object`?a.message??a.detail??r.message:r.message}var z=[{username:`admin`,password:`admin123`,rol:`ADMIN`},{username:`supervisor`,password:`super123`,rol:`SUPERVISOR`},{username:`recepcion`,password:`recep123`,rol:`RECEPCIONISTA`},{username:`tecnico`,password:`tecnico123`,rol:`TECNICO`}];function o$1(r,a=9){let n=new Date;return n.setDate(n.getDate()-r),n.setHours(a,r*17%60,0,0),n.toISOString()}var _=[{id:1,username:`admin`,password:`admin123`,nombreCompleto:`Administrador General`,email:`admin@solservices.com`,rol:`ADMIN`,activo:!0,ultimoAcceso:o$1(0,8)},{id:2,username:`supervisor`,password:`super123`,nombreCompleto:`Laura Gómez`,email:`lgomez@solservices.com`,rol:`SUPERVISOR`,activo:!0,ultimoAcceso:o$1(1,17)},{id:3,username:`recepcion`,password:`recep123`,nombreCompleto:`Andrea Torres`,email:`atorres@solservices.com`,rol:`RECEPCIONISTA`,activo:!0,ultimoAcceso:o$1(0,9)},{id:4,username:`tecnico`,password:`tecnico123`,nombreCompleto:`Jorge Ramírez`,email:`jramirez@solservices.com`,rol:`TECNICO`,activo:!0,tecnicoId:1,ultimoAcceso:o$1(0,10)},{id:5,username:`tecnico2`,password:`tecnico123`,nombreCompleto:`Luis Paredes`,email:`lparedes@solservices.com`,rol:`TECNICO`,activo:!0,tecnicoId:2,ultimoAcceso:o$1(2,11)},{id:6,username:`psalas`,password:`psalas123`,nombreCompleto:`Pedro Salas`,email:`psalas@solservices.com`,rol:`RECEPCIONISTA`,activo:!1,ultimoAcceso:o$1(60,12)}];var U=[{id:1,nombre:`Jorge Ramírez`,telefono:`310 555 1122`,email:`jramirez@solservices.com`,especialidades:[`Lavadoras`,`Secadoras`],activo:!0},{id:2,nombre:`Luis Paredes`,telefono:`311 555 2233`,email:`lparedes@solservices.com`,especialidades:[`Refrigeración`,`Aire acondicionado`],activo:!0},{id:3,nombre:`Mario Cárdenas`,telefono:`312 555 3344`,email:`mcardenas@solservices.com`,especialidades:[`Estufas`,`Hornos`,`Microondas`],activo:!0},{id:4,nombre:`Diego Vergara`,telefono:`315 555 4455`,email:`dvergara@solservices.com`,especialidades:[`Electrónica`,`Televisores`],activo:!0},{id:5,nombre:`Carlos Ruiz`,telefono:`316 555 5566`,email:null,especialidades:[`Calentadores de agua`],activo:!1}];var w=[{id:1,tipoDocumento:`CC`,documento:`1020456789`,nombre:`María Fernanda López`,telefono:`300 555 4321`,email:`mflopez@correo.com`,direccion:`Carrera 15 # 93-47, Apto 502, Chicó`,ciudad:`Bogotá D.C.`,fechaRegistro:o$1(120)},{id:2,tipoDocumento:`CC`,documento:`71654987`,nombre:`Roberto Andrade`,telefono:`301 555 3210`,email:`randrade@correo.com`,direccion:`Calle 10 # 43D-25, El Poblado`,ciudad:`Medellín`,fechaRegistro:o$1(95)},{id:3,tipoDocumento:`NIT`,documento:`900456789-3`,nombre:`Restaurante Sabor Paisa S.A.S.`,telefono:`604 444 5678`,email:`compras@saborpaisa.com.co`,direccion:`Carrera 70 # 44-10, Laureles`,ciudad:`Medellín`,fechaRegistro:o$1(80)},{id:4,tipoDocumento:`CC`,documento:`66987123`,nombre:`Carmen Villamizar`,telefono:`302 555 2109`,email:null,direccion:`Avenida 6N # 25-60, Granada`,ciudad:`Cali`,fechaRegistro:o$1(60)},{id:5,tipoDocumento:`CC`,documento:`8765432`,nombre:`José Luis Mendoza`,telefono:`304 555 1098`,email:`jlmendoza@correo.com`,direccion:`Calle 84 # 51B-20, Alto Prado`,ciudad:`Barranquilla`,fechaRegistro:o$1(45)},{id:6,tipoDocumento:`CE`,documento:`456789`,nombre:`Anna Schmidt`,telefono:`305 555 0987`,email:`anna.schmidt@mail.com`,direccion:`Calle 2 # 4-15, Bocagrande`,ciudad:`Cartagena`,fechaRegistro:o$1(30)},{id:7,tipoDocumento:`CC`,documento:`37894561`,nombre:`Patricia Chávez`,telefono:`317 555 9876`,email:`pchavez@correo.com`,direccion:`Carrera 33 # 48-12, Cabecera del Llano`,ciudad:`Bucaramanga`,fechaRegistro:o$1(14)},{id:8,tipoDocumento:`NIT`,documento:`890123456-1`,nombre:`Hotel Caribe Plaza S.A.S.`,telefono:`605 666 8877`,email:`mantenimiento@caribeplaza.com.co`,direccion:`Avenida San Martín # 9-145, Bocagrande`,ciudad:`Cartagena`,fechaRegistro:o$1(7)}];var T={RECIBIDA:[`RECIBIDA`],EN_DIAGNOSTICO:[`RECIBIDA`,`EN_DIAGNOSTICO`],ESPERANDO_REPUESTO:[`RECIBIDA`,`EN_DIAGNOSTICO`,`ESPERANDO_REPUESTO`],EN_REPARACION:[`RECIBIDA`,`EN_DIAGNOSTICO`,`EN_REPARACION`],REPARADA:[`RECIBIDA`,`EN_DIAGNOSTICO`,`EN_REPARACION`,`REPARADA`],ENTREGADA:[`RECIBIDA`,`EN_DIAGNOSTICO`,`EN_REPARACION`,`REPARADA`,`ENTREGADA`],CANCELADA:[`RECIBIDA`,`EN_DIAGNOSTICO`,`CANCELADA`]};var b={RECIBIDA:`Equipo recibido en mostrador.`,EN_DIAGNOSTICO:`Inicia revisión técnica.`,ESPERANDO_REPUESTO:`Se solicitó repuesto al proveedor.`,EN_REPARACION:`Cliente aprobó la reparación.`,REPARADA:`Reparación finalizada y probada.`,ENTREGADA:`Equipo entregado al cliente.`,CANCELADA:`Cliente no aprobó el presupuesto.`};function e(r,a,n,t,i,f,s,p,O={}){let C=T[s],c=C.map((m,u)=>({estado:m,fecha:o$1(Math.max(p-u*Math.max(1,Math.floor(p/C.length)),0),9+u),usuario:u===0||m===`ENTREGADA`?`Andrea Torres`:`Jorge Ramírez`,comentario:b[m]??null})),l=c[0].fecha,d=new Date(l);return d.setDate(d.getDate()+5),r$1({id:r,numero:`OS-${new Date(l).getFullYear()}-${String(r).padStart(5,`0`)}`,clienteId:a,tecnicoId:n,equipo:t,fallaReportada:i,diagnostico:s===`RECIBIDA`?null:`Pendiente de detalle técnico.`,observaciones:null,prioridad:f,estado:s,fechaIngreso:l,fechaEstimadaEntrega:d.toISOString().slice(0,10),fechaEntrega:s===`ENTREGADA`?c[c.length-1].fecha:null,costoEstimado:18e4,abono:5e4,costoFinal:s===`ENTREGADA`||s===`REPARADA`?22e4:null,enGarantia:!1,creadoPor:`Andrea Torres`,historial:c},O)}var x$1=[e(1,1,1,{tipo:`Lavadora`,marca:`LG`,modelo:`WM22VV2S6R`,numeroSerie:`LG22A0001`,accesorios:`Manguera de desagüe`,estadoFisico:`Rayón lateral derecho`},`No centrifuga y hace ruido fuerte al girar.`,`ALTA`,`EN_REPARACION`,6,{diagnostico:`Rodamientos del tambor desgastados. Se reemplazan rodamientos y retén.`,costoEstimado:32e4}),e(2,2,2,{tipo:`Nevera`,marca:`Samsung`,modelo:`RT38K5930SL`,numeroSerie:`SMG38K112`,accesorios:null,estadoFisico:`Buen estado`},`No enfría la parte inferior.`,`URGENTE`,`ESPERANDO_REPUESTO`,9,{diagnostico:`Falla en sensor de descongelamiento y ventilador del evaporador.`,costoEstimado:45e4}),e(3,3,3,{tipo:`Estufa / Horno`,marca:`Haceb`,modelo:`Romero 76`,numeroSerie:`HCB7600231`,accesorios:`2 parrillas`,estadoFisico:`Uso intensivo`},`El horno no enciende, las hornillas sí.`,`ALTA`,`REPARADA`,12,{diagnostico:`Termocupla del horno dañada. Reemplazada.`,costoFinal:21e4}),e(4,4,1,{tipo:`Secadora`,marca:`Whirlpool`,modelo:`WED4815EW`,numeroSerie:`WP4815E99`,accesorios:null,estadoFisico:`Buen estado`},`Gira pero no calienta.`,`MEDIA`,`EN_DIAGNOSTICO`,2),e(5,5,null,{tipo:`Microondas`,marca:`Panasonic`,modelo:`NN-ST34`,numeroSerie:null,accesorios:`Plato giratorio`,estadoFisico:`Puerta con golpe`},`Enciende pero no calienta los alimentos.`,`BAJA`,`RECIBIDA`,0),e(6,6,2,{tipo:`Aire acondicionado`,marca:`Daikin`,modelo:`FTKC12`,numeroSerie:`DK12FT889`,accesorios:`Control remoto`,estadoFisico:`Buen estado`},`Gotea agua por la unidad interior.`,`MEDIA`,`ENTREGADA`,20,{diagnostico:`Drenaje obstruido. Limpieza y mantenimiento general.`,costoFinal:15e4}),e(7,7,4,{tipo:`Televisor`,marca:`Sony`,modelo:`KD-55X80K`,numeroSerie:`SNY55X8077`,accesorios:`Control remoto, base`,estadoFisico:`Sin daños visibles`},`Tiene sonido pero no imagen.`,`ALTA`,`EN_REPARACION`,4,{diagnostico:`Tiras LED de retroiluminación quemadas.`,costoEstimado:58e4}),e(8,8,2,{tipo:`Congelador`,marca:`Electrolux`,modelo:`EFC20`,numeroSerie:`ELX20C556`,accesorios:null,estadoFisico:`Corrosión leve en bisagras`},`El compresor arranca y se apaga.`,`URGENTE`,`EN_DIAGNOSTICO`,1),e(9,1,1,{tipo:`Lavaplatos`,marca:`Bosch`,modelo:`SMS25`,numeroSerie:`BSH25SM01`,accesorios:null,estadoFisico:`Buen estado`},`No desagua al terminar el ciclo.`,`MEDIA`,`ENTREGADA`,30,{diagnostico:`Bomba de desagüe obstruida, limpieza.`,costoFinal:13e4}),e(10,3,3,{tipo:`Estufa / Horno`,marca:`Mabe`,modelo:`EM7640`,numeroSerie:`MB7640EE`,accesorios:null,estadoFisico:`Vidrio de la puerta rajado`},`Fuga de gas en hornilla posterior.`,`URGENTE`,`CANCELADA`,15,{costoEstimado:26e4}),e(11,2,4,{tipo:`Televisor`,marca:`Samsung`,modelo:`UN50TU7000`,numeroSerie:`SMG50TU77`,accesorios:`Control remoto`,estadoFisico:`Buen estado`},`Se reinicia constantemente.`,`MEDIA`,`REPARADA`,8,{diagnostico:`Fuente de poder con capacitores inflados. Reemplazados.`,costoFinal:24e4}),e(12,5,1,{tipo:`Lavadora`,marca:`Mabe`,modelo:`LMA79113`,numeroSerie:`MB7911301`,accesorios:null,estadoFisico:`Tapa rota`},`No llena de agua.`,`BAJA`,`RECIBIDA`,0),e(13,8,2,{tipo:`Aire acondicionado`,marca:`LG`,modelo:`VM121C6`,numeroSerie:`LGVM12C61`,accesorios:`Control remoto`,estadoFisico:`Buen estado`},`No enfría, solo ventila.`,`ALTA`,`EN_REPARACION`,3,{diagnostico:`Falta de gas refrigerante por fuga en soldadura.`,costoEstimado:35e4}),e(14,6,1,{tipo:`Lavadora`,marca:`Samsung`,modelo:`WA17T`,numeroSerie:`SMG17T334`,accesorios:null,estadoFisico:`Buen estado`},`Muestra error 4E.`,`MEDIA`,`ENTREGADA`,11,{enGarantia:!0,costoFinal:0,diagnostico:`Electroválvula de entrada defectuosa (garantía).`})];var n$1=`solservices.tema`;var i$1=class e{documento=g$1(B);modo=cr(this.modoInicial());oscuro=Bb(()=>this.modo()===`oscuro`);constructor(){pp(()=>{let o=this.oscuro();this.documento.documentElement.classList.toggle(`tema-oscuro`,o);try{localStorage.setItem(n$1,this.modo())}catch{}})}alternar(){this.modo.update(o=>o===`oscuro`?`claro`:`oscuro`)}modoInicial(){try{let o=localStorage.getItem(n$1);if(o===`claro`||o===`oscuro`)return o}catch{}return this.documento.defaultView?.matchMedia(`(prefers-color-scheme: dark)`).matches?`oscuro`:`claro`}static ɵfac=function(m){return new(m||e)};static ɵprov=R({token:e,factory:e.ɵfac,providedIn:`root`})};var ot=(()=>{class i{_animationsDisabled=Ht();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||i)};static ɵcmp=ko({type:i,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,a){t&2&&zs(`mat-pseudo-checkbox-indeterminate`,a.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,a.state===`checked`)(`mat-pseudo-checkbox-disabled`,a.disabled)(`mat-pseudo-checkbox-minimal`,a.appearance===`minimal`)(`mat-pseudo-checkbox-full`,a.appearance===`full`)(`_mat-animation-noopable`,a._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,a){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return i})();var te=new I(`MAT_OPTION_PARENT_COMPONENT`);var ne=new I(`MatOptgroup`);var pt=(()=>{class i{label;disabled=!1;_labelId=g$1(ca).getId(`mat-optgroup-label-`);_inert;constructor(){let e=g$1(te,{optional:!0});this._inert=e?.inertGroups??!1}static ɵfac=function(t){return new(t||i)};static ɵcmp=(function(){let e=[`*`,[[`mat-option`],[`ng-container`]]];return ko({type:i,selectors:[[`mat-optgroup`]],hostAttrs:[1,`mat-mdc-optgroup`],hostVars:3,hostBindings:function(s,r){s&2&&Fo(`role`,r._inert?null:`group`)(`aria-disabled`,r._inert?null:r.disabled.toString())(`aria-labelledby`,r._inert?null:r._labelId)},inputs:{label:`label`,disabled:[2,`disabled`,`disabled`,Kl]},exportAs:[`matOptgroup`],features:[Rm([{provide:ne,useExisting:i}])],ngContentSelectors:[`*`,`mat-option, ng-container`],decls:5,vars:4,consts:[[`role`,`presentation`,1,`mat-mdc-optgroup-label`,3,`id`],[1,`mdc-list-item__primary-text`]],template:function(s,r){s&1&&(Vl(e),kl(0,`span`,0)(1,`span`,1),Eb(2),Bl(3),Fl()(),Bl(4,1)),s&2&&(zs(`mdc-list-item--disabled`,r.disabled),cm(`id`,r._labelId),RI(2),Ul(``,r.label,` `))},styles:[`.mat-mdc-optgroup {
  color: var(--%NS%mat-optgroup-label-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-optgroup-label-text-font, var(--%NS%mat-sys-title-small-font));
  line-height: var(--%NS%mat-optgroup-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-optgroup-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-optgroup-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: var(--%NS%mat-optgroup-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}

.mat-mdc-optgroup-label {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  outline: none;
}
.mat-mdc-optgroup-label.mdc-list-item--disabled {
  opacity: 0.38;
}
.mat-mdc-optgroup-label .mdc-list-item__primary-text {
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  white-space: normal;
  color: inherit;
}
`],encapsulation:2})})()}return i})();var ue$1=class{source;isUserInput;constructor(C,e=!1){this.source=C,this.isUserInput=e}};var ae=(()=>{class i{_element=g$1(Ct$1);_changeDetectorRef=g$1(Ym);_parent=g$1(te,{optional:!0});group=g$1(ne,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=g$1(ca).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=cr(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new je;_text;_stateChanges=new ne$1;constructor(){let e=g$1($_);e.load(io),e.load(bU),this._signalDisableRipple=!!this._parent&&ho(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let a=this._getHostElement();typeof a.focus==`function`&&a.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Gr(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new ue$1(this,e))}static ɵfac=function(t){return new(t||i)};static ɵcmp=(function(){let e=[`text`],t=[[[`mat-icon`]],`*`],a=[`mat-icon`,`*`];function s(d,h){if(d&1&&om(0,`mat-pseudo-checkbox`,1),d&2){let o=qC();rm(`disabled`,o.disabled)(`state`,o.selected?`checked`:`unchecked`)}}function r(d,h){if(d&1&&om(0,`mat-pseudo-checkbox`,3),d&2){let o=qC();rm(`disabled`,o.disabled)}}function b(d,h){if(d&1&&(As(0,`span`,4),Eb(1),Ol()),d&2){let o=qC();RI(),Ul(`(`,o.group.label,`)`)}}return ko({type:i,selectors:[[`mat-option`]],viewQuery:function(h,o){if(h&1&&hm(e,7),h&2){let c;QC(c=KC())&&(o._text=c.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(h,o){h&1&&lm(`click`,function(){return o._selectViaInteraction()})(`keydown`,function(p){return o._handleKeydown(p)}),h&2&&(cm(`id`,o.id),Fo(`aria-selected`,o.selected)(`aria-disabled`,o.disabled.toString()),zs(`mdc-list-item--selected`,o.selected)(`mat-mdc-option-multiple`,o.multiple)(`mat-mdc-option-active`,o.active)(`mdc-list-item--disabled`,o.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,Kl]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:a,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(h,o){h&1&&(Vl(t),AC(0,s,1,2,`mat-pseudo-checkbox`,1),Bl(1),As(2,`span`,2,0),Bl(4,1),Ol(),AC(5,r,1,1,`mat-pseudo-checkbox`,3),AC(6,b,2,1,`span`,4),om(7,`div`,5)),h&2&&(RC(o.multiple?0:-1),RI(5),RC(!o.multiple&&o.selected&&!o.hideSingleSelectionIndicator?5:-1),RI(),RC(o.group&&o.group._inert?6:-1),RI(),rm(`matRippleTrigger`,o._getHostElement())(`matRippleDisabled`,o.disabled||o.disableRipple))},dependencies:[ot,Kd],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return i})();function rt(i,C,e){if(e.length){let t=C.toArray(),a=e.toArray(),s=0;for(let r=0;r<i+1;r++)t[r].group&&t[r].group===a[s]&&s++;return s}return 0}function lt(i,C,e,t){return i<e?i:i+C>e+t?Math.max(0,i-t+C):e}var st=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Rn({type:i});static ɵinj=zt({imports:[BU]})}return i})();var fe=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Rn({type:i});static ɵinj=zt({imports:[lo,st,ae,BU]})}return i})();var bt$1=new I(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=g$1(re);return()=>nt(i)}});var yt$1=new I(`MAT_SELECT_CONFIG`);var _t=new I(`MatSelectTrigger`);var ge=class{source;value;constructor(C,e){this.source=C,this.value=e}};var vn=(()=>{class i{_viewportRuler=g$1(Xe$1);_changeDetectorRef=g$1(Ym);_elementRef=g$1(Ct$1);_dir=g$1(Q_,{optional:!0});_idGenerator=g$1(ca);_renderer=g$1(bo);_parentFormField=g$1(or$1,{optional:!0});ngControl=g$1(Le,{self:!0,optional:!0});_liveAnnouncer=g$1(Ei);_defaultOptions=g$1(yt$1,{optional:!0});_animationsDisabled=Ht();_popoverLocation;_initialized=new ne$1;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let a=this.panel.nativeElement,s=rt(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&s===1?a.scrollTop=0:a.scrollTop=lt(r.offsetTop,r.offsetHeight,a.scrollTop,a.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ge(this,e)}_scrollStrategyFactory=g$1(bt$1);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new ne$1;_errorStateTracker;stateChanges=new ne$1;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=cr(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Jt.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Sv(()=>{let e=this.options;return e?e.changes.pipe($d(e),xa(()=>Mv(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(xa(()=>this.optionSelectionChanges))});openedChange=new je;_openedStream=this.openedChange.pipe(Ft(e=>e),Q(()=>{}));_closedStream=this.openedChange.pipe(Ft(e=>!e),Q(()=>{}));selectionChange=new je;valueChange=new je;constructor(){let e=g$1(jd),t=g$1(Co,{optional:!0}),a=g$1(Do,{optional:!0}),s=g$1(new qs(`tabindex`),{optional:!0}),r=g$1(An,{optional:!0}),b=g$1(gs,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Rr$1(e,b||this.ngControl,a,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=s==null?0:parseInt(s)||0,this._popoverLocation=r?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new m$2(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(jv(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(jv(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe($d(null),jv(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let a=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?a.setAttribute(`aria-labelledby`,e):a.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Lt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(a),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,s=>{s.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),a=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,a=t===40||t===38||t===37||t===39,s=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&s&&!Gr(e)||(this.multiple||e.altKey)&&a)e.preventDefault(),this.open();else if(!this.multiple){let b=this.selected;r.onKeydown(e);let d=this.selected;d&&b!==d&&this._liveAnnouncer.announce(d.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,a=e.keyCode,s=a===40||a===38,r=t.isTyping();if(s&&e.altKey)e.preventDefault(),this.close();else if(!r&&(a===13||a===32)&&t.activeItem&&!Gr(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&a===65&&e.ctrlKey){e.preventDefault();let b=this.options.some(d=>!d.disabled&&!d.selected);this.options.forEach(d=>{d.disabled||(b?d.select():d.deselect())})}else{let b=t.activeItemIndex;t.onKeydown(e),this._multiple&&s&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==b&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Gr(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(a=>{if(this._selectionModel.isSelected(a))return!1;try{return(a.value!=null||this.canSelectNullableOptions)&&this._compareWith(a.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof Nn?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new ia(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Mv(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(jv(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Mv(...this.options.map(t=>t._stateChanges)).pipe(jv(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let a=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(a!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),a!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,a)=>this.sortComparator?this.sortComparator(t,a,e):e.indexOf(t)-e.indexOf(a)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(a=>a.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=Y$1(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||i)};static ɵcmp=(function(){let e=[`trigger`],t=[`panel`],a=[[[`mat-select-trigger`]],`*`],s=[`mat-select-trigger`,`*`];function r(c,p){if(c&1&&(As(0,`span`,4),Eb(1),Ol()),c&2){let n=qC();RI(),Tm(n.placeholder)}}function b(c,p){c&1&&Bl(0)}function d(c,p){if(c&1&&(As(0,`span`,11),Eb(1),Ol()),c&2){let n=qC(2);RI(),Tm(n.triggerValue)}}function h(c,p){if(c&1&&(As(0,`span`,5),AC(1,b,1,0)(2,d,2,1,`span`,11),Ol()),c&2){let n=qC();RI(),RC(n.customTrigger?1:2)}}function o(c,p){if(c&1){let n=UC();As(0,`div`,12,1),lm(`keydown`,function(f){zf(n);let mt=qC();return Gf(mt._handleKeydown(f))}),Bl(2,1),Ol()}if(c&2){let n=qC();Hl(n.panelClass),zs(`mat-select-panel-animations-enabled`,!n._animationsDisabled)(`mat-primary`,n._parentFormField?.color===`primary`)(`mat-accent`,n._parentFormField?.color===`accent`)(`mat-warn`,n._parentFormField?.color===`warn`)(`mat-undefined`,!n._parentFormField?.color),Fo(`id`,n.id+`-panel`)(`aria-multiselectable`,n.multiple)(`aria-label`,n.ariaLabel||null)(`aria-labelledby`,n._getPanelAriaLabelledby())}}return ko({type:i,selectors:[[`mat-select`]],contentQueries:function(p,n,m){if(p&1&&pm(m,_t,5)(m,ae,5)(m,ne,5),p&2){let f;QC(f=KC())&&(n.customTrigger=f.first),QC(f=KC())&&(n.options=f),QC(f=KC())&&(n.optionGroups=f)}},viewQuery:function(p,n){if(p&1&&hm(e,5)(t,5)(Uo,5),p&2){let m;QC(m=KC())&&(n.trigger=m.first),QC(m=KC())&&(n.panel=m.first),QC(m=KC())&&(n._overlayDir=m.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(p,n){p&1&&lm(`keydown`,function(f){return n._handleKeydown(f)})(`focus`,function(){return n._onFocus()})(`blur`,function(){return n._onBlur()}),p&2&&(Fo(`id`,n.id)(`tabindex`,n.disabled?-1:n.tabIndex)(`aria-controls`,n.panelOpen?n.id+`-panel`:null)(`aria-expanded`,n.panelOpen)(`aria-label`,n.ariaLabel||null)(`aria-required`,n.required.toString())(`aria-disabled`,n.disabled.toString())(`aria-invalid`,n.errorState)(`aria-activedescendant`,n._getAriaActiveDescendant()),zs(`mat-mdc-select-disabled`,n.disabled)(`mat-mdc-select-invalid`,n.errorState)(`mat-mdc-select-required`,n.required)(`mat-mdc-select-empty`,n.empty)(`mat-mdc-select-multiple`,n.multiple)(`mat-select-open`,n.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,Kl],disableRipple:[2,`disableRipple`,`disableRipple`,Kl],tabIndex:[2,`tabIndex`,`tabIndex`,c=>c==null?0:gT(c)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,Kl],placeholder:`placeholder`,required:[2,`required`,`required`,Kl],multiple:[2,`multiple`,`multiple`,Kl],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,Kl],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,gT],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,Kl]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[Rm([{provide:rr$1,useExisting:i},{provide:te,useExisting:i}]),zu],ngContentSelectors:s,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(p,n){if(p&1&&(Vl(a),As(0,`div`,2,0),lm(`click`,function(){return n.open()}),As(3,`div`,3),AC(4,r,2,1,`span`,4)(5,h,3,1,`span`,5),Ol(),As(6,`div`,6)(7,`div`,7),rp(),As(8,`svg`,8),om(9,`path`,9),Ol()()()(),Xg(10,o,3,16,`ng-template`,10),lm(`detach`,function(){return n.close()})(`backdropClick`,function(){return n.close()})(`overlayKeydown`,function(f){return n._handleOverlayKeydown(f)})),p&2){let m=JC(1);RI(3),Fo(`id`,n._valueId),RI(),RC(n.empty?4:5),RI(6),rm(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,n._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,n._scrollStrategy)(`cdkConnectedOverlayOrigin`,n._preferredOverlayOrigin||m)(`cdkConnectedOverlayPositions`,n._positions)(`cdkConnectedOverlayWidth`,n._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,n._popoverLocation)}},dependencies:[Nn,Uo],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear forwards;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return i})();var xn=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Rn({type:i});static ɵinj=zt({imports:[Er$1,fe,BU,A$1,Qs,fe]})}return i})();var X=(()=>{class l{changes=new ne$1;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(e,a,r)=>{if(r==0||a==0)return`0 of ${r}`;r=Math.max(r,0);let d=e*a,b=d<r?Math.min(d+a,r):d+a;return`${d+1} \u2013 ${b} of ${r}`};static ɵfac=function(a){return new(a||l)};static ɵprov=ge$1({token:l,factory:l.ɵfac})}return l})();var Y=50;var tt=new I(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var xt=(()=>{class l{_intl=g$1(X);_changeDetectorRef=g$1(Ym);_formFieldAppearance;_pageSizeLabelId=g$1(ca).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new Rr(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(a=>gT(a,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new je;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,a=g$1(tt,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),a){let{pageSize:r,pageSizeOptions:d,hidePageSize:b,showFirstLastButtons:M}=a;r!=null&&(this._pageSize=r),d!=null&&(this._pageSizeOptions=d),b!=null&&(this.hidePageSize=b),M!=null&&(this.showFirstLastButtons=M)}this._formFieldAppearance=a?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let a=this.pageIndex*this.pageSize,r=this.pageIndex;this.pageIndex=Math.floor(a/e)||0,this.pageSize=e,this._emitPageEvent(r)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Y),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,a)=>e-a),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let a=this.pageIndex;e!==a&&(this.pageIndex=e,this._emitPageEvent(a))}_buttonClicked(e,a){a||this._navigate(e)}static ɵfac=function(a){return new(a||l)};static ɵcmp=(function(){function e(i,g){if(i&1&&(As(0,`mat-option`,17),Eb(1),Ol()),i&2){let t=g.$implicit;rm(`value`,t),RI(),Ul(` `,t,` `)}}function a(i,g){if(i&1){let t=UC();As(0,`mat-form-field`,14)(1,`mat-select`,16,0),lm(`selectionChange`,function(p){zf(t);let W=qC(2);return Gf(W._changePageSize(p.value))}),FC(3,e,2,2,`mat-option`,17,kC),Ol(),As(5,`div`,18),lm(`click`,function(){zf(t);let p=JC(2);return Gf(p.open())}),Ol()()}if(i&2){let t=qC(2);rm(`appearance`,t._formFieldAppearance)(`color`,t.color),RI(),rm(`value`,t.pageSize)(`disabled`,t.disabled),nm(`aria-labelledby`,t._pageSizeLabelId),rm(`panelClass`,t.selectConfig.panelClass||``)(`disableOptionCentering`,t.selectConfig.disableOptionCentering),RI(2),LC(t._displayedPageSizeOptions)}}function r(i,g){if(i&1&&(As(0,`div`,15),Eb(1),Ol()),i&2){let t=qC(2);RI(),Tm(t.pageSize)}}function d(i,g){if(i&1&&(As(0,`div`,3)(1,`div`,13),Eb(2),Ol(),AC(3,a,6,7,`mat-form-field`,14),AC(4,r,2,1,`div`,15),Ol()),i&2){let t=qC();RI(),Fo(`id`,t._pageSizeLabelId),RI(),Ul(` `,t._intl.itemsPerPageLabel,` `),RI(),RC(t._displayedPageSizeOptions.length>1?3:-1),RI(),RC(t._displayedPageSizeOptions.length<=1?4:-1)}}function b(i,g){if(i&1){let t=UC();As(0,`button`,19),lm(`click`,function(){zf(t);let p=qC();return Gf(p._buttonClicked(0,p._previousButtonsDisabled()))}),rp(),As(1,`svg`,8),om(2,`path`,20),Ol()()}if(i&2){let t=qC();rm(`matTooltip`,t._intl.firstPageLabel)(`matTooltipDisabled`,t._previousButtonsDisabled())(`disabled`,t._previousButtonsDisabled())(`tabindex`,t._previousButtonsDisabled()?-1:null),Fo(`aria-label`,t._intl.firstPageLabel)}}function M(i,g){if(i&1){let t=UC();As(0,`button`,21),lm(`click`,function(){zf(t);let p=qC();return Gf(p._buttonClicked(p.getNumberOfPages()-1,p._nextButtonsDisabled()))}),rp(),As(1,`svg`,8),om(2,`path`,22),Ol()()}if(i&2){let t=qC();rm(`matTooltip`,t._intl.lastPageLabel)(`matTooltipDisabled`,t._nextButtonsDisabled())(`disabled`,t._nextButtonsDisabled())(`tabindex`,t._nextButtonsDisabled()?-1:null),Fo(`aria-label`,t._intl.lastPageLabel)}}return ko({type:l,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,gT],length:[2,`length`,`length`,gT],pageSize:[2,`pageSize`,`pageSize`,gT],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,Kl],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,Kl],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,Kl]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(g,t){g&1&&(As(0,`div`,1)(1,`div`,2),AC(2,d,5,4,`div`,3),As(3,`div`,4)(4,`div`,5),Eb(5),Ol(),AC(6,b,3,5,`button`,6),As(7,`button`,7),lm(`click`,function(){return t._buttonClicked(t.pageIndex-1,t._previousButtonsDisabled())}),rp(),As(8,`svg`,8),om(9,`path`,9),Ol()(),op(),As(10,`button`,10),lm(`click`,function(){return t._buttonClicked(t.pageIndex+1,t._nextButtonsDisabled())}),rp(),As(11,`svg`,8),om(12,`path`,11),Ol()(),AC(13,M,3,5,`button`,12),Ol()()()),g&2&&(RI(2),RC(t.hidePageSize?-1:2),RI(3),Ul(` `,t._intl.getRangeLabel(t.pageIndex,t.pageSize,t.length),` `),RI(),RC(t.showFirstLastButtons?6:-1),RI(),rm(`matTooltip`,t._intl.previousPageLabel)(`matTooltipDisabled`,t._previousButtonsDisabled())(`disabled`,t._previousButtonsDisabled())(`tabindex`,t._previousButtonsDisabled()?-1:null),Fo(`aria-label`,t._intl.previousPageLabel),RI(3),rm(`matTooltip`,t._intl.nextPageLabel)(`matTooltipDisabled`,t._nextButtonsDisabled())(`disabled`,t._nextButtonsDisabled())(`tabindex`,t._nextButtonsDisabled()?-1:null),Fo(`aria-label`,t._intl.nextPageLabel),RI(3),RC(t.showFirstLastButtons?13:-1))},dependencies:[sr$1,vn,ae,Fi,md],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-paginator-container-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-paginator-container-background-color, var(--%NS%mat-sys-surface));
  font-family: var(--%NS%mat-paginator-container-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-paginator-container-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-paginator-container-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-paginator-container-text-weight, var(--%NS%mat-sys-body-small-weight));
  letter-spacing: var(--%NS%mat-paginator-container-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  --%NS%mat-form-field-container-height: var(--%NS%mat-paginator-form-field-container-height, 40px);
  --%NS%mat-form-field-container-vertical-padding: var(--%NS%mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--%NS%mat-paginator-select-trigger-text-size, var(--%NS%mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--%NS%mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--%NS%mat-paginator-enabled-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--%NS%mat-paginator-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--%NS%mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
  height: var(--%NS%mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})})()}return l})();var m=new I(`MAT_DATE_LOCALE`,{providedIn:`root`,factory:()=>g$1(Po)});var a$1=`Method not implemented`;var l$1=class{locale;_localeChanges=new ne$1;localeChanges=this._localeChanges;setTime(t,e,r,i){throw new Error(a$1)}getHours(t){throw new Error(a$1)}getMinutes(t){throw new Error(a$1)}getSeconds(t){throw new Error(a$1)}parseTime(t,e){throw new Error(a$1)}addSeconds(t,e){throw new Error(a$1)}getValidDateOrNull(t){return this.isDateInstance(t)&&this.isValid(t)?t:null}deserialize(t){return t==null||this.isDateInstance(t)&&this.isValid(t)?t:this.invalid()}setLocale(t){this.locale=t,this._localeChanges.next()}compareDate(t,e){return this.getYear(t)-this.getYear(e)||this.getMonth(t)-this.getMonth(e)||this.getDate(t)-this.getDate(e)}compareTime(t,e){return this.getHours(t)-this.getHours(e)||this.getMinutes(t)-this.getMinutes(e)||this.getSeconds(t)-this.getSeconds(e)}sameDate(t,e){if(t&&e){let r=this.isValid(t),i=this.isValid(e);return r&&i?!this.compareDate(t,e):r==i}return t==e}sameTime(t,e){if(t&&e){let r=this.isValid(t),i=this.isValid(e);return r&&i?!this.compareTime(t,e):r==i}return t==e}clampDate(t,e,r){return e&&this.compareDate(t,e)<0?e:r&&this.compareDate(t,r)>0?r:t}};var d=new I(`mat-date-formats`);function C(r,e){let v=!e?.manualCleanup?e?.injector?.get(he)??g$1(he):null,a=f$1(e?.equal),n;e?.requireSync?n=cr({kind:0},{equal:a}):n=cr({kind:1,value:e?.initialValue},{equal:a});let s,d=r.subscribe({next:t=>n.set({kind:1,value:t}),error:t=>{n.set({kind:2,error:t}),s?.()},complete:()=>{s?.()}});if(e?.requireSync&&n().kind===0)throw new m$1(601,!1);return s=v?.onDestroy(d.unsubscribe.bind(d)),Bb(()=>{let t=n();switch(t.kind){case 1:return t.value;case 2:throw t.error;case 0:throw new m$1(601,!1)}},{equal:e?.equal})}function f$1(r=Object.is){return(e,o)=>e.kind===1&&o.kind===1&&r(e.value,o.value)}var g=(()=>{class n{labelPosition=`after`;static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){return ko({type:n,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(e,l){e&2&&zs(`mdc-form-field--align-end`,l.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:[`*`],decls:1,vars:0,template:function(e,l){e&1&&(Vl(),Bl(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})})()}return n})();var o={nombre:`SOLSERVICES`,razonSocial:`SOLSERVICES S.A.`,slogan:`Servicio técnico especializado en electrodomésticos`,logo:`images/logo-solservices-dark.png`,logoBlanco:`images/logo-solservices-white.png`,logoPdf:`images/logo-solservices-pdf.png`,isotipo:`images/isotipo-solservices.png`,isotipoBlanco:`images/isotipo-solservices-white.png`,marcas:[{nombre:`Samsung`,logo:`images/marcas/samsung.png`},{nombre:`LG`,logo:`images/marcas/lg.png`},{nombre:`Whirlpool`,logo:`images/marcas/whirlpool.png`},{nombre:`Bosch`,logo:`images/marcas/bosch.png`},{nombre:`Electrolux`,logo:`images/marcas/electrolux.png`}],colores:{primario:`#1428a0`,oscuro:`#0b1f5c`,acento:`#00a3e0`},identificacionFiscal:`NIT 900.000.000-0`,direccion:`Calle 100 # 15-20, Oficina 302`,ciudad:`Bogotá D.C.`,telefono:`+57 601 000 0000`,email:`contacto@solservices.com`,web:`www.solservices.com`,locale:`es-CO`,moneda:`COP`,decimalesMoneda:0,garantiaDias:90,diasAbandono:30,terminosVoucher:[`El diagnóstico tiene un costo que será descontado del valor total si el cliente aprueba la reparación.`,`El tiempo estimado de entrega puede variar según la disponibilidad de repuestos.`,`La garantía cubre únicamente la reparación realizada y los repuestos sustituidos.`,`Es indispensable presentar este comprobante para retirar el equipo.`]};var n={RECIBIDA:{label:`Recibida`,icon:`inventory_2`,color:`#0ea5e9`},EN_DIAGNOSTICO:{label:`En diagnóstico`,icon:`troubleshoot`,color:`#f59e0b`},ESPERANDO_REPUESTO:{label:`Esperando repuesto`,icon:`schedule`,color:`#64748b`},EN_REPARACION:{label:`En reparación`,icon:`build`,color:`#4f5bd5`},REPARADA:{label:`Reparada`,icon:`check_circle`,color:`#22c55e`},ENTREGADA:{label:`Entregada`,icon:`verified`,color:`#15803d`,permiso:E$2.ORDENES_ENTREGAR},CANCELADA:{label:`Cancelada`,icon:`cancel`,color:`#ef4444`,permiso:E$2.ORDENES_CANCELAR}};var a={RECIBIDA:[`EN_DIAGNOSTICO`,`CANCELADA`],EN_DIAGNOSTICO:[`EN_REPARACION`,`ESPERANDO_REPUESTO`,`REPARADA`,`CANCELADA`],ESPERANDO_REPUESTO:[`EN_REPARACION`,`CANCELADA`],EN_REPARACION:[`REPARADA`,`ESPERANDO_REPUESTO`,`CANCELADA`],REPARADA:[`ENTREGADA`],ENTREGADA:[],CANCELADA:[]};var i=[`ENTREGADA`,`CANCELADA`];var l=Object.keys(n).map(e=>({label:n[e].label,value:e}));var r={BAJA:{label:`Baja`,tono:`neutral`},MEDIA:{label:`Media`,tono:`info`},ALTA:{label:`Alta`,tono:`warn`},URGENTE:{label:`Urgente`,tono:`danger`}};var E=Object.keys(r).map(e=>({label:r[e].label,value:e}));var s=[`Lavadora`,`Secadora`,`Nevera`,`Congelador`,`Estufa / Horno`,`Microondas`,`Lavaplatos`,`Aire acondicionado`,`Calentador de agua`,`Televisor`,`Licuadora / Pequeño electrodoméstico`,`Otro`];function rr(n){let a=n,e=Math.floor(Math.abs(n)),t=n.toString().replace(/^[^.]*\.?/,``).length,r=parseInt(n.toString().replace(/^[^e]*(e([-+]?\d+))?/,`$2`))||0;return a===1?1:r===0&&e!==0&&e%1e6===0&&t===0||!(r>=0&&r<=5)?4:5}var Pn=[`es-CO`,[[`a. m.`,`p. m.`],void 0,[`a.\xA0m.`,`p.\xA0m.`]],void 0,[[`D`,`L`,`M`,`m`,`J`,`V`,`S`],[`dom`,`lun`,`mar`,`mié`,`jue`,`vie`,`sáb`],[`domingo`,`lunes`,`martes`,`miércoles`,`jueves`,`viernes`,`sábado`],[`DO`,`LU`,`MA`,`MI`,`JU`,`VI`,`SA`]],[[`d`,`l`,`m`,`m`,`j`,`v`,`s`],[`dom`,`lun`,`mar`,`mié`,`jue`,`vie`,`sáb`],[`domingo`,`lunes`,`martes`,`miércoles`,`jueves`,`viernes`,`sábado`],[`DO`,`LU`,`MA`,`MI`,`JU`,`VI`,`SA`]],[[`E`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],[`ene`,`feb`,`mar`,`abr`,`may`,`jun`,`jul`,`ago`,`sept`,`oct`,`nov`,`dic`],[`enero`,`febrero`,`marzo`,`abril`,`mayo`,`junio`,`julio`,`agosto`,`septiembre`,`octubre`,`noviembre`,`diciembre`]],[[`E`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],[`ene.`,`feb.`,`mar.`,`abr.`,`may.`,`jun.`,`jul.`,`ago.`,`sept.`,`oct.`,`nov.`,`dic.`],[`enero`,`febrero`,`marzo`,`abril`,`mayo`,`junio`,`julio`,`agosto`,`septiembre`,`octubre`,`noviembre`,`diciembre`]],[[`a.C.`,`d.C.`],void 0,[`antes de Cristo`,`después de Cristo`]],0,[6,0],[`d/MM/yy`,`d/MM/y`,`d 'de' MMMM 'de' y`,`EEEE, d 'de' MMMM 'de' y`],[`h:mm a`,`h:mm:ss a`,`h:mm:ss a z`,`h:mm:ss a zzzz`],[`{1}, {0}`,void 0,void 0,void 0],[`,`,`.`,`;`,`%`,`+`,`-`,`E`,`×`,`‰`,`∞`,`NaN`,`:`],[`#,##0.###`,`#,##0%`,`¤\xA0#,##0.00`,`#E0`],`COP`,`$`,`peso colombiano`,{AUD:[void 0,`$`],BRL:[void 0,`R$`],BYN:[void 0,`р.`],CAD:[void 0,`$`],CNY:[void 0,`¥`],COP:[`$`],ESP:[`₧`],EUR:[void 0,`€`],FKP:[void 0,`FK£`],GBP:[void 0,`£`],HKD:[void 0,`$`],ILS:[void 0,`₪`],INR:[void 0,`₹`],JPY:[void 0,`¥`],KRW:[void 0,`₩`],MXN:[void 0,`$`],NZD:[void 0,`$`],PHP:[void 0,`₱`],RON:[void 0,`L`],SSP:[void 0,`SD£`],SYP:[void 0,`S£`],TWD:[void 0,`NT$`],USD:[`US$`,`$`],VEF:[void 0,`BsF`],VND:[void 0,`₫`],XAF:[],XCD:[void 0,`$`],XOF:[]},`ltr`,rr];var ar=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;var ir=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function ht(n,a){let e=Array(n);for(let t=0;t<n;t++)e[t]=a(t);return e}var or=(()=>{class n extends l$1{_matDateLocale=g$1(m,{optional:!0});constructor(){super();let e=g$1(m,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:`utc`});return ht(12,r=>this._format(t,new Date(2017,r,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:`numeric`,timeZone:`utc`});return ht(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:`utc`});return ht(7,r=>this._format(t,new Date(2017,0,r+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:`numeric`,timeZone:`utc`});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<`u`&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,r){let i=this._createDateWithOverflow(e,t,r);return i.getMonth(),i}today(){return new Date}parse(e,t){return typeof e==`number`?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error(`NativeDateAdapter: Cannot format invalid date.`);let r=new Intl.DateTimeFormat(this.locale,s$1(r$1({},t),{timeZone:`utc`}));return this._format(r,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let r=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(r)!=((this.getMonth(e)+t)%12+12)%12&&(r=this._createDateWithOverflow(this.getYear(r),this.getMonth(r),0)),r}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join(`-`)}deserialize(e){if(typeof e==`string`){if(!e)return null;if(ar.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,r,i){let o=this.clone(e);return o.setHours(t,r,i,0),o}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!=`string`)return e instanceof Date?new Date(e.getTime()):null;let r=e.trim();if(r.length===0)return null;let i=this._parseTimeString(r);if(i===null){let o=r.replace(/[^0-9:(AM|PM)]/gi,``).trim();o.length>0&&(i=this._parseTimeString(o))}return i||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,r){let i=new Date;return i.setFullYear(e,t,r),i.setHours(0,0,0,0),i}_2digit(e){return(`00`+e).slice(-2)}_format(e,t){let r=new Date;return r.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),r.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(r)}_parseTimeString(e){let t=e.toUpperCase().match(ir);if(t){let r=parseInt(t[1]),i=parseInt(t[2]),o=t[3]==null?void 0:parseInt(t[3]),s=t[4];if(r===12?r=s===`AM`?0:r:s===`PM`&&(r+=12),gt(r,0,23)&&gt(i,0,59)&&(o==null||gt(o,0,59)))return this.setTime(this.today(),r,i,o||0)}return null}static ɵfac=function(t){return new(t||n)};static ɵprov=ge$1({token:n,factory:n.ɵfac,autoProvided:!1})}return n})();function gt(n,a,e){return!isNaN(n)&&n>=a&&n<=e}var sr={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:`numeric`,month:`numeric`,day:`numeric`},timeInput:{hour:`numeric`,minute:`numeric`},monthYearLabel:{year:`numeric`,month:`short`},dateA11yLabel:{year:`numeric`,month:`long`,day:`numeric`},monthYearA11yLabel:{year:`numeric`,month:`long`},timeOptionLabel:{hour:`numeric`,minute:`numeric`}}};function Bn(n=sr){return[{provide:l$1,useClass:or},{provide:d,useValue:n}]}var Ln=(n,a)=>g$1(E$1).autenticado()?!0:g$1(Lt$1).createUrlTree([`/login`],{queryParams:{returnUrl:a.url}});var Vn=()=>{let n=g$1(E$1);return n.autenticado()?g$1(Lt$1).parseUrl(n.rutaInicio()):!0};var zn=n=>{let a=n.data.permisos??[],e=n.data.modoPermiso??`alguno`;return g$1(E$1).tienePermiso(a,e)?!0:g$1(Lt$1).createUrlTree([`/acceso-denegado`])};var bt=new I(`MAT_MENU_PANEL`);var De=(()=>{class n{_isAnchor;_elementRef=g$1(Ct$1);_document=g$1(B);_focusMonitor=g$1(nn);_parentMenu=g$1(bt,{optional:!0});_changeDetectorRef=g$1(Ym);role=`menuitem`;disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new ne$1;_focused=new ne$1;_highlighted=!1;_triggersSubmenu=!1;constructor(){g$1($_).load(io),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName===`A`}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?`-1`:`0`}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp`);for(let r=0;r<t.length;r++)t[r].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`],t=[`mat-icon, [matMenuItemIcon]`,`*`];function r(i,o){i&1&&(rp(),As(0,`svg`,2),om(1,`polygon`,3),Ol())}return ko({type:n,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:12,hostBindings:function(o,s){o&1&&lm(`click`,function(m){return s._checkDisabled(m)})(`mouseenter`,function(){return s._handleMouseEnter()}),o&2&&(Fo(`role`,s.role)(`tabindex`,s._getTabIndex())(`aria-disabled`,s._getAriaDisabled())(`disabled`,s._getDisabled()),zs(`mat-mdc-menu-item-highlighted`,s._highlighted)(`mat-mdc-menu-item-submenu-trigger`,s._triggersSubmenu)(`mat-mdc-menu-item-disabled`,s.disabled)(`mat-mdc-menu-item-disabled-interactive`,s.disabledInteractive))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,Kl],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Kl],disableRipple:[2,`disableRipple`,`disableRipple`,Kl]},exportAs:[`matMenuItem`],ngContentSelectors:t,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(o,s){o&1&&(Vl(e),Bl(0),As(1,`span`,0),Bl(2,1),Ol(),om(3,`div`,1),AC(4,r,2,0,`svg`,2)),o&2&&(RI(3),rm(`matRippleDisabled`,s.disableRipple||s.disabled)(`matRippleTrigger`,s._getHostElement()),RI(),RC(s._triggersSubmenu?4:-1))},dependencies:[Kd],encapsulation:2})})()}return n})();var ur=new I(`MatMenuContent`);var pr=new I(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var ft=`_mat-menu-enter`;var Ye=`_mat-menu-exit`;var ue=(()=>{class n{_elementRef=g$1(Ct$1);_changeDetectorRef=g$1(Ym);_injector=g$1(re);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Ht();_allItems;_directDescendantItems=new ys;_classList={};_panelAnimationState=`void`;_animationDone=new ne$1;_isAnimating=cr(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,r=r$1({},this._classList);t&&t.length&&t.split(` `).forEach(i=>{r[i]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(i=>{r[i]=!0}),this._elementRef.nativeElement.className=``),this._classList=r}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new je;close=this.closed;panelId=g$1(ca).getId(`mat-menu-panel-`);constructor(){let e=g$1(pr);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new sa(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(e=>e.disabled&&!e.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe($d(this._directDescendantItems),xa(e=>Mv(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let r=e.toArray(),i=Math.max(0,Math.min(r.length-1,t.activeItemIndex||0));r[i]&&!r[i].disabled?t.setActiveItem(i):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe($d(this._directDescendantItems),xa(t=>Mv(...t.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,r=this._keyManager;switch(t){case 27:Gr(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&r.setFocusOrigin(`keyboard`),r.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=fI(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=s$1(r$1({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Ye;(t||e===ft)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===ft||e===Ye)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Ye),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?ft:Ye)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe($d(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`*`];function t(r,i){if(r&1){let o=UC();kl(0,`div`,0),dm(`click`,function(){zf(o);let l=qC();return Gf(l.closed.emit(`click`))})(`animationstart`,function(l){zf(o);let m=qC();return Gf(m._onAnimationStart(l.animationName))})(`animationend`,function(l){zf(o);let m=qC();return Gf(m._onAnimationDone(l.animationName))})(`animationcancel`,function(l){zf(o);let m=qC();return Gf(m._onAnimationDone(l.animationName))}),kl(1,`div`,1),Bl(2),Fl()()}if(r&2){let o=qC();Hl(o._classList),zs(`mat-menu-panel-animations-disabled`,o._animationsDisabled)(`mat-menu-panel-exit-animation`,o._panelAnimationState===`void`)(`mat-menu-panel-animating`,o._isAnimating()),cm(`id`,o.panelId),Fo(`aria-label`,o.ariaLabel||null)(`aria-labelledby`,o.ariaLabelledby||null)(`aria-describedby`,o.ariaDescribedby||null)}}return ko({type:n,selectors:[[`mat-menu`]],contentQueries:function(i,o,s){if(i&1&&pm(s,ur,5)(s,De,5)(s,De,4),i&2){let l;QC(l=KC())&&(o.lazyContent=l.first),QC(l=KC())&&(o._allItems=l),QC(l=KC())&&(o.items=l)}},viewQuery:function(i,o){if(i&1&&hm(yr$1,5),i&2){let s;QC(s=KC())&&(o.templateRef=s.first)}},hostVars:3,hostBindings:function(i,o){i&2&&Fo(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,Kl],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,r=>r==null?null:Kl(r)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[Rm([{provide:bt,useExisting:n}])],ngContentSelectors:e,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(i,o){i&1&&(Vl(),Jg(0,t,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled], .mat-mdc-menu-item.mat-mdc-menu-item-disabled {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after, .mat-mdc-menu-item.mat-mdc-menu-item-disabled::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})})()}return n})();var hr=new I(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=g$1(re);return()=>nt(n)}});var ce=new WeakMap;var gr=(()=>{class n{_canHaveBackdrop;_element=g$1(Ct$1);_viewContainerRef=g$1(wr$1);_menuItemInstance=g$1(De,{optional:!0,self:!0});_dir=g$1(Q_,{optional:!0});_focusMonitor=g$1(nn);_ngZone=g$1(ue$2);_injector=g$1(re);_scrollStrategy=g$1(hr);_changeDetectorRef=g$1(Ym);_animationsDisabled=Ht();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=G.EMPTY;_menuCloseSubscription=G.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=g$1(bt,{optional:!0});this._parentMaterialMenu=t instanceof ue?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&ce.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let r=ce.get(t);ce.set(t,this),r&&r!==this&&r._closeMenu();let i=this._createOverlay(t),o=i.getConfig(),s=o.positionStrategy;this._setPosition(t,s),this._canHaveBackdrop?o.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:o.hasBackdrop=t.hasBackdrop??!1,i.hasAttached()||(i.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof ue&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(jv(t.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,r=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof ue&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(Lt(1)).subscribe(()=>{t.detach(),ce.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(t.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&ce.delete(r),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=De$1(this._injector,t),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof ue&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(e){return new Me({positionStrategy:it(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let i=r.connectionPair.overlayX===`start`?`after`:`before`,o=r.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(i,o)})})}_setPosition(e,t){let[r,i]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[o,s]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[l,m]=[o,s],[u,N]=[r,i],Z=0;if(this._triggersSubmenu()){if(N=r=e.xPosition===`before`?`start`:`end`,i=u=r===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let Ie=this._parentMaterialMenu.items.first;this._parentInnerPadding=Ie?Ie._getHostElement().offsetTop:0}Z=o===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(l=o===`top`?`bottom`:`top`,m=s===`top`?`bottom`:`top`);t.withPositions([{originX:r,originY:l,overlayX:u,overlayY:o,offsetY:Z},{originX:i,originY:l,overlayX:N,overlayY:o,offsetY:Z},{originX:r,originY:m,overlayX:u,overlayY:s,offsetY:-Z},{originX:i,originY:m,overlayX:N,overlayY:s,offsetY:-Z}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:ct(),i=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Ft(o=>this._menuOpen&&o!==this._menuItemInstance)):ct();return Mv(e,r,i,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Se(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return ce.get(e)===this}_triggerIsAriaDisabled(){return Kl(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){Sw()};static ɵdir=$s({type:n})}return n})();var Hn=(()=>{class n extends gr{_cleanupTouchstart;_hoverSubscription=G.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new je;onMenuOpen=this.menuOpened;menuClosed=new je;onMenuClose=this.menuClosed;constructor(){super(!0);let e=g$1(bo);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{se(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){ie(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||n)};static ɵdir=$s({type:n,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,r){t&1&&lm(`click`,function(o){return r._handleClick(o)})(`mousedown`,function(o){return r._handleMousedown(o)})(`keydown`,function(o){return r._handleKeydown(o)}),t&2&&Fo(`aria-haspopup`,r.menu?`menu`:null)(`aria-expanded`,r.menuOpen)(`aria-controls`,r.menuOpen?r.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Qg]})}return n})();var Wn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Rn({type:n});static ɵinj=zt({imports:[lo,Er$1,BU,A$1]})}return n})();var _r=new I(`MAT_DRAWER_DEFAULT_AUTOSIZE`,{providedIn:`root`,factory:()=>!1});var yt=new I(`MAT_DRAWER_CONTAINER`);var ke=(()=>{class n extends Qe$1{_platform=g$1(A);_changeDetectorRef=g$1(Ym);_element=g$1(Ct$1);_ngZone=g$1(ue$2);_isInert=!1;_container=g$1(wt);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(e){e.opened?this._ngZone.runOutsideAngular(()=>{e._animationEnd.pipe(Jd(50),Lt(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let e=this._container._isShowingBackdrop();if(e!==this._isInert){let t=this._element.nativeElement;this._isInert=e,e?t.setAttribute(`inert`,`true`):t.removeAttribute(`inert`)}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!==`over`&&e.opened||t!=null&&t.mode!==`over`&&t.opened}static ɵfac=(()=>{let e;return function(r){return(e||(e=Dh(n)))(r||n)}})();static ɵcmp=(function(){return ko({type:n,selectors:[[`mat-drawer-content`]],hostAttrs:[1,`mat-drawer-content`],hostVars:6,hostBindings:function(r,i){r&2&&(Dm(`margin-left`,i._container._contentMargins.left,`px`)(`margin-right`,i._container._contentMargins.right,`px`),zs(`mat-drawer-content-hidden`,i._shouldBeHidden()))},features:[Rm([{provide:Qe$1,useExisting:n}]),Qg],ngContentSelectors:[`*`],decls:1,vars:0,template:function(r,i){r&1&&(Vl(),Bl(0))},encapsulation:2})})()}return n})();var vt=(()=>{class n{_elementRef=g$1(Ct$1);_focusTrapFactory=g$1(Hr);_focusMonitor=g$1(nn);_platform=g$1(A);_ngZone=g$1(ue$2);_renderer=g$1(bo);_interactivityChecker=g$1(Br);_doc=g$1(B);_isAnimating=!1;_container=g$1(yt,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e===`end`?`end`:`start`,e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position=`start`;get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode=`over`;get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=kd(e)}_disableClose=!1;get autoFocus(){return this._autoFocus??(this.mode===`side`?`dialog`:`first-tabbable`)}set autoFocus(e){(e===`true`||e===`false`||e==null)&&(e=kd(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(kd(e))}_opened=cr(!1);_openedVia=null;_animationStarted=new ne$1;_animationEnd=new ne$1;openedChange=new je(!0);_openedStream=this.openedChange.pipe(Ft(e=>e),Q(()=>{}));openedStart=this._animationStarted.pipe(Ft(()=>this.opened),Pa(void 0));_closedStream=this.openedChange.pipe(Ft(e=>!e),Q(()=>{}));closedStart=this._animationStarted.pipe(Ft(()=>!this.opened),Pa(void 0));_destroyed=new ne$1;onPositionChanged=new je;_content;_modeChanged=new ne$1;_injector=g$1(re);_changeDetectorRef=g$1(Ym);constructor(){this.openedChange.pipe(jv(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||`program`)}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,`keydown`,r=>{r.keyCode===27&&!this.disableClose&&!Gr(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(t,`transitionend`,this._handleTransitionEvent),e.listen(t,`transitioncancel`,this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&(this._interactivityChecker.isFocusable(r)||(r.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),s(),r.removeAttribute(`tabindex`)},o=this._renderer.listen(r,`blur`,i),s=this._renderer.listen(r,`mousedown`,i)})),r.focus(t))}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case`dialog`:return;case!0:case`first-tabbable`:fI(()=>{let t=this._isAnimating?{preventScroll:!0}:void 0;!this._focusTrap.focusInitialElement(t)&&typeof e.focus==`function`&&e.focus(t)},{injector:this._injector});break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`);break;default:this._focusByCssSelector(this.autoFocus)}}_restoreFocus(e){this.autoFocus!==`dialog`&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position===`end`&&this._updatePositionInParent(`end`),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,`mouse`)}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||`program`);return e||(this._openedVia=null),r}_setOpen(e,t,r){return e===this.opened?Promise.resolve(e?`open`:`close`):(this._opened.set(e),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?this._isAnimating?(this._setIsAnimating(!1),this._simulateAnimation()):(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):this._simulateAnimation(),this._elementRef.nativeElement.classList.toggle(`mat-drawer-opened`,e),!e&&t&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(i=>{this.openedChange.pipe(Lt(1)).subscribe(o=>i(o?`open`:`close`))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(e){e!==this._isAnimating&&(this._isAnimating=e,this._elementRef.nativeElement.classList.toggle(`mat-drawer-animating`,e))}_simulateAnimation(){setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()})}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,r=t.parentNode;e===`end`?(this._anchor||(this._anchor=this._doc.createComment(`mat-drawer-anchor`),r.insertBefore(this._anchor,t)),r.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type===`transitionend`&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`content`];return ko({type:n,selectors:[[`mat-drawer`]],viewQuery:function(i,o){if(i&1&&hm(e,5),i&2){let s;QC(s=KC())&&(o._content=s.first)}},hostAttrs:[1,`mat-drawer`],hostVars:12,hostBindings:function(i,o){i&2&&(Fo(`align`,null)(`tabIndex`,o.mode!==`side`?`-1`:null),Dm(`visibility`,!o._container&&!o.opened?`hidden`:null),zs(`mat-drawer-end`,o.position===`end`)(`mat-drawer-over`,o.mode===`over`)(`mat-drawer-push`,o.mode===`push`)(`mat-drawer-side`,o.mode===`side`))},inputs:{position:`position`,mode:`mode`,disableClose:`disableClose`,autoFocus:`autoFocus`,opened:`opened`},outputs:{openedChange:`openedChange`,_openedStream:`opened`,openedStart:`openedStart`,_closedStream:`closed`,closedStart:`closedStart`,onPositionChanged:`positionChanged`},exportAs:[`matDrawer`],ngContentSelectors:[`*`],decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(i,o){i&1&&(Vl(),As(0,`div`,1,0),Bl(2),Ol())},dependencies:[Qe$1],encapsulation:2})})()}return n})();var wt=(()=>{class n{_dir=g$1(Q_,{optional:!0});_element=g$1(Ct$1);_ngZone=g$1(ue$2);_changeDetectorRef=g$1(Ym);_animationDisabled=Ht();_transitionsEnabled=!1;_allDrawers;_drawers=new ys;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=kd(e)}_autosize=g$1(_r);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:kd(e)}_backdropOverride=null;backdropClick=new je;_start=null;_end=null;_left=null;_right=null;_destroyed=new ne$1;_doCheckSubject=new ne$1;_contentMargins={left:null,right:null};_contentMarginChanges=new ne$1;get scrollable(){return this._userContent||this._content}_injector=g$1(re);constructor(){let e=g$1(A),t=g$1(Xe$1);this._dir?.change.pipe(jv(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(jv(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add(`mat-drawer-transition`),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe($d(this._allDrawers),jv(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe($d(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Av(10),jv(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode==`side`)e+=this._left._getWidth();else if(this._left.mode==`push`){let r=this._left._getWidth();e+=r,t-=r}}if(this._right&&this._right.opened){if(this._right.mode==`side`)t+=this._right._getWidth();else if(this._right.mode==`push`){let r=this._right._getWidth();t+=r,e-=r}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(jv(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!==`side`&&e.openedChange.pipe(jv(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(jv(this._drawers.changes)).subscribe(()=>{fI({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(jv(Mv(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,r=`mat-drawer-container-has-open`;e?t.add(r):t.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position==`end`?(this._end,this._end=e):(this._start,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value===`rtl`?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!=`over`||this._isDrawerOpen(this._end)&&this._end.mode!=`over`}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!==`side`:this._backdropOverride}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`],t=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function r(o,s){if(o&1){let l=UC();As(0,`div`,1),lm(`click`,function(){zf(l);let u=qC();return Gf(u._onBackdropClicked())}),Ol()}if(o&2){let l=qC();zs(`mat-drawer-shown`,l._isShowingBackdrop())}}function i(o,s){o&1&&(As(0,`mat-drawer-content`),Bl(1,2),Ol())}return ko({type:n,selectors:[[`mat-drawer-container`]],contentQueries:function(s,l,m){if(s&1&&pm(m,ke,5)(m,vt,5),s&2){let u;QC(u=KC())&&(l._content=u.first),QC(u=KC())&&(l._allDrawers=u)}},viewQuery:function(s,l){if(s&1&&hm(ke,5),s&2){let m;QC(m=KC())&&(l._userContent=m.first)}},hostAttrs:[1,`mat-drawer-container`],hostVars:2,hostBindings:function(s,l){s&2&&zs(`mat-drawer-container-explicit-backdrop`,l._backdropOverride)},inputs:{autosize:`autosize`,hasBackdrop:`hasBackdrop`},outputs:{backdropClick:`backdropClick`},exportAs:[`matDrawerContainer`],features:[Rm([{provide:yt,useExisting:n}])],ngContentSelectors:t,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(s,l){s&1&&(Vl(e),AC(0,r,1,2,`div`,0),Bl(1),Bl(2,1),AC(3,i,2,0,`mat-drawer-content`)),s&2&&(RC(l.hasBackdrop?0:-1),RI(3),RC(l._content?-1:3))},dependencies:[ke],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})})()}return n})();var Qe=(()=>{class n extends ke{static ɵfac=(()=>{let e;return function(r){return(e||(e=Dh(n)))(r||n)}})();static ɵcmp=(function(){return ko({type:n,selectors:[[`mat-sidenav-content`]],hostAttrs:[1,`mat-drawer-content`,`mat-sidenav-content`],features:[Rm([{provide:Qe$1,useExisting:n},{provide:ke,useExisting:n}]),Qg],ngContentSelectors:[`*`],decls:1,vars:0,template:function(r,i){r&1&&(Vl(),Bl(0))},encapsulation:2})})()}return n})();var Mt=(()=>{class n extends vt{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=kd(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=ci(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=ci(e)}_fixedBottomGap=0;static ɵfac=(()=>{let e;return function(r){return(e||(e=Dh(n)))(r||n)}})();static ɵcmp=(function(){return ko({type:n,selectors:[[`mat-sidenav`]],hostAttrs:[1,`mat-drawer`,`mat-sidenav`],hostVars:16,hostBindings:function(r,i){r&2&&(Fo(`tabIndex`,i.mode!==`side`?`-1`:null)(`align`,null),Dm(`top`,i.fixedInViewport?i.fixedTopGap:null,`px`)(`bottom`,i.fixedInViewport?i.fixedBottomGap:null,`px`),zs(`mat-drawer-end`,i.position===`end`)(`mat-drawer-over`,i.mode===`over`)(`mat-drawer-push`,i.mode===`push`)(`mat-drawer-side`,i.mode===`side`)(`mat-sidenav-fixed`,i.fixedInViewport))},inputs:{fixedInViewport:`fixedInViewport`,fixedTopGap:`fixedTopGap`,fixedBottomGap:`fixedBottomGap`},exportAs:[`matSidenav`],features:[Rm([{provide:vt,useExisting:n}]),Qg],ngContentSelectors:[`*`],decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(r,i){r&1&&(Vl(),As(0,`div`,1,0),Bl(2),Ol())},dependencies:[Qe$1],encapsulation:2})})()}return n})();var Gn=(()=>{class n extends wt{_allDrawers=void 0;_content=void 0;static ɵfac=(()=>{let e;return function(r){return(e||(e=Dh(n)))(r||n)}})();static ɵcmp=(function(){let e=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`],t=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function r(o,s){if(o&1){let l=UC();As(0,`div`,1),lm(`click`,function(){zf(l);let u=qC();return Gf(u._onBackdropClicked())}),Ol()}if(o&2){let l=qC();zs(`mat-drawer-shown`,l._isShowingBackdrop())}}function i(o,s){o&1&&(As(0,`mat-sidenav-content`),Bl(1,2),Ol())}return ko({type:n,selectors:[[`mat-sidenav-container`]],contentQueries:function(s,l,m){if(s&1&&pm(m,Qe,5)(m,Mt,5),s&2){let u;QC(u=KC())&&(l._content=u.first),QC(u=KC())&&(l._allDrawers=u)}},hostAttrs:[1,`mat-drawer-container`,`mat-sidenav-container`],hostVars:2,hostBindings:function(s,l){s&2&&zs(`mat-drawer-container-explicit-backdrop`,l._backdropOverride)},exportAs:[`matSidenavContainer`],features:[Rm([{provide:yt,useExisting:n},{provide:wt,useExisting:n}]),Qg],ngContentSelectors:t,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(s,l){s&1&&(Vl(e),AC(0,r,1,2,`div`,0),Bl(1),Bl(2,1),AC(3,i,2,0,`mat-sidenav-content`)),s&2&&(RC(l.hasBackdrop?0:-1),RI(3),RC(l._content?-1:3))},dependencies:[Qe],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})})()}return n})();var $n=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Rn({type:n});static ɵinj=zt({imports:[A$1,BU,A$1]})}return n})();var wr=n=>({exact:n});var yr=(n,a)=>a.titulo;var Mr=(n,a)=>a.ruta;function Cr(n,a){if(n&1){let e=UC();As(0,`a`,27),lm(`click`,function(){zf(e);let r=qC(2),i=JC(2);return Gf(r.esMovil()&&i.close())}),As(1,`mat-icon`),Eb(2),Ol(),As(3,`span`),Eb(4),Ol()()}if(n&2){let e=a.$implicit;rm(`routerLink`,e.ruta)(`routerLinkActiveOptions`,Ab(4,wr,!!e.exacto)),RI(2),Tm(e.icon),RI(2),Tm(e.label)}}function Sr(n,a){if(n&1&&(As(0,`div`,7)(1,`span`,25),Eb(2),Ol(),FC(3,Cr,5,6,`a`,26,Mr),Ol()),n&2){let e=a.$implicit;RI(2),Tm(e.titulo),RI(),LC(e.items)}}function xr(n,a){if(n&1){let e=UC();As(0,`button`,28),lm(`click`,function(){zf(e),qC();let r=JC(2);return Gf(r.open())}),As(1,`mat-icon`),Eb(2,`menu`),Ol()()}}var qe=class n{auth=g$1(E$1);router=g$1(Lt$1);tema=g$1(i$1);brand=o;usuario=this.auth.usuario;anio=new Date().getFullYear();esMovil=C(g$1(ra).observe(`(max-width: 991px)`).pipe(Q(a=>a.matches)),{initialValue:!1});rolInfo=Bb(()=>{let a=this.auth.rol();return a?o$2[a]:null});iniciales=Bb(()=>(this.usuario()?.nombreCompleto??`?`).split(` `).slice(0,2).map(a=>a[0]).join(``).toUpperCase());menu=Bb(()=>(this.auth.permisos(),v.map(a=>s$1(r$1({},a),{items:a.items.filter(e=>this.auth.tienePermiso(e.permisos??[]))})).filter(a=>a.items.length>0)));tituloPagina=C(this.router.events.pipe(Ft(a=>a instanceof X$1),Q(()=>this.titulo(this.router.routerState.snapshot.root))),{initialValue:this.titulo(this.router.routerState.snapshot.root)});cerrarSesion(){this.auth.logout()}titulo(a){let e=a,t=``;for(;e;)e.title&&(t=e.title),e=e.firstChild;return t}static ɵfac=function(e){return new(e||n)};static ɵcmp=ko({type:n,selectors:[[`app-main-layout`]],decls:47,vars:19,consts:[[`sidenav`,``],[`menuUsuario`,`matMenu`],[1,`layout`],[1,`sidebar`,3,`mode`,`opened`,`fixedInViewport`],[`routerLink`,`/`,1,`sidebar-logo`,3,`click`],[3,`src`,`alt`],[1,`sidebar-nav`],[1,`nav-seccion`],[1,`sidebar-pie`],[1,`principal`],[1,`topbar`],[1,`topbar-izq`],[`matIconButton`,``,`aria-label`,`Abrir menú`],[1,`topbar-titulo`],[1,`topbar-der`],[`matIconButton`,``,3,`click`,`matTooltip`],[`type`,`button`,1,`usuario-btn`,3,`matMenuTriggerFor`],[1,`avatar`],[1,`usuario-datos`],[1,`usuario-nombre`],[1,`usuario-rol`],[`xPosition`,`before`],[`mat-menu-item`,``,`disabled`,``,1,`menu-usuario-info`],[`mat-menu-item`,``,3,`click`],[1,`contenido`],[1,`nav-titulo`],[`routerLinkActive`,`activo`,1,`nav-item`,3,`routerLink`,`routerLinkActiveOptions`],[`routerLinkActive`,`activo`,1,`nav-item`,3,`click`,`routerLink`,`routerLinkActiveOptions`],[`matIconButton`,``,`aria-label`,`Abrir menú`,3,`click`]],template:function(e,t){if(e&1){let r=UC();As(0,`mat-sidenav-container`,2)(1,`mat-sidenav`,3,0)(3,`a`,4),lm(`click`,function(){zf(r);let o=JC(2);return Gf(t.esMovil()&&o.close())}),om(4,`img`,5),Ol(),As(5,`nav`,6),FC(6,Sr,5,1,`div`,7,yr),Ol(),As(8,`div`,8),Eb(9),Ol()(),As(10,`mat-sidenav-content`,9)(11,`header`,10)(12,`div`,11),AC(13,xr,3,0,`button`,12),As(14,`h1`,13),Eb(15),Ol()(),As(16,`div`,14)(17,`button`,15),lm(`click`,function(){return t.tema.alternar()}),As(18,`mat-icon`),Eb(19),Ol()(),As(20,`button`,16)(21,`span`,17),Eb(22),Ol(),As(23,`span`,18)(24,`span`,19),Eb(25),Ol(),As(26,`span`,20),Eb(27),Ol()(),As(28,`mat-icon`),Eb(29,`expand_more`),Ol()(),As(30,`mat-menu`,21,1)(32,`div`,22)(33,`span`),Eb(34),Ol()(),As(35,`button`,23),lm(`click`,function(){return t.tema.alternar()}),As(36,`mat-icon`),Eb(37),Ol(),As(38,`span`),Eb(39),Ol()(),As(40,`button`,23),lm(`click`,function(){return t.cerrarSesion()}),As(41,`mat-icon`),Eb(42,`logout`),Ol(),As(43,`span`),Eb(44,`Cerrar sesión`),Ol()()()()(),As(45,`main`,24),om(46,`router-outlet`),Ol()()()}if(e&2){let r=JC(31);RI(),rm(`mode`,t.esMovil()?`over`:`side`)(`opened`,!t.esMovil())(`fixedInViewport`,!0),RI(3),rm(`src`,t.brand.logoBlanco)(`alt`,t.brand.nombre),RI(2),LC(t.menu()),RI(3),_m(`© `,t.anio,` `,t.brand.nombre),RI(4),RC(t.esMovil()?13:-1),RI(2),Tm(t.tituloPagina()),RI(2),rm(`matTooltip`,t.tema.oscuro()?`Modo claro`:`Modo oscuro`),Fo(`aria-label`,t.tema.oscuro()?`Activar modo claro`:`Activar modo oscuro`),RI(2),Tm(t.tema.oscuro()?`light_mode`:`dark_mode`),RI(),rm(`matMenuTriggerFor`,r),RI(2),Tm(t.iniciales()),RI(3),Tm(t.usuario()?.nombreCompleto),RI(2),Tm(t.rolInfo()?.nombre),RI(7),Tm(t.usuario()?.email),RI(3),Tm(t.tema.oscuro()?`light_mode`:`dark_mode`),RI(2),Tm(t.tema.oscuro()?`Modo claro`:`Modo oscuro`)}},dependencies:[Ba,jn,gc,$n,Mt,Gn,Qe,Fi,QU,Wn,ue,De,Hn,md],styles:[`[_nghost-%COMP%]{display:block}.layout[_ngcontent-%COMP%]{min-height:100vh}.sidebar[_ngcontent-%COMP%]{width:var(--%NS%sidebar-width);color:var(--%NS%app-sidebar-text);border-right:none}.sidebar[_ngcontent-%COMP%]     .mat-drawer-inner-container{display:flex;flex-direction:column}.sidebar-logo[_ngcontent-%COMP%]{display:flex;align-items:center;height:var(--%NS%topbar-height);padding:0 1.5rem;border-bottom:1px solid rgba(255,255,255,.08)}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:180px;height:auto}.sidebar-nav[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:1rem .75rem}.nav-seccion[_ngcontent-%COMP%] + .nav-seccion[_ngcontent-%COMP%]{margin-top:1.25rem}.nav-titulo[_ngcontent-%COMP%]{display:block;padding:0 .75rem .5rem;font-size:.7rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--%NS%app-sidebar-muted)}.nav-item[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;gap:.75rem;padding:.6rem .75rem;border-radius:10px;color:var(--%NS%app-sidebar-text);font-size:.925rem;text-decoration:none;transition:background .15s,color .15s}.nav-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:var(--%NS%app-sidebar-muted);transition:color .15s}.nav-item[_ngcontent-%COMP%]:hover{background:#ffffff0f;color:#fff}.nav-item.activo[_ngcontent-%COMP%]{background:#00a3e029;color:#fff;font-weight:600}.nav-item.activo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--%NS%app-acento)}.nav-item.activo[_ngcontent-%COMP%]:before{content:"";position:absolute;left:-.75rem;top:20%;bottom:20%;width:3px;border-radius:0 3px 3px 0;background:var(--%NS%app-acento)}.sidebar-pie[_ngcontent-%COMP%]{padding:1rem 1.5rem;font-size:.75rem;color:var(--%NS%app-sidebar-muted);border-top:1px solid rgba(255,255,255,.08)}.principal[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh}.topbar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:10;display:flex;align-items:center;justify-content:space-between;gap:1rem;height:var(--%NS%topbar-height);padding:0 1.25rem 0 1.75rem;background:var(--%NS%app-card);border-bottom:1px solid var(--%NS%app-border)}.topbar-izq[_ngcontent-%COMP%], .topbar-der[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;min-width:0}.topbar-titulo[_ngcontent-%COMP%]{margin:0;font-size:1.15rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.usuario-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.65rem;padding:.3rem .5rem .3rem .3rem;border:1px solid transparent;border-radius:999px;background:none;font:inherit;color:var(--%NS%app-muted);cursor:pointer}.usuario-btn[_ngcontent-%COMP%]:hover{border-color:var(--%NS%app-border);background:color-mix(in srgb,var(--%NS%mat-sys-primary) 5%,transparent)}.avatar[_ngcontent-%COMP%]{display:grid;place-items:center;width:2.25rem;height:2.25rem;border-radius:50%;font-size:.8rem;font-weight:700;color:var(--%NS%mat-sys-on-primary);background:var(--%NS%mat-sys-primary)}.usuario-datos[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;line-height:1.2}.usuario-nombre[_ngcontent-%COMP%]{font-size:.875rem;font-weight:600;color:var(--%NS%mat-sys-on-surface)}.usuario-rol[_ngcontent-%COMP%]{font-size:.75rem}.menu-usuario-info[_ngcontent-%COMP%]{font-size:.8rem}.contenido[_ngcontent-%COMP%]{flex:1;width:100%;max-width:1600px;padding:1.75rem}@media(max-width:991px){.topbar[_ngcontent-%COMP%]{padding:0 .75rem}.contenido[_ngcontent-%COMP%]{padding:1rem}.usuario-datos[_ngcontent-%COMP%]{display:none}}`]})};var Yn=[{path:`login`,title:`Iniciar sesión`,canActivate:[Vn],loadComponent:()=>import(`./chunk-DmTY65fB.js`).then(n=>n.Login)},{path:``,component:qe,canActivate:[Ln],canActivateChild:[zn],children:[{path:``,pathMatch:`full`,redirectTo:()=>g$1(E$1).rutaInicio()},{path:`dashboard`,title:`Dashboard`,data:{permisos:[E$2.DASHBOARD_VER]},loadComponent:()=>import(`./chunk-BD6Hmg3Q.js`).then(n=>n.Dashboard)},{path:`ordenes`,children:[{path:``,title:`Órdenes de servicio`,data:{permisos:[E$2.ORDENES_VER]},loadComponent:()=>import(`./chunk-CyS4lqo4.js`).then(n=>n.OrdenesLista)},{path:`nueva`,title:`Nueva orden`,data:{permisos:[E$2.ORDENES_CREAR]},loadComponent:()=>import(`./chunk-BkjffDUR.js`).then(n=>n.OrdenForm)},{path:`:id`,title:`Detalle de orden`,data:{permisos:[E$2.ORDENES_VER]},loadComponent:()=>import(`./chunk-czfwXP-V.js`).then(n=>n.OrdenDetalle)},{path:`:id/editar`,title:`Editar orden`,data:{permisos:[E$2.ORDENES_EDITAR]},loadComponent:()=>import(`./chunk-BkjffDUR.js`).then(n=>n.OrdenForm)}]},{path:`clientes`,title:`Clientes`,data:{permisos:[E$2.CLIENTES_VER]},loadComponent:()=>import(`./chunk-D-Z1pyEJ.js`).then(n=>n.ClientesLista)},{path:`tecnicos`,title:`Técnicos`,data:{permisos:[E$2.TECNICOS_VER]},loadComponent:()=>import(`./chunk-EUz8oLSH.js`).then(n=>n.TecnicosLista)},{path:`usuarios`,title:`Usuarios`,data:{permisos:[E$2.USUARIOS_VER]},loadComponent:()=>import(`./chunk-C22nDUed.js`).then(n=>n.UsuariosLista)},{path:`roles`,title:`Roles y permisos`,data:{permisos:[E$2.ROLES_VER]},loadComponent:()=>import(`./chunk-BBG3Uxs8.js`).then(n=>n.RolesPermisos)},{path:`acceso-denegado`,title:`Acceso denegado`,loadComponent:()=>import(`./chunk-lvUNVAUb.js`).then(n=>n.AccesoDenegado)}]},{path:`**`,title:`Página no encontrada`,loadComponent:()=>import(`./chunk-X6N_71lk.js`).then(n=>n.NoEncontrado)}];var Xe=class n extends X{itemsPerPageLabel=`Filas por página`;nextPageLabel=`Página siguiente`;previousPageLabel=`Página anterior`;firstPageLabel=`Primera página`;lastPageLabel=`Última página`;getRangeLabel=(a,e,t)=>{if(t===0)return`0 de ${t}`;let r=a*e;return`${r+1} - ${Math.min(r+e,t)} de ${t}`};static ɵfac=(()=>{let a;return function(t){return(a||(a=Dh(n)))(t||n)}})();static ɵprov=R({token:n,factory:n.ɵfac})};var Ke=class n extends Va{title=g$1(mU);updateTitle(a){let e=this.buildTitle(a);this.title.setTitle(e?`${e} | ${o.nombre}`:o.nombre)}static ɵfac=(()=>{let a;return function(t){return(a||(a=Dh(n)))(t||n)}})();static ɵprov=R({token:n,factory:n.ɵfac,providedIn:`root`})};var Qn=(n,a)=>{let e=g$1(E$1).token(),t=n.url.startsWith(h.apiUrl),r=n.url.endsWith(`/auth/login`);return a(!e||!t||r?n:n.clone({setHeaders:{Authorization:`Bearer ${e}`}}))};var qn=Object.entries({"Bogotá D.C.":[`Bogotá D.C.`],Antioquia:[`Medellín`,`Bello`,`Envigado`,`Itagüí`,`Rionegro`,`Sabaneta`],Atlántico:[`Barranquilla`,`Soledad`,`Malambo`],"Valle del Cauca":[`Cali`,`Palmira`,`Jamundí`,`Tuluá`,`Buenaventura`],Bolívar:[`Cartagena`],Santander:[`Bucaramanga`,`Floridablanca`,`Girón`,`Piedecuesta`],Cundinamarca:[`Soacha`,`Chía`,`Zipaquirá`,`Facatativá`,`Fusagasugá`],Risaralda:[`Pereira`,`Dosquebradas`],Caldas:[`Manizales`],Quindío:[`Armenia`],Tolima:[`Ibagué`],Huila:[`Neiva`],"Norte de Santander":[`Cúcuta`],Meta:[`Villavicencio`],Nariño:[`Pasto`],Cauca:[`Popayán`],Córdoba:[`Montería`],Sucre:[`Sincelejo`],Magdalena:[`Santa Marta`],Cesar:[`Valledupar`],"La Guajira":[`Riohacha`],Boyacá:[`Tunja`,`Duitama`,`Sogamoso`],Casanare:[`Yopal`],Caquetá:[`Florencia`],Chocó:[`Quibdó`],Arauca:[`Arauca`],Putumayo:[`Mocoa`],"San Andrés y Providencia":[`San Andrés`],Amazonas:[`Leticia`],Guaviare:[`San José del Guaviare`],Vaupés:[`Mitú`],Guainía:[`Inírida`],Vichada:[`Puerto Carreño`]}).flatMap(([n,a])=>a.map(e=>({id:0,nombre:e,departamento:n}))).map((n,a)=>s$1(r$1({},n),{id:a+1}));var Xn={Samsung:{Lavadora:[`WA17T`,`WA13T5260BY`,`WW90T554DAW`],Nevera:[`RT38K5930SL`,`RT32K5030S8`,`RF28T5001SR`],Televisor:[`UN50TU7000`,`UN43AU7000`,`QN55Q60C`],Microondas:[`MS23K3513AS`,`MG23K3515AS`],"Aire acondicionado":[`AR12TVHZDWK`],Lavaplatos:[`DW60M5070FS`]},LG:{Lavadora:[`WM22VV2S6R`,`WT19DV6`,`F4WV5012S0W`],Secadora:[`DF22WV2S6S`],Nevera:[`GT32WPP`,`GS65SPP1`],"Aire acondicionado":[`VM121C6`,`S4-Q12JA3WE`],Televisor:[`50UR7800PSB`,`OLED55C3PSA`],Microondas:[`MS1196S`]},Whirlpool:{Secadora:[`WED4815EW`,`7MWGD1730EE`],Lavadora:[`WTW5000DW`,`8MWTW2224MPM`],Nevera:[`WRT518SZFM`,`WRM45AKTWW`],Microondas:[`WM1807D`]},Bosch:{Lavaplatos:[`SMS25`,`SMS2HTI72E`],Lavadora:[`WAN28108ES`],Nevera:[`KGN39VLEB`],"Estufa / Horno":[`HBF113BR0A`]},Electrolux:{Congelador:[`EFC20`,`EFCC20C3HQW`],Nevera:[`ERTY46G2HVI`],Lavadora:[`EWIE16F3CSW`],"Estufa / Horno":[`EOGL60B3GDWS`],"Aire acondicionado":[`EAI12F5BALW`]},Haceb:{"Estufa / Horno":[`Romero 76`,`Assento 60`,`Marquesa 76`],Nevera:[`Himalaya 275`,`Andina 240`],"Calentador de agua":[`Tiro forzado 10 L`,`Gas natural 5.5 L`],Lavadora:[`Ecolav 18 kg`]},Mabe:{"Estufa / Horno":[`EM7640`,`EMP6120PG0`],Lavadora:[`LMA79113`,`LMH70201WGAB0`],Nevera:[`RMA250FJCU`]},Challenger:{"Estufa / Horno":[`SI 6060`,`SL 5740`],Nevera:[`CR 410`]},Panasonic:{Microondas:[`NN-ST34`,`NN-SN65`],Televisor:[`TC-50LX800`]},Sony:{Televisor:[`KD-55X80K`,`XR-65A80L`]},Daikin:{"Aire acondicionado":[`FTKC12`,`FTKF35`]},Kalley:{Televisor:[`K-LED50UHDGT`],Microondas:[`K-MW20`]},Oster:{"Licuadora / Pequeño electrodoméstico":[`BLSTPYG1210`,`6812`],Microondas:[`OGZJ1101`]}};var Ct=Object.entries(Xn).map(([n,a],e)=>({id:e+1,nombre:n,tipos:Object.keys(a)}));var Kn=Ct.flatMap(n=>Object.entries(Xn[n.nombre]).flatMap(([a,e])=>e.map(t=>({id:0,marcaId:n.id,tipo:a,nombre:t})))).map((n,a)=>s$1(r$1({},n),{id:a+1}));var f={usuarios:structuredClone(_),tecnicos:structuredClone(U),clientes:structuredClone(w),ordenes:structuredClone(x$1)};var er=28800;var y=class{constructor(a,e){this.status=a;this.message=e}status;message};var Je=n=>Math.max(0,...n.map(a=>a.id))+1;function W(n,a,e){let t=n.find(r=>r.id===a);if(!t)throw new y(404,`${e} no encontrado`);return t}function Ee(n){return s$2[n.rol]??[]}function x(n,a){if(!n.usuario||!Ee(n.usuario).includes(a))throw new y(403,`No tienes permisos para realizar esta acción`)}function kr(n){let a={sub:n.id,exp:Date.now()+er*1e3};return`mock.${btoa(JSON.stringify(a))}`}function Er(n){let e=(n.headers.get(`Authorization`)??``).replace(/^Bearer /,``);if(!e.startsWith(`mock.`))return null;try{let t=JSON.parse(atob(e.slice(5)));return t.exp<Date.now()?null:f.usuarios.find(r=>r.id===t.sub&&r.activo)??null}catch{return null}}function Ir(e){var t$1=e,{password:n}=t$1;return t(t$1,[`password`])}function Zn(n){return{id:n.id,username:n.username,nombreCompleto:n.nombreCompleto,email:n.email,rol:n.rol,permisos:[...Ee(n)],tecnicoId:n.tecnicoId??null}}function pe(n){let a=W(f.clientes,n.clienteId,`Cliente`),e=n.tecnicoId?f.tecnicos.find(s=>s.id===n.tecnicoId):null,o=n,{clienteId:t$2,tecnicoId:r}=o,i=t(o,[`clienteId`,`tecnicoId`]);return s$1(r$1({},structuredClone(i)),{cliente:{id:a.id,nombre:a.nombre,documento:a.documento,telefono:a.telefono,email:a.email,direccion:a.direccion},tecnico:e?{id:e.id,nombre:e.nombre}:null})}function Ze(n){let a=n.usuario;return Ee(a).includes(E$2.ORDENES_VER_TODAS)?f.ordenes:f.ordenes.filter(e=>e.tecnicoId!==null&&e.tecnicoId===a.tecnicoId)}function St(n,a,e,t,r={}){let i=r.aDto??(l=>l),o=new RegExp(`^/${n}$`),s=new RegExp(`^/${n}/(\\d+)$`);return[{metodo:`GET`,patron:o,handler:l=>{x(l,t.ver);let m=l.req.params.get(`activo`);return e().filter(u=>m===null||String(u.activo)===m).map(i)}},{metodo:`GET`,patron:s,handler:l=>(x(l,t.ver),i(W(e(),+l.params[0],a)))},{metodo:`POST`,patron:o,handler:l=>{x(l,t.crear);let m=l.req.body,u=r.crear?r.crear(m,l):s$1(r$1({},m),{id:Je(e())});return e().push(u),i(u)}},{metodo:`PUT`,patron:s,handler:l=>{x(l,t.editar);let m=W(e(),+l.params[0],a),u=l.req.body,N=r.actualizar?r.actualizar(m,u):s$1(r$1(r$1({},m),u),{id:m.id});return e().splice(e().indexOf(m),1,N),i(N)}},{metodo:`DELETE`,patron:s,handler:l=>{x(l,t.eliminar);let m=W(e(),+l.params[0],a);return r.validarEliminar?.(m),e().splice(e().indexOf(m),1),null}}]}var Tr=[{metodo:`POST`,patron:/^\/auth\/login$/,publica:!0,handler:({req:n})=>{let{username:a,password:e}=n.body,t=f.usuarios.find(i=>i.username.toLowerCase()===a?.trim().toLowerCase());if(!t||t.password!==e)throw new y(401,`Usuario o contraseña incorrectos`);if(!t.activo)throw new y(403,`El usuario está inactivo. Contacta al administrador.`);return t.ultimoAcceso=new Date().toISOString(),{token:kr(t),tipo:`Bearer`,expiraEn:er,usuario:Zn(t)}}},{metodo:`GET`,patron:/^\/auth\/me$/,handler:n=>Zn(n.usuario)},{metodo:`GET`,patron:/^\/catalogos\/ciudades$/,handler:()=>qn},{metodo:`GET`,patron:/^\/catalogos\/marcas$/,handler:()=>Ct},{metodo:`GET`,patron:/^\/catalogos\/modelos$/,handler:({req:n})=>Kn.filter(a=>a.marcaId===+n.params.get(`marcaId`)&&a.tipo===n.params.get(`tipo`))},{metodo:`GET`,patron:/^\/dashboard\/resumen$/,handler:n$3=>{x(n$3,E$2.DASHBOARD_VER);let a=Ze(n$3),e=new Date,t=new Date(e.getFullYear(),e.getMonth(),1),r=a.filter(m=>!i.includes(m.estado)),i$2=a.filter(m=>m.estado===`ENTREGADA`&&m.fechaEntrega&&new Date(m.fechaEntrega)>=t),o=Object.fromEntries(Object.keys(n).map(m=>[m,a.filter(u=>u.estado===m).length])),s=Array.from({length:14},(m,u)=>{let N=new Date;N.setDate(N.getDate()-(13-u));let Z=N.toDateString();return{fecha:N.toISOString().slice(0,10),cantidad:a.filter(Ie=>new Date(Ie.fechaIngreso).toDateString()===Z).length}});return{ordenesAbiertas:r.length,enReparacion:a.filter(m=>m.estado===`EN_REPARACION`).length,listasParaEntregar:a.filter(m=>m.estado===`REPARADA`).length,entregadasMes:i$2.length,ingresosMes:i$2.reduce((m,u)=>m+(u.costoFinal??0),0),porEstado:o,ordenesPorDia:s,cargaTecnicos:f.tecnicos.filter(m=>m.activo).map(m=>({tecnicoId:m.id,nombre:m.nombre,abiertas:r.filter(u=>u.tecnicoId===m.id).length})).filter(m=>n$3.usuario.rol!==`TECNICO`||m.tecnicoId===n$3.usuario.tecnicoId),recientes:[...a].sort((m,u)=>u.fechaIngreso.localeCompare(m.fechaIngreso)).slice(0,6).map(pe)}}},{metodo:`GET`,patron:/^\/ordenes$/,handler:n=>{x(n,E$2.ORDENES_VER);let a=n.req.params;return Ze(n).filter(e=>!a.get(`estado`)||e.estado===a.get(`estado`)).filter(e=>!a.get(`tecnicoId`)||e.tecnicoId===+a.get(`tecnicoId`)).filter(e=>!a.get(`clienteId`)||e.clienteId===+a.get(`clienteId`)).sort((e,t)=>t.fechaIngreso.localeCompare(e.fechaIngreso)).map(pe)}},{metodo:`GET`,patron:/^\/ordenes\/(\d+)$/,handler:n=>(x(n,E$2.ORDENES_VER),pe(W(Ze(n),+n.params[0],`Orden`)))},{metodo:`POST`,patron:/^\/ordenes$/,handler:n=>{x(n,E$2.ORDENES_CREAR);let a=n.req.body;W(f.clientes,a.clienteId,`Cliente`);let e=Je(f.ordenes),t=new Date().toISOString(),r=Ee(n.usuario).includes(E$2.ORDENES_ASIGNAR_TECNICO),i={id:e,numero:`OS-${new Date().getFullYear()}-${String(e).padStart(5,`0`)}`,clienteId:a.clienteId,tecnicoId:r?a.tecnicoId??null:null,equipo:a.equipo,fallaReportada:a.fallaReportada,diagnostico:a.diagnostico??null,observaciones:a.observaciones??null,prioridad:a.prioridad,estado:`RECIBIDA`,fechaIngreso:t,fechaEstimadaEntrega:a.fechaEstimadaEntrega??null,fechaEntrega:null,costoEstimado:a.costoEstimado??null,abono:a.abono??null,costoFinal:null,enGarantia:a.enGarantia,creadoPor:n.usuario.nombreCompleto,historial:[{estado:`RECIBIDA`,fecha:t,usuario:n.usuario.nombreCompleto,comentario:`Orden creada.`}]};return f.ordenes.push(i),pe(i)}},{metodo:`PUT`,patron:/^\/ordenes\/(\d+)$/,handler:n=>{x(n,E$2.ORDENES_EDITAR);let a=W(f.ordenes,+n.params[0],`Orden`);if(i.includes(a.estado))throw new y(409,`No se puede editar una orden entregada o cancelada`);let e=n.req.body,t=Ee(n.usuario).includes(E$2.ORDENES_ASIGNAR_TECNICO);return Object.assign(a,s$1(r$1({},e),{tecnicoId:t?e.tecnicoId??null:a.tecnicoId})),pe(a)}},{metodo:`PATCH`,patron:/^\/ordenes\/(\d+)\/estado$/,handler:n$4=>{x(n$4,E$2.ORDENES_CAMBIAR_ESTADO);let a$2=W(Ze(n$4),+n$4.params[0],`Orden`),e=n$4.req.body;if(!a[a$2.estado].includes(e.estado))throw new y(409,`No se puede pasar de ${a$2.estado} a ${e.estado}`);let t=n[e.estado].permiso;t&&x(n$4,t);let r=new Date().toISOString();return a$2.estado=e.estado,e.diagnostico&&(a$2.diagnostico=e.diagnostico),e.costoFinal!==void 0&&e.costoFinal!==null&&(a$2.costoFinal=e.costoFinal),e.estado===`ENTREGADA`&&(a$2.fechaEntrega=r),a$2.historial.push({estado:e.estado,fecha:r,usuario:n$4.usuario.nombreCompleto,comentario:e.comentario??null}),pe(a$2)}},{metodo:`DELETE`,patron:/^\/ordenes\/(\d+)$/,handler:n=>{x(n,E$2.ORDENES_ELIMINAR);let a=W(f.ordenes,+n.params[0],`Orden`);return f.ordenes.splice(f.ordenes.indexOf(a),1),null}},...St(`clientes`,`Cliente`,()=>f.clientes,{ver:E$2.CLIENTES_VER,crear:E$2.CLIENTES_CREAR,editar:E$2.CLIENTES_EDITAR,eliminar:E$2.CLIENTES_ELIMINAR},{crear:n=>{if(f.clientes.some(a=>a.documento===n.documento))throw new y(409,`Ya existe un cliente con ese documento`);return s$1(r$1({},n),{id:Je(f.clientes),fechaRegistro:new Date().toISOString()})},validarEliminar:n=>{if(f.ordenes.some(a=>a.clienteId===n.id))throw new y(409,`El cliente tiene órdenes registradas y no puede eliminarse`)}}),...St(`tecnicos`,`Técnico`,()=>f.tecnicos,{ver:E$2.TECNICOS_VER,crear:E$2.TECNICOS_GESTIONAR,editar:E$2.TECNICOS_GESTIONAR,eliminar:E$2.TECNICOS_GESTIONAR}),...St(`usuarios`,`Usuario`,()=>f.usuarios,{ver:E$2.USUARIOS_VER,crear:E$2.USUARIOS_GESTIONAR,editar:E$2.USUARIOS_GESTIONAR,eliminar:E$2.USUARIOS_GESTIONAR},{aDto:Ir,crear:n=>{if(f.usuarios.some(a=>a.username===n.username))throw new y(409,`El nombre de usuario ya existe`);return s$1(r$1({},n),{password:n.password??``,id:Je(f.usuarios),ultimoAcceso:null})},actualizar:(n,a)=>s$1(r$1(r$1({},n),a),{id:n.id,password:a.password?a.password:n.password})})];var tr=(n,a)=>{if(!n.url.startsWith(h.apiUrl))return a(n);let e=n.url.slice(h.apiUrl.length).split(`?`)[0],t=250+Math.random()*300;for(let r of Tr){let i=r.metodo===n.method?r.patron.exec(e):null;if(!i)continue;let o=Er(n);try{if(!r.publica&&!o)throw new y(401,`Token inválido o expirado`);let s=r.handler({req:n,params:i.slice(1),usuario:o});return ct(new Yo({status:200,body:s,url:n.url})).pipe(Jd(t))}catch(s){return Jn(n,s instanceof y?s:new y(500,String(s)),t)}}return Jn(n,new y(404,`Endpoint simulado no encontrado: ${n.method} ${e}`),t)};function Jn(n,a,e){return Lr(e).pipe(Ye$1(()=>Fa(()=>new kn({status:a.status,statusText:a.message,url:n.url,error:{status:a.status,message:a.message}}))))}GH(Pn,o.locale);var nr={providers:[_D(),_c(Yn,Cc()),{provide:Va,useClass:Ke},{provide:Po,useValue:o.locale},j_(V_([Qn,F,...h.useMock?[tr]:[]])),Bn(),{provide:m,useValue:o.locale},{provide:X,useClass:Xe},{provide:ar$1,useValue:{appearance:`outline`,subscriptSizing:`dynamic`}},pC(()=>{g$1(Yy).setDefaultFontSetClass(`material-symbols-outlined`),g$1(i$1)})]};var et=class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=ko({type:n,selectors:[[`app-root`]],decls:1,vars:0,template:function(e,t){e&1&&om(0,`router-outlet`)},dependencies:[Ba],encapsulation:2})};p_(et,nr).catch(n=>console.error(n));export{xn as C,E$1 as D,z as E,h as O,vn as S,D as T,ne as _,n as a,te as b,o as c,d,l$1 as f,lt as g,fe as h,l as i,g as l,ae as m,a as n,r as o,xt as p,i as r,s,E as t,C as u,pt as v,i$1 as w,ue$1 as x,rt as y};