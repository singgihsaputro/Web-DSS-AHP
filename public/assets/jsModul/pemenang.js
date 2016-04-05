var count = 0;
$(document).ready(function() {
	loadNilai();
});

function loadNilai() {
	var nilai;
	var content;

	$.ajax({
		url : base_url + "master/Admin/get_nilai_limit",
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
				if(i<3)
				content = '<tr><td class="text-left"><b>Juara ' + (i + 1) + '</b></td>';
				else
				content = '<tr><td class="text-left"><b>Juara Harapan ' + (i - 2) + '</b></td>';
				content += '<td align="left">' + nilai[i].nama_alternatif + '</td>';
				content += '<td align="left"><p><a style="color: #FFFFFF" href="' + nilai[i].website + '" target="_blank">' + nilai[i].website + '</a></p></td>';

				content += '</tr>';
				$('#tbody-tbl-nilai').append(content);
				count += 1;
			}
			$('#tbl-nilai').dataTable({
				"bSort" : false,
				"bPaginate" : false,
				"bFilter" : false,
				"bSort" : false,
				"bInfo" : false

			});

		},
		error : function() {
		}
	});
}
