(this.webpackJsonplottikarotti=this.webpackJsonplottikarotti||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a(17)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),c=a(7),s=a.n(c),i=(a(13),a(1)),o=a(2),l=a(4),d=a(3),m=a(5);a(14);function u(t){return console.log(t.cardsMixed),n.a.createElement("div",{className:"cards"},!t.cardsMixed&&n.a.createElement("h2",null,"Bitte die Karten mischen :-)"),t.cardsMixed&&n.a.createElement("h2",{className:"haveFun"},"Viel Spa\xdf! :-)"),t.cardsMixed&&n.a.createElement("img",{className:"topCard",src:"/"+t.cardName}),n.a.createElement("div",{className:"cardStack"},n.a.createElement("div",{className:"cardBack"}),n.a.createElement("div",{className:"cardBack"}),n.a.createElement("div",{className:"cardBack"})))}a(15);var h=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(l.a)(this,Object(d.a)(e).call(this))).state={cards:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4],mixed:!1,cardCounter:0},t}return Object(m.a)(e,t),Object(o.a)(e,[{key:"mixCards",value:function(t){console.log(t);for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),r=[t[a],t[e]];t[e]=r[0],t[a]=r[1]}this.setState({mixed:!0,cards:t,cardCounter:0,cardName:""}),console.log(this.state.cards)}},{key:"getCard",value:function(t){var e=this;console.log(t),console.log(this.state.cards[t]),this.state.mixed?t<this.state.cards.length?(4===this.state.cards[t]?this.setState({cardName:"carrot.jpg"},(function(){console.log(e.state.cardName)})):this.setState({cardName:"rabbit".concat(this.state.cards[t],".jpg")},(function(){console.log(e.state.cardName)})),t++,this.setState({cardCounter:t})):this.setState({mixed:!1}):alert("Bitte erst die Karten mischen")}},{key:"render",value:function(){var t=this,e=this.state,a=e.cards,r=e.mixed,c=e.cardCounter,s=e.cardName;return n.a.createElement("div",{className:"lottiKarottiWrapper"},n.a.createElement("div",{className:"header"},n.a.createElement("h1",null,"Lotti Karotti"),n.a.createElement("img",{className:"carrotImg",src:"/lottikarotti/carrotImg.png"}),n.a.createElement("img",{className:"rabbitImg",src:"/lottikarotti/rabbitImg.png"})),n.a.createElement(u,{cardsMixed:r,cardName:s,cardCounter:c}),n.a.createElement("div",{className:"buttonWrapper"},n.a.createElement("button",{className:"karottiButton",onClick:function(){return t.mixCards(a)}},"Mischen"),n.a.createElement("button",{className:"karottiButton",onClick:function(){return t.getCard(c)}},"Karte ziehen")))}}]),e}(n.a.Component),g=(a(16),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return n.a.createElement(h,null)}}]),e}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.78e7a28f.chunk.js.map