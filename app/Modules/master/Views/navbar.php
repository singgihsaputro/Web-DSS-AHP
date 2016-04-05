
<aside class="left-side sidebar-offcanvas">
                <!-- sidebar: style can be found in sidebar.less -->
                <section class="sidebar">
                    <!-- Sidebar user panel -->
                    <div class="user-panel">
                        <div class="pull-left image">
                            <img src="<?php echo $this->uri->baseUri;?>assets/img/avatar5.png" class="img-circle" alt="User Image" />
                        </div>
                        <div class="pull-left info">
                            <p>Hello, <?php echo $this -> session -> getValue('name'); ?> </p>

                            <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                   
                    <!-- sidebar menu: : style can be found in sidebar.less -->
                    <ul class="sidebar-menu">
                        <li>
                            <a href="<?php echo $this->location('master/Admin/index')?>">
                                <i class="fa fa-dashboard"></i> <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="<?php echo $this->location('master/Admin/go_kriteria')?>">
                                <i class="fa fa-check"></i> <span>Kriteria</span> 
                            </a>
                        </li>
                        <li>
                            <a href="<?php echo $this->location('master/Admin/go_alternatif')?>">
                                <i class="fa fa-th"></i> <span>Alternatif</span> 
                            </a>
                        </li>
                        <li>
                             <a href="<?php echo $this->location('master/Admin/go_juri')?>">
                                <i class="fa fa-group"></i> <span>Manajemen Juri</span> 
                            </a>
                        </li>
                        <li>
                             <a href="<?php echo $this->location('master/Admin/go_rule')?>">
                                <i class="fa fa-gears"></i> <span>Manajemen Rule</span> 
                            </a>
                        </li>
                        <li>
                             <a href="<?php echo $this->location('master/Admin/go_perhitungan')?>">
                                <i class="fa fa-table"></i> <span>Perhitungan AHP</span> 
                            </a>
                        </li>
                        <li>
                             <a href="<?php echo $this->location('master/Admin/go_penilaian')?>">
                                <i class="fa fa-bar-chart-o"></i> <span>Lihat Nilai</span> 
                            </a>
                        </li>
                    </ul>
                </section>
                <!-- /.sidebar -->
            </aside>
            

