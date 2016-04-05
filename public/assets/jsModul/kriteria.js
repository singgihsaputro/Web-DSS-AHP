var count = 0;
$(document).ready(function() {
	loadKriteria();

});

function loadKriteria() {
	var kriteria;
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
			//alert(kontak[0].kategori_id);
			count = 0;
			$('#tbody-kriteria').html("");
			//alert(kriteria.length);
			for (var i = 0; i < kriteria.length; i++) {
				content = '<tr id="row' + count + '"><td><div class="form-group"> <input class="form-control" type="text" name="nama-kriteria' + count + '" id="nama-kriteria' + count + '" value="' + kriteria[i].nama_kriteria + '" style="width: 98%" required="required" placeholder="Nama Kriteria" disabled/></div></td><td>';
				content += '<div class="form-group"><input class="form-control" type="text" name="bobot' + count + '" id="bobot' + count + '" value="' + kriteria[i].bobot + '" style="width: 98%" required="required" placeholder="Bobot Kriteria" disabled/></div></td><td>';
				content += '<div class="form-group"><div class="btn-group btn-group-md" role="group" style="width: 100%"><button type="button" class="btn btn-warning" id="edit-kriteria' + count + '" onclick="editKriteria(' + count + ')" rel="tooltip" data-placement="top" data-original-title="Edit Kriteria"><i class="fa fa-edit"></i></button>&nbsp';
				content += '<button type="button" class="btn btn-success" id="simpan-kriteria' + count + '" onclick="simpanKriteria(\'' + count + '\',\'' + kriteria[i].id_kriteria + '\')" rel="tooltip" data-placement="top" data-original-title="Simpan Perubahan" style="display: none"><i class="fa fa-check"></i></button>';
				content += '<button type="button" class="btn btn-danger"  id="hapus-kriteria' + count + '" onclick="hapusKriteria(' + kriteria[i].id_kriteria + ')" rel="tooltip" data-placement="top" data-original-title="Hapus Kriteria"><i class="fa fa-minus-square"></i></button></div></div></td></tr>';
				$('#tbody-kriteria').append(content);

				count += 1;
			}
			$('[rel="tooltip"]').tooltip();
			;

		},
		error : function() {
		}
	});
}


$("#tambah-kriteria").click(function() {
	$('html, body').animate({
		scrollTop : $(document).height()
	}, 'slow');
	$('#tambah-kriteria').hide();
	count += 1;
	var content;
	content = '<tr id="row' + count + '"><td><div class="form-group"> <input class="form-control" type="text" name="nama-kriteria' + count + '" id="nama-kriteria' + count + '" value="" style="width: 98%" required="required" placeholder="Nama Kriteria"/></div></td><td>';
	content += '<div class="form-group"><input class="form-control" type="text" name="bobot' + count + '" id="bobot' + count + '" value="" style="width: 98%" required="required" placeholder="Bobot Kriteria"/></div></td><td>';
	content += '<div class="form-group"><div class="btn-group btn-group-md" role="group" style="width: 100%"><button class="btn btn-success" id="btn-edit-tambah-kriteria" type="button" onclick="edit_tambah_kriteria()" rel="tooltip" data-placement="top" data-original-title="Simpan Kriteria"><i class="fa fa-save" ></i></button>';
	content += '<button class="btn btn-danger" id="batal-tambah-kriteria" type="button" onclick="batal_tambah_kriteria()" rel="tooltip" data-placement="top" data-original-title="Batal"><i  class="fa fa-times" >  </i></button></div></div></td></tr>';
	$('#tbody-kriteria').append(content);
	$('#row' + count).hide();
	$('#row' + count).fadeIn();

	$('[rel="tooltip"]').tooltip();
});

function batal_tambah_kriteria() {
	$('#tambah-kriteria').fadeIn();
	$('html, body').animate({
		scrollTop : 0
	}, 'slow');
	$('#row' + count).remove();
	count -= 1;
};

function edit_tambah_kriteria() {
	var nama_kriteria = $('#nama-kriteria' + count).val();
	var bobot = $('#bobot' + count).val();
	$.ajax({
		url : base_url + "master/Admin/edit_tambah_kriteria",
		type : "POST",
		data : $.param({
			init : 'ok',
			nama_kriteria : nama_kriteria,
			bobot : bobot
		}),
		beforeSend : function() {
			//alert('akan dikirim');
		},
		complete : function() {
		},
		success : function() {
			//alert('sukses');
			$('#tambah-kriteria').fadeIn();
			loadKriteria();

		},
		error : function() {
			//alert('gagal');
		}
	});
}

function hapusKriteria(id) {
	//alert(id);
	var confirmText = "Apakah anda yakin ingin menghapus kriteria ini?";
	if (confirm(confirmText)) {
		$.ajax({
			url : base_url + "master/Admin/delete_kriteria",
			type : "POST",
			data : "id_kriteria=" + id,
			beforeSend : function() {
			},
			complete : function() {
			},
			success : function(reply) {
				alert('Data Berhasil dihapus');
				count -= 1;
				loadKriteria();
			},
			error : function() {

			}
		});
	}
}

function editKriteria(id) {
	$('#nama-kriteria' + id).removeAttr('disabled');
	$('#bobot' + id).removeAttr('disabled');
	$('#edit-kriteria' + id).hide();
	$('#hapus-kriteria' + id).hide();
	$('#simpan-kriteria' + id).fadeIn('fast');
	$('#tambah-kriteria').fadeOut();
}

function simpanKriteria(id, idKriteria) {
	var cekvalid = true;
	var kriteria = $('#nama-kriteria' + id).val();
	var bobot = $('#bobot' + id).val();
	if (kriteria == "") {
		$('#nama-kriteria' + id).focus();
		cekvalid = false;
	} else if (bobot == "") {
		$('#bobot' + id).focus();
		cekvalid = false;
	}

	if (cekvalid) {

		$.ajax({
			url : base_url + "master/Admin/edit_kriteria",
			type : "POST",
			data : $.param({
				init : 'ok',
				id_kriteria : idKriteria,
				nama_kriteria : kriteria,
				bobot : bobot
			}),
			beforeSend : function() {
				//alert('akan dikirim');
			},
			complete : function() {
			},
			success : function() {

				alert('Data Perubahan Berhasil Disimpan');
				$('#tambah-kriteria').fadeIn();
				loadKriteria();
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