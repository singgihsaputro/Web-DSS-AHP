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
					<h1> Manajemen Juri </h1>
					<ol class="breadcrumb">
						<li>
							<a href="#"><i class="fa fa-dashboard"></i> Home</a>
						</li>
						<li class="active">
							Juri
						</li>
					</ol>
				</section>

				<!-- Main content -->
				<section class="content">

					<!-- Small boxes (Stat box) -->
					<div class="row" style="margin-left: 10px">
						<div class="row col-md-10">
							
								<button class="btn-sm btn-primary" id="tambah-juri" >
									<span class="fa fa-plus-circle "></span>
									Tambah Juri
								</button>
								<br><br>	
							
							<div  id="juri">
								<table id="tbl-juri" class="table table-striped">
									<thead>
										<tr>
											<th>Nama Juri</th>
											<th>Keterangan</th>
											<th>Username</th>
											<th>Password</th>
											<th>Aksi</th>
										</tr>
									</thead>
									<tbody id="tbody-juri">
										
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
<script src="<?php echo $this -> uri -> baseUri; ?>assets/jsModul/juri.js" type="text/javascript"></script>
<script src="<?php echo $this -> uri -> baseUri; ?>assets/js/jquery.js" ></script>