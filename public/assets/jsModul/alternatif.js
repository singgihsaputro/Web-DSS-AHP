var count = 0;
$(document).ready(function() {
	loadAlternatif();

});

function loadAlternatif() {
	var alternatif;
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

			alternatif = JSON.parse(reply);
			count = 0;
			$('#tbody-alternatif').html("");
			//alert(kriteria.length);
			for (var i = 0; i < alternatif.length; i++) {
				content = '<tr id="row' + count + '"><td><div class="form-group"> <input class="form-control" type="text" name="nama-alternatif' + count + '" id="nama-alternatif' + count + '" value="' + alternatif[i].nama_alternatif + '" style="width: 98%" required="required" placeholder="Peserta" disabled/></div></td><td>';
				content += '<div class="form-group"><input class="form-control" type="text" name="website' + count + '" id="website' + count + '" value="' + alternatif[i].website + '" style="width: 98%" required="required" placeholder="Alamat Website" disabled/></div></td><td>';
				content += '<div class="form-group"><div class="btn-group btn-group-md" role="group" style="width: 100%"><button type="button" class="btn btn-warning" id="edit-alternatif' + count + '" onclick="editAlternatif(' + count + ')" rel="tooltip" data-placement="top" data-original-title="Edit Alternatif"><i class="fa fa-edit"></i></button>&nbsp';
				content += '<button type="button" class="btn btn-success" id="simpan-alternatif' + count + '" onclick="simpanAlternatif(\'' + count + '\',\'' + alternatif[i].id_alternatif + '\')" rel="tooltip" data-placement="top" data-original-title="Simpan Perubahan" style="display: none"><i class="fa fa-check"></i></button>';
				content += '<button type="button" class="btn btn-danger"  id="hapus-alternatif' + count + '" onclick="hapusAlternatif(' + alternatif[i].id_alternatif + ')" rel="tooltip" data-placement="top" data-original-title="Hapus alternatif"><i class="fa fa-minus-square"></i></button></div></div></td></tr>';
				$('#tbody-alternatif').append(content);

				count += 1;
			}
			$('[rel="tooltip"]').tooltip();
			;

		},
		error : function() {
		}
	});
}


$("#tambah-alternatif").click(function() {

	$('html, body').animate({
		scrollTop : $(document).height()
	}, 'slow');

	$('#tambah-alternatif').hide();
	count += 1;
	var content;
	content = '<tr id="row' + count + '"><td><div class="form-group"> <input class="form-control" type="text" name="nama-alternatif' + count + '" id="nama-alternatif' + count + '" value="" style="width: 98%" required="required" placeholder="Peserta" /></div></td><td>';
	content += '<div class="form-group"><input class="form-control" type="text" name="website' + count + '" id="website' + count + '" value="" style="width: 98%" required="required" placeholder="Alamat Website"/></div></td><td>';
	content += '<div class="form-group"><div class="btn-group btn-group-md" role="group" style="width: 100%"><button class="btn btn-success" id="btn-edit-tambah-alternatif" type="button" onclick="edit_tambah_alternatif()" rel="tooltip" data-placement="top" data-original-title="Simpan Alternatif"><i class="fa fa-save" ></i></button>';
	content += '<button class="btn btn-danger" id="batal-tambah-alternatif" type="button" onclick="batal_tambah_alternatif()" rel="tooltip" data-placement="top" data-original-title="Batal"><i  class="fa fa-times" >  </i></button></div></div></td></tr>';
	$('#tbody-alternatif').append(content);
	$('#row' + count).hide();
	$('#row' + count).fadeIn();

	$('[rel="tooltip"]').tooltip();
});

function batal_tambah_alternatif() {
	$('#tambah-alternatif').fadeIn();
	$('html, body').animate({
		scrollTop : 0
	}, 'slow');
	$('#row' + count).remove();
	count -= 1;
};

function edit_tambah_alternatif() {
	var nama_alternatif = $('#nama-alternatif' + count).val();
	var website = $('#website' + count).val();
	$.ajax({
		url : base_url + "master/Admin/edit_tambah_alternatif",
		type : "POST",
		data : $.param({
			init : 'ok',
			nama_alternatif : nama_alternatif,
			website : website
		}),
		beforeSend : function() {
			//alert('akan dikirim');
		},
		complete : function() {
		},
		success : function() {
			//alert('sukses');
			$('#tambah-alternatif').fadeIn();
			loadAlternatif();
		},
		error : function() {
			//alert('gagal');
		}
	});
}

function hapusAlternatif(id) {
	//alert(id);
	var confirmText = "Apakah anda yakin ingin menghapus alternatif ini?";
	if (confirm(confirmText)) {
		$.ajax({
			url : base_url + "master/Admin/delete_alternatif",
			type : "POST",
			data : "id_alternatif=" + id,
			beforeSend : function() {
			},
			complete : function() {
			},
			success : function(reply) {
				alert('Data Berhasil dihapus');
				count -= 1;
				loadAlternatif();
			},
			error : function() {

			}
		});
	}
}

function editAlternatif(id) {
	$('#nama-alternatif' + id).removeAttr('disabled');
	$('#website' + id).removeAttr('disabled');
	$('#edit-alternatif' + id).hide();
	$('#hapus-alternatif' + id).hide();
	$('#simpan-alternatif' + id).fadeIn('fast');
	$('#tambah-alternatif').fadeOut();
}

function simpanAlternatif(id, idAlternatif) {
	var cekvalid = true;
	var alternatif = $('#nama-alternatif' + id).val();
	var website = $('#website' + id).val();
	if (alternatif == "") {
		$('#nama-alternatif' + id).focus();
		cekvalid = false;
	} else if (website == "") {
		$('#website' + id).focus();
		cekvalid = false;
	}

	if (cekvalid) {

		$.ajax({
			url : base_url + "master/Admin/edit_alternatif",
			type : "POST",
			data : $.param({
				init : 'ok',
				id_alternatif : idAlternatif,
				nama_alternatif : alternatif,
				website : website
			}),
			beforeSend : function() {
				//alert('akan dikirim');
			},
			complete : function() {
			},
			success : function() {

				alert('Data Perubahan Berhasil Disimpan');
				$('#tambah-alternatif').fadeIn();
				loadAlternatif();
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