var count = 0;
$(document).ready(function() {
	loadJuri();

});

function loadJuri() {
	var juri;
	var content;

	$.ajax({
		url : base_url + "master/Admin/load_juri",
		type : "POST",
		data : $.param({
			init : 'ok'
		}),
		beforeSend : function() {

		},
		complete : function() {

		},
		success : function(reply) {

			juri = JSON.parse(reply);
			count = 0;
			$('#tbody-juri').html("");
			//alert(kriteria.length);
			for (var i = 0; i < juri.length; i++) {
				content = '<tr id="row' + count + '"><td><div class="form-group"> <input class="form-control" type="text" name="nama-juri' + count + '" id="nama-juri' + count + '" value="' + juri[i].nama + '" style="width: 98%" required="required" placeholder="Nama Juri" disabled/></div></td><td>';
				content += '<div class="form-group"><input class="form-control" type="text" name="keterangan' + count + '" id="keterangan' + count + '" value="' + juri[i].keterangan + '" style="width: 98%" required="required" placeholder="Keterangan" disabled/></div></td><td>';
				content += '<div class="form-group"><input class="form-control" type="text" name="username' + count + '" id="username' + count + '" value="' + juri[i].username + '" style="width: 98%" required="required" placeholder="Username" disabled/></div></td><td>';
				content += '<div class="form-group"><input class="form-control" type="password" name="password' + count + '" id="password' + count + '" value="' + juri[i].password + '" style="width: 98%" required="required" placeholder="Password" disabled/></div></td><td>';
				content += '<div class="form-group"><div class="btn-group btn-group-md" role="group" style="width: 100%"><button type="button" class="btn btn-warning" id="edit-juri' + count + '" onclick="editJuri(' + count + ')" rel="tooltip" data-placement="top" data-original-title="Edit Data Juri"><i class="fa fa-edit"></i></button>&nbsp';
				content += '<button type="button" class="btn btn-success" id="simpan-juri' + count + '" onclick="simpanJuri(\'' + count + '\',\'' + juri[i].id_juri + '\')" rel="tooltip" data-placement="top" data-original-title="Simpan Perubahan" style="display: none"><i class="fa fa-check"></i></button>';
				content += '<button type="button" class="btn btn-danger"  id="hapus-juri' + count + '" onclick="hapusJuri(' + juri[i].id_juri + ')" rel="tooltip" data-placement="top" data-original-title="Hapus juri"><i class="fa fa-minus-square"></i></button></div></div></td></tr>';
				$('#tbody-juri').append(content);

				count += 1;
			}
			$('[rel="tooltip"]').tooltip();
			;

		},
		error : function() {
		}
	});
}


$("#tambah-juri").click(function() {
	$('html, body').animate({
		scrollTop : $(document).height()
	}, 'slow');
	$('#tambah-juri').hide();
	count += 1;
	var content;
		content = '<tr id="row' + count + '"><td><div class="form-group"> <input class="form-control" type="text" name="nama-juri' + count + '" id="nama-juri' + count + '" value="" style="width: 98%" required="required" placeholder="Nama Juri"/></div></td><td>';
		content += '<div class="form-group"><input class="form-control" type="text" name="keterangan' + count + '" id="keterangan' + count + '" value="" style="width: 98%" required="required" placeholder="Keterangan"/></div></td><td>';
		content += '<div class="form-group"><input class="form-control" type="text" name="username' + count + '" id="username' + count + '" value="" style="width: 98%" required="required" placeholder="Username"/></div></td><td>';
		content += '<div class="form-group"><input class="form-control" type="password" name="password' + count + '" id="password' + count + '" value="" style="width: 98%" required="required" placeholder="Password"/></div></td><td>';
		content += '<div class="form-group"><div class="btn-group btn-group-md" role="group" style="width: 100%"><button class="btn btn-success" id="btn-edit-tambah-juri" type="button" onclick="edit_tambah_juri()" rel="tooltip" data-placement="top" data-original-title="Simpan juri"><i class="fa fa-save" ></i></button>';
		content += '<button class="btn btn-danger" id="batal-tambah-juri" type="button" onclick="batal_tambah_juri()" rel="tooltip" data-placement="top" data-original-title="Batal"><i  class="fa fa-times" >  </i></button></div></div></td></tr>';
	$('#tbody-juri').append(content);
	$('#row' + count).hide();
	$('#row' + count).fadeIn();

	$('[rel="tooltip"]').tooltip();
});

function batal_tambah_juri() {
	$('#tambah-juri').fadeIn();
	$('html, body').animate({
		scrollTop : 0
	}, 'slow');
	$('#row' + count).remove();
	count -= 1;
};

function edit_tambah_juri(){
	var nama = $('#nama-juri' + count).val();
		var keterangan = $('#keterangan' + count).val();
		var username = $('#username' + count).val();
		var password = $('#password' + count).val();
		$.ajax({
			url : base_url + "master/Admin/edit_tambah_juri",
			type : "POST",
			data : $.param({
				init : 'ok',
				nama : nama,
				keterangan : keterangan,
				username : username,
				password : password
			}),
			beforeSend : function() {
				//alert('akan dikirim');
			},
			complete : function() {
			},
			success : function() {
				//alert('sukses');
				$('#tambah-juri').fadeIn();
				loadJuri();
			},
			error : function() {
				//alert('gagal');
			}
		});
}
function hapusJuri(id) {
	//alert(id);
	var confirmText = "Apakah anda yakin ingin menghapus akun juri ini?";
	if (confirm(confirmText)) {
		$.ajax({
			url : base_url + "master/Admin/delete_juri",
			type : "POST",
			data : "id_juri=" + id,
			beforeSend : function() {
			},
			complete : function() {
			},
			success : function(reply) {
				alert('Data Berhasil dihapus');
				count -= 1;
				loadJuri();
			},
			error : function() {
				
			}
		});
	}
}

function editJuri(id) {
	$('#nama-juri' + id).removeAttr('disabled');
	$('#keterangan' + id).removeAttr('disabled');
	$('#username' + id).removeAttr('disabled');
	$('#password' + id).removeAttr('disabled');
	$('#edit-juri' + id).hide();
	$('#edit-juri' + id).hide();
	$('#hapus-juri' + id).hide();
	$('#simpan-juri' + id).fadeIn('fast');
	$('#tambah-juri').fadeOut();
}

function simpanJuri(id, idjuri) {
	var cekvalid = true;
	var juri = $('#nama-juri' + id).val();
	var keterangan = $('#keterangan' + id).val();
	var username = $('#username' + id).val();
	var password = $('#password' + id).val();
	if (juri == "") {
		$('#nama-juri' + id).focus();
		cekvalid = false;
	} else if (keterangan == "") {
		$('#keterangan' + id).focus();
		cekvalid = false;
	} else if (username == "") {
		$('#username' + id).focus();
		cekvalid = false;
	} else if (password == "") {
		$('#password' + id).focus();
		cekvalid = false;
	}

	if (cekvalid) {

		$.ajax({
			url : base_url + "master/Admin/edit_juri",
			type : "POST",
			data : $.param({
				init : 'ok',
				id_juri : idjuri,
				nama : juri,
				keterangan : keterangan,
				username : username,
				password : password
			}),
			beforeSend : function() {
				//alert('akan dikirim');
			},
			complete : function() {
			},
			success : function() {

			alert('Data Perubahan Berhasil Disimpan');
				$('#tambah-juri').fadeIn();
				loadJuri();
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