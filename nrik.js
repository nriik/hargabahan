function loadd() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    for (var i = 0; i < myObj.length; i++) {
    	for (var key in myObj[i]) {
    		var a = document.createElement("BUTTON");
  			a.setAttribute("class", "tablinks");
  			a.setAttribute("onclick", "openNav('"+key+"');");
  			var aa = document.createTextNode(key);
  			a.appendChild(aa);
  			document.getElementsByClassName("tab")[0].appendChild(a);
  			
  			var b = document.createElement("DIV");
  			b.setAttribute("class", "sidenav");
  			b.setAttribute("id", key);
  			document.body.appendChild(b);

  			var x = document.createElement("BUTTON");
  			x.setAttribute("onclick", "closeNav('"+key+"');");
  			x.setAttribute("id", "clsbtn");
  			var xx = document.createTextNode('Close');
  			x.appendChild(xx);
  			document.getElementById(key).appendChild(x);
    		for (var j = 0; j < myObj[i][key].length; j++) {
    			for (var key2 in myObj[i][key][j]) {
    				var c = document.createElement("BUTTON");
  					c.setAttribute("class", "button-flat-outline");
  					c.setAttribute("onclick", "closeNav('"+key+"'); showj('"+key2+"');");
  					var cc = document.createTextNode(key2);
  					c.appendChild(cc);
  					document.getElementById(key).appendChild(c);
    				var ccc = document.createElement("hr");
    				document.getElementById(key).appendChild(ccc);
  					var e = document.createElement("DIV");
  					e.setAttribute("name", key2);
  					e.setAttribute("class", "main");
  					document.body.appendChild(e);
    				for (var k = 0; k < myObj[i][key][j][key2].length; k++) {
    					for (var key3 in myObj[i][key][j][key2][k]) {
    						var d = document.createElement("BUTTON");
  							d.setAttribute("class", "button-flat-outline");
  							d.setAttribute("onclick", "openNav2('"+key3+"');");
                d.setAttribute("style", "margin:2px 2px; float:left; color:white; background: url('img/"+ key3 +".png') no-repeat; background-size: cover; background-position: center; width:100px; height:50px;")
  							var dd = document.createElement("SPAN");
                dd.setAttribute("class", "button-text");
                var ddd = document.createTextNode(key3);
  							dd.appendChild(ddd);
                d.appendChild(dd);
  							document.getElementsByName(key2)[0].appendChild(d);
  							//var ccdc = document.createElement("hr");
    						//document.getElementsByName(key2)[0].appendChild(ccdc);
  							var f = document.createElement("DIV");
    						f.setAttribute("id", key3);
    						f.setAttribute("class", "sidenav2");
    						document.body.appendChild(f);
    						var jdl = document.createElement("h2");
    						var tjdl = document.createTextNode(key3);
    						jdl.appendChild(tjdl);
    						document.getElementById(key3).appendChild(jdl);
    						var hhh = document.createElement("br");
    						document.getElementById(key3).appendChild(hhh);
    						var g = document.createElement("BUTTON");
  							g.setAttribute("onclick", "hidej(); closeNav2('"+key3+"');");
  							g.setAttribute("id", "clsbtn");
  							var gg = document.createTextNode('Close');
  							g.appendChild(gg);
  							document.getElementById(key3).appendChild(g);
  							for (var l = 0; l < myObj[i][key][j][key2][k][key3].length; l++) {
    							for (var key4 in myObj[i][key][j][key2][k][key3][l]) {
    								if (myObj[i][key][j][key2][k][key3][l].hasOwnProperty(key4)) {
    									var lb = document.createElement("LABEL")
          								var te = document.createTextNode(key4 + " x " + myObj[i][key][j][key2][k][key3][l][key4]);
          								lb.setAttribute("for", key4);
          								lb.appendChild(te);
          								document.getElementById(key3).appendChild(lb);
          								var hh = document.createElement("br");
    									document.getElementById(key3).appendChild(hh);
    									var f = document.createElement("INPUT");
    									f.setAttribute("class", key3);
    									f.setAttribute("type", "number");
    									f.setAttribute("id", myObj[i][key][j][key2][k][key3][l][key4]);
    									f.setAttribute("name", key4);
    									f.setAttribute("oninput", "hitung('"+ key3 +"');");
    									f.setAttribute("onclick", "this.select();");
    									document.getElementById(key3).appendChild(f);
    									var h = document.createElement("hr");
    									document.getElementById(key3).appendChild(h);
    								}
    							}
    						}
                var ddd1 = document.createElement("hr");
                document.getElementById(key3).appendChild(ddd1);
                var ddd2 = document.createElement("hr");
                document.getElementById(key3).appendChild(ddd2);
                var ddd3 = document.createElement("hr");
                document.getElementById(key3).appendChild(ddd3);
    						var a = document.createElement("LABEL")
          			var ta = document.createTextNode("Total Harga Bahan");
          			a.appendChild(ta);
          			document.getElementById(key3).appendChild(a);
          			var hh = document.createElement("br");
    						document.getElementById(key3).appendChild(hh);
    						var aa = document.createElement("INPUT");
    						aa.setAttribute("type", "number");
    						aa.setAttribute("id", "total"+key3);
    						document.getElementById(key3).appendChild(aa);
    						var hhh = document.createElement("hr");
    						document.getElementById(key3).appendChild(hhh);
    						document.getElementById("total"+key3).disabled = true;

    						var b = document.createElement("LABEL")
          			var tb = document.createTextNode("Estimasi Harga Jual");
          			b.appendChild(tb);
          			document.getElementById(key3).appendChild(b);
          			var bb = document.createElement("br");
    						document.getElementById(key3).appendChild(bb);
    						var bbb = document.createElement("INPUT");
    						bbb.setAttribute("type", "number");
    						bbb.setAttribute("id", "jual"+key3);
    						bbb.setAttribute("oninput", "profit('"+ key3 +"');");
    						bbb.setAttribute("onclick", "this.select();");
    						document.getElementById(key3).appendChild(bbb);
    						var bbbb = document.createElement("hr");
    						document.getElementById(key3).appendChild(bbbb);
    						
    						var c = document.createElement("LABEL")
          			var tc = document.createTextNode("Keuntungan Tax 15%");
          			c.appendChild(tc);
          			document.getElementById(key3).appendChild(c);
          			var cc = document.createElement("br");
    						document.getElementById(key3).appendChild(cc);
    						var ccc = document.createElement("INPUT");
    						ccc.setAttribute("type", "number");
    						ccc.setAttribute("id", "profitnontax"+key3);
    						document.getElementById(key3).appendChild(ccc);
    						var cccc = document.createElement("hr");
    						document.getElementById(key3).appendChild(cccc);
    						document.getElementById("profitnontax"+key3).disabled = true;

    						var d = document.createElement("LABEL")
          			var td = document.createTextNode("Keuntungan Tax 10%");
          			d.appendChild(td);
          			document.getElementById(key3).appendChild(d);
          			var dd = document.createElement("br");
    						document.getElementById(key3).appendChild(dd);
    						var ddd = document.createElement("INPUT");
    						ddd.setAttribute("type", "number");
    						ddd.setAttribute("id", "profittax"+key3);
    						document.getElementById(key3).appendChild(ddd);
    						var dd2 = document.createElement("br");
    						document.getElementById(key3).appendChild(dd2);
    						var dddd = document.createElement("hr");
    						document.getElementById(key3).appendChild(dddd);
    						document.getElementById("profittax"+key3).disabled = true;
    					}
    				}
    			}
    		}	
    	}
    }
    
    }
  }
  xmlhttp.open("GET", "equip.json", true);
  xmlhttp.send();
 
}

function openNav(jenis) {
  document.getElementById(jenis).style.width = "100%";
}

function closeNav(jenis) {
  document.getElementById(jenis).style.width = "0";
}

function showj(jns) {
	var i, tabcontent, anu;
  	tabcontent = document.getElementsByClassName("main");
  	for (i = 0; i < tabcontent.length; i++) {
    	tabcontent[i].style.display = "none";
    }
    anu =  document.getElementsByName(jns)[0];
  	anu.style.display = "block";
}

function hidej() {
  var i, tabcontent, anu;
    tabcontent = document.getElementsByClassName("main");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
}

function openNav2(jnis) {
  document.getElementById(jnis).style.width = "100%";
}

function closeNav2(jnis) {
  document.getElementById(jnis).style.width = "0";
}

function hitung(equi) {
	var tot = 0;
	var inputFormDiv = document.getElementById(equi);
	var jml  = inputFormDiv.getElementsByClassName(equi);
	for(var i=0;i<jml.length;i++){
        if(parseInt(jml[i].value))
            tot += parseInt(jml[i].value) * parseInt(jml[i].id)
    }
	document.getElementById("total"+equi).value = tot;

	var total = document.getElementById("total"+equi);
	var jual = document.getElementById("jual"+equi);
	
	document.getElementById("jual"+equi).value = Math.round(tot * 18/100) + tot;
	
	var ini = parseInt(jual.value) * 15/100;
    var ini2 = parseInt(jual.value) * 10/100;
    var itu = parseInt(jual.value) - ini;
    var itu2 = parseInt(jual.value) - ini2;
    document.getElementById("profitnontax"+equi).value = Math.round(itu - tot);
    document.getElementById("profittax"+equi).value = Math.round(itu2 - tot);
}

function profit(equi) {
	var jual = document.getElementById("jual"+equi);

	var tot = parseInt(document.getElementById("total"+equi).value);
	var ini = parseInt(jual.value) * 15/100;
    var ini2 = parseInt(jual.value) * 10/100;
    var itu = parseInt(jual.value) - ini;
    var itu2 = parseInt(jual.value) - ini2;
    document.getElementById("profitnontax"+equi).value = Math.round(itu - tot);
    document.getElementById("profittax"+equi).value = Math.round(itu2 - tot);
}
