<?php
namespace Modules\master\Controllers;
use Resources, Controllers, Modules\master\Models as admin_model;

class Admin extends Resources\Controller {

	public function __construct() {
		parent::__construct();
		$this -> input = new Resources\Request;
		$this -> session = new Resources\Session;

		$this -> data_login = array('has_login' => false, 'error_stat' => false, 'error_info' => '', 'name' => '', 'title' => 'Halaman Login');
	}

	function index() {
		$ceklogin = $this -> session -> getValue('logadmin');
		$cekusername = $this -> session -> getValue('username');
		if ($ceklogin) {
			//kalau sudah login sih masuk aja ke dashboard
			$this -> data_login['has_login'] = true;
			if ($cekusername == "admin") {
				$this -> output('header');
				$this -> output('navbar');
				$this -> output('dashboard');
				$this -> output('footer');
			} else {
				$m_model = new admin_model\Admin;
				$data = $m_model -> get_juri($cekusername);
				if ($data != null) {
					$this -> output('header');
					$this -> output('navbar2');
					$this -> output('nilai');
					$this -> output('footer');
				}

			}
		} else {
			//kalau belum login, maaf ya login dulu di from.

			if ($this -> input -> post('submit'))
				$this -> proses_login();
			else
				$this -> output('login', $this -> data_login);
		}
	}

	private function proses_login() {

		$name = $this -> input -> post('username', FILTER_SANITIZE_MAGIC_QUOTES);
		$pass = $this -> input -> post('password', FILTER_SANITIZE_STRING);

		$this -> data_login['name'] = $name;
		$this -> data_login['error_stat'] = true;

		if (!empty($name) and !empty($pass)) {

			$m_model = new admin_model\Admin;

			if ($name == 'admin' && $pass == 'admin') {
				$this -> session -> setValue(array('logadmin' => true, 'username' => $name, 'name' => 'Admin'));
				$this -> data_login['has_login'] = true;
				$this -> redirect('master/Admin/index/go_dashboard');
			} else {
				$data = $m_model -> login_juri($name, $pass);

				if (!empty($data)) {
					$this -> session -> setValue(array('logadmin' => true, 'username' => $name, 'name' => $data -> nama, 'id' => $data -> id_juri));
					$this -> data_login['has_login'] = true;
					$this -> redirect('master/Admin/index/go_nilai');
				} else {
					$this -> redirect('master/Admin/index');
				}
			}
			// } else
			// $this -> data_login['error_info'] = 'Data tidak boleh kosong';
			//
			// $this -> output('login', $this -> data_login);
		}
	}

	function go_dashboard() {
		$this -> output('header');
		$this -> output('navbar');
		$this -> output('dashboard');
		$this -> output('footer');
	}

	function go_kriteria() {
		$this -> output('header');
		$this -> output('navbar');
		$this -> output('kriteria');
		$this -> output('footer');
	}

	function go_alternatif() {
		$this -> output('header');
		$this -> output('navbar');
		$this -> output('alternatif');
		$this -> output('footer');
	}

	function go_juri() {
		$this -> output('header');
		$this -> output('navbar');
		$this -> output('juri');
		$this -> output('footer');
	}

	function go_perhitungan() {
		$this -> output('header');
		$this -> output('navbar');
		$this -> output('perhitungan');
		$this -> output('footer');
	}

	function go_penilaian() {
		$this -> output('header');
		$this -> output('navbar');
		$this -> output('penilaian');
		$this -> output('footer');
	}

	function logout() {
		$this -> session -> destroy();
		$this -> redirect('master/Admin/index');
	}

	function load_kriteria() {
		if (!isset($_POST['init']))
			$this -> redirect('index');
		$m_model = new admin_model\Admin;
		$data = $m_model -> get_kriteria();
		echo json_encode($data);
	}

	function edit_tambah_kriteria() {
		if (!isset($_POST['init']))
			$this -> redirect('index');
		echo "halo";
		$m_model = new admin_model\Admin;
		$data = array('nama_kriteria' => $_POST['nama_kriteria'], 'bobot' => $_POST['bobot']);
		$m_model -> simpan_kriteria($data);
	}

	function delete_kriteria() {
		$m_model = new admin_model\Admin;
		$data = $m_model -> delete_kriteria($_POST['id_kriteria']);

	}

	function edit_kriteria() {
		if (!isset($_POST['init']))
			$this -> redirect('index');
		$m_model = new admin_model\Admin;
		$data = array('id_kriteria' => $_POST['id_kriteria'], 'nama_kriteria' => $_POST['nama_kriteria'], 'bobot' => $_POST['bobot']);
		$m_model -> edit_kriteria($data);
	}

	function load_alternatif() {
		if (!isset($_POST['init']))
			$this -> redirect('index');
		$m_model = new admin_model\Admin;
		$data = $m_model -> get_alternatif();
		echo json_encode($data);
	}

	function edit_tambah_alternatif() {
		if (!isset($_POST['init']))
			$this -> redirect('index');
		echo "halo";
		$m_model = new admin_model\Admin;
		$data = array('nama_alternatif' => $_POST['nama_alternatif'], 'website' => $_POST['website']);
		$m_model -> simpan_alternatif($data);
	}

	function delete_alternatif() {
		$m_model = new admin_model\Admin;
		$m_model -> delete_alternatif($_POST['id_alternatif']);

	}

	function edit_alternatif() {
		if (!isset($_POST['init']))
			$this -> redirect('index');
		$m_model = new admin_model\Admin;
		$data = array('id_alternatif' => $_POST['id_alternatif'], 'nama_alternatif' => $_POST['nama_alternatif'], 'website' => $_POST['website']);
		$m_model -> edit_alternatif($data);
	}

	function load_juri() {
		if (!isset($_POST['init']))
			$this -> redirect('index');
		$m_model = new admin_model\Admin;
		$data = $m_model -> get_data_juri();
		echo json_encode($data);
	}

	function edit_tambah_juri() {
		if (!isset($_POST['init']))
			$this -> redirect('index');
		//echo "halo";
		$m_model = new admin_model\Admin;
		$data = array('nama' => $_POST['nama'], 'keterangan' => $_POST['keterangan'], 'username' => $_POST['username'], 'password' => $_POST['password']);
		$m_model -> simpan_juri($data);
	}

	function delete_juri() {
		$m_model = new admin_model\Admin;
		$data = $m_model -> delete_juri($_POST['id_juri']);
	}

	function edit_juri() {
		if (!isset($_POST['init']))
			$this -> redirect('index');
		$m_model = new admin_model\Admin;
		$data = array('id_juri' => $_POST['id_juri'], 'nama' => $_POST['nama'], 'keterangan' => $_POST['keterangan'], 'username' => $_POST['username'], 'password' => $_POST['password']);
		$m_model -> edit_juri($data);
	}

	//lihat nilai
	function get_nilai() {
		if (!isset($_POST['init']))
			$this -> redirect('index');
		$m_model = new admin_model\Admin;
		$data = $m_model -> get_nilai();
		echo json_encode($data);
	}
	
	//lihat nilai
	function get_nilai_limit() {
		if (!isset($_POST['init']))
			$this -> redirect('index');
		$m_model = new admin_model\Admin;
		$data = $m_model -> get_nilai_limit();
		echo json_encode($data);
	}

	//Juri
	function go_nilai() {
		$this -> output('header');
		$this -> output('navbar2');
		$this -> output('nilai');
		$this -> output('footer');
	}

	function go_penilaian2() {
		$this -> output('header');
		$this -> output('navbar2');
		$this -> output('penilaian2');
		$this -> output('footer');
	}

	function simpan_nilai() {
		$m_model = new Admin_model\Admin;
		for ($i = 0; $i < count($_POST['id_kriteria']); $i++) {
			$datanya = array('id_juri' => $_POST['id_juri'], 'id_kriteria' => $_POST['id_kriteria'][$i], 'id_alternatif' => $_POST['id_alternatif'], 'nilai' => $_POST['nilai'][$i]);
			$m_model -> simpan_nilai_juri($datanya);
		}
	}

	function edit_simpan_nilai() {
		$m_model = new Admin_model\Admin;
		for ($i = 0; $i < count($_POST['id_nilai']); $i++) {
			$datanya = array('id_nilai' => $_POST['id_nilai'][$i], 'nilai' => $_POST['nilai'][$i]);
			$m_model -> edit_nilai_juri($datanya);
		}
	}

	//lihat nilai
	function load_nilai_juri() {
		if (!isset($_POST['init']))
			$this -> redirect('index');
		$m_model = new admin_model\Admin;
		$datanya = array('id_juri' => $_POST['id_juri'], 'id_alternatif' => $_POST['id_alternatif']);
		$data = $m_model -> load_nilai_juri($datanya);
		echo json_encode($data);
	}

	function go_rule() {
		$this -> output('header');
		$this -> output('navbar');
		$this -> output('rule');
		$this -> output('footer');
	}

	function edit_tambah_rule() {
		if (!isset($_POST['init']))
			$this -> redirect('index');
		$m_model = new admin_model\Admin;
		$data = array('batas_awal' => $_POST['batas_awal'], 'batas_akhir' => $_POST['batas_akhir'], 'bobot' => $_POST['bobot']);
		$m_model -> simpan_rule($data);
	}

	function delete_rule() {
		$m_model = new admin_model\Admin;
		$data = $m_model -> delete_rule($_POST['id_rule']);
	}

	function edit_rule() {
		if (!isset($_POST['init']))
			$this -> redirect('index');
		$m_model = new admin_model\Admin;
		$data = array('id_rule' => $_POST['id_rule'], 'batas_awal' => $_POST['batas_awal1'], 'batas_akhir' => $_POST['batas_akhir1'], 'bobot' => $_POST['bobot1']);
		$m_model -> edit_rule($data);
	}

	function load_rule() {
		if (!isset($_POST['init']))
			$this -> redirect('index');
		$m_model = new admin_model\Admin;
		$data = $m_model -> get_rule();
		echo json_encode($data);
	}

	//lihat nilai
	function load_nilai_alternatif() {
		if (!isset($_POST['init']))
			$this -> redirect('index');
		$m_model = new admin_model\Admin;
		$data = $m_model -> load_nilai_alternatif();
		echo json_encode($data);
	}

	function load_alternatif2() {
		if (!isset($_POST['init']))
			$this -> redirect('index');
		$m_model = new admin_model\Admin;
		$data = $m_model -> get_alternatif2();
		echo json_encode($data);
	}

	function simpan_hasil() {
		if (!isset($_POST['init']))
			$this -> redirect('index');
		$m_model = new admin_model\Admin;
		//echo count($_POST['web']);
		for($i=0;$i<count($_POST['web']);$i++){
			$data=array('id_alternatif' => $_POST['web'][$i][1], 'NA' => $_POST['web'][$i][3]);
			$m_model -> simpan_hasil($data);
		}
		//$m_model -> simpan_hasil($POST['web']);
		
		load_hasil();
	}
	
	function load_hasil(){
		$m_model = new admin_model\Admin;
		$data = $m_model -> load_hasil();
		echo json_encode($data);
	}

}
