var count1 = 0;
var count2 = 0;
var kriteria = "";
var alternatif = "";
var rule = "";
var nilai_alternatif = "";
var web;
var nilai = new Array(alternatif.length);
var jml;
var nilai_akhir = 0;
var a = new Array(kriteria.length + 1);
var c = new Array(kriteria.length);
var d = new Array(kriteria.length + 1);
var e = new Array(kriteria.length + 1);
var f = new Array(kriteria.length);
var g = new Array(kriteria.length);
var h = new Array(kriteria.length);
var r = 0;
var lamda = 0;
var ci = 0;
var cr = 0;
var rc = [0.00, 0.00, 0.58, 0.9, 1.12, 1.24, 1.32, 1.41, 1.45, 1.49];
var a2 = new Array(alternatif.length + 1);
var c2 = new Array(alternatif.length);
var d2 = new Array(alternatif.length + 1);
var e2 = new Array(alternatif.length);
var f2 = new Array(alternatif.length);
var g2 = new Array(alternatif.length);
var h2 = new Array(alternatif.length);
var hasil = "";
$(document).ready(function() {
	loadKriteria();
	loadAlternatif();

});

function loadKriteria() {

	var content;

	$.ajax({
		url : base_url + "master/Admin/load_kriteria",
		type : "POST",
		data : $.param({
			init : 'ok'
		}),
		beforeSend : function() {

		},
		complete : function() {

		},
		success : function(reply) {

			kriteria = JSON.parse(reply);
			count1 = 0;
			$('#tbody-tbl-kriteria').html("");
			//alert(kriteria.length);
			for (var i = 0; i < kriteria.length; i++) {
				content = '<tr><td class="text-center">' + (i + 1) + '</td>';
				content += '<td>' + kriteria[i].nama_kriteria + '</td>';
				content += '</tr>';
				$('#tbody-tbl-kriteria').append(content);
				count1 += 1;
			}
			$('[rel="tooltip"]').tooltip();
			$('#tbl-kriteria').dataTable({
				"bSort" : false,
				'iDisplayLength' : 5

			});
			$('#tbl-kriteria_length').html("");
			loadRule();

		},
		error : function() {
		}
	});
}

function loadAlternatif() {

	var content;

	$.ajax({
		url : base_url + "master/Admin/load_alternatif2",
		type : "POST",
		data : $.param({
			init : 'ok'
		}),
		beforeSend : function() {

		},
		complete : function() {

		},
		success : function(reply) {

			alternatif = JSON.parse(reply);
			count2 = 0;
			$('#tbody-tbl-alternatif').html("");
			//alert(alternatif.length);
			web = new Array(alternatif.length);
			for (var z = 0; z < alternatif.length; z++) {
				web[z] = new Array(4);
			}
			for (var y = 0; y < alternatif.length; y++) {
				for (var x = 0; x < 4; x++) {
					if (x == 0) {
						//kode
						web[y][x] = 'A' + (y + 1);
					} else if (x == 1) {
						web[y][x] = alternatif[y].id_alternatif;
					} else if (x == 2) {
						web[y][x] = alternatif[y].nama_alternatif;
					} else {
						//nilai akhir
						web[y][x] = 0;
					}
				}
			}
			//alert(web.length);
			for (var i = 0; i < alternatif.length; i++) {
				content = '<tr><td class="text-center">' + web[i][0] + '</td>';
				content += '<td>' + web[i][2] + '</td>';
				content += '</tr>';
				$('#tbody-tbl-alternatif').append(content);
				count2 += 1;
			}
			$('[rel="tooltip"]').tooltip();
			$('#tbl-alternatif').dataTable({
				"bSort" : false,
				'iDisplayLength' : 5
			});
			$('#tbl-alternatif_length').html("");

		},
		error : function() {
		}
	});
}

function loadRule() {

	var content;

	$.ajax({
		url : base_url + "master/Admin/load_rule",
		type : "POST",
		data : $.param({
			init : 'ok'
		}),
		beforeSend : function() {

		},
		complete : function() {

		},
		success : function(reply) {

			rule = JSON.parse(reply);

			loadMatrikBerpasangan();

		},
		error : function() {
		}
	});
}

function loadMatrikBerpasangan() {

	var content;

	var jumlah;
	for (var z = 0; z < kriteria.length + 1; z++) {
		a[z] = new Array(kriteria.length);
	}
	for (var y = 0; y < kriteria.length; y++) {
		a[kriteria.length][y] = 0;
	}

	
	content = '<table id="tbl-matrik-kriteria" class="table table-bordered">';
	content += '<tr><td></td>';
	for (var i = 0; i < kriteria.length; i++) {
		content += '<td>' + kriteria[i].nama_kriteria + '</td>';
	}
	content += '</tr>';
	for (var j = 0; j < kriteria.length; j++) {
		content += '<tr><td>' + kriteria[j].nama_kriteria + '</td>';
		for (var k = 0; k < kriteria.length; k++) {
			content += '<td>';
			interval = kriteria[j].bobot - kriteria[k].bobot;
			for (var l = 0; l < rule.length; l++) {
				if (interval >= 0) {
					if (interval >= rule[l].batas_awal && interval <= rule[l].batas_akhir) {
						content += '' + parseFloat(rule[l].bobot).toFixed(2);
						a[j][k] = rule[l].bobot;
						a[kriteria.length][k] += parseFloat(rule[l].bobot);
					}
				} else {
					if (interval <= rule[l].batas_awal && interval >= rule[l].batas_akhir) {
						content += '' + parseFloat(rule[l].bobot).toFixed(2);
						a[j][k] = rule[l].bobot;
						a[kriteria.length][k] += parseFloat(rule[l].bobot);
					}
				}
			}
			content += '</td>';
		}
		content += '</tr>';
	}
	content += '<tr><td><b>Jumlah</b></td>';
	for (var m = 0; m < kriteria.length; m++) {

		content += '<td><b>' + parseFloat(a[kriteria.length][m]).toFixed(2) + '</b></td>';
	}
	content += '</tr>';
	content += '</table>';
	$('#langkah2').append(content);
	hitung_normalisasi_matrik();

}

function hitung_normalisasi_matrik() {

	for (var z = 0; z < kriteria.length; z++) {
		c[z] = new Array(kriteria.length);
	}
	for (var y = 0; y < kriteria.length + 1; y++) {
		d[y] = 0;
	}
	for (var p = 0; p < kriteria.length + 1; p++) {
		e[p] = 0;
	}
	content = '<table id="tbl-normalisasi-matrik" class="table table-bordered">';
	content += '<tr><td colspan="' + (kriteria.length + 1) + '" ><center><b>Bobot Prioritas Tiap Kriteria</b></center></td></tr><tr><td></td>';
	for (var x = 0; x < kriteria.length; x++) {
			content += '<td>' + kriteria[x].nama_kriteria + '</td>';
	}
	content += '</tr>';
	for (var i = 0; i < kriteria.length; i++) {
		content += '<tr><td>' + kriteria[i].nama_kriteria + '</td>';
		for (var j = 0; j < kriteria.length; j++) {
			
				c[i][j] = parseFloat(a[i][j] / a[kriteria.length][j]);
				content += '<td>' + parseFloat(c[i][j]).toFixed(3) + '</td>';
				//alert(c[i][j]);
				d[i] += parseFloat(c[i][j]);
		}
		d[kriteria.length] += d[i];
		content += '</tr>';
	}
		content += '</table>';
	$('#langkah3').append(content);

	
	hitung_prioritas_bobot();
}

function hitung_prioritas_bobot() {

	content = '<table id="tbl-bobot-prioritas-kriteria" class="table table-bordered">';
	content += '<tr><td colspan="' + (kriteria.length + 3) + '" ><center><b>Bobot Prioritas Tiap Kriteria</b></center></td></tr><tr><td></td>';
	for (var x = 0; x < kriteria.length + 2; x++) {
		if (x < kriteria.length)
			content += '<td>' + kriteria[x].nama_kriteria + '</td>';
		else if (x == kriteria.length)
			content += '<td><b>Jumlah</b></td>';
		else
			content += '<td><b>Prioritas</b></td>';
	}
	content += '</tr>';
	for (var i = 0; i < kriteria.length; i++) {
		content += '<tr><td>' + kriteria[i].nama_kriteria + '</td>';
		for (var j = 0; j < kriteria.length + 2; j++) {
			if (j < kriteria.length) {
				
				content += '<td>' + parseFloat(c[i][j]).toFixed(3) + '</td>';
				//alert(c[i][j]);
				
			} else if (j == kriteria.length) {
				content += '<td><b>' + parseFloat(d[i]).toFixed(3) + '</b></td>';
			} else {
				content += '<td id="e' + i + '"></td>';
			}

		}
		content += '</tr>';
	}
	content += '<tr><td colspan="' + (kriteria.length + 2) + '" class="center"><b>Jumlah</b></td>';
	content += '<td id="jml-prioritas-bobot-kriteria"></td></tr></table>';
	$('#langkah4').append(content);

	for (var k = 0; k < kriteria.length; k++) {
		e[k] = parseFloat(d[k] / d[kriteria.length]);
		$('#e' + k).append('<b>' + parseFloat(e[k]).toFixed(3) + '</b>');
		e[kriteria.length] += parseFloat(e[k]);

	}
	$('#jml-prioritas-bobot-kriteria').append('<b>' + parseFloat(e[kriteria.length]).toFixed(0) + '</b>');

	matrik_penjumlahan_tiap_baris();
}

function matrik_penjumlahan_tiap_baris() {
	for (var z = 0; z < kriteria.length; z++) {
		f[z] = new Array(kriteria.length);
	}
	for (var y = 0; y < kriteria.length; y++) {
		g[y] = 0;
	}
	content = '<br><table id="tbl-matrik-penjumlahan" class="table table-bordered">';
	content += '<tr><td colspan="' + (kriteria.length + 2) + '" ><center><b>Matriks Penjumlahan Tiap Baris</b></center></td></tr><tr><td></td>';
	for (var x = 0; x < kriteria.length + 1; x++) {
		if (x < kriteria.length)
			content += '<td>' + kriteria[x].nama_kriteria + '</td>';
		else
			content += '<td><b>Jumlah</b></td>';
	}
	content += '</tr>';
	for (var i = 0; i < kriteria.length; i++) {
		content += '<tr><td>' + kriteria[i].nama_kriteria + '</td>';
		for (var j = 0; j < kriteria.length + 1; j++) {
			if (j < kriteria.length) {
				f[i][j] = parseFloat(e[j] * a[i][j]);
				content += '<td>' + parseFloat(f[i][j]).toFixed(3) + '</td>';
				//alert(c[i][j]);
				g[i] += parseFloat(f[i][j]);
			} else {
				content += '<td><b>' + g[i].toFixed(3) + '</b></td>';
			}

		}
		content += '</tr>';
	}
	content += '</table>';
	$('#langkah5').append(content);

	hitung_eigen_value();
}

function hitung_eigen_value() {
	for (var z = 0; z < kriteria.length; z++) {
		h[z] = 0;
	}
	content = '<br><table id="tbl-matrik-cr" class="table table-bordered">';
	content += '<tr><td colspan="4" ><center><b>Matriks Rasio Konsistensi</b></center></td></tr>';
	content += '<tr><td></td><td>Jumlah</td><td>Prioritas</td><td><b>Hasil</b></td></tr>';
	for (var i = 0; i < kriteria.length; i++) {
		content += '<tr><td>' + kriteria[i].nama_kriteria + '</td>';
		content += '<td>' + parseFloat(g[i]).toFixed(3) + '</td><td>' + parseFloat(e[i]).toFixed(3) + '</td>';
		h[i] = (parseFloat(g[i]) + parseFloat(e[i]));
		content += '<td><b>' + parseFloat(h[i]).toFixed(3) + '</b></td></tr>';
		r += parseFloat(h[i]);
	}
	content += '<tr><td colspan=3><b>Jumlah</b></td><td><b>' + parseFloat(r).toFixed(3) + '</b></td></tr>';
	content += '</table>';
	lamda = parseFloat(r / kriteria.length);
	content += '<br><h4>&lambda;max = ' + parseFloat(lamda).toFixed(3) + '</h4>';
	
	$('#langkah6').append(content);
	hitung_indeks_konsistensi();
}
	
function hitung_indeks_konsistensi() {
	
	ci = parseFloat(lamda - kriteria.length) / (kriteria.length - 1);
	content = '<h4><i><b>CI</b></i> = ' + parseFloat(ci).toFixed(3); + '</h4>';
	
	$('#langkah7').append(content);
	hitung_rasio_konsistensi();
}

function hitung_rasio_konsistensi() {
	
	cr = parseFloat(ci / rc[kriteria.length - 1]);
	content = '<h4><i><b>CR</b></i> = ' + parseFloat(cr).toFixed(3) + '</h4>';
	if (cr < 0.1) {
		content += '<h5>Karena CR = ' + parseFloat(cr).toFixed(3) + ' < 0,1 maka evaluasi matrik Kriteria = <b>Konsisten</b></h5>';
	} else {
		content += '<h5>Karena CR = ' + parseFloat(cr).toFixed(3) + ' >= 0,1 maka evaluasi matrik Kriteria = <b>Tidak konsisten</b></h5>';
	}
	$('#langkah8').append(content);
	langkah9();
}

function langkah9() {
	var content;

	$.ajax({
		url : base_url + "master/Admin/load_nilai_alternatif",
		type : "POST",
		data : $.param({
			init : 'ok'
		}),
		beforeSend : function() {

		},
		complete : function() {

		},
		success : function(reply) {

			nilai_alternatif = JSON.parse(reply);
			for (var z = 0; z < alternatif.length; z++) {
				nilai[z] = new Array(kriteria.length + 1);
			}
			var k = 0;
			//alert(web.length);
			for (var i = 0; i < alternatif.length; i++) {
				for (var j = -1; j < kriteria.length; j++) {
					if (j == -1) {
						nilai[i][j] = web[i][0];
						//alert(nilai[i][j]);
					} else if (j >= 0) {
						nilai[i][j] = nilai_alternatif[k].nilai;
						k++;
						//alert(nilai[i][j]);
					}
				}
			}
			for (var q = 0; q < web.length; q++) {
				e2[q] = new Array(kriteria.length);
			}

			for (var l = 0; l < kriteria.length; l++) {
				hitung_matrik_berpasangan2(l);
			}
			perkalian_matrik_prioritas_kriteria();

		},
		error : function() {
		}
	});

}

function hitung_matrik_berpasangan2(id) {
	var content;
	var jumlah;
	for (var z = 0; z < alternatif.length + 1; z++) {
		a2[z] = new Array(alternatif.length);
	}
	for (var y = 0; y < alternatif.length; y++) {
		a2[alternatif.length][y] = 0;
	}

	content = '<h4>' + (id + 1) + '. Kriteria ' + kriteria[id].nama_kriteria + '</h4>';
	content += '<table id="tbl-matrik-kriteria' + id + '" class="table table-bordered">';
	content += '<thead><tr><th colspan="' + alternatif.length + 1 + '" >Kaitannya dengan Kriteria ' + kriteria[id].nama_kriteria + '</th></tr>';
	content += '<tr><td></td>';
	for (var i = 0; i < web.length; i++) {
		content += '<td>' + web[i][0] + '</td>';
	}
	content += '</tr></thead><tbody>';
	
	for (var j = 0; j < web.length; j++) {
		content += '<tr><td>' + web[j][0] + '</td>';
		for (var k = 0; k < web.length; k++) {
			content += '<td>';
			interval = nilai[j][id] - nilai[k][id];
			//content += nilai[j][id]+'-'+nilai[k][id]+'='+interval+'=';
			for (var l = 0; l < rule.length; l++) {

				if (interval >= 0) {
					if (interval >= rule[l].batas_awal && interval <= rule[l].batas_akhir) {
						content += '' + parseFloat(rule[l].bobot).toFixed(3);
						a2[j][k] = rule[l].bobot;
						a2[web.length][k] += parseFloat(rule[l].bobot);
					}
				} else {
					if (interval <= rule[l].batas_awal && interval >= rule[l].batas_akhir) {
						content += '' + parseFloat(rule[l].bobot).toFixed(3);
						a2[j][k] = rule[l].bobot;
						a2[web.length][k] += parseFloat(rule[l].bobot);
					}
				}
			}
			content += '</td>';
		}
		content += '</tr></tbody>';
	}
	content += '<tfoot><tr><td><b>Jumlah</b></td>';
	for (var m = 0; m < web.length; m++) {

		content += '<td><b>' + parseFloat(a2[web.length][m]).toFixed(3) + '</b></td>';
	}
	content += '</tr></tfoot>';
	content += '</table><br>';
	$('#langkah9').append(content);
	$('#tbl-matrik-kriteria' + id + '').dataTable({
		"bSort" : false,
		"scrollY" : 200,
		"scrollX" : true,
		"scrollCollapse" : true,
		"bPaginate" : false,
		"bFilter" : false,
		"bSort" : false,
		"bInfo" : false,

	});
	hitung_prioritas_bobot2(id);
}

function hitung_prioritas_bobot2(id) {
	jml = 0;
	for (var z = 0; z < web.length; z++) {
		c2[z] = new Array(web.length);
	}
	for (var y = 0; y < web.length + 1; y++) {
		d2[y] = 0;
	}
	for (var p = 0; p < web.length; p++) {
		e2[p][id] = 0;
	}
	content = '<table id="tbl-bobot-prioritas-kriteria' + id + '" class="table table-bordered">';
	content += '<thead><tr><td colspan="' + (web.length + 3) + '" ><b>Matrix Nilai Bobot Kriteria ' + kriteria[id].nama_kriteria + '</b></td></tr><tr><td></td>';
	for (var x = 0; x < web.length + 2; x++) {
		if (x < web.length)
			content += '<td>' + web[x][0] + '</td>';
		else if (x == web.length)
			content += '<td><b>Jumlah</b></td>';
		else
			content += '<td><b>Prioritas</b></td>';
	}
	content += '</tr></thead><tbody>';
	for (var i = 0; i < web.length; i++) {
		content += '<tr><td>' + web[i][0] + '</td>';
		for (var j = 0; j < web.length + 2; j++) {
			if (j < web.length) {
				c2[i][j] = parseFloat(a2[i][j] / a2[web.length][j]);
				content += '<td>' + parseFloat(c2[i][j]).toFixed(3) + '</td>';
				//alert(c[i][j]);
				d2[i] += parseFloat(c2[i][j]);
			} else if (j == web.length) {
				content += '<td><b>' + parseFloat(d2[i]).toFixed(3) + '</b></td>';
			} else {
				content += '<td id="e' + id + '' + i + '"></td>';
			}

		}
		d2[web.length] += d2[i];
		content += '</tr>';
	}
	content += '</tbody><tfoot><tr><td colspan="' + (web.length + 2) + '" class="center"><b>Jumlah</b></td>';
	content += '<td id="jml-prioritas-bobot-kriteria' + id + '"></td></tr></tfoot></table><br>';
	$('#langkah9').append(content);

	for (var k = 0; k < web.length; k++) {
		e2[k][id] = parseFloat(d2[k] / d2[web.length]);
		$('#e' + id + '' + k).append('<b>' + parseFloat(e2[k][id]).toFixed(3) + '</b>');
		jml += parseFloat(e2[k][id]);

	}
	$('#jml-prioritas-bobot-kriteria' + id + '').append('<b>' + parseFloat(jml).toFixed(0) + '</b>');
	$('#tbl-bobot-prioritas-kriteria' + id + '').dataTable({
		"bSort" : false,
		"scrollY" : 200,
		"scrollX" : true,
		"scrollCollapse" : true,
		"bPaginate" : false,
		"bFilter" : false,
		"bSort" : false,
		"bInfo" : false,

	});
	matrik_penjumlahan_tiap_baris2(id);
}

function matrik_penjumlahan_tiap_baris2(id) {
	for (var z = 0; z < web.length; z++) {
		f2[z] = new Array(kriteria.length);
	}
	for (var y = 0; y < web.length; y++) {
		g2[y] = 0;
	}

	content = '<br><table id="tbl-matrik-penjumlahan' + id + '" class="table table-bordered">';
	content += '<thead><tr><td colspan="' + (web.length + 2) + '" ><b>Matriks Penjumlahan Tiap Baris Kriteria ' + kriteria[id].nama_kriteria + '</b></td></tr><tr><td></td>';
	for (var x = 0; x < web.length + 1; x++) {
		if (x < web.length)
			content += '<td>' + web[x][0] + '</td>';
		else
			content += '<td><b>Jumlah</b></td>';
	}
	content += '</tr></thead><tbody>';
	for (var i = 0; i < web.length; i++) {
		content += '<tr><td>' + web[i][0] + '</td>';
		for (var j = 0; j < web.length + 1; j++) {
			if (j < web.length) {
				f2[i][j] = parseFloat(e2[j][id] * a2[i][j]);
				content += '<td>' + parseFloat(f2[i][j]).toFixed(3) + '</td>';
				//alert(c[i][j]);
				g2[i] += parseFloat(f2[i][j]);
			} else {
				content += '<td><b>' + parseFloat(g2[i]).toFixed(3) + '</b></td>';
			}

		}
		content += '</tr></body>';
	}
	content += '</table><br>';
	$('#langkah9').append(content);
	$('#tbl-matrik-penjumlahan' + id + '').dataTable({
		"bSort" : false,
		"scrollY" : 200,
		"scrollX" : true,
		"scrollCollapse" : true,
		"bPaginate" : false,
		"bFilter" : false,
		"bSort" : false,
		"bInfo" : false,

	});
	hitung_rasio_konsistensi2(id);
}

function hitung_rasio_konsistensi2(id) {
	for (var z = 0; z < web.length; z++) {
		h2[z] = 0;
	}
	r = 0;
	lamda = 0;
	ci = 0;
	cr = 0;
	content = '<br><table id="tbl-matrik-cr' + id + '" class="table table-bordered">';
	content += '<thead><tr><td colspan="4" ><center><b>Matriks Rasio Konsistensi Kriteria ' + kriteria[id].nama_kriteria + '</b></center></td></tr>';
	content += '<tr><td>Alternatif</td><td>Jumlah</td><td>Prioritas</td><td><b>Hasil</b></td></tr></thead><tbody>';
	for (var i = 0; i < web.length; i++) {
		content += '<tr><td>' + web[i][0] + '</td>';
		content += '<td>' + parseFloat(g2[i]).toFixed(3) + '</td><td>' + parseFloat(e2[i][id]).toFixed(3) + '</td>';
		h2[i] = (parseFloat(g2[i]) + parseFloat(e2[i][id]));
		content += '<td><b>' + parseFloat(h2[i]).toFixed(3) + '</b></td></tr>';
		r += parseFloat(h2[i]);
	}
	content += '</tbody><tfoot><tr><td colspan=3><b>Jumlah</b></td><td><b>' + parseFloat(r).toFixed(3) + '</b></td></tr></tfoot>';
	content += '</table>';
	lamda = parseFloat(r / web.length);
	content += '<br><h4>&lambda;max = ' + parseFloat(lamda).toFixed(3) + '</h4>';
	ci = parseFloat(lamda - web.length) / (web.length - 1);
	content += '<h4><i><b>CI</b></i> = ' + parseFloat(ci).toFixed(3) + '</h4>';
	cr = parseFloat(ci / rc[kriteria.length - 1]);
	content += '<h4><i><b>CR</b></i> = ' + parseFloat(r).toFixed(3) + '</h4>';
	if (cr < 0.1) {
		content += '<h5>Karena CR = ' + parseFloat(cr).toFixed(3) + ' < 0,1 maka evaluasi matrik Kriteria = <b>Konsisten</b></h5><br>';
	} else {
		content += '<h5>Karena CR = ' + parseFloat(cr).toFixed(3) + ' >= 0,1 maka evaluasi matrik Kriteria = <b>Tidak konsisten</b></h5><br>';
	}
	$('#langkah9').append(content);
	$('#tbl-matrik-cr' + id + '').dataTable({
		"bSort" : false,
		"scrollY" : 200,
		"scrollX" : true,
		"scrollCollapse" : true,
		"bPaginate" : false,
		"bFilter" : false,
		"bSort" : false,
		"bInfo" : false,

	});
}

function perkalian_matrik_prioritas_kriteria() {
	content = '<br><table id="tbl-matrik-kriteria-fix" class="table table-bordered">';
	content += '<tr><td colspan="2" ><center><b>Matriks Nilai Kriteria</b></center></td></tr>';
	content += '<tr><td ><center><b>Kriteria</b></center></td><td ><center><b>Prioritas</b></center></td></tr>';

	for (var i = 0; i < kriteria.length; i++) {
		content += '<tr><td>' + kriteria[i].nama_kriteria + '</td>';
		content += '<td>' + parseFloat(e[i]).toFixed(3) + '';
		content += '</tr>';
	}

	content += '</table><br>';
	$('#langkah10').append(content);
	perkalian_matrik_prioritas_global();
}

function perkalian_matrik_prioritas_global() {
	content = '<br><table id="tbl-matrik-global-fix" class="table table-bordered">';
	content += '<thead><tr><td rowspan="2" ><center><b>Alternatif</b></center></td><td colspan="' + kriteria.length + '" ><center><b>Matriks Prioritas Global</b></center></td></tr>';
	for (var x = 0; x < kriteria.length; x++) {

		content += '<td>' + kriteria[x].nama_kriteria + '</td>';

	}
	content += '</tr></thead><tbody>';
	for (var i = 0; i < web.length; i++) {
		content += '<tr><td>' + web[i][0] + '</td>';
		for (var j = 0; j < kriteria.length; j++) {
			content += '<td>' + parseFloat(e2[i][j]).toFixed(3) + '</td>';
		}
		content += '</tr></tbody>';
	}
	content += '</table><br>';
	$('#langkah10').append(content);
	$('#tbl-matrik-global-fix').dataTable({
		"bSort" : false,
		"scrollY" : 200,
		"scrollX" : false,
		"scrollCollapse" : true,
		"bPaginate" : false,
		"bFilter" : false,
		"bSort" : false,
		"bInfo" : false,

	});
	perkalian_matriks();
}

function multiplyMatrices(m1, m2) {
	var result = [];
	for (var i = 0; i < m1.length; i++) {
		result[i] = [];
		for (var j = 0; j < m2[0].length; j++) {
			var sum = 0;
			for (var k = 0; k < m1[0].length; k++) {
				sum += m1[i][k] * m2[k][j];
			}
			result[i][j] = sum;
		}
	}
	return result;
}

function perkalian_matriks() {
	var temp = 0;
	var temp2 = 0;
	for (var i = 0; i < web.length; i++) {
		temp2 = 0;
		for (var j = 0; j < kriteria.length; j++) {
			temp = e2[i][j] * e[j];
			temp2 += temp;
		}
		web[i][3] = temp2;
	}
	hasil_matrik();
}

function hasil_matrik() {
	content = '<br><h4>Matriks Nilai Kriteria * Matriks Prioritas Global</h4>';
	content += '<table id="tbl-matrik-kriteria-fix1" class="table table-bordered">';
	content += '<thead><tr><td colspan="3" ><center><b>Hasil Perkalian Matrik</b></center></td></tr>';
	content += '<tr><td ><center><b>Inisialisasi</b></center></td><td ><center><b>Alternatif</b></center></td><td ><center><b>Hasil</b></center></td></tr></thead>';
	content += '<tbody>';
	for (var i = 0; i < web.length; i++) {
		content += '<tr><td>' + web[i][0] + '</td>';
		content += '<td>' + web[i][2] + '</td>';
		content += '<td><center>' + parseFloat(web[i][3]).toFixed(5) + '</center></td>';
		content += '</tr>';
	}
	content += '</table></tbody><br>';
	$('#langkah10').append(content);
	$('#tbl-matrik-kriteria-fix1').dataTable({
		"bSort" : false,
		"scrollY" : 200,
		"scrollX" : false,	
		"bPaginate" : false,
		"bFilter" : false,
		"bInfo" : false,
	});
	simpan_hasil();
	//perankingan();
}

function simpan_hasil() {
	$.ajax({
		url : base_url + "master/Admin/simpan_hasil",
		type : "POST",
		data : $.param({
			init : 'ok',
			web : web
		}),
		beforeSend : function() {
			//alert('akan dikirim');
		},
		complete : function() {
		},
		success : function(reply) {

			//alert('sukses');
			//load_hasil();
			perankingan();
		},
		error : function() {
			//alert('gagal');
		}
	});
}

function perankingan() {
	var content;
	var inisialisasi;
	$.ajax({
		url : base_url + "master/Admin/load_hasil",
		type : "POST",
		data : $.param({
			init : 'ok',
			web : web
		}),
		beforeSend : function() {
			//alert('akan dikirim');
		},
		complete : function() {
		},
		success : function(reply) {
			hasil = JSON.parse(reply);
			content = '<br><table id="tbl-matrik-kriteria-fix2" class="table table-bordered">';
			content += '<thead><tr><td colspan="4" ><center><b>Hasil Perkalian Matriks Setelah Diurutkan</b></center></td></tr>';
			content += '<tr><td ><center><b>Nomor</b></center></td><td ><center><b>Inisialisasi</b></center></td><td ><center><b>Alternatif</b></center></td><td ><center><b>Hasil</b></center></td></tr></thead>';
			content += '<tbody>';
			for (var i = 0; i < hasil.length; i++) {
				//alert(web[i][1] + '=' + hasil[i].id_alternatif);
				for (var j = 0; j < web.length; j++) {
					if (web[j][1] == hasil[i].id_alternatif) {
						inisialisasi = web[j][0];
					}
				}
				content += '<tr><td><center>' + (i + 1) + ' </center></td>';
				content += '<td>' + inisialisasi + '</td>';
				content += '<td>' + hasil[i].nama_alternatif + '</td>';
				content += '<td><center><b>' + parseFloat(hasil[i].NA).toFixed(5) + '</b></center></td>';
				content += '</tr>';
			}
			content += '</tbody></table><br>';
			$('#langkah10').append(content);
			$('#tbl-matrik-kriteria-fix2').dataTable({
				"bSort" : false
			});
		},
		error : function() {
			//alert('gagal');
		}
	});

}

