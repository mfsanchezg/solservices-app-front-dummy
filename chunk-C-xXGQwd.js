import{$n as kl,Dr as rt,Dt as Q,F as Fo,Fn as g,Hr as zs,Jn as je$1,Jt as Tm,K as I,Kn as im,Mt as R,Nt as RC,O as Eb,P as Fl,Pt as RI,Qt as Ul,Rt as Rn,Tr as rp,Ur as zt,Wr as zu,a as AC,b as Ct,dn as Ym,dt as Mv,et as Kl,f as BU,i as $s,kn as cr,kt as QU,l as As,lr as ne,m as Bl,n as $_,nn as Vl,rr as lm,tr as ko,wr as rm,yt as Ol,zt as Rr}from"./chunk-BQL1EHuG.js";import{E as _u,H as nn,K as sd,L as io,d as Ht}from"./chunk-B3ccmtye.js";import{c as j}from"./chunk-C0rOfaob.js";import{a as Qe,c as tt,i as Jt,o as Ve,r as He,s as We,t as Ge}from"./chunk-CxjtUmIe.js";var ce=new I(`MAT_SORT_DEFAULT_OPTIONS`);var pe=(()=>{class t{_defaultOptions;_initializedStream=new Rr(1);sortables=new Map;_stateChanges=new ne;active;start=`asc`;get direction(){return this._direction}set direction(e){this._direction=e}_direction=``;disableClear;disabled=!1;sortChange=new je$1;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return``;let r=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,m=ue(e.start||this.start,r),h=m.indexOf(this.direction)+1;return h>=m.length&&(h=0),m[h]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static ɵfac=function(r){return new(r||t)(rt(ce,8))};static ɵdir=$s({type:t,selectors:[[``,`matSort`,``]],hostAttrs:[1,`mat-sort`],inputs:{active:[0,`matSortActive`,`active`],start:[0,`matSortStart`,`start`],direction:[0,`matSortDirection`,`direction`],disableClear:[2,`matSortDisableClear`,`disableClear`,Kl],disabled:[2,`matSortDisabled`,`disabled`,Kl]},outputs:{sortChange:`matSortChange`},exportAs:[`matSort`],features:[zu]})}return t})();function ue(t,s){let e=[`asc`,`desc`];return t==`desc`&&e.reverse(),s||e.push(``),e}var je=(()=>{class t{_sort=g(pe,{optional:!0});_columnDef=g(j,{optional:!0});_changeDetectorRef=g(Ym);_focusMonitor=g(nn);_elementRef=g(Ct);_ariaDescriber=g(sd,{optional:!0});_renderChanges;_animationsDisabled=Ht();_recentlyCleared=cr(null);_sortButton;id;arrowPosition=`after`;start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription=`Sort`;disableClear;constructor(){g($_).load(io);let e=g(ce,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=Mv(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(`.mat-sort-header-container`),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),r=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?r:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction===`asc`||this._sort.direction===`desc`)}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction==`asc`?`ascending`:`descending`:`none`}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){let e=[`*`,[[``,`matSortHeaderIcon`,``]]],r=[`*`,`[matSortHeaderIcon]`];function m(p,i){p&1&&(rp(),kl(0,`svg`,3),im(1,`path`,4),Fl())}function h(p,i){p&1&&(kl(0,`div`,2),Bl(1,1,null,m,2,0),Fl())}return ko({type:t,selectors:[[``,`mat-sort-header`,``]],hostAttrs:[1,`mat-sort-header`],hostVars:3,hostBindings:function(i,a){i&1&&lm(`click`,function(){return a._toggleOnInteraction()})(`keydown`,function(he){return a._handleKeydown(he)})(`mouseleave`,function(){return a._recentlyCleared.set(null)}),i&2&&(Fo(`aria-sort`,a._getAriaSortAttribute()),zs(`mat-sort-header-disabled`,a._isDisabled()))},inputs:{id:[0,`mat-sort-header`,`id`],arrowPosition:`arrowPosition`,start:`start`,disabled:[2,`disabled`,`disabled`,Kl],sortActionDescription:`sortActionDescription`,disableClear:[2,`disableClear`,`disableClear`,Kl]},exportAs:[`matSortHeader`],ngContentSelectors:r,decls:4,vars:17,consts:[[1,`mat-sort-header-container`,`mat-focus-indicator`],[1,`mat-sort-header-content`],[1,`mat-sort-header-arrow`],[`viewBox`,`0 -960 960 960`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z`]],template:function(i,a){i&1&&(Vl(e),kl(0,`div`,0)(1,`div`,1),Bl(2),Fl(),AC(3,h,3,0,`div`,2),Fl()),i&2&&(zs(`mat-sort-header-sorted`,a._isSorted())(`mat-sort-header-position-before`,a.arrowPosition===`before`)(`mat-sort-header-descending`,a._sort.direction===`desc`)(`mat-sort-header-ascending`,a._sort.direction===`asc`)(`mat-sort-header-recently-cleared-ascending`,a._recentlyCleared()===`asc`)(`mat-sort-header-recently-cleared-descending`,a._recentlyCleared()===`desc`)(`mat-sort-header-animations-disabled`,a._animationsDisabled),Fo(`tabindex`,a._isDisabled()?null:0)(`role`,a._isDisabled()?null:`button`),RI(3),RC(a._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: var(--%NS%mat-focus-indicator-fallback-border-style, solid) 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 4px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--%NS%mat-sort-arrow-color, var(--%NS%mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2})})()}return t})();var Be=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=Rn({type:t});static ɵinj=zt({imports:[BU]})}return t})();var y=class t{data=g(Jt);static ɵfac=function(e){return new(e||t)};static ɵcmp=ko({type:t,selectors:[[`app-confirm-dialog`]],decls:11,vars:10,consts:[[`mat-dialog-title`,``,1,`titulo`],[`align`,`end`],[`matButton`,``,3,`mat-dialog-close`],[`matButton`,`filled`,3,`mat-dialog-close`]],template:function(e,r){e&1&&(As(0,`h2`,0)(1,`mat-icon`),Eb(2),Ol(),Eb(3),Ol(),As(4,`mat-dialog-content`),Eb(5),Ol(),As(6,`mat-dialog-actions`,1)(7,`button`,2),Eb(8,`Cancelar`),Ol(),As(9,`button`,3),Eb(10),Ol()()),e&2&&(RI(),zs(`peligro`,r.data.peligro),RI(),Tm(r.data.peligro?`warning`:`help`),RI(),Ul(` `,r.data.titulo,` `),RI(2),Tm(r.data.mensaje),RI(2),rm(`mat-dialog-close`,!1),RI(2),zs(`btn-peligro`,r.data.peligro),rm(`mat-dialog-close`,!0),RI(),Ul(` `,r.data.textoAceptar??`Aceptar`,` `))},dependencies:[Qe,Ve,He,We,Ge,_u,QU],styles:[`.titulo[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}mat-icon[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-primary)}mat-icon.peligro[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}`]})};var me=class t{dialog=g(tt);preguntar(s){return this.dialog.open(y,{data:s,width:`420px`}).afterClosed().pipe(Q(e=>!!e))}static ɵfac=function(e){return new(e||t)};static ɵprov=R({token:t,factory:t.ɵfac,providedIn:`root`})};export{pe as i,je as n,me as r,Be as t};