<template>
  <div class="hello">
   <body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">

<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#BIODATA">BIODATA DIRI</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#PENDIDIKAN">PENDIDIKAN</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#KARIR">KARIR</a>
      </li>
    </ul>
  </div>
</nav>

<div id="BIODATA" class="container-fluid bg-success text-white" style="padding:100px 20px;">
  <h1>BIODATA DIRI</h1>
  <p>Nama                   : Angel Kelly</p>
  <p>Tempat, Tanggal Lahir  : 25 Maret 2002</p>
  <p>Alamat                 : Jl SMB 2 Komp Villa Edelwise Blok B.27</p>
  <p>Agama                  : Buddha</p>
 <div class="container mt-3">
  <h2>Angel Kelly</h2>          
  <img src="Angel.png" class="rounded" width="175" height="150"> 
</div>
</div>

<div id="PENDIDIKAN" class="container-fluid bg-warning" style="padding:100px 20px;">
  <h1>RIWAYAT PENDIDIKAN</h1>
  <div class="container mt-3">           
  <img src="Sekolah.png" class="rounded" width="175" height="150"> 
</div>
  <p>TK         : TK Baptis Palembang</p>
  <p>SD         : SD Baptis Palembang</p>
  <p>SMP        : SMP Methodist 1 Palembang</p>
  <p>SMK        : SMK Methodist 2 Palembang "Jurusan TKJ"</p>
  <p>Mahasiswa  : Universitas MDP Semester III</p>
  <div class="container mt-3">           
  <img src="MDP.png" class="rounded" width="150" height="150"> 
</div>
</div>

<div id="KARIR ESPORT" class="container-fluid bg-secondary text-white" style="padding:100px 20px;">
  <h1>KARIR</h1>
  <p>"Bermain Game"</p>
  <p>Sejak kelas 1 SMK saya mulai memiliki hobi bermain Game Moba. Setelah lulus SMK saya pun sempat terjun kedunia Esport untuk mengembangkan hobi saya dalam bermain game.</p>
  <p>Beberapa kali saya dan tim saya menjuarai Mini Turnament Ladies</p>
  <p>Disemester 1 saya pernah mengikuti Turnament Mobile Legend yang diadakan Universitas MDP</p>
  <p>Pada saat itu saya dan tim saya hanya mendapatkan Juara 3</p>
  <p>Saya sempat ditawarkan beberapa Esport ternama untuk mengikuti Trial,</p>
  <p>karena saya tidak memiliki banyak waktu saya pun menolak tawaran tersebut</p>
</div>

</body>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
