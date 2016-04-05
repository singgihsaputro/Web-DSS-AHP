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
					<h1> Hasil Penilaian </h1>
					<ol class="breadcrumb">
						<li>
							<a href="#"><i class="fa fa-dashboard"></i> Home</a>
						</li>
						<li class="active">
							Nilai
						</li>
					</ol>
				</section>

				<!-- Main content -->
				<section class="content">

					<!-- Small boxes (Stat box) -->
					<div class="row" style="margin-left: 10px">
						<div class="row col-md-12">

							<!-- <button class="btn-sm btn-primary" id="tambah-juri" >
							<span class="fa fa-plus-circle "></span>
							Tambah Juri
							</button> -->

							<div  id="nilai" class="col-lg-12">
								<div class="box">
									<div class="box-header"></div>
									<div class="box-body table-responsive">
										<table id="tbl-nilai" class="table table-hover">
											<thead>
												<tr>
													<th >Peringkat</th>
													<th>Nama Instansi</th>
													<th>Alamat Website</th>
													<th>Nilai</th>
												</tr>
											</thead>
											<tbody id="tbody-tbl-nilai">

											</tbody>
										</table>
									</div>
								</div>
							</div>

						</div>
					</div><!-- /.row -->

				</section><!-- /.content -->
			</aside><!-- /.right-side -->
		</div><!-- ./wrapper -->

		<!-- add new calendar event modal -->

	</body>

</html>
<script src="<?php echo $this->uri->baseUri; ?>assets/jsModul/penilaian.js" type="text/javascript"></script>
<script src="<?php echo $this->uri->baseUri; ?>assets/js/jquery.js" ></script>