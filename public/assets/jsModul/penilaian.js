var count = 0;
$(document).ready(function() {
	loadNilai();
});

function loadNilai() {
	var nilai;
	var content;

	$.ajax({
		url : base_url + "master/Admin/get_nilai",
		type : "POST",
		data : $.param({
			init : 'ok'
		}),
		beforeSend : function() {

		},
		complete : function() {

		},
		success : function(reply) {

			nilai = JSON.parse(reply);
			count = 0;
			$('#tbody-tbl-nilai').html("");
			//alert(kriteria.length);
			for (var i = 0; i < nilai.length; i++) {
				content = '<tr><td class="text-center">' + (i + 1) + '</td>';
				content += '<td>' + nilai[i].nama_alternatif + '</td>';
				content += '<td><a href="' + nilai[i].website + '" target="_blank">'+ nilai[i].website +'</a></td>';
				content += '<td class="text-center">' + nilai[i].NA + '</td>';
				content += '</tr>';
				$('#tbody-tbl-nilai').append(content);
				count += 1;
			}
			$('[rel="tooltip"]').tooltip();
			$('#tbl-nilai').DataTable();
		

		},
		error : function() {
		}
	});
}
