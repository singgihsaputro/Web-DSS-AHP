var count = 0;
var kriteria = "";
$(document).ready(function() {
	loadWeb();
	loadKriteria();

});

function loadWeb() {
	var web;
	var content;

	$.ajax({
		url : base_url + "master/Admin/load_alternatif",
		type : "POST",
		data : $.param({
			init : 'ok'
		}),
		beforeSend : function() {

		},
		complete : function() {

		},
		success : function(reply) {

			web = JSON.parse(reply);
			//alert(kontak[0].kategori_id);

			//alert(kriteria.length);
			for (var i = 0; i < web.length; i++) {
				content = '<option value="' + web[i].id_alternatif + '">' + web[i].nama_alternatif + ' - ' + web[i].website + '</option>';
				$('#web').append(content);

			}

		},
		error : function() {
		}
	});
}

function loadKriteria() {

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
			kriteria = "";
			kriteria = JSON.parse(reply);

		},
		error : function() {
		}
	});
}

function load_nilai() {
	var content;
	var id_alternatif = $('#web').val();
	var id_juri = $('#id_juri').val();
	var grade;
	$.ajax({
		url : base_url + "master/Admin/load_nilai_juri",
		type : "POST",
		data : $.param({
			init : 'ok',
			id_alternatif : id_alternatif,
			id_juri : id_juri
		}),
		beforeSend : function() {
			$('#kriteria').hide();
		},
		complete : function() {
		},
		success : function(reply) {
			//alert('sukses');
			grade = JSON.parse(reply);

			if ($('#web').val() == "") {
				$('#kriteria').fadeOut().html("");
			} else {
				if (grade != false) {
					count = 0;
					
					content = "";
					for (var i = 0; i < kriteria.length; i++) {

						content += '<tr><td><div class="form-inline" id="row' + count + '" style="margin-bottom: 5px"><div class="form-group col-xs-10">' + kriteria[i].nama_kriteria + '</div>: </td><td><div class="form-group"><input class="form-control" name="nilai-kriteria' + count + '" id="nilai-kriteria' + count + '" type="number" min="0" max="100" required="required" placeholder="form isian nilai" value="' + grade[i].nilai + '" style="width: 98%" disabled > </div>';
						content += '<input type="hidden" name="id-nilai' + count + '" id="id-nilai' + count + '" value="' + grade[i].id_nilai + '">';
						content += '</div></td></tr>';
						count += 1;
					}
					content += '<tr><td></td><td><div class="form-inline" id="row-btn" style="margin-bottom: 5px"><div class="form-group col-xs-2"><label></label></div>&nbsp&nbsp<button class="btn btn-sm btn-warning" id="btn-edit-nilai" type="button" onclick=edit_nilai()><i class="fa fa-edit" ></i> Edit&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</button><button class="btn btn-sm btn-success" id="btn-simpan-nilai" type="button" style="display: none" onclick=edit_simpan_nilai()  ><i class="fa fa-save" ></i> Simpan&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</button></div></td></tr>';
					$('#tbody-nilai').html(content);
				} else {
					count = 0;
					
					content = "";
					for (var i = 0; i < kriteria.length; i++) {

						content += '<tr><td><div class="form-inline" id="row' + count + '" style="margin-bottom: 5px"><div class="form-group col-xs-10">' + kriteria[i].nama_kriteria + '</div>: </td><td><div class="form-group"><input class="form-control" name="nilai-kriteria' + count + '" id="nilai-kriteria' + count + '" type="number" min="0" max="100" required="required" placeholder="form isian nilai" style="width: 98%" > </div>';
					content += '</div></td></tr>';
						count += 1;
					}
					content += '<tr><td></td><td><div class="form-inline" id="row-btn" style="margin-bottom: 5px"><div class="form-group col-xs-2"><label></label></div>&nbsp&nbsp<button class="btn btn-sm btn-success" id="btn-simpan-nilai" type="button" onclick=simpan_nilai()><i class="fa fa-save" ></i> Simpan&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</button></div></td></tr>';
					$('#tbody-nilai').html(content);
				}
			}
			$('#kriteria').fadeIn();

		},
		error : function() {
			//alert('gagal');
		}
	});

}


$("#web").select2().on('change', function(e) {
	load_nilai();
});

function simpan_nilai() {
	var nilai = new Array();
	var id_kriteria = new Array();
	var cekvalid = true;

	for (var i = 0; i <= count; i++) {
		if ($('#nilai-kriteria' + i).val() == "") {
			$('#nilai-kriteria' + i).focus();
			cekvalid = false;
		}
	}

	if (cekvalid) {
		for (var i = 0; i < count; i++) {
			nilai[i] = $('#nilai-kriteria' + i).val();

		}
		for (var j = 0; j < count; j++) {
			id_kriteria[j] = kriteria[j].id_kriteria;
		}

		var id_alternatif = $('#web').val();
		var id_juri = $('#id_juri').val();

		$.ajax({
			url : base_url + "master/Admin/simpan_nilai",
			type : "POST",
			data : $.param({
				init : 'ok',
				nilai : nilai,
				id_kriteria : id_kriteria,
				id_alternatif : id_alternatif,
				id_juri : id_juri
			}),
			beforeSend : function() {
				//alert('akan dikirim');
			},
			complete : function() {
			},
			success : function() {
				//alert('sukses');

				load_nilai();
			},
			error : function() {
				//alert('gagal');
			}
		});
	} else {
		alert('Mohon Lengkapi Data Nilai Terlebih Dahulu');
	}
};

function edit_nilai() {
	for (var i = 0; i <= count; i++) {

		$('#nilai-kriteria' + i).removeAttr('disabled');
		$('#btn-edit-nilai').hide();
		$('#btn-simpan-nilai').fadeIn();
	}
};

function edit_simpan_nilai() {
	var nilai = new Array();
	var id_nilai = new Array();
	var cekvalid = true;

	for (var i = 0; i <= count; i++) {
		if ($('#nilai-kriteria' + i).val() == "") {
			$('#nilai-kriteria' + i).focus();
			cekvalid = false;
		}
	}

	if (cekvalid) {
		for (var i = 0; i < count; i++) {
			nilai[i] = $('#nilai-kriteria' + i).val();

		}

		for (var k = 0; k < count; k++) {
			id_nilai[k] = $('#id-nilai' + k).val();

		}

		$.ajax({
			url : base_url + "master/Admin/edit_simpan_nilai",
			type : "POST",
			data : $.param({
				init : 'ok',
				nilai : nilai,
				id_nilai : id_nilai
			}),
			beforeSend : function() {
				//alert('akan dikirim');
			},
			complete : function() {
			},
			success : function() {
				//alert('sukses');

				load_nilai();
			},
			error : function() {
				//alert('gagal');
			}
		});
	} else {
		alert('Mohon Lengkapi Data Nilai Terlebih Dahulu');
	}
};

