!function(){"use strict";function t(i){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(i)}function i(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function e(t,i){for(var e=0;e<i.length;e++){var r=i[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}function a(i,e){return!e||"object"!==t(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(i):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&function(t,i){(Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}(t,i)}!function(t,e){var l=function(t){function l(){var t;return i(this,l),(t=a(this,h(l).apply(this,arguments))).relativeX=0,t.relativeY=0,t.isAloneObject=!1,t.isHaveAnimation=!1,t.drawImageNum=0,t._map=null,t}return s(l,e.Sprite),r(l,[{key:"initData",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this._map=t,this.isAloneObject=i}},{key:"addAniSprite",value:function(t){null==this.aniSpriteArray&&(this.aniSpriteArray=[]),this.aniSpriteArray.push(t)}},{key:"show",value:function(){if(!this.visible){if(this.visible=!0,null==this.aniSpriteArray)return;for(var t=0;t<this.aniSpriteArray.length;t++)this.aniSpriteArray[t].show()}}},{key:"hide",value:function(){if(this.visible){if(this.visible=!1,null==this.aniSpriteArray)return;for(var t=0;t<this.aniSpriteArray.length;t++)this.aniSpriteArray[t].hide()}}},{key:"updatePos",value:function(){this.isAloneObject?(this._map&&(this.x=this.relativeX-this._map._viewPortX,this.y=this.relativeY-this._map._viewPortY),this.x<0||this.x>this._map.viewPortWidth||this.y<0||this.y>this._map.viewPortHeight?this.hide():this.show()):this._map&&(this.x=this.relativeX-this._map._viewPortX,this.y=this.relativeY-this._map._viewPortY)}},{key:"clearAll",value:function(){if(this._map&&(this._map=null),this.visible=!1,null!=this.aniSpriteArray)for(var t=0;t<this.aniSpriteArray.length;t++)this.aniSpriteArray[t].clearAll();this.destroy(),this.relativeX=0,this.relativeY=0,this.isHaveAnimation=!1,this.aniSpriteArray=null,this.drawImageNum=0}}]),l}(),n=function t(){i(this,t)};n.TiledMap=null;var o=function(t){function l(){var t;return i(this,l),(t=a(this,h(l).apply(this,arguments)))._tileTextureSet=null,t._aniName=null,t}return s(l,e.Sprite),r(l,[{key:"setTileTextureSet",value:function(t,i){this._aniName=t,this._tileTextureSet=i,i.addAniSprite(this._aniName,this)}},{key:"show",value:function(){this._tileTextureSet.addAniSprite(this._aniName,this)}},{key:"hide",value:function(){this._tileTextureSet.removeAniSprite(this._aniName)}},{key:"clearAll",value:function(){this._tileTextureSet.removeAniSprite(this._aniName),this.destroy(),this._tileTextureSet=null,this._aniName=null}}]),l}(),_=function(t){function _(){var t;return i(this,_),(t=a(this,h(_).apply(this,arguments)))._mapData=null,t._tileWidthHalf=0,t._tileHeightHalf=0,t._mapWidthHalf=0,t._mapHeightHalf=0,t._gridSpriteArray=[],t._objDic=null,t._dataDic=null,t._tempMapPos=new e.Point,t.layerName=null,t}return s(_,e.Sprite),r(_,[{key:"init",value:function(t,i){this._map=i,this._mapData=t.data,t.height,t.width;var r=i.tileWidth,a=i.tileHeight;switch(this.layerName=t.name,this._properties=t.properties,this.alpha=t.opacity,this._tileWidthHalf=r/2,this._tileHeightHalf=a/2,this._mapWidthHalf=this._map.width/2-this._tileWidthHalf,this._mapHeightHalf=this._map.height/2,t.type){case"tilelayer":break;case"objectgroup":var h,s,l,o=t.objects;o.length>0&&(this._objDic={},this._dataDic={});for(var _=0;_<o.length;_++)if(h=o[_],this._dataDic[h.name]=h,1==h.visible){s=h.width,l=h.height;var p=i.getSprite(h.gid,s,l);if(null!=p){switch(this._map.orientation){case n.TiledMap.ORIENTATION_ISOMETRIC:this.getScreenPositionByTilePos(h.x/a,h.y/a,e.Point.TEMP),p.pivot(s/2,l/2),p.rotation=h.rotation,p.x=p.relativeX=e.Point.TEMP.x+this._map.viewPortX,p.y=p.relativeY=e.Point.TEMP.y+this._map.viewPortY-l/2;break;case n.TiledMap.ORIENTATION_STAGGERED:case n.TiledMap.ORIENTATION_ORTHOGONAL:p.pivot(s/2,l/2),p.rotation=h.rotation,p.x=p.relativeX=h.x+s/2,p.y=p.relativeY=h.y-l/2;break;case n.TiledMap.ORIENTATION_HEXAGONAL:p.x=p.relativeX=h.x,p.y=p.relativeY=h.y}this.addChild(p),this._gridSpriteArray.push(p),this._objDic[h.name]=p}}}}},{key:"getObjectByName",value:function(t){return this._objDic?this._objDic[t]:null}},{key:"getObjectDataByName",value:function(t){return this._dataDic?this._dataDic[t]:null}},{key:"getLayerProperties",value:function(t){return this._properties?this._properties[t]:null}},{key:"getTileData",value:function(t,i){if(i>=0&&i<this._map.numRowsTile&&t>=0&&t<this._map.numColumnsTile){var e=i*this._map.numColumnsTile+t,r=this._mapData;if(null!=r&&e<r.length)return r[e]}return 0}},{key:"getScreenPositionByTilePos",value:function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(e){switch(this._map.orientation){case n.TiledMap.ORIENTATION_ISOMETRIC:e.x=this._map.width/2-(i-t)*this._tileWidthHalf,e.y=(i+t)*this._tileHeightHalf;break;case n.TiledMap.ORIENTATION_STAGGERED:t=Math.floor(t),i=Math.floor(i),e.x=t*this._map.tileWidth+(1&i)*this._tileWidthHalf,e.y=i*this._tileHeightHalf;break;case n.TiledMap.ORIENTATION_ORTHOGONAL:e.x=t*this._map.tileWidth,e.y=i*this._map.tileHeight;break;case n.TiledMap.ORIENTATION_HEXAGONAL:t=Math.floor(t),i=Math.floor(i);var r=2*this._map.tileHeight/3;e.x=(t*this._map.tileWidth+i%2*this._tileWidthHalf)%this._map.gridWidth,e.y=i*r%this._map.gridHeight}e.x=(e.x+this._map.viewPortX)*this._map.scale,e.y=(e.y+this._map.viewPortY)*this._map.scale}}},{key:"getTileDataByScreenPos",value:function(t,i){var e=0;return this.getTilePositionByScreenPos(t,i,this._tempMapPos)&&(e=this.getTileData(Math.floor(this._tempMapPos.x),Math.floor(this._tempMapPos.y))),e}},{key:"getTilePositionByScreenPos",value:function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t=t/this._map.scale-this._map.viewPortX,i=i/this._map.scale-this._map.viewPortY;var r=this._map.tileWidth,a=this._map.tileHeight,h=0,s=0;switch(this._map.orientation){case n.TiledMap.ORIENTATION_ISOMETRIC:var l=t-this._map.width/2;return h=-(l/r-i/a),s=l/r+i/a,e&&(e.x=s,e.y=h),!0;case n.TiledMap.ORIENTATION_STAGGERED:var o,_;return e&&(o=(t-(Math.floor(t/r)*r+r/2))*a/2,_=(i-(Math.floor(i/a)*a+a/2))*r/2,Math.abs(o)+Math.abs(_)<=r*a/4?(s=Math.floor(t/r),h=2*Math.floor(i/a)):(t-=r/2,s=Math.floor(t/r)+1,i-=a/2,h=2*Math.floor(i/a)+1),e.x=s-(1&h),e.y=h),!0;case n.TiledMap.ORIENTATION_ORTHOGONAL:return s=t/r,h=i/a,e&&(e.x=s,e.y=h),!0;case n.TiledMap.ORIENTATION_HEXAGONAL:s=(t-(h=i/(2*a/3))%2*this._tileWidthHalf)/r,e&&(e.x=s,e.y=h)}return!1}},{key:"getDrawSprite",value:function(t,i){var e=new l;return e.relativeX=t*this._map.gridWidth,e.relativeY=i*this._map.gridHeight,e.initData(this._map),this._gridSpriteArray.push(e),e}},{key:"updateGridPos",value:function(){for(var t,i=0;i<this._gridSpriteArray.length;i++)((t=this._gridSpriteArray[i]).visible||t.isAloneObject)&&t.drawImageNum>0&&t.updatePos()}},{key:"drawTileTexture",value:function(t,i,e){if(e>=0&&e<this._map.numRowsTile&&i>=0&&i<this._map.numColumnsTile){var r=e*this._map.numColumnsTile+i,a=this._mapData;if(null!=a&&r<a.length&&0!=a[r]){var h=this._map.getTexture(a[r]);if(h){var s=0,l=0;switch(h.texture,this._map.orientation){case n.TiledMap.ORIENTATION_STAGGERED:s=i*this._map.tileWidth%this._map.gridWidth+(1&e)*this._tileWidthHalf,l=e*this._tileHeightHalf%this._map.gridHeight;break;case n.TiledMap.ORIENTATION_ORTHOGONAL:s=i*this._map.tileWidth%this._map.gridWidth,l=e*this._map.tileHeight%this._map.gridHeight;break;case n.TiledMap.ORIENTATION_ISOMETRIC:s=(this._mapWidthHalf+(i-e)*this._tileWidthHalf)%this._map.gridWidth,l=(i+e)*this._tileHeightHalf%this._map.gridHeight;break;case n.TiledMap.ORIENTATION_HEXAGONAL:var _=2*this._map.tileHeight/3;s=(i*this._map.tileWidth+e%2*this._tileWidthHalf)%this._map.gridWidth,l=e*_%this._map.gridHeight}if(h.isAnimation){var p=new o;p.x=s,p.y=l,p.setTileTextureSet(r.toString(),h),t.addAniSprite(p),t.addChild(p),t.isHaveAnimation=!0}else t.graphics.drawImage(h.texture,s+h.offX,l+h.offY);return!0}}}return!1}},{key:"clearAll",value:function(){this._map=null,this._mapData=null,this._tileWidthHalf=0,this._tileHeightHalf=0,this._mapWidthHalf=0,this._mapHeightHalf=0,this.layerName=null;var t=0;if(this._objDic){for(var i in this._objDic)delete this._objDic[i];this._objDic=null}if(this._dataDic){for(i in this._dataDic)delete this._dataDic[i];this._dataDic=null}for(t=0;t<this._gridSpriteArray.length;t++)this._gridSpriteArray[t].clearAll();this._properties=null,this._tempMapPos=null,this.tarLayer=null}}]),_}(),p=function(){function t(){i(this,t),this.gid=-1,this.offX=0,this.offY=0,this.textureArray=null,this.durationTimeArray=null,this.animationTotalTime=0,this.isAnimation=!1,this._spriteNum=0,this._aniDic=null,this._frameIndex=0,this._time=0,this._interval=0,this._preFrameTime=0}return r(t,[{key:"addAniSprite",value:function(t,i){if(0!=this.animationTotalTime&&(null==this._aniDic&&(this._aniDic={}),0==this._spriteNum&&(e.ILaya.timer.frameLoop(3,this,this.animate),this._preFrameTime=e.ILaya.Browser.now(),this._frameIndex=0,this._time=0,this._interval=0),this._spriteNum++,this._aniDic[t]=i,this.textureArray&&this._frameIndex<this.textureArray.length)){var r=this.textureArray[this._frameIndex];this.drawTexture(i,r)}}},{key:"animate",value:function(){if(this.textureArray&&this.textureArray.length>0&&this.durationTimeArray&&this.durationTimeArray.length>0){var t=e.ILaya.Browser.now();this._interval=t-this._preFrameTime,this._preFrameTime=t,this._interval>this.animationTotalTime&&(this._interval=this._interval%this.animationTotalTime),this._time+=this._interval;for(var i=this.durationTimeArray[this._frameIndex];this._time>i;){this._time-=i,this._frameIndex++,(this._frameIndex>=this.durationTimeArray.length||this._frameIndex>=this.textureArray.length)&&(this._frameIndex=0);var r,a=this.textureArray[this._frameIndex];for(var h in this._aniDic)r=this._aniDic[h],this.drawTexture(r,a);i=this.durationTimeArray[this._frameIndex]}}}},{key:"drawTexture",value:function(t,i){t.graphics.clear(!0),t.graphics.drawImage(i.texture,i.offX,i.offY)}},{key:"removeAniSprite",value:function(t){this._aniDic&&this._aniDic[t]&&(delete this._aniDic[t],this._spriteNum--,0==this._spriteNum&&e.ILaya.timer.clear(this,this.animate))}},{key:"showDebugInfo",value:function(){var t=null;return this._spriteNum>0&&(t="TileTextureSet::gid:"+this.gid.toString()+" 动画数:"+this._spriteNum.toString()),t}},{key:"clearAll",value:function(){this.gid=-1,this.texture&&(this.texture.destroy(),this.texture=null),this.offX=0,this.offY=0,this.textureArray=null,this.durationTimeArray=null,this.isAnimation=!1,this._spriteNum=0,this._aniDic=null,this._frameIndex=0,this._preFrameTime=0,this._time=0,this._interval=0}}]),t}(),u=function(){function t(){i(this,t),this._tileTexSetArr=[],this._texArray=[],this._x=0,this._y=0,this._width=0,this._height=0,this._mapW=0,this._mapH=0,this._mapTileW=0,this._mapTileH=0,this._rect=new e.Rectangle,this._paddingRect=new e.Rectangle,this._mapSprite=null,this._layerArray=[],this._renderLayerArray=[],this._gridArray=[],this._showGridKey=!1,this._totalGridNum=0,this._gridW=0,this._gridH=0,this._gridWidth=450,this._gridHeight=450,this._jsonLoader=null,this._loader=null,this._tileSetArray=[],this._currTileSet=null,this._completeHandler=null,this._mapRect=new m,this._mapLastRect=new m,this._index=0,this._animationDic={},this._tileProperties={},this._tileProperties2={},this._orientation="orthogonal",this._renderOrder="right-down",this._colorArray=["FF","00","33","66"],this._scale=1,this._pivotScaleX=.5,this._pivotScaleY=.5,this._centerX=0,this._centerY=0,this._viewPortX=0,this._viewPortY=0,this._viewPortWidth=0,this._viewPortHeight=0,this._enableLinear=!0,this._limitRange=!1,this.autoCache=!0,this.autoCacheType="normal",this.enableMergeLayer=!1,this.removeCoveredTile=!1,this.showGridTextureCount=!1,this.antiCrack=!0,this.cacheAllAfterInit=!1,this._texutreStartDic={}}return r(t,[{key:"createMap",value:function(t,i,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],l=arguments.length>6&&void 0!==arguments[6]&&arguments[6];this._enableLinear=s,this._limitRange=l,this._rect.x=i.x,this._rect.y=i.y,this._rect.width=i.width,this._rect.height=i.height,this._viewPortWidth=i.width/this._scale,this._viewPortHeight=i.height/this._scale,this._completeHandler=r,a?this._paddingRect.copyFrom(a):this._paddingRect.setTo(0,0,0,0),h&&(this._gridWidth=h.x,this._gridHeight=h.y);var n=t.lastIndexOf("/");n>-1?(this._resPath=t.substr(0,n),this._pathArray=this._resPath.split("/")):(this._resPath="",this._pathArray=[]),this._jsonLoader=new e.Loader,this._jsonLoader.once("complete",this,this.onJsonComplete),this._jsonLoader.load(t,e.Loader.JSON,!1)}},{key:"onJsonComplete",value:function(i){this._mapSprite=new e.Sprite,e.ILaya.stage.addChild(this._mapSprite);var r=this._jsonData=i;this._properties=r.properties,this._orientation=r.orientation,this._renderOrder=r.renderorder,this._mapW=r.width,this._mapH=r.height,this._mapTileW=r.tilewidth,this._mapTileH=r.tileheight,this._width=this._mapTileW*this._mapW,this._height=this._mapTileH*this._mapH,this._orientation==t.ORIENTATION_STAGGERED&&(this._height=(.5+.5*this._mapH)*this._mapTileH),this._mapLastRect.top=this._mapLastRect.bottom=this._mapLastRect.left=this._mapLastRect.right=-1;var a,h,s=r.tilesets,l=0;for(l=0;l<s.length;l++)if(a=s[l],(h=new d).init(a),!h.properties||!h.properties.ignore){this._tileProperties[l]=h.tileproperties,this.addTileProperties(h.tileproperties),this._tileSetArray.push(h);var n=a.tiles;if(n)for(var o in n){var _=n[o].animation;if(_){var p=new c;this._animationDic[o]=p,p.image=a.image;for(var u=0;u<_.length;u++){var m=_[u];p.mAniIdArray.push(m.tileid),p.mDurationTimeArray.push(m.duration)}}}}if(this._tileTexSetArr.push(null),this._tileSetArray.length>0){h=this._currTileSet=this._tileSetArray.shift(),this._loader=new e.Loader,this._loader.once("complete",this,this.onTextureComplete);var f=this.mergePath(this._resPath,h.image);this._loader.load(f,e.Loader.IMAGE,!1)}}},{key:"mergePath",value:function(t,i){var e="",r=i.split("/"),a=0,h=0;for(h=r.length-1;h>=0;h--)".."==r[h]&&a++;if(0==a)return this._pathArray.length>0?t+"/"+i:i;var s=this._pathArray.length-a;for(s<0&&console.log("[error]path does not exist",this._pathArray,r,t,i),h=0;h<s;h++)0==h?e+=this._pathArray[h]:e=e+"/"+this._pathArray[h];for(h=a;h<r.length;h++)e=e+"/"+r[h];return e}},{key:"onTextureComplete",value:function(t){this._jsonData;var i=t;this._enableLinear||(i.bitmap.minFifter=9728,i.bitmap.magFifter=9728),this._texArray.push(i);var r=this._currTileSet,a=r.tilewidth,h=r.tileheight,s=r.imagewidth,l=r.imageheight,n=(r.firstgid,Math.floor((s-r.margin-a)/(a+r.spacing))+1),o=Math.floor((l-r.margin-h)/(h+r.spacing))+1,_=null;this._texutreStartDic[r.image]=this._tileTexSetArr.length;for(var u=0;u<o;u++)for(var m=0;m<n;m++)(_=new p).offX=r.titleoffsetX,_.offY=r.titleoffsetY-(h-this._mapTileH),_.texture=e.Texture.createFromTexture(i,r.margin+(a+r.spacing)*m,r.margin+(h+r.spacing)*u,a,h),this.antiCrack&&this.adptTexture(_.texture),this._tileTexSetArr.push(_),_.gid=this._tileTexSetArr.length;if(this._tileSetArray.length>0){r=this._currTileSet=this._tileSetArray.shift(),this._loader.once("complete",this,this.onTextureComplete);var c=this.mergePath(this._resPath,r.image);this._loader.load(c,e.Loader.IMAGE,!1)}else this._currTileSet=null,this.initMap()}},{key:"adptTexture",value:function(t){if(t){var i=t.uv[0],e=t.uv[2],r=t.uv[1],a=t.uv[7],h=1/t.bitmap.width,s=1/t.bitmap.height,l=t;l.uv[0]=l.uv[6]=i+h,l.uv[2]=l.uv[4]=e-h,l.uv[1]=l.uv[3]=r+s,l.uv[5]=l.uv[7]=a-s}}},{key:"initMap",value:function(){var t,i;for(var e in this._animationDic){var r,a=this._animationDic[e];r=this._texutreStartDic[a.image];var h=this.getTexture(parseInt(e)+r);if(a.mAniIdArray.length>0){for(h.textureArray=[],h.durationTimeArray=a.mDurationTimeArray,h.isAnimation=!0,h.animationTotalTime=0,t=0,i=h.durationTimeArray.length;t<i;t++)h.animationTotalTime+=h.durationTimeArray[t];for(t=0,i=a.mAniIdArray.length;t<i;t++){var s=this.getTexture(a.mAniIdArray[t]+r);h.textureArray.push(s)}}}for(this._gridWidth=Math.floor(this._gridWidth/this._mapTileW)*this._mapTileW,this._gridHeight=Math.floor(this._gridHeight/this._mapTileH)*this._mapTileH,this._gridWidth<this._mapTileW&&(this._gridWidth=this._mapTileW),this._gridHeight<this._mapTileH&&(this._gridHeight=this._mapTileH),this._gridW=Math.ceil(this._width/this._gridWidth),this._gridH=Math.ceil(this._height/this._gridHeight),this._totalGridNum=this._gridW*this._gridH,t=0;t<this._gridH;t++){var l=[];this._gridArray.push(l);for(var n=0;n<this._gridW;n++)l.push(null)}for(var o,p,u,m=this._jsonData.layers,c=!0,d=0;d<m.length;d++){var f=m[d];if(1==f.visible){var g=new _;g.init(f,this),this.enableMergeLayer?(o=g.getLayerProperties("layer"),(c=c||!u||o!=p)?(c=!1,g.tarLayer=g,u=g,this._mapSprite.addChild(g),this._renderLayerArray.push(g)):g.tarLayer=u,p=o):(this._mapSprite.addChild(g),this._renderLayerArray.push(g)),this._layerArray.push(g)}}this.removeCoveredTile&&this.adptTiledMapData(),this.cacheAllAfterInit&&this.cacheAllGrid(),this.moveViewPort(this._rect.x,this._rect.y),null!=this._completeHandler&&this._completeHandler.run()}},{key:"addTileProperties",value:function(t){var i;for(i in t)this._tileProperties2[i]=t[i]}},{key:"getTileUserData",value:function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return this._tileProperties2&&this._tileProperties2[t]&&i in this._tileProperties2[t]?this._tileProperties2[t][i]:e}},{key:"adptTiledMapData",value:function(){var t,i,e={};for(t=this._layerArray.length-1;t>=0;t--)(i=this._layerArray[t]._mapData)&&(this.removeCoverd(i,e),this.collectCovers(i,e,t))}},{key:"removeCoverd",value:function(t,i){var e,r;for(r=t.length,e=0;e<r;e++)i[e]&&(t[e]=0)}},{key:"collectCovers",value:function(t,i,e){var r,a,h;for(a=t.length,r=0;r<a;r++)(h=t[r])>0&&this.getTileUserData(h-1,"type",0)>0&&(i[r]=h)}},{key:"getTexture",value:function(t){return t<this._tileTexSetArr.length?this._tileTexSetArr[t]:null}},{key:"getMapProperties",value:function(t){return this._properties?this._properties[t]:null}},{key:"getTileProperties",value:function(t,i,e){return this._tileProperties[t]&&this._tileProperties[t][i]?this._tileProperties[t][i][e]:null}},{key:"getSprite",value:function(t,i,e){if(0<this._tileTexSetArr.length){var r=new l;r.initData(this,!0),r.size(i,e);var a=this._tileTexSetArr[t];if(null!=a&&null!=a.texture){if(a.isAnimation){var h=new o;this._index++,h.setTileTextureSet(this._index.toString(),a),r.addAniSprite(h),r.addChild(h)}else r.graphics.drawImage(a.texture,0,0,i,e);r.drawImageNum++}return r}return null}},{key:"setViewPortPivotByScale",value:function(t,i){this._pivotScaleX=t,this._pivotScaleY=i}},{key:"moveViewPort",value:function(t,i){this._x=-t,this._y=-i,this._rect.x=t,this._rect.y=i,this.updateViewPort()}},{key:"changeViewPort",value:function(t,i,e,r){t==this._rect.x&&i==this._rect.y&&e==this._rect.width&&r==this._rect.height||(this._x=-t,this._y=-i,this._rect.x=t,this._rect.y=i,this._rect.width=e,this._rect.height=r,this._viewPortWidth=e/this._scale,this._viewPortHeight=r/this._scale,this.updateViewPort())}},{key:"changeViewPortBySize",value:function(t,i){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return null==r&&(r=new e.Rectangle),this._centerX=this._rect.x+this._rect.width*this._pivotScaleX,this._centerY=this._rect.y+this._rect.height*this._pivotScaleY,r.x=this._centerX-t*this._pivotScaleX,r.y=this._centerY-i*this._pivotScaleY,r.width=t,r.height=i,this.changeViewPort(r.x,r.y,r.width,r.height),r}},{key:"updateViewPort",value:function(){this._centerX=this._rect.x+this._rect.width*this._pivotScaleX,this._centerY=this._rect.y+this._rect.height*this._pivotScaleY;var t=!1,i=this._viewPortX;this._viewPortX=this._centerX-this._rect.width*this._pivotScaleX/this._scale,i!=this._viewPortX?t=!0:i=this._viewPortY,this._viewPortY=this._centerY-this._rect.height*this._pivotScaleY/this._scale,t||i==this._viewPortY||(t=!0),this._limitRange&&(this._viewPortX+this._viewPortWidth>this._width&&(this._viewPortX=this._width-this._viewPortWidth),this._viewPortY+this._viewPortHeight>this._height&&(this._viewPortY=this._height-this._viewPortHeight),this._viewPortX<0&&(this._viewPortX=0),this._viewPortY<0&&(this._viewPortY=0));var e=this._paddingRect;if(this._mapRect.top=Math.floor((this._viewPortY-e.y)/this._gridHeight),this._mapRect.bottom=Math.floor((this._viewPortY+this._viewPortHeight+e.height+e.y)/this._gridHeight),this._mapRect.left=Math.floor((this._viewPortX-e.x)/this._gridWidth),this._mapRect.right=Math.floor((this._viewPortX+this._viewPortWidth+e.width+e.x)/this._gridWidth),this._mapRect.top==this._mapLastRect.top&&this._mapRect.bottom==this._mapLastRect.bottom&&this._mapRect.left==this._mapLastRect.left&&this._mapRect.right==this._mapLastRect.right||(this.clipViewPort(),this._mapLastRect.top=this._mapRect.top,this._mapLastRect.bottom=this._mapRect.bottom,this._mapLastRect.left=this._mapRect.left,this._mapLastRect.right=this._mapRect.right,t=!0),t)for(var r,a=this._renderLayerArray.length,h=0;h<a;h++)(r=this._renderLayerArray[h])._gridSpriteArray.length>0&&r.updateGridPos()}},{key:"clipViewPort",value:function(){var t,i,e=0,r=0;if(this._mapRect.left>this._mapLastRect.left){if((e=this._mapRect.left-this._mapLastRect.left)>0)for(i=this._mapLastRect.left;i<this._mapLastRect.left+e;i++)for(t=this._mapLastRect.top;t<=this._mapLastRect.bottom;t++)this.hideGrid(i,t)}else if((r=Math.min(this._mapLastRect.left,this._mapRect.right+1)-this._mapRect.left)>0)for(i=this._mapRect.left;i<this._mapRect.left+r;i++)for(t=this._mapRect.top;t<=this._mapRect.bottom;t++)this.showGrid(i,t);if(this._mapRect.right>this._mapLastRect.right){if((r=this._mapRect.right-this._mapLastRect.right)>0)for(i=Math.max(this._mapLastRect.right+1,this._mapRect.left);i<=this._mapLastRect.right+r;i++)for(t=this._mapRect.top;t<=this._mapRect.bottom;t++)this.showGrid(i,t)}else if((e=this._mapLastRect.right-this._mapRect.right)>0)for(i=this._mapRect.right+1;i<=this._mapRect.right+e;i++)for(t=this._mapLastRect.top;t<=this._mapLastRect.bottom;t++)this.hideGrid(i,t);if(this._mapRect.top>this._mapLastRect.top){if((e=this._mapRect.top-this._mapLastRect.top)>0)for(t=this._mapLastRect.top;t<this._mapLastRect.top+e;t++)for(i=this._mapLastRect.left;i<=this._mapLastRect.right;i++)this.hideGrid(i,t)}else if((r=Math.min(this._mapLastRect.top,this._mapRect.bottom+1)-this._mapRect.top)>0)for(t=this._mapRect.top;t<this._mapRect.top+r;t++)for(i=this._mapRect.left;i<=this._mapRect.right;i++)this.showGrid(i,t);if(this._mapRect.bottom>this._mapLastRect.bottom){if((r=this._mapRect.bottom-this._mapLastRect.bottom)>0)for(t=Math.max(this._mapLastRect.bottom+1,this._mapRect.top);t<=this._mapLastRect.bottom+r;t++)for(i=this._mapRect.left;i<=this._mapRect.right;i++)this.showGrid(i,t)}else if((e=this._mapLastRect.bottom-this._mapRect.bottom)>0)for(t=this._mapRect.bottom+1;t<=this._mapRect.bottom+e;t++)for(i=this._mapLastRect.left;i<=this._mapLastRect.right;i++)this.hideGrid(i,t)}},{key:"showGrid",value:function(t,i){if(!(t<0||t>=this._gridW||i<0||i>=this._gridH)){var e,r,a=this._gridArray[i][t];if(null==a)a=this.getGridArray(t,i);else for(e=0;e<a.length&&e<this._layerArray.length;e++)this._layerArray[e]&&a[e]&&0==(r=a[e]).visible&&r.drawImageNum>0&&r.show()}}},{key:"cacheAllGrid",value:function(){var t,i,e;for(t=0;t<this._gridW;t++)for(i=0;i<this._gridH;i++)e=this.getGridArray(t,i),this.cacheGridsArray(e)}},{key:"cacheGridsArray",value:function(i){var r,a,h,s;if(!t._tempCanvas){t._tempCanvas=new e.HTMLCanvas;var l=t._tempCanvas.context;l||(l=t._tempCanvas.getContext("2d"))}for((r=t._tempCanvas).context.asBitmap=!1,h=i.length,a=0;a<h;a++)s=i[a],r.clear(),r.size(1,1),s.render(r.context,0,0),s.hide();r.clear(),r.size(1,1)}},{key:"getGridArray",value:function(i,e){var r,a,h,s=this._gridArray[e][i];if(null==s){s=this._gridArray[e][i]=[];var l=0,n=0,o=0,_=0,p=this._gridWidth,u=this._gridHeight;switch(this.orientation){case t.ORIENTATION_ISOMETRIC:var m,c,d,f;l=Math.floor(i*p),n=Math.floor(i*p+p),o=Math.floor(e*u),_=Math.floor(e*u+u);break;case t.ORIENTATION_STAGGERED:l=Math.floor(i*p/this._mapTileW),n=Math.floor((i*p+p)/this._mapTileW),o=Math.floor(e*u/(this._mapTileH/2)),_=Math.floor((e*u+u)/(this._mapTileH/2));break;case t.ORIENTATION_ORTHOGONAL:l=Math.floor(i*p/this._mapTileW),n=Math.floor((i*p+p)/this._mapTileW),o=Math.floor(e*u/this._mapTileH),_=Math.floor((e*u+u)/this._mapTileH);break;case t.ORIENTATION_HEXAGONAL:var g=2*this._mapTileH/3;l=Math.floor(i*p/this._mapTileW),n=Math.ceil((i*p+p)/this._mapTileW),o=Math.floor(e*u/g),_=Math.ceil((e*u+u)/g)}for(var y,v,T=null,A=0;A<this._layerArray.length;A++){var w;switch(T=this._layerArray[A],this.enableMergeLayer?(T.tarLayer!=v&&(y=null,v=T.tarLayer),y||(y=v.getDrawSprite(i,e),s.push(y)),h=y):(h=T.getDrawSprite(i,e),s.push(h)),this._showGridKey&&(w="#",w+=this._colorArray[Math.floor(Math.random()*this._colorArray.length)],w+=this._colorArray[Math.floor(Math.random()*this._colorArray.length)],w+=this._colorArray[Math.floor(Math.random()*this._colorArray.length)]),this.orientation){case t.ORIENTATION_ISOMETRIC:var R=this.tileHeight/2,x=this.tileWidth/2,O=this._width/2;d=Math.floor(o/R),f=Math.floor(_/R),m=this._mapW+Math.floor((l-O)/x),c=this._mapW+Math.floor((n-O)/x),this._mapW;var S=2*this._mapH;for(d<0&&(d=0),d>=S&&(d=S-1),f<0&&(_=0),f>=S&&(f=S-1),h.zOrder=this._totalGridNum*A+e*this._gridW+i,r=d;r<f;r++)for(a=0;a<=r;a++){var H=r-a,N=a,P=H-N+this._mapW;P>m&&P<=c&&T.drawTileTexture(h,H,N)&&h.drawImageNum++}break;case t.ORIENTATION_STAGGERED:for(h.zOrder=A*this._totalGridNum+e*this._gridW+i,r=o;r<_;r++)for(a=l;a<n;a++)T.drawTileTexture(h,a,r)&&h.drawImageNum++;break;case t.ORIENTATION_ORTHOGONAL:case t.ORIENTATION_HEXAGONAL:switch(this._renderOrder){case t.RENDERORDER_RIGHTDOWN:for(h.zOrder=A*this._totalGridNum+e*this._gridW+i,r=o;r<_;r++)for(a=l;a<n;a++)T.drawTileTexture(h,a,r)&&h.drawImageNum++;break;case t.RENDERORDER_RIGHTUP:for(h.zOrder=A*this._totalGridNum+(this._gridH-1-e)*this._gridW+i,r=_-1;r>=o;r--)for(a=l;a<n;a++)T.drawTileTexture(h,a,r)&&h.drawImageNum++;break;case t.RENDERORDER_LEFTDOWN:for(h.zOrder=A*this._totalGridNum+e*this._gridW+(this._gridW-1-i),r=o;r<_;r++)for(a=n-1;a>=l;a--)T.drawTileTexture(h,a,r)&&h.drawImageNum++;break;case t.RENDERORDER_LEFTUP:for(h.zOrder=A*this._totalGridNum+(this._gridH-1-e)*this._gridW+(this._gridW-1-i),r=_-1;r>=o;r--)for(a=n-1;a>=l;a--)T.drawTileTexture(h,a,r)&&h.drawImageNum++}}h.isHaveAnimation||(h.autoSize=!0,this.autoCache&&(h.cacheAs=this.autoCacheType),h.autoSize=!1),this.enableMergeLayer?y&&y.drawImageNum>0&&v&&v.addChild(y):(h.drawImageNum>0&&T.addChild(h),this._showGridKey&&h.graphics.drawRect(0,0,p,u,null,w))}this.enableMergeLayer&&this.showGridTextureCount&&y&&y.graphics.fillText(y.drawImageNum+"",20,20,null,"#ff0000","left")}return s}},{key:"hideGrid",value:function(t,i){if(!(t<0||t>=this._gridW||i<0||i>=this._gridH)){var e=this._gridArray[i][t];if(e)for(var r,a=0;a<e.length;a++)(r=e[a]).drawImageNum>0&&null!=r&&r.hide()}}},{key:"getLayerObject",value:function(t,i){for(var e=null,r=0;r<this._layerArray.length&&(e=this._layerArray[r]).layerName!=t;r++);return e?e.getObjectByName(i):null}},{key:"destroy",value:function(){this._orientation=t.ORIENTATION_ORTHOGONAL,this._jsonData=null;var i,e=0;for(this._gridArray=[],e=0;e<this._tileTexSetArr.length;e++)(i=this._tileTexSetArr[e])&&i.clearAll();for(this._tileTexSetArr=[],e=0;e<this._texArray.length;e++)this._texArray[e].destroy();for(this._texArray=[],this._width=0,this._height=0,this._mapW=0,this._mapH=0,this._mapTileW=0,this._mapTileH=0,this._rect.setTo(0,0,0,0),e=0;e<this._layerArray.length;e++)this._layerArray[e].clearAll();this._layerArray=[],this._renderLayerArray=[],this._mapSprite&&(this._mapSprite.destroy(),this._mapSprite=null),this._jsonLoader=null,this._loader=null;var r=this._animationDic;for(var a in r)delete r[a];for(a in this._properties=null,r=this._tileProperties)delete r[a];this._currTileSet=null,this._completeHandler=null,this._mapRect.clearAll(),this._mapLastRect.clearAll(),this._tileSetArray=[],this._gridWidth=450,this._gridHeight=450,this._gridW=0,this._gridH=0,this._x=0,this._y=0,this._index=0,this._enableLinear=!0,this._resPath=null,this._pathArray=null}},{key:"mapSprite",value:function(){return this._mapSprite}},{key:"getLayerByName",value:function(t){for(var i,e=0;e<this._layerArray.length;e++)if(t==(i=this._layerArray[e]).layerName)return i;return null}},{key:"getLayerByIndex",value:function(t){return t<this._layerArray.length?this._layerArray[t]:null}},{key:"scale",set:function(t){t<=0||(this._scale=t,this._viewPortWidth=this._rect.width/t,this._viewPortHeight=this._rect.height/t,this._mapSprite.scale(this._scale,this._scale),this.updateViewPort())},get:function(){return this._scale}},{key:"tileWidth",get:function(){return this._mapTileW}},{key:"tileHeight",get:function(){return this._mapTileH}},{key:"width",get:function(){return this._width}},{key:"height",get:function(){return this._height}},{key:"numColumnsTile",get:function(){return this._mapW}},{key:"numRowsTile",get:function(){return this._mapH}},{key:"viewPortX",get:function(){return-this._viewPortX}},{key:"viewPortY",get:function(){return-this._viewPortY}},{key:"viewPortWidth",get:function(){return this._viewPortWidth}},{key:"viewPortHeight",get:function(){return this._viewPortHeight}},{key:"x",get:function(){return this._x}},{key:"y",get:function(){return this._y}},{key:"gridWidth",get:function(){return this._gridWidth}},{key:"gridHeight",get:function(){return this._gridHeight}},{key:"numColumnsGrid",get:function(){return this._gridW}},{key:"numRowsGrid",get:function(){return this._gridH}},{key:"orientation",get:function(){return this._orientation}},{key:"renderOrder",get:function(){return this._renderOrder}}]),t}();u.ORIENTATION_ORTHOGONAL="orthogonal",u.ORIENTATION_ISOMETRIC="isometric",u.ORIENTATION_STAGGERED="staggered",u.ORIENTATION_HEXAGONAL="hexagonal",u.RENDERORDER_RIGHTDOWN="right-down",u.RENDERORDER_RIGHTUP="right-up",u.RENDERORDER_LEFTDOWN="left-down",u.RENDERORDER_LEFTUP="left-up";var m=function(){function t(){i(this,t)}return r(t,[{key:"clearAll",value:function(){this.left=this.top=this.right=this.bottom=0}}]),t}(),c=function t(){i(this,t),this.mAniIdArray=[],this.mDurationTimeArray=[],this.mTileTexSetArr=[]},d=function(){function t(){i(this,t),this.firstgid=0,this.image="",this.imageheight=0,this.imagewidth=0,this.margin=0,this.name=0,this.spacing=0,this.tileheight=0,this.tilewidth=0,this.titleoffsetX=0,this.titleoffsetY=0}return r(t,[{key:"init",value:function(t){this.firstgid=t.firstgid,this.image=t.image,this.imageheight=t.imageheight,this.imagewidth=t.imagewidth,this.margin=t.margin,this.name=t.name,this.properties=t.properties,this.spacing=t.spacing,this.tileheight=t.tileheight,this.tilewidth=t.tilewidth,this.tileproperties=t.tileproperties;var i=t.tileoffset;i&&(this.titleoffsetX=i.x,this.titleoffsetY=i.y)}}]),t}();n.TiledMap=u,t.GridSprite=l,t.IMap=n,t.MapLayer=_,t.TileAniSprite=o,t.TileTexSet=p,t.TiledMap=u}(window.Laya=window.Laya||{},Laya)}(); 
