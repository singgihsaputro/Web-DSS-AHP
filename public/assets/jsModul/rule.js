var count = 0;
$(document).ready(function() {
	loadRule();

});

function loadRule() {
	var rule;
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
			count = 0;
			$('#tbody-rule').html("");
			//alert(kriteria.length);
			for (var i = 0; i < rule.length; i++) {
				content = '<tr id="row' + count + '"><td><div class="form-group"> <input class="form-control" type="text" name="batas-awal' + count + '" id="batas-awal' + count + '" value="' + rule[i].batas_awal + '" style="width: 98%" required="required" placeholder="Batas Awal" disabled/></div></td><td>';
				content += '<div class="form-group"><input class="form-control" type="text" name="batas-akhir' + count + '" id="batas-akhir' + count + '" value="' + rule[i].batas_akhir + '" style="width: 98%" required="required" placeholder="Batas Akhir" disabled/></div></td><td>';
				content += '<div class="form-group"><input class="form-control" type="text" name="bobot' + count + '" id="bobot' + count + '" value="' + rule[i].bobot + '" style="width: 98%" required="required" placeholder="Bobot" disabled/></div></td><td>';
				content += '<div class="form-group"><div class="btn-group btn-group-md" role="group" style="width: 100%"><button type="button" class="btn btn-warning" id="edit-rule' + count + '" onclick="editRule(' + count + ')" rel="tooltip" data-placement="top" data-original-title="Edit Rule"><i class="fa fa-edit"></i></button>&nbsp';
				content += '<button type="button" class="btn btn-success" id="simpan-rule' + count + '" onclick="simpanRule(\'' + count + '\',\'' + rule[i].id_rule + '\')" rel="tooltip" data-placement="top" data-original-title="Simpan Perubahan" style="display: none"><i class="fa fa-check"></i></button>';
				content += '<button type="button" class="btn btn-danger"  id="hapus-rule' + count + '" onclick="hapusRule(' + rule[i].id_rule + ')" rel="tooltip" data-placement="top" data-original-title="Hapus Rule"><i class="fa fa-minus-square"></i></button></div></div></td></tr>';
				$('#tbody-rule').append(content);

				count += 1;
			}
			$('[rel="tooltip"]').tooltip();
			;

		},
		error : function() {
		}
	});
}


$("#tambah-rule").click(function() {
	$('html, body').animate({
		scrollTop : $(document).height()
	}, 'slow');
	$('#tambah-rule').hide();
	count += 1;
	var content;
		content = '<tr id="row' + count + '"><td><div class="form-group"> <input class="form-control" type="text" name="batas-awal' + count + '" id="batas-awal' + count + '" value="" style="width: 98%" required="required" placeholder="Batas Awal" /></div></td><td>';
		content += '<div class="form-group"><input class="form-control" type="text" name="batas-akhir' + count + '" id="batas-akhir' + count + '" value="" style="width: 98%" required="required" placeholder="Batas Akhir"/></div></td><td>';
		content += '<div class="form-group"><input class="form-control" type="text" name="bobot' + count + '" id="bobot' + count + '" value="" style="width: 98%" required="required" placeholder="Bobot"/></div></td><td>';
		content += '<div class="form-group"><div class="btn-group btn-group-md" role="group" style="width: 100%"><button class="btn btn-success" id="btn-edit-tambah-rule" type="button" onclick="edit_tambah_rule()" rel="tooltip" data-placement="top" data-original-title="Simpan Rule"><i class="fa fa-save" ></i></button>';
		content += '<button class="btn btn-danger" id="batal-tambah-rule" type="button" onclick="batal_tambah_rule()" rel="tooltip" data-placement="top" data-original-title="Batal"><i  class="fa fa-times" >  </i></button></div></div></td></tr>';
	$('#tbody-rule').append(content);
	$('#row' + count).hide();
	$('#row' + count).fadeIn();

	$('[rel="tooltip"]').tooltip();
});

function batal_tambah_rule() {
	$('html, body').animate({
		scrollTop : 0
	}, 'slow');
	$('#tambah-rule').fadeIn();

	$('#row' + count).remove();
	count -= 1;
};

function edit_tambah_rule(){
		var batas_awal = $('#batas-awal' + count).val();
		var batas_akhir = $('#batas-akhir' + count).val();
		var bobot = $('#bobot' + count).val();
		$.ajax({
			url : base_url + "master/Admin/edit_tambah_rule",
			type : "POST",
			data : $.param({
				init : 'ok',
				batas_awal : batas_awal,
				batas_akhir : batas_akhir,
				bobot : bobot
			}),
			beforeSend : function() {
				//alert('akan dikirim');
			},
			complete : function() {
			},
			success : function() {
				//alert('sukses');
				$('#tambah-rule').fadeIn();
				loadRule();
				
			},
			error : function() {
				alert('gagal');
			}
		});
}
function hapusRule(id) {
	//alert(id);
	var confirmText = "Apakah anda yakin ingin menghapus Rule ini?";
	if (confirm(confirmText)) {
		$.ajax({
			url : base_url + "master/Admin/delete_rule",
			type : "POST",
			data : "id_rule=" + id,
			beforeSend : function() {
			},
			complete : function() {
			},
			success : function(reply) {
				alert('Data Berhasil dihapus');
				count -= 1;
				loadRule();
			},
			error : function() {
				
			}
		});
	}
}

function editRule(id) {
	$('#batas-awal' + id).removeAttr('disabled');
	$('#batas-akhir' + id).removeAttr('disabled');
	$('#bobot' + id).removeAttr('disabled');
	$('#edit-rule' + id).hide();
	$('#hapus-rule' + id).hide();
	$('#simpan-rule' + id).fadeIn('fast');
	$('#tambah-rule').fadeOut();
}

function simpanRule(id, idRule) {
	var cekvalid = true;
	var batas_awal = $('#batas-awal' + id).val();
	var batas_akhir = $('#batas-akhir' + id).val();
	var bobot = $('#bobot' + id).val();
	if (batas_awal == "") {
		$('#batas-awal' + id).focus();
		cekvalid = false;
	} else if (batas_akhir == "") {
		$('#batas-akhir' + id).focus();
		cekvalid = false;
	}else if (bobot == "") {
		$('#bobot' + id).focus();
		cekvalid = false;
	}

	if (cekvalid) {

		$.ajax({
			url : base_url + "master/Admin/edit_rule",
			type : "POST",
			data : $.param({
				init : 'ok',
				id_rule : idRule,
				batas_awal1 : batas_awal,
				batas_akhir1 : batas_akhir,
				bobot1 : bobot
			}),
			beforeSend : function() {
				//alert('akan dikirim');
			},
			complete : function() {
			},
			success : function() {

			alert('Data Perubahan Berhasil Disimpan');
				$('#tambah-rule').fadeIn();
				loadRule();
			},
			error : function() {
				alert('Gagal menyimpan data');
			}
		});
		//alert('sukses');
	} else {
		alert('Mohon lengkapi dahulu form inputan');
	}
}