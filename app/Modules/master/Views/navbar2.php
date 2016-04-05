
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
                            <a href="<?php echo $this->location('master/Admin/go_nilai')?>">
                                <i class="fa fa-check"></i> <span>Penilaian</span> 
                            </a>
                        </li>
                         <li>
                            <a href="<?php echo $this->location('master/Admin/go_penilaian2')?>">
                                <i class="fa fa-bar-chart-o"></i> <span>Hasil Perlombaan</span> 
                            </a>
                        </li>
                       
                    </ul>
                </section>
                <!-- /.sidebar -->
            </aside>
            

