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
					<h1> Perhitungan menggunakan metode AHP</h1>
					<ol class="breadcrumb">
						<li>
							<a href="#"><i class="fa fa-dashboard"></i> Home</a>
						</li>
						<li class="active">
							Perhitungan
						</li>
					</ol>
				</section>

				<!-- Main content -->
				<section class="content">

					<!-- Small boxes (Stat box) -->
					<div class="row" style="margin-left: 10px">
						<div class="row col-lg-12">

							<!-- <button class="btn-sm btn-primary" id="tambah-juri" >
							<span class="fa fa-plus-circle "></span>
							Tambah Juri
							</button> -->

							<div  id="perhitungan1" class="col-lg-12">
								<div class="box box-solid box-primary">
									<div class="box-header">
										<h3 class="box-title">Langkah 1 - Analisis Data</h3>
										<div class="box-tools pull-right">
											<button class="btn btn-primary btn-sm" data-widget="collapse">
												<i class="fa fa-minus"></i>
											</button>

										</div>
									</div>
									
									<div class="col-lg-6">
										<div id="langkah1" class="box-body" style="display: block;">
											<table id="tbl-kriteria" class="table table-striped table-bordered">
												<thead>
													<tr>
														<th>No</th>
														<th>Kriteria</th>
													</tr>
												</thead>
												<tbody id="tbody-tbl-kriteria">

												</tbody>
											</table>

										</div><!-- /.box-body -->
									</div>
									<!-- /col lg 4 -->

									<div class="col-lg-6">
										<div id="langkah1a" class="box-body" style="display: block;">
											<table id="tbl-alternatif" class="table table-bordered">
												<thead>
													<tr>
														<th>No</th>
														<th>Alternatif</th>
													</tr>
												</thead>
												<tbody id="tbody-tbl-alternatif">

												</tbody>
											</table>

										</div><!-- /.box-body -->
									</div><!-- /col lg 8-->
									
								</div>

							</div><!-- /perhitungan 1 -->

							<div  id="perhitungan2" class="col-lg-12">
								<div class="box box-solid box-primary">
									<div class="box-header">
										<h3 class="box-title">Langkah 2 - Matrik Perbandingan Berpasangan </h3>
										<div class="box-tools pull-right">
											<button class="btn btn-primary btn-sm" data-widget="collapse">
												<i class="fa fa-minus"></i>
											</button>

										</div>
									</div>
									<div class="col-lg-12 box-body" id="langkah2"  style="display: block;">
									<img src="<?php echo $this -> uri -> baseUri; ?>assets/images/langkah/langkah2.png" />
									<br>
									</div><!-- /.box-body -->
								</div>

							</div><!-- /perhitungan 2 -->

							<div  id="perhitungan3" class="col-lg-12">
								<div class="box box-solid box-primary">
									<div class="box-header">
										<h3 class="box-title">Langkah 3 - Normalisasi Nilai Matrik Perbandingan</h3>
										<div class="box-tools pull-right">
											<button class="btn btn-primary btn-sm" data-widget="collapse">
												<i class="fa fa-minus"></i>
											</button>

										</div>
									</div>
									<div class="col-lg-12 box-body" id="langkah3" style="display: block;">
									<img src="<?php echo $this -> uri -> baseUri; ?>assets/images/langkah/langkah3.png" />
									<br>
									</div><!-- /.box-body -->
								</div>

							</div><!-- /perhitungan 3 -->

							<div  id="perhitungan4" class="col-lg-12">
								<div class="box box-solid box-primary">
									<div class="box-header">
										<h3 class="box-title">Langkah 4 - Menghitung total priority value (TPV)</h3>
										<div class="box-tools pull-right">
											<button class="btn btn-primary btn-sm" data-widget="collapse">
												<i class="fa fa-minus"></i>
											</button>

										</div>
									</div>
									<div class="col-lg-12 box-body" id="langkah4" style="display: block;">
<img src="<?php echo $this -> uri -> baseUri; ?>assets/images/langkah/langkah4a.png" /><br>
<img src="<?php echo $this -> uri -> baseUri; ?>assets/images/langkah/langkah4b.png" />
									
									<br>
									</div><!-- /.box-body -->
								</div>

							</div><!-- /perhitungan 4 -->

							<div  id="perhitungan5" class="col-lg-12">
								<div class="box box-solid box-primary">
									<div class="box-header">
										<h3 class="box-title">Langkah 5 - Menghitung Penjumlahan tiap baris</h3>
										<div class="box-tools pull-right">
											<button class="btn btn-primary btn-sm" data-widget="collapse">
												<i class="fa fa-minus"></i>
											</button>

										</div>
									</div>
									<div class="col-lg-12 box-body" id="langkah5" style="display: block;">
<img src="<?php echo $this -> uri -> baseUri; ?>assets/images/langkah/langkah5a.png" /><br>
<img src="<?php echo $this -> uri -> baseUri; ?>assets/images/langkah/langkah5b.png" />
<br>
									</div><!-- /.box-body -->
								</div>

							</div><!-- /perhitungan 5 -->

							<div  id="perhitungan6" class="col-lg-12">
								<div class="box box-solid box-primary">
									<div class="box-header">
										<h3 class="box-title">Langkah 6 - Menghitung nlai principal eigen value (λ max)</h3>
										<div class="box-tools pull-right">
											<button class="btn btn-primary btn-sm" data-widget="collapse">
												<i class="fa fa-minus"></i>
											</button>

										</div>
									</div>
									<div class="col-lg-12 box-body" id="langkah6" style="display: block;">
<img src="<?php echo $this -> uri -> baseUri; ?>assets/images/langkah/langkah6a.png" /><br>
<img src="<?php echo $this -> uri -> baseUri; ?>assets/images/langkah/langkah6b.png" /><br>
<img src="<?php echo $this -> uri -> baseUri; ?>assets/images/langkah/langkah6c.png" />
<br>
									</div><!-- /.box-body -->
								</div>

							</div><!-- /perhitungan 6 -->
							
							<div  id="perhitungan7" class="col-lg-12">
								<div class="box box-solid box-primary">
									<div class="box-header">
										<h3 class="box-title">Langkah 7 - Menghitung Nilai Consistency Index (CI)</h3>
										<div class="box-tools pull-right">
											<button class="btn btn-primary btn-sm" data-widget="collapse">
												<i class="fa fa-minus"></i>
											</button>

										</div>
									</div>
									<div class="col-lg-12 box-body" id="langkah7" style="display: block;">
<img src="<?php echo $this -> uri -> baseUri; ?>assets/images/langkah/langkah7.png" /><br>
									</div><!-- /.box-body -->
								</div>

							</div><!-- /perhitungan 7 -->
							
							<div  id="perhitungan8" class="col-lg-12">
								<div class="box box-solid box-primary">
									<div class="box-header">
										<h3 class="box-title">Langkah 8 - Menghitung nilai Consistency Ratio (CR) dan menguji konsistensi</h3>
										<div class="box-tools pull-right">
											<button class="btn btn-primary btn-sm" data-widget="collapse">
												<i class="fa fa-minus"></i>
											</button>

										</div>
									</div>
									<div class="col-lg-12 box-body" id="langkah8" style="display: block;">
<img src="<?php echo $this -> uri -> baseUri; ?>assets/images/langkah/langkah8.png" /><br>
									</div><!-- /.box-body -->
								</div>

							</div><!-- /perhitungan 8 -->
							
							<div  id="perhitungan9" class="col-lg-12">
								<div class="box box-solid box-primary">
									<div class="box-header">
										<h3 class="box-title">Langkah 9 - Menghitung Nilai Rasio Konsistensi alternative pada kriteria</h3>
										<div class="box-tools pull-right">
											<button class="btn btn-primary btn-sm" data-widget="collapse">
												<i class="fa fa-minus"></i>
											</button>

										</div>
									</div>
									<div class="col-lg-12 box-body" id="langkah9" style="display: block;">

									</div><!-- /.box-body -->
								</div>

							</div><!-- /perhitungan 9 -->
							
							<div  id="perhitungan10" class="col-lg-12">
								<div class="box box-solid box-primary">
									<div class="box-header">
										<h3 class="box-title">Langkah 10 - Perangkingan Alternatif</h3>
										<div class="box-tools pull-right">
											<button class="btn btn-primary btn-sm" data-widget="collapse">
												<i class="fa fa-minus"></i>
											</button>

										</div>
									</div>
									<div class="col-lg-12 box-body" id="langkah10" style="display: block;">

									</div><!-- /.box-body -->
								</div>

							</div><!-- /perhitungan 10 -->
							
							

						</div><!-- /.row col lg 12 -->
					</div><!-- /.row -->

				</section><!-- /.content -->
			</aside><!-- /.right-side -->
		</div><!-- ./wrapper -->
		
		<!-- add new calendar event modal -->

	</body>

</html>
<script src="<?php echo $this -> uri -> baseUri; ?>assets/jsModul/perhitungan.js" type="text/javascript"></script>
<script src="<?php echo $this -> uri -> baseUri; ?>assets/js/jquery.js" ></script>