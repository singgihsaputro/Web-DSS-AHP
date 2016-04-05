<!DOCTYPE html>
<html>

	<body class="skin-blue">
		<!-- header logo: style can be found in header.less -->

		<div class="wrapper row-offcanvas row-offcanvas-left">
			<!-- Left side column. contains the logo and sidebar -->

			<!-- Right side column. Contains the navbar and content of the page -->
			<aside class="right-side">
				<!-- Content Header (Page header) -->
				<section class="content-header">
					<h1> Form Penilaian </h1>
					<ol class="breadcrumb">
						<li>
							<a href="#"><i class="fa fa-dashboard"></i> Home</a>
						</li>
						<li class="active">
							Penilaian
						</li>
					</ol>
				</section>

				<!-- Main content -->
				<section class="content">

					<!-- Small boxes (Stat box) -->
					<div class="row" style="margin-left: 10px">
						<div class="row col-md-11">
							<input type="hidden" name="id_juri" id="id_juri" value="<?php echo $this -> session -> getValue('id');?>">
							<select class="form-control" name="web" id="web">
								<option value="">Pilih Peserta Lomba Website</option>
							</select>
							<br>
							
							<div id="kriteria" class="row col-md-6" style="display: none">
								<table class="table table-striped">
									<thead>
										<tr>
											<th>Kriteria</th>
											<th>Nilai</th>
											
										</tr>
									</thead>
									<tbody id="tbody-nilai">
										
									</tbody>
									
								</table>

							</div>

						</div>
					</div><!-- /.row -->

				</section><!-- /.content -->
			</aside><!-- /.right-side -->
		</div><!-- ./wrapper -->

		<!-- add new calendar event modal -->

	</body>

</html>
<script src="<?php echo $this -> uri -> baseUri; ?>assets/jsModul/nilai.js" type="text/javascript"></script>
<script src="<?php echo $this -> uri -> baseUri; ?>assets/js/jquery.js" ></script>