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
					<h1> Dashboard <small>Control panel</small></h1>
					<ol class="breadcrumb">
						<li>
							<a href="#"><i class="fa fa-dashboard"></i> Home</a>
						</li>
						<li class="active">
							Dashboard
						</li>
					</ol>
				</section>

				<!-- Main content -->
				<section class="content">

					<!-- Small boxes (Stat box) -->
					<div class="row">
						<div class="col-lg-3 col-xs-6">
							<!-- small box -->
							<div class="small-box bg-aqua">
								<div class="inner">
									<h3> Kriteria </h3>
									<p>
										Website
									</p>
								</div>
								<div class="icon">
									<i class="ion ion-pie-graph" ></i>
								</div>
								<a href="<?php echo $this->location('master/Admin/go_kriteria')?>" class="small-box-footer"> More info <i class="fa fa-arrow-circle-right"></i> </a>
							</div>
						</div><!-- ./col -->
						<div class="col-lg-3 col-xs-6">
							<!-- small box -->
							<div class="small-box bg-green">
								<div class="inner">
									<h3> Alternatif </h3>
									<p>
										Website
									</p>
								</div>
								<div class="icon">
									<i class="ion ion-ios7-pricetag-outline"></i>
								</div>
								<a href="<?php echo $this->location('master/Admin/go_alternatif')?>" class="small-box-footer"> More info <i class="fa fa-arrow-circle-right"></i> </a>
							</div>
						</div><!-- ./col -->
						<div class="col-lg-3 col-xs-6">
							<!-- small box -->
							<div class="small-box bg-yellow">
								<div class="inner">
									<h3> Juri </h3>
									<p>
										Manajemen
									</p>
								</div>
								<div class="icon">
									<i class="ion ion-person-add"></i>
								</div>
								<a href="<?php echo $this->location('master/Admin/go_juri')?>" class="small-box-footer"> More info <i class="fa fa-arrow-circle-right"></i> </a>
							</div>
						</div><!-- ./col -->
						<div class="col-lg-3 col-xs-6">
							<!-- small box -->
							<div class="small-box bg-purple">
								<div class="inner">
									<h3> AHP </h3>
									<p>
										Perhitungan
									</p>
								</div>
								<div class="icon">
									<i class="ion ion-stats-bars"></i>
								</div>
								<a href="<?php echo $this->location('master/Admin/go_perhitungan')?>" class="small-box-footer"> More info <i class="fa fa-arrow-circle-right"></i> </a>
							</div>
						</div><!-- ./col -->
					</div><!-- /.row -->
					<div class="row">
						<div class="col-lg-3 col-xs-6">
							<!-- small box -->
							<div class="small-box bg-maroon">
								<div class="inner">
									<h3> Hasil </h3>
									<p>
										Penilaian
									</p>
								</div>
								<div class="icon">
									<i class="ion ion-stats-bars"></i>
								</div>
								<a href="<?php echo $this->location('master/Admin/go_penilaian')?>" class="small-box-footer"> More info <i class="fa fa-arrow-circle-right"></i> </a>
							</div>
						</div><!-- ./col -->
					</div>

				</section><!-- /.content -->
			</aside><!-- /.right-side -->
		</div><!-- ./wrapper -->

		<!-- add new calendar event modal -->

	</body>

</html>