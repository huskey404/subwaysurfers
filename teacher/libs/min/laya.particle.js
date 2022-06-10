!function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,i,r){return(e="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=n(t)););return t}(t,e);if(r){var a=Object.getOwnPropertyDescriptor(r,e);return a.get?a.get.call(i):a.value}})(t,i,r||t)}function i(e,i){return!i||"object"!==t(i)&&"function"!=typeof i?r(e):i}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&function(t,e){(Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}(t,e)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}!function(t,s){var h=function(){function t(){o(this,t),this.textureName=null,this.textureCount=1,this.maxPartices=100,this.duration=1,this.ageAddScale=0,this.emitterVelocitySensitivity=1,this.minStartSize=100,this.maxStartSize=100,this.minEndSize=100,this.maxEndSize=100,this.minHorizontalVelocity=0,this.maxHorizontalVelocity=0,this.minVerticalVelocity=0,this.maxVerticalVelocity=0,this.endVelocity=1,this.gravity=new Float32Array([0,0,0]),this.minRotateSpeed=0,this.maxRotateSpeed=0,this.minStartRadius=0,this.maxStartRadius=0,this.minEndRadius=0,this.maxEndRadius=0,this.minHorizontalStartRadian=0,this.maxHorizontalStartRadian=0,this.minVerticalStartRadian=0,this.maxVerticalStartRadian=0,this.useEndRadian=!0,this.minHorizontalEndRadian=0,this.maxHorizontalEndRadian=0,this.minVerticalEndRadian=0,this.maxVerticalEndRadian=0,this.minStartColor=new Float32Array([1,1,1,1]),this.maxStartColor=new Float32Array([1,1,1,1]),this.minEndColor=new Float32Array([1,1,1,1]),this.maxEndColor=new Float32Array([1,1,1,1]),this.colorComponentInter=!1,this.disableColor=!1,this.blendState=0,this.emitterType="null",this.emissionRate=0,this.pointEmitterPosition=new Float32Array([0,0,0]),this.pointEmitterPositionVariance=new Float32Array([0,0,0]),this.pointEmitterVelocity=new Float32Array([0,0,0]),this.pointEmitterVelocityAddVariance=new Float32Array([0,0,0]),this.boxEmitterCenterPosition=new Float32Array([0,0,0]),this.boxEmitterSize=new Float32Array([0,0,0]),this.boxEmitterVelocity=new Float32Array([0,0,0]),this.boxEmitterVelocityAddVariance=new Float32Array([0,0,0]),this.sphereEmitterCenterPosition=new Float32Array([0,0,0]),this.sphereEmitterRadius=1,this.sphereEmitterVelocity=0,this.sphereEmitterVelocityAddVariance=0,this.ringEmitterCenterPosition=new Float32Array([0,0,0]),this.ringEmitterRadius=30,this.ringEmitterVelocity=0,this.ringEmitterVelocityAddVariance=0,this.ringEmitterUp=2,this.positionVariance=new Float32Array([0,0,0])}return l(t,null,[{key:"checkSetting",value:function(e){var i;for(i in t._defaultSetting)i in e||(e[i]=t._defaultSetting[i]);e.endVelocity=+e.endVelocity,e.gravity[0]=+e.gravity[0],e.gravity[1]=+e.gravity[1],e.gravity[2]=+e.gravity[2]}}]),t}();h._defaultSetting=new h;var c=function(){function t(){o(this,t)}return l(t,[{key:"addParticleArray",value:function(t,e){}}]),t}(),m=function(){function t(){o(this,t)}return l(t,null,[{key:"Create",value:function(e,i,r,n){var a=new t;a.position=i,s.MathUtil.scaleVector3(r,e.emitterVelocitySensitivity,t._tempVelocity);var o,l=s.MathUtil.lerp(e.minHorizontalVelocity,e.maxHorizontalVelocity,Math.random()),h=Math.random()*Math.PI*2;if(t._tempVelocity[0]+=l*Math.cos(h),t._tempVelocity[2]+=l*Math.sin(h),t._tempVelocity[1]+=s.MathUtil.lerp(e.minVerticalVelocity,e.maxVerticalVelocity,Math.random()),a.velocity=t._tempVelocity,a.startColor=t._tempStartColor,a.endColor=t._tempEndColor,e.disableColor){for(o=0;o<3;o++)a.startColor[o]=1,a.endColor[o]=1;a.startColor[o]=s.MathUtil.lerp(e.minStartColor[o],e.maxStartColor[o],Math.random()),a.endColor[o]=s.MathUtil.lerp(e.minEndColor[o],e.maxEndColor[o],Math.random())}else if(e.colorComponentInter)for(o=0;o<4;o++)a.startColor[o]=s.MathUtil.lerp(e.minStartColor[o],e.maxStartColor[o],Math.random()),a.endColor[o]=s.MathUtil.lerp(e.minEndColor[o],e.maxEndColor[o],Math.random());else s.MathUtil.lerpVector4(e.minStartColor,e.maxStartColor,Math.random(),a.startColor),s.MathUtil.lerpVector4(e.minEndColor,e.maxEndColor,Math.random(),a.endColor);a.sizeRotation=t._tempSizeRotation;var c=Math.random();a.sizeRotation[0]=s.MathUtil.lerp(e.minStartSize,e.maxStartSize,c),a.sizeRotation[1]=s.MathUtil.lerp(e.minEndSize,e.maxEndSize,c),a.sizeRotation[2]=s.MathUtil.lerp(e.minRotateSpeed,e.maxRotateSpeed,Math.random()),a.radius=t._tempRadius;var m=Math.random();a.radius[0]=s.MathUtil.lerp(e.minStartRadius,e.maxStartRadius,m),a.radius[1]=s.MathUtil.lerp(e.minEndRadius,e.maxEndRadius,m),a.radian=t._tempRadian,a.radian[0]=s.MathUtil.lerp(e.minHorizontalStartRadian,e.maxHorizontalStartRadian,Math.random()),a.radian[1]=s.MathUtil.lerp(e.minVerticalStartRadian,e.maxVerticalStartRadian,Math.random());var u=e.useEndRadian;return a.radian[2]=u?s.MathUtil.lerp(e.minHorizontalEndRadian,e.maxHorizontalEndRadian,Math.random()):a.radian[0],a.radian[3]=u?s.MathUtil.lerp(e.minVerticalEndRadian,e.maxVerticalEndRadian,Math.random()):a.radian[1],a.durationAddScale=e.ageAddScale*Math.random(),a.time=n,a}}]),t}();m._tempVelocity=new Float32Array(3),m._tempStartColor=new Float32Array(4),m._tempEndColor=new Float32Array(4),m._tempSizeRotation=new Float32Array(3),m._tempRadius=new Float32Array(2),m._tempRadian=new Float32Array(4);var u=function(t){function e(t){var r;return o(this,e),(r=i(this,n(e).call(this)))._floatCountPerVertex=29,r._firstActiveElement=0,r._firstNewElement=0,r._firstFreeElement=0,r._firstRetiredElement=0,r._currentTime=0,r.settings=t,r}return a(e,c),l(e,[{key:"reUse",value:function(t,e){return 0}},{key:"initialize",value:function(){var t;this._vertices=this._mesh._vb.getFloat32Array(),t=this._mesh._stride/4;for(var e=0,i=0,r=0;r<this.settings.maxPartices;r++){var n,a=Math.random(),o=this.settings.textureCount?1/this.settings.textureCount:1;for(n=0;n<this.settings.textureCount&&!(a<n+o);n+=o);this._vertices[e++]=-1,this._vertices[e++]=-1,this._vertices[e++]=0,this._vertices[e++]=n,e=i+=t,this._vertices[e++]=1,this._vertices[e++]=-1,this._vertices[e++]=1,this._vertices[e++]=n,e=i+=t,this._vertices[e++]=1,this._vertices[e++]=1,this._vertices[e++]=1,this._vertices[e++]=n+o,e=i+=t,this._vertices[e++]=-1,this._vertices[e++]=1,this._vertices[e++]=0,this._vertices[e++]=n+o,e=i+=t}}},{key:"update",value:function(t){this._currentTime+=t/1e3,this.retireActiveParticles(),this.freeRetiredParticles(),this._firstActiveElement==this._firstFreeElement&&(this._currentTime=0),this._firstRetiredElement==this._firstActiveElement&&(this._drawCounter=0)}},{key:"retireActiveParticles",value:function(){for(var t=this.settings.duration;this._firstActiveElement!=this._firstNewElement;){var e=this._firstActiveElement*this._floatCountPerVertex*4,i=e+28,r=this._currentTime-this._vertices[i];if(1e-4+(r*=1+this._vertices[e+27])<t)break;this._vertices[i]=this._drawCounter,this._firstActiveElement++,this._firstActiveElement>=this.settings.maxPartices&&(this._firstActiveElement=0)}}},{key:"freeRetiredParticles",value:function(){for(;this._firstRetiredElement!=this._firstActiveElement&&!(this._drawCounter-this._vertices[this._firstRetiredElement*this._floatCountPerVertex*4+28]<3);)this._firstRetiredElement++,this._firstRetiredElement>=this.settings.maxPartices&&(this._firstRetiredElement=0)}},{key:"addNewParticlesToVertexBuffer",value:function(){}},{key:"addParticleArray",value:function(t,e){var i=this._firstFreeElement+1;if(i>=this.settings.maxPartices&&(i=0),i!==this._firstRetiredElement){for(var r=m.Create(this.settings,t,e,this._currentTime),n=this._firstFreeElement*this._floatCountPerVertex*4,a=0;a<4;a++){var o,s;for(o=0,s=4;o<3;o++)this._vertices[n+a*this._floatCountPerVertex+s+o]=r.position[o];for(o=0,s=7;o<3;o++)this._vertices[n+a*this._floatCountPerVertex+s+o]=r.velocity[o];for(o=0,s=10;o<4;o++)this._vertices[n+a*this._floatCountPerVertex+s+o]=r.startColor[o];for(o=0,s=14;o<4;o++)this._vertices[n+a*this._floatCountPerVertex+s+o]=r.endColor[o];for(o=0,s=18;o<3;o++)this._vertices[n+a*this._floatCountPerVertex+s+o]=r.sizeRotation[o];for(o=0,s=21;o<2;o++)this._vertices[n+a*this._floatCountPerVertex+s+o]=r.radius[o];for(o=0,s=23;o<4;o++)this._vertices[n+a*this._floatCountPerVertex+s+o]=r.radian[o];this._vertices[n+a*this._floatCountPerVertex+27]=r.durationAddScale,this._vertices[n+a*this._floatCountPerVertex+28]=r.time}this._firstFreeElement=i}}}]),e}(),d="attribute vec4 a_CornerTextureCoordinate;\r\nattribute vec3 a_Position;\r\nattribute vec3 a_Velocity;\r\nattribute vec4 a_StartColor;\r\nattribute vec4 a_EndColor;\r\nattribute vec3 a_SizeRotation;\r\nattribute vec2 a_Radius;\r\nattribute vec4 a_Radian;\r\nattribute float a_AgeAddScale;\r\nattribute float a_Time;\r\n\r\nvarying vec4 v_Color;\r\nvarying vec2 v_TextureCoordinate;\r\n\r\nuniform float u_CurrentTime;\r\nuniform float u_Duration;\r\nuniform float u_EndVelocity;\r\nuniform vec3 u_Gravity;\r\n\r\nuniform vec2 size;\r\nuniform mat4 u_mmat;\r\n\r\nvec4 ComputeParticlePosition(in vec3 position, in vec3 velocity,in float age,in float normalizedAge)\r\n{\r\n\r\n   float startVelocity = length(velocity);//起始标量速度\r\n   float endVelocity = startVelocity * u_EndVelocity;//结束标量速度\r\n\r\n   float velocityIntegral = startVelocity * normalizedAge +(endVelocity - startVelocity) * normalizedAge *normalizedAge/2.0;//计算当前速度的标量（单位空间），vt=v0*t+(1/2)*a*(t^2)\r\n   \r\n   vec3 addPosition = normalize(velocity) * velocityIntegral * u_Duration;//计算受自身速度影响的位置，转换标量到矢量    \r\n   addPosition += u_Gravity * age * normalizedAge;//计算受重力影响的位置\r\n   \r\n   float radius=mix(a_Radius.x, a_Radius.y, normalizedAge); //计算粒子受半径和角度影响（无需计算角度和半径时，可用宏定义优化屏蔽此计算）\r\n   float radianHorizontal =mix(a_Radian.x,a_Radian.z,normalizedAge);\r\n   float radianVertical =mix(a_Radian.y,a_Radian.w,normalizedAge);\r\n   \r\n   float r =cos(radianVertical)* radius;\r\n   addPosition.y += sin(radianVertical) * radius;\r\n\t\r\n   addPosition.x += cos(radianHorizontal) *r;\r\n   addPosition.z += sin(radianHorizontal) *r;\r\n  \r\n   addPosition.y=-addPosition.y;//2D粒子位置更新需要取负，2D粒子坐标系Y轴正向朝上\r\n   position+=addPosition;\r\n   return  vec4(position,1.0);\r\n}\r\n\r\nfloat ComputeParticleSize(in float startSize,in float endSize, in float normalizedAge)\r\n{    \r\n    float size = mix(startSize, endSize, normalizedAge);\r\n    return size;\r\n}\r\n\r\nmat2 ComputeParticleRotation(in float rot,in float age)\r\n{    \r\n    float rotation =rot * age;\r\n    //计算2x2旋转矩阵.\r\n    float c = cos(rotation);\r\n    float s = sin(rotation);\r\n    return mat2(c, -s, s, c);\r\n}\r\n\r\nvec4 ComputeParticleColor(in vec4 startColor,in vec4 endColor,in float normalizedAge)\r\n{\r\n\tvec4 color=mix(startColor,endColor,normalizedAge);\r\n    //硬编码设置，使粒子淡入很快，淡出很慢,6.7的缩放因子把置归一在0到1之间，可以谷歌x*(1-x)*(1-x)*6.7的制图表\r\n    color.a *= normalizedAge * (1.0-normalizedAge) * (1.0-normalizedAge) * 6.7;\r\n   \r\n    return color;\r\n}\r\n\r\nvoid main()\r\n{\r\n   float age = u_CurrentTime - a_Time;\r\n   age *= 1.0 + a_AgeAddScale;\r\n   float normalizedAge = clamp(age / u_Duration,0.0,1.0);\r\n   gl_Position = ComputeParticlePosition(a_Position, a_Velocity, age, normalizedAge);//计算粒子位置\r\n   float pSize = ComputeParticleSize(a_SizeRotation.x,a_SizeRotation.y, normalizedAge);\r\n   mat2 rotation = ComputeParticleRotation(a_SizeRotation.z, age);\r\n\t\r\n    mat4 mat=u_mmat;\r\n    gl_Position=vec4((mat*gl_Position).xy,0.0,1.0);\r\n    gl_Position.xy += (rotation*a_CornerTextureCoordinate.xy) * pSize*vec2(mat[0][0],mat[1][1]);\r\n    gl_Position=vec4((gl_Position.x/size.x-0.5)*2.0,(0.5-gl_Position.y/size.y)*2.0,0.0,1.0);\r\n   \r\n   v_Color = ComputeParticleColor(a_StartColor,a_EndColor, normalizedAge);\r\n   v_TextureCoordinate =a_CornerTextureCoordinate.zw;\r\n}\r\n\r\n",_="#ifdef GL_FRAGMENT_PRECISION_HIGH\r\nprecision highp float;\r\n#else\r\nprecision mediump float;\r\n#endif\r\n\r\nvarying vec4 v_Color;\r\nvarying vec2 v_TextureCoordinate;\r\nuniform sampler2D u_texture;\r\n\r\nvoid main()\r\n{\t\r\n\tgl_FragColor=texture2D(u_texture,v_TextureCoordinate)*v_Color;\r\n\tgl_FragColor.xyz *= v_Color.w;\r\n}",f=function(t){function e(){return o(this,e),i(this,n(e).call(this,d,_,"ParticleShader",null,["a_CornerTextureCoordinate",0,"a_Position",1,"a_Velocity",2,"a_StartColor",3,"a_EndColor",4,"a_SizeRotation",5,"a_Radius",6,"a_Radian",7,"a_AgeAddScale",8,"a_Time",9]))}return a(e,s.Shader),e}();f.vs=d,f.ps=_;var v=function(t){function e(){var t;return o(this,e),t=i(this,n(e).call(this,0,0)),e.pShader||(e.pShader=new f),t}return a(e,s.Value2D),l(e,[{key:"upload",value:function(){var t=this.size;t[0]=s.RenderState2D.width,t[1]=s.RenderState2D.height,this.alpha=this.ALPHA*s.RenderState2D.worldAlpha,e.pShader.upload(this)}}]),e}();v.pShader=null;var y=function(t){function h(t){var e;o(this,h),(e=i(this,n(h).call(this,t))).x=0,e.y=0,e.sv=new v,e._key={};var a=r(e);return s.ILaya.loader.load(e.settings.textureName,s.Handler.create(null,function(t){a.texture=t}),null,s.Loader.IMAGE),e.sv.u_Duration=e.settings.duration,e.sv.u_Gravity=e.settings.gravity,e.sv.u_EndVelocity=e.settings.endVelocity,e._blendFn=s.BlendMode.fns[t.blendState],e._mesh=s.MeshParticle2D.getAMesh(e.settings.maxPartices),e.initialize(),e}return a(h,u),l(h,[{key:"getRenderType",value:function(){return-111}},{key:"releaseRender",value:function(){}},{key:"addParticleArray",value:function(t,i){t[0]+=this.x,t[1]+=this.y,e(n(h.prototype),"addParticleArray",this).call(this,t,i)}},{key:"addNewParticlesToVertexBuffer",value:function(){var t,e=this._mesh._vb;e.clear(),e.append(this._vertices),this._firstNewElement<this._firstFreeElement?(t=4*this._firstNewElement*this._floatCountPerVertex*4,e.subUpload(t,t,t+4*(this._firstFreeElement-this._firstNewElement)*this._floatCountPerVertex*4)):(t=4*this._firstNewElement*this._floatCountPerVertex*4,e.subUpload(t,t,t+4*(this.settings.maxPartices-this._firstNewElement)*this._floatCountPerVertex*4),this._firstFreeElement>0&&(e.setNeedUpload(),e.subUpload(0,0,4*this._firstFreeElement*this._floatCountPerVertex*4))),this._firstNewElement=this._firstFreeElement}},{key:"renderSubmit",value:function(){if(this.texture&&this.texture.getIsReady()){if(this.update(s.ILaya.timer._delta),this.sv.u_CurrentTime=this._currentTime,this._firstNewElement!=this._firstFreeElement&&this.addNewParticlesToVertexBuffer(),this.blend(),this._firstActiveElement!=this._firstFreeElement){var t=s.WebGLContext.mainContext;this._mesh.useMesh(t),this.sv.u_texture=this.texture._getSource(),this.sv.upload(),this._firstActiveElement<this._firstFreeElement?t.drawElements(t.TRIANGLES,6*(this._firstFreeElement-this._firstActiveElement),t.UNSIGNED_SHORT,6*this._firstActiveElement*2):(s.WebGLContext.mainContext.drawElements(t.TRIANGLES,6*(this.settings.maxPartices-this._firstActiveElement),t.UNSIGNED_SHORT,6*this._firstActiveElement*2),this._firstFreeElement>0&&t.drawElements(t.TRIANGLES,6*this._firstFreeElement,t.UNSIGNED_SHORT,0)),s.Stat.renderBatches++}this._drawCounter++}return 1}},{key:"updateParticleForNative",value:function(){this.texture&&this.texture.getIsReady()&&(this.update(s.ILaya.timer._delta),this.sv.u_CurrentTime=this._currentTime,this._firstNewElement!=this._firstFreeElement&&(this._firstNewElement=this._firstFreeElement))}},{key:"getMesh",value:function(){return this._mesh}},{key:"getConchMesh",value:function(){return this._conchMesh}},{key:"getFirstNewElement",value:function(){return this._firstNewElement}},{key:"getFirstFreeElement",value:function(){return this._firstFreeElement}},{key:"getFirstActiveElement",value:function(){return this._firstActiveElement}},{key:"getFirstRetiredElement",value:function(){return this._firstRetiredElement}},{key:"setFirstFreeElement",value:function(t){this._firstFreeElement=t}},{key:"setFirstNewElement",value:function(t){this._firstNewElement=t}},{key:"addDrawCounter",value:function(){this._drawCounter++}},{key:"blend",value:function(){if(s.BlendMode.activeBlendFunction!==this._blendFn){var t=s.WebGLContext.mainContext;t.enable(t.BLEND),this._blendFn(t),s.BlendMode.activeBlendFunction=this._blendFn}}},{key:"dispose",value:function(){this._mesh.releaseMesh()}}]),h}();y.activeBlendType=-1;var p=function(){function t(){o(this,t),this._frameTime=0,this._emissionRate=60,this._emissionTime=0,this.minEmissionTime=1/60}return l(t,[{key:"start",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Number.MAX_VALUE;0!=this._emissionRate&&(this._emissionTime=t)}},{key:"stop",value:function(){this._emissionTime=0}},{key:"clear",value:function(){this._emissionTime=0}},{key:"emit",value:function(){}},{key:"advanceTime",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(this._emissionTime-=t,!(this._emissionTime<0||(this._frameTime+=t,this._frameTime<this.minEmissionTime)))for(;this._frameTime>this.minEmissionTime;)this._frameTime-=this.minEmissionTime,this.emit()}},{key:"particleTemplate",set:function(t){this._particleTemplate=t}},{key:"emissionRate",set:function(t){t<=0||(this._emissionRate=t,t>0&&(this.minEmissionTime=1/t))},get:function(){return this._emissionRate}}]),t}(),E=function(t){function r(t){var e;return o(this,r),(e=i(this,n(r).call(this))).template=t,e}return a(r,p),l(r,[{key:"emit",value:function(){e(n(r.prototype),"emit",this).call(this),null!=this._emitFun&&this._emitFun()}},{key:"getRandom",value:function(t){return(2*Math.random()-1)*t}},{key:"webGLEmit",value:function(){var t=new Float32Array(3);t[0]=this.getRandom(this._posRange[0]),t[1]=this.getRandom(this._posRange[1]),t[2]=this.getRandom(this._posRange[2]);var e=new Float32Array(3);e[0]=0,e[1]=0,e[2]=0,this._particleTemplate.addParticleArray(t,e)}},{key:"canvasEmit",value:function(){var t=new Float32Array(3);t[0]=this.getRandom(this._posRange[0]),t[1]=this.getRandom(this._posRange[1]),t[2]=this.getRandom(this._posRange[2]);var e=new Float32Array(3);e[0]=0,e[1]=0,e[2]=0,this._particleTemplate.addParticleArray(t,e)}},{key:"template",set:function(t){this._particleTemplate=t,t||(this._emitFun=null,this.setting=null,this._posRange=null),this.setting=t.settings,this._posRange=this.setting.positionVariance,this._particleTemplate instanceof y&&(this._emitFun=this.webGLEmit)},get:function(){return this._particleTemplate}}]),r}(),g=function(t){function r(t){var e;return o(this,r),(e=i(this,n(r).call(this)))._matrix4=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),e.autoPlay=!0,e.customRenderEnable=!0,t&&e.setParticleSetting(t),e}return a(r,s.Sprite),l(r,[{key:"load",value:function(t){s.ILaya.loader.load(t,s.Handler.create(this,this.setParticleSetting),null,s.ILaya.Loader.JSON)}},{key:"setParticleSetting",value:function(t){if(!t)return this.stop();h.checkSetting(t),this.customRenderEnable=!0,this._particleTemplate=new y(t),this.graphics._saveToCmd(null,s.DrawParticleCmd.create(this._particleTemplate)),this._emitter?this._emitter.template=this._particleTemplate:this._emitter=new E(this._particleTemplate),this.autoPlay&&(this.emitter.start(),this.play())}},{key:"play",value:function(){s.ILaya.timer.frameLoop(1,this,this._loop)}},{key:"stop",value:function(){s.ILaya.timer.clear(this,this._loop)}},{key:"_loop",value:function(){this.advanceTime(1/60)}},{key:"advanceTime",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this._canvasTemplate&&this._canvasTemplate.advanceTime(t),this._emitter&&this._emitter.advanceTime(t)}},{key:"customRender",value:function(t,e,i){this._matrix4[0]=t._curMat.a,this._matrix4[1]=t._curMat.b,this._matrix4[4]=t._curMat.c,this._matrix4[5]=t._curMat.d,this._matrix4[12]=t._curMat.tx,this._matrix4[13]=t._curMat.ty,this._particleTemplate.sv.u_mmat=this._matrix4,this._canvasTemplate&&this._canvasTemplate.render(t,e,i)}},{key:"destroy",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._particleTemplate instanceof y&&this._particleTemplate.dispose(),e(n(r.prototype),"destroy",this).call(this,t)}},{key:"url",set:function(t){this.load(t)}},{key:"emitter",get:function(){return this._emitter}}]),r}();s.ILaya.regClass(g);var x=function(){function t(e,i,r){o(this,t),this._timeLeftOver=0,this._tempVelocity=new Float32Array([0,0,0]),this._tempPosition=new Float32Array([0,0,0]),this._templet=e,this._timeBetweenParticles=1/i,this._previousPosition=r}return l(t,[{key:"update",value:function(t,e){if((t/=1e3)>0){s.MathUtil.subtractVector3(e,this._previousPosition,this._tempVelocity),s.MathUtil.scaleVector3(this._tempVelocity,1/t,this._tempVelocity);for(var i=this._timeLeftOver+t,r=-this._timeLeftOver;i>this._timeBetweenParticles;)r+=this._timeBetweenParticles,i-=this._timeBetweenParticles,s.MathUtil.lerpVector3(this._previousPosition,e,r/t,this._tempPosition),this._templet.addParticleArray(this._tempPosition,this._tempVelocity);this._timeLeftOver=i}this._previousPosition[0]=e[0],this._previousPosition[1]=e[1],this._previousPosition[2]=e[2]}}]),t}();t.Emitter2D=E,t.EmitterBase=p,t.Particle2D=g,t.ParticleData=m,t.ParticleEmitter=x,t.ParticleSetting=h,t.ParticleShader=f,t.ParticleShaderValue=v,t.ParticleTemplate2D=y,t.ParticleTemplateBase=c,t.ParticleTemplateWebGL=u}(window.Laya=window.Laya||{},Laya)}(); 
