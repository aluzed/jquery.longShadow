!function(a){'use strict';var b='longShadow',c={colorShadow:'#ccc',sizeShadow:50,directionShadow:''};function d(d,e){this.element=d;this.options=a.extend({},c,e);this._defaults=c;this._name=b;this._shadow='';this.init()}d.prototype={init:function(){var a=this,b='',c=this.options.colorShadow;for(var d=0,e=this.options.sizeShadow;d<e;d++){switch(a.options.directionShadow){case 'top':b+="0 -"+d+"px 0 "+c+",";break;case 'right':b+=d+"px 0 0 "+c+",";break;case 'bottom':b+="0 "+d+"px 0 "+c+",";break;case 'left':b+="-"+d+"px 0 0 "+c+",";break;case 'top-left':b+="-"+d+"px -"+d+"px 0 "+c+",";break;case 'top-right':b+=d+"px -"+d+"px 0 "+c+",";break;case 'bottom-left':b+="-"+d+"px "+d+"px 0 "+c+",";break;case 'bottom-right':b+=d+"px "+d+"px 0 "+c+",";break;default:b+=d+"px "+d+"px 0 "+c+",";break}}this._shadow=b.slice(0,-1);this.element.style.textShadow=this._shadow}};a.fn[b]=function(c){return this.each(function(){a.data(this,'plugin_'+b)||a.data(this,'plugin_'+b,new d(this,c))})}}(jQuery)
