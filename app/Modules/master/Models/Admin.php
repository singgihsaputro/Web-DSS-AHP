<?php
namespace Modules\master\Models;
use Resources;

class Admin {

	public function __construct() {

		$this -> db = new Resources\Database;
	}

	public function login_juri($nama, $pass) {

		$result = $this -> db -> row("SELECT id_juri, nama FROM juri where username='" . $nama . "' and password='" . $pass . "'");

		return $result;
	}

	public function get_juri($nama) {

		$result = $this -> db -> results("SELECT * FROM juri where username='" . $nama . "'");

		return $result;
	}

	public function get_kriteria() {
		$sql = "SELECT 
					*   
				FROM kriteria 
				ORDER BY id_kriteria ASC";
		return $this -> db -> results($sql);
	}

	public function simpan_kriteria($data) {
		$this -> db -> insert('kriteria', $data);
	}

	public function delete_kriteria($data) {
		$this -> db -> delete('kriteria', array('id_kriteria' => $data));
	}

	public function edit_kriteria($data) {
		$this -> db -> update('kriteria', array('nama_kriteria' => $data['nama_kriteria'], 'bobot' => $data['bobot']), array('id_kriteria' => $data['id_kriteria']));
	}

	public function get_alternatif() {
		$sql = "SELECT 
					*   
				FROM alternatif
				ORDER BY
alternatif.id_alternatif ASC";
		return $this -> db -> results($sql);
	}

	public function simpan_alternatif($data) {
		$this -> db -> insert('alternatif', $data);
	}

	public function delete_alternatif($data) {
		$this -> db -> delete('alternatif', array('id_alternatif' => $data));
	}

	public function edit_alternatif($data) {
		$this -> db -> update('alternatif', array('nama_alternatif' => $data['nama_alternatif'], 'website' => $data['website']), array('id_alternatif' => $data['id_alternatif']));
	}

	public function get_data_juri() {
		$sql = "SELECT 
					*   
				FROM juri";
		return $this -> db -> results($sql);
	}

	public function simpan_juri($data) {
		$this -> db -> insert('juri', $data);
	}

	public function delete_juri($data) {
		$this -> db -> delete('juri', array('id_juri' => $data));
	}

	public function edit_juri($data) {
		$this -> db -> update('juri', array('nama' => $data['nama'], 'keterangan' => $data['keterangan'], 'username' => $data['username'], 'password' => $data['password']), array('id_juri' => $data['id_juri']));
	}

	public function get_nilai() {
		$sql = "SELECT 
					*   
				FROM alternatif ORDER BY NA DESC";
		return $this -> db -> results($sql);
	}

	public function simpan_nilai_juri($data) {
		$this -> db -> insert('nilai_juri', $data);
	}

	public function edit_nilai_juri($data) {
		$this -> db -> update('nilai_juri', array('nilai' => $data['nilai']), array('id_nilai' => $data['id_nilai']));
	}

	public function load_nilai_juri($data) {

		$result = $this -> db -> results("SELECT * FROM nilai_juri where id_juri='" . $data['id_juri'] . "' and id_alternatif='" . $data['id_alternatif'] . "'");

		return $result;
	}

	//rule

	public function simpan_rule($data) {
		$this -> db -> insert('rule', $data);
	}

	public function delete_rule($data) {
		$this -> db -> delete('rule', array('id_rule' => $data));
	}

	public function edit_rule($data) {
		$this -> db -> update('rule', array('batas_awal' => $data['batas_awal'], 'batas_akhir' => $data['batas_akhir'], 'bobot' => $data['bobot']), array('id_rule' => $data['id_rule']));
	}

	//perhitungan
	public function get_rule() {
		$sql = "SELECT 
					*   
				FROM rule";
		return $this -> db -> results($sql);
	}

	public function load_nilai_alternatif() {

		$result = $this -> db -> results("SELECT
nilai_juri.id_nilai,
AVG(nilai_juri.nilai) nilai,
nilai_juri.id_alternatif,
nilai_juri.id_kriteria
FROM
nilai_juri
GROUP BY nilai_juri.id_alternatif, nilai_juri.id_kriteria
ORDER BY
nilai_juri.id_alternatif ASC,
nilai_juri.id_kriteria ASC
");

		return $result;
	}

	public function get_alternatif2() {
		$sql = "SELECT 
					alternatif.id_alternatif, alternatif.nama_alternatif  
				FROM alternatif
				ORDER BY
alternatif.id_alternatif ASC";
		return $this -> db -> results($sql);
	}

	public function simpan_hasil($data) {
		$this -> db -> update('alternatif', array('NA' => $data['NA']), array('id_alternatif' => $data['id_alternatif']));
	}

	public function load_hasil() {
		$sql = "SELECT 
					alternatif.id_alternatif, alternatif.nama_alternatif, alternatif.NA
				FROM alternatif
				ORDER BY 
alternatif.NA DESC";
		return $this -> db -> results($sql);
	}
	public function get_nilai_limit() {
		$sql = "SELECT 
					*   
				FROM alternatif ORDER BY NA DESC LIMIT 0,5";
		return $this -> db -> results($sql);
	}
}
