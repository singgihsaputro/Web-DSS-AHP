<head>
	<meta charset="UTF-8">
	<title>AHP Lomba Web</title>
	<meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
	<!-- bootstrap 3.0.2 -->
	<link href="<?php echo $this -> uri -> baseUri; ?>assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<!-- font Awesome -->
	<link href="<?php echo $this -> uri -> baseUri; ?>assets/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
	<!-- Ionicons -->
	<link href="<?php echo $this -> uri -> baseUri; ?>assets/css/ionicons.min.css" rel="stylesheet" type="text/css" />
	<!-- Morris chart -->
	<link href="<?php echo $this -> uri -> baseUri; ?>assets/css/morris/morris.css" rel="stylesheet" type="text/css" />
	<!-- jvectormap -->
	<link href="<?php echo $this -> uri -> baseUri; ?>assets/css/jvectormap/jquery-jvectormap-1.2.2.css" rel="stylesheet" type="text/css" />
	<!-- fullCalendar -->
	<link href="<?php echo $this -> uri -> baseUri; ?>assets/css/fullcalendar/fullcalendar.css" rel="stylesheet" type="text/css" />
	<!-- Daterange picker -->
	<link href="<?php echo $this -> uri -> baseUri; ?>assets/css/daterangepicker/daterangepicker-bs3.css" rel="stylesheet" type="text/css" />
	<!-- bootstrap wysihtml5 - text editor -->
	<link href="<?php echo $this -> uri -> baseUri; ?>assets/css/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css" rel="stylesheet" type="text/css" />
	<!-- Theme style -->
	<link href="<?php echo $this -> uri -> baseUri; ?>assets/css/AdminLTE.css" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" href="<?php echo $this -> uri -> baseUri; ?>assets/css/select2.css" type="text/css">
	<script src="<?php echo $this -> uri -> baseUri; ?>assets/js/jquery.min.js"></script>
	<script src="<?php echo $this -> uri -> baseUri; ?>assets/js/jquery.js"></script>
	<script src="<?php echo $this -> uri -> baseUri; ?>assets/js/select2.js" type="text/javascript"></script>
	<script src="<?php echo $this -> uri -> baseUri; ?>assets/js/pace.min.js" type="text/javascript"></script>
	<!-- DATA TABLES -->
	<link href="<?php echo $this -> uri -> baseUri; ?>assets/css/datatables/dataTables.bootstrap.css" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" href="<?php echo $this -> uri -> baseUri; ?>assets/css/tinyscrollbar.css" type="text/css" media="screen"/>
<link href="<?php echo $this -> uri -> baseUri; ?>assets/css/pace.css" rel="stylesheet" type="text/css" />

	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
	<![endif]-->

	<script type="text/javascript">var base_url =   '<?php echo $this -> location(); ?>
	';
	</script>
</head>

<header class="header">
	<a href="index.html" class="logo"> <!-- Add the class icon to your logo image or logo icon to add the margining --> Lomba Web SKPD </a>
	<!-- Header Navbar: style can be found in header.less -->
	<nav class="navbar navbar-static-top" role="navigation">
		<!-- Sidebar toggle button-->
		<a href="#" class="navbar-btn sidebar-toggle" data-toggle="offcanvas" role="button"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </a>
		<div class="navbar-right">
			<ul class="nav navbar-nav">

				<!-- User Account: style can be found in dropdown.less -->
				<li class="dropdown user user-menu">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i class="glyphicon glyphicon-user"></i> <span><?php echo $this -> session -> getValue('name'); ?>
						<i class="caret"></i></span> </a>
					<ul class="dropdown-menu">
						<!-- User image -->
						<li class="user-header bg-light-blue">
							<img src="<?php echo $this -> uri -> baseUri; ?>assets/img/avatar5.png" class="img-circle" alt="User Image" />
							<p>
								<?php echo $this -> session -> getValue('name'); ?>

							</p>
						</li>

						<!-- Menu Footer-->
						<li class="user-footer">

							<div class="pull-right">
								<a href="<?php echo $this->location('master/Admin/logout')?>" class="btn btn-default btn-flat">Sign out</a>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</nav>
</header>

