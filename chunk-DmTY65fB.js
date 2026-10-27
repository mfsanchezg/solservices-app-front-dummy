import{n as s$1,t as r}from"./chunk-C9yOwMO6.js";import{Ar as ue,F as Fo,Fn as g,G as Hl,Hr as zs,J as Iw,Jn as je,Jt as Tm,K as I,Ln as gT,Lt as Rm,Nt as RC,O as Eb,On as cm,Ot as QC,Pt as RI,Q as KC,Qn as ki,Qt as Ul,Sr as qs,T as Dw,Tr as rp,Un as hm,V as Gf,Vr as zf,Wr as zu,Xt as UC,Y as JC,a as AC,b as Ct,bn as _m,br as qC,dn as Ym,et as Kl,fr as om,j as FC,kn as cr,kt as QU,l as As,m as Bl,mr as op,n as $_,nn as Vl,rr as lm,tr as ko,tt as LC,wr as rm,x as DB,yt as Ol}from"./chunk-BQL1EHuG.js";import{E as _u,L as io,O as ca,c as Fi,d as Ht,f as Kd,p as Lt}from"./chunk-B3ccmtye.js";import"./chunk-BBxjTQYN.js";import{C as Ro,H as md,J as wa,M as _n,S as Qs,V as ka,W as on,b as Po,d as Jt,g as Na,j as Vo,m as Ma,n as Ce,o as Do,q as sr,r as Ci,s as Ea,u as Io,y as Or}from"./chunk-Ccj1yJpl.js";import{i as o}from"./chunk-B-MzoeW9.js";import{D as E,E as z,O as h,T as D$1,c as o$1,l as g$1,w as i}from"./main-ZQ3XGC2U.js";import{t as Ne}from"./chunk-C_v8Do11.js";import{t as K}from"./chunk-BR7sB6Ym.js";var D={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var Ze=new I(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>D});var s=(function(a){return a[a.Init=0]=`Init`,a[a.Checked=1]=`Checked`,a[a.Unchecked=2]=`Unchecked`,a[a.Indeterminate=3]=`Indeterminate`,a})(s||{});var F=class{source;checked};var Xe=(()=>{class a{_elementRef=g(Ct);_changeDetectorRef=g(Ym);_ngZone=g(ue);_animationsDisabled=Ht();_options=g(Ze,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let c=new F;return c.source=this,c.checked=e,c}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new je;indeterminateChange=new je;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=s.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){g($_).load(io);let e=g(new qs(`tabindex`),{optional:!0});this._options=this._options||D,this.color=this._options.color||D.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=g(ca).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let c=e!=this._indeterminate();this._indeterminate.set(e),c&&(e?this._transitionCheckState(s.Indeterminate):this._transitionCheckState(this.checked?s.Checked:s.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=cr(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let c=this._currentCheckState,m=this._getAnimationTargetElement();if(!(c===e||!m)&&(this._currentAnimationClass&&m.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(c,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){m.classList.add(this._currentAnimationClass);let h=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{m.classList.remove(h)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?s.Checked:s.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,c){if(this._animationsDisabled)return``;switch(e){case s.Init:if(c===s.Checked)return this._animationClasses.uncheckedToChecked;if(c==s.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case s.Unchecked:return c===s.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case s.Checked:return c===s.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case s.Indeterminate:return c===s.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let c=this._inputElement;c&&(c.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(c){return new(c||a)};static ɵcmp=(function(){let e=[`input`];return ko({type:a,selectors:[[`mat-checkbox`]],viewQuery:function(h,o){if(h&1&&hm(e,5),h&2){let x;QC(x=KC())&&(o._inputElement=x.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(h,o){h&2&&(cm(`id`,o.id),Fo(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),Hl(o.color?`mat-`+o.color:`mat-accent`),zs(`_mat-animation-noopable`,o._animationsDisabled)(`mdc-checkbox--disabled`,o.disabled)(`mat-mdc-checkbox-disabled`,o.disabled)(`mat-mdc-checkbox-checked`,o.checked)(`mat-mdc-checkbox-disabled-interactive`,o.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,Kl],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,Kl],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,Kl],tabIndex:[2,`tabIndex`,`tabIndex`,m=>m==null?void 0:gT(m)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Kl],checked:[2,`checked`,`checked`,Kl],disabled:[2,`disabled`,`disabled`,Kl],indeterminate:[2,`indeterminate`,`indeterminate`,Kl]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[Rm([{provide:on,useExisting:ki(()=>a),multi:!0},{provide:Ce,useExisting:a,multi:!0}]),zu],ngContentSelectors:[`*`],decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(h,o){if(h&1&&(Vl(),As(0,`label`,3),lm(`click`,function(M){return o._preventBubblingFromLabel(M)}),As(1,`span`,4,0),om(3,`span`,5),As(4,`input`,6,1),lm(`blur`,function(){return o._onBlur()})(`click`,function(){return o._onInputClick()})(`change`,function(M){return o._onInteractionEvent(M)}),Ol(),om(6,`span`,7),As(7,`span`,8),rp(),As(8,`svg`,9),om(9,`path`,10),Ol(),op(),om(10,`span`,11),Ol(),om(11,`span`,12),Ol(),As(12,`span`,13,2),Bl(14),Ol()()),h&2){let x=JC(2);rm(`labelPosition`,o.labelPosition)(`for`,o.inputId),RI(4),zs(`mdc-checkbox--selected`,o.checked),rm(`checked`,o.checked)(`indeterminate`,o.indeterminate)(`disabled`,o.disabled&&!o.disabledInteractive)(`id`,o.inputId)(`required`,o.required)(`tabIndex`,o.disabled&&!o.disabledInteractive?-1:o.tabIndex),Fo(`aria-label`,o.ariaLabel||null)(`aria-labelledby`,o.ariaLabelledby)(`aria-describedby`,o.ariaDescribedby)(`aria-checked`,o.indeterminate?`mixed`:null)(`aria-controls`,o.ariaControls)(`aria-disabled`,o.disabled&&o.disabledInteractive?!0:null)(`aria-expanded`,o.ariaExpanded)(`aria-owns`,o.ariaOwns)(`name`,o.name)(`value`,o.value),RI(7),rm(`matRippleTrigger`,x)(`matRippleDisabled`,o.disableRipple||o.disabled)(`matRippleCentered`,!0)}},dependencies:[Kd,g$1],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return a})();var Qe=(a,d)=>d.nombre;var Ke=(a,d)=>d.username;function Ye(a,d){if(a&1&&om(0,`img`,11),a&2){let e=d.$implicit;rm(`src`,e.logo)(`alt`,e.nombre)(`title`,e.nombre)}}function Je(a,d){if(a&1&&(As(0,`div`,18)(1,`mat-icon`),Eb(2,`error`),Ol(),As(3,`span`),Eb(4),Ol()()),a&2){let e=qC();RI(4),Tm(e.error())}}function We(a,d){a&1&&(As(0,`mat-error`),Eb(1,`Ingresa tu usuario.`),Ol())}function ec(a,d){a&1&&(As(0,`mat-error`),Eb(1,`Ingresa tu contraseña.`),Ol())}function cc(a,d){a&1&&om(0,`mat-progress-spinner`,29)}function nc(a,d){a&1&&(As(0,`mat-icon`,30),Eb(1,`login`),Ol())}function tc(a,d){if(a&1){let e=UC();As(0,`button`,35),lm(`click`,function(){let m=zf(e).$implicit,h=qC(2);return Gf(h.usarDemo(m.username,m.password))}),As(1,`strong`),Eb(2),Ol(),As(3,`span`),Eb(4),Ol()()}if(a&2){let e=d.$implicit;RI(2),Tm(e.rolNombre),RI(2),_m(``,e.username,` / `,e.password)}}function ac(a,d){if(a&1&&(As(0,`div`,31)(1,`span`,32)(2,`mat-icon`),Eb(3,`info`),Ol(),Eb(4,` Usuarios de prueba (modo demo)`),Ol(),As(5,`div`,33),FC(6,tc,5,3,`button`,34,Ke),Ol()()),a&2){let e=qC();RI(6),LC(e.usuariosDemo)}}var $e=class a{auth=g(E);router=g(Lt);notificaciones=g(Or);tema=g(i);returnUrl=DB();brand=o$1;anio=new Date().getFullYear();cargando=cr(!1);error=cr(null);ocultarPassword=cr(!0);mostrarDemo=h.useMock;usuariosDemo=z.map(d=>s$1(r({},d),{rolNombre:o[d.rol].nombre}));form=g(Na).nonNullable.group({username:[``,Jt.required],password:[``,Jt.required],recordar:[!0]});usarDemo(d,e){this.form.patchValue({username:d,password:e}),this.error.set(null)}olvideContrasena(){this.notificaciones.info(`Solicita al administrador del sistema el restablecimiento de tu contraseña.`)}ingresar(){if(this.form.invalid){this.form.markAllAsTouched();return}let{username:d,password:e,recordar:c}=this.form.getRawValue();this.cargando.set(!0),this.error.set(null),this.auth.login({username:d,password:e},c).subscribe({next:()=>{let m=this.returnUrl()||this.auth.rutaInicio();this.router.navigateByUrl(m)},error:m=>{this.cargando.set(!1),this.error.set(m.status===0?`No se pudo conectar con el servidor.`:D$1(m)||`No se pudo iniciar sesión.`)}})}static ɵfac=function(e){return new(e||a)};static ɵcmp=ko({type:a,selectors:[[`app-login`]],inputs:{returnUrl:[1,`returnUrl`]},decls:87,vars:22,consts:[[1,`login`],[1,`marca`],[1,`marca-contenido`],[1,`marca-logo`,3,`src`,`alt`],[1,`marca-texto`],[1,`marca-etiqueta`],[1,`marca-features`],[1,`feature-icono`],[1,`marcas`],[1,`marcas-titulo`],[1,`marcas-lista`],[3,`src`,`alt`,`title`],[1,`marca-pie`],[1,`panel-form`],[`matIconButton`,``,1,`btn-tema`,3,`click`,`matTooltip`],[1,`form-contenedor`],[1,`logo-movil`,3,`src`,`alt`],[1,`form-encabezado`],[`role`,`alert`,1,`alerta-error`],[`novalidate`,``,3,`ngSubmit`,`formGroup`],[1,`campo`],[`matPrefix`,``],[`matInput`,``,`id`,`username`,`formControlName`,`username`,`autocomplete`,`username`,`placeholder`,`Tu nombre de usuario`],[`matInput`,``,`id`,`password`,`formControlName`,`password`,`autocomplete`,`current-password`,`placeholder`,`Tu contraseña`,3,`type`],[`matIconButton`,``,`matSuffix`,``,`type`,`button`,3,`click`],[1,`opciones`],[`formControlName`,`recordar`],[`matButton`,``,`type`,`button`,3,`click`],[`matButton`,`filled`,`type`,`submit`,1,`btn-ingresar`,3,`disabled`],[`mode`,`indeterminate`,`diameter`,`18`,1,`btn-spinner`],[`iconPositionEnd`,``],[1,`demo`],[1,`demo-titulo`],[1,`demo-lista`],[`type`,`button`,1,`demo-usuario`],[`type`,`button`,1,`demo-usuario`,3,`click`]],template:function(e,c){e&1&&(As(0,`div`,0)(1,`section`,1)(2,`div`,2),om(3,`img`,3),As(4,`div`,4)(5,`span`,5),Eb(6,`Plataforma de gestión`),Ol(),As(7,`h1`),Eb(8,`Órdenes de servicio técnico, bajo control.`),Ol(),As(9,`p`),Eb(10),Ol()(),As(11,`ul`,6)(12,`li`)(13,`span`,7)(14,`mat-icon`),Eb(15,`sync`),Ol()(),As(16,`div`)(17,`strong`),Eb(18,`Seguimiento por estados`),Ol(),As(19,`span`),Eb(20,`De la recepción a la entrega, con historial completo.`),Ol()()(),As(21,`li`)(22,`span`,7)(23,`mat-icon`),Eb(24,`picture_as_pdf`),Ol()(),As(25,`div`)(26,`strong`),Eb(27,`Voucher PDF inmediato`),Ol(),As(28,`span`),Eb(29,`Comprobante para el cliente al crear la orden.`),Ol()()(),As(30,`li`)(31,`span`,7)(32,`mat-icon`),Eb(33,`verified_user`),Ol()(),As(34,`div`)(35,`strong`),Eb(36,`Acceso por roles`),Ol(),As(37,`span`),Eb(38,`Cada usuario ve y hace solo lo que le corresponde.`),Ol()()()()(),As(39,`div`,8)(40,`span`,9),Eb(41,`Marcas que atendemos`),Ol(),As(42,`div`,10),FC(43,Ye,1,3,`img`,11,Qe),Ol()(),As(45,`span`,12),Eb(46),Ol()(),As(47,`section`,13)(48,`button`,14),lm(`click`,function(){return c.tema.alternar()}),As(49,`mat-icon`),Eb(50),Ol()(),As(51,`div`,15),om(52,`img`,16),As(53,`header`,17)(54,`h2`),Eb(55,`Iniciar sesión`),Ol(),As(56,`p`),Eb(57,`Ingresa tus credenciales para acceder al panel.`),Ol()(),AC(58,Je,5,1,`div`,18),As(59,`form`,19),lm(`ngSubmit`,function(){return c.ingresar()}),As(60,`mat-form-field`,20)(61,`mat-label`),Eb(62,`Usuario`),Ol(),As(63,`mat-icon`,21),Eb(64,`person`),Ol(),As(65,`input`,22),Dw(),Ol(),AC(66,We,2,0,`mat-error`),Ol(),As(67,`mat-form-field`,20)(68,`mat-label`),Eb(69,`Contraseña`),Ol(),As(70,`mat-icon`,21),Eb(71,`lock`),Ol(),As(72,`input`,23),Dw(),Ol(),As(73,`button`,24),lm(`click`,function(){return c.ocultarPassword.set(!c.ocultarPassword())}),As(74,`mat-icon`),Eb(75),Ol()(),AC(76,ec,2,0,`mat-error`),Ol(),As(77,`div`,25)(78,`mat-checkbox`,26),Dw(),Eb(79,`Recordarme`),Ol(),As(80,`button`,27),lm(`click`,function(){return c.olvideContrasena()}),Eb(81,` ¿Olvidaste tu contraseña? `),Ol()(),As(82,`button`,28),AC(83,cc,1,0,`mat-progress-spinner`,29),Eb(84),AC(85,nc,2,0,`mat-icon`,30),Ol()(),AC(86,ac,8,0,`div`,31),Ol()()()),e&2&&(RI(3),rm(`src`,c.brand.logoBlanco)(`alt`,c.brand.nombre),RI(7),Ul(` `,c.brand.slogan,`. Registra equipos, asigna técnicos y da seguimiento a cada reparación. `),RI(33),LC(c.brand.marcas),RI(3),_m(`© `,c.anio,` `,c.brand.razonSocial),RI(2),rm(`matTooltip`,c.tema.oscuro()?`Modo claro`:`Modo oscuro`),Fo(`aria-label`,c.tema.oscuro()?`Activar modo claro`:`Activar modo oscuro`),RI(2),Tm(c.tema.oscuro()?`light_mode`:`dark_mode`),RI(2),rm(`src`,c.tema.oscuro()?c.brand.logoBlanco:c.brand.logo)(`alt`,c.brand.nombre),RI(6),RC(c.error()?58:-1),RI(),rm(`formGroup`,c.form),RI(6),Iw(),RI(),RC(c.form.controls.username.hasError(`required`)?66:-1),RI(6),rm(`type`,c.ocultarPassword()?`password`:`text`),Iw(),RI(),Fo(`aria-label`,c.ocultarPassword()?`Mostrar contraseña`:`Ocultar contraseña`),RI(2),Tm(c.ocultarPassword()?`visibility`:`visibility_off`),RI(),RC(c.form.controls.password.hasError(`required`)?76:-1),RI(2),Iw(),RI(4),rm(`disabled`,c.cargando()),RI(),RC(c.cargando()?83:-1),RI(),Ul(` `,c.cargando()?`Ingresando...`:`Ingresar`,` `),RI(),RC(c.cargando()?-1:85),RI(),RC(c.mostrarDemo?86:-1))},dependencies:[ka,Ea,Ci,wa,Ma,Do,Ro,_u,Fi,Xe,Qs,sr,_n,Io,Po,Vo,QU,Ne,K,md],styles:[`.login[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(440px,1.1fr) 1fr;min-height:100vh}.marca[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;justify-content:space-between;gap:2.5rem;padding:3rem 3.5rem 2rem;overflow:hidden;color:#dbe3ff;background:radial-gradient(circle at 85% 8%,rgba(0,163,224,.35),transparent 45%),radial-gradient(circle at 0% 100%,rgba(20,40,160,.55),transparent 50%),linear-gradient(160deg,#050f33,#0b1f5c 55%,#1428a0 120%)}.marca[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);background-size:48px 48px;-webkit-mask-image:linear-gradient(to bottom,#000 30%,transparent 95%);mask-image:linear-gradient(to bottom,#000 30%,transparent 95%);pointer-events:none}.marca-contenido[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;gap:2.75rem;max-width:520px}.marca-logo[_ngcontent-%COMP%]{width:240px;height:auto}.marca-etiqueta[_ngcontent-%COMP%]{display:inline-block;margin-bottom:1rem;padding:.3rem .75rem;border:1px solid rgba(0,163,224,.45);border-radius:999px;font-size:.75rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#7dd3f5;background:#00a3e01a}.marca-texto[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 0 1rem;font-size:2.4rem;font-weight:700;line-height:1.15;letter-spacing:-.02em;color:#fff}.marca-texto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:1.05rem;line-height:1.6;color:#a9b6e0}.marca-features[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.25rem;margin:0;padding:0;list-style:none}.marca-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;gap:1rem;align-items:flex-start}.marca-features[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-bottom:.15rem;color:#f1f4ff;font-weight:600}.marca-features[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.9rem;color:#a9b6e0}.feature-icono[_ngcontent-%COMP%]{flex-shrink:0;display:grid;place-items:center;width:2.5rem;height:2.5rem;border-radius:10px;background:#ffffff12;border:1px solid rgba(255,255,255,.12)}.feature-icono[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:#7dd3f5}.marcas[_ngcontent-%COMP%]{position:relative;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.1)}.marcas-titulo[_ngcontent-%COMP%]{display:block;margin-bottom:1rem;font-size:.75rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#8191c4}.marcas-lista[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:1.25rem 2.25rem}.marcas-lista[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:22px;width:auto;opacity:.75;transition:opacity .2s}.marcas-lista[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{opacity:1}.marca-pie[_ngcontent-%COMP%]{position:relative;font-size:.8rem;color:#6676ad}.panel-form[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;padding:2.5rem 1.5rem;background:var(--%NS%app-bg)}.btn-tema[_ngcontent-%COMP%]{position:absolute;top:1rem;right:1rem}.form-contenedor[_ngcontent-%COMP%]{width:100%;max-width:400px}.logo-movil[_ngcontent-%COMP%]{display:none;width:200px;margin:0 auto 2rem}.form-encabezado[_ngcontent-%COMP%]{margin-bottom:2rem}.form-encabezado[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 .4rem;font-size:1.75rem;font-weight:700;letter-spacing:-.01em}.form-encabezado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--%NS%app-muted)}.alerta-error[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;margin-bottom:1.25rem;padding:.75rem 1rem;border-radius:10px;font-size:.9rem;color:var(--%NS%mat-sys-on-error-container);background:var(--%NS%mat-sys-error-container)}.opciones[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin:-.25rem 0 1.25rem -.5rem}.btn-ingresar[_ngcontent-%COMP%]{width:100%;height:48px;font-size:1rem}.demo[_ngcontent-%COMP%]{margin-top:2rem;padding:1rem;border:1px dashed var(--%NS%app-border);border-radius:12px;background:var(--%NS%app-card)}.demo-titulo[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem;margin-bottom:.75rem;font-size:.8rem;font-weight:600;color:var(--%NS%app-muted)}.demo-titulo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.demo-lista[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:.5rem}.demo-usuario[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:.1rem;padding:.5rem .65rem;border:1px solid var(--%NS%app-border);border-radius:8px;background:transparent;font:inherit;text-align:left;color:inherit;cursor:pointer;transition:border-color .15s,background .15s}.demo-usuario[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:.8rem}.demo-usuario[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.75rem;color:var(--%NS%app-muted);font-family:ui-monospace,monospace}.demo-usuario[_ngcontent-%COMP%]:hover{border-color:var(--%NS%mat-sys-primary);background:color-mix(in srgb,var(--%NS%mat-sys-primary) 8%,transparent)}@media(max-width:991px){.login[_ngcontent-%COMP%]{grid-template-columns:1fr}.marca[_ngcontent-%COMP%]{display:none}.logo-movil[_ngcontent-%COMP%]{display:block}}`]})};export{$e as Login};