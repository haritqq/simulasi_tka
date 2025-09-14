// FILE: script.js

// ... (kode Anda yang lain biarkan seperti semula) ...

// Ganti fungsi submitExam yang lama dengan yang ini
function submitExam(isAuto=false){
    // Ambil data tambahan dari session storage
    const kelas = sessionStorage.getItem('sim_kelas');
    const mapel = sessionStorage.getItem('sim_mapel');
    
    // hitung skor
    const score = computeScore();
    const payload = {
      nama: nama,
      no_absen: no,
      kelas: kelas, // Tambahkan kelas
      mata_pelajaran: mapel, // Tambahkan mata pelajaran
      score: score,
      jawaban: answers.map((a,i)=>({soal:QUESTIONS[i].text, pilihan: a===undefined?null:QUESTIONS[i].choices[a]}))
    };

    // kirim ke server
    fetch('save_score.php',{
      method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)
    }).then(r=>r.json()).then(data=>{
      // hapus session
      sessionStorage.clear(); // Hapus semua data sesi ujian
      // tampilkan hasil
      window.location = 'result.php?score='+score;
    }).catch(err=>{
      console.error(err);
      alert('Terjadi kesalahan saat mengirim nilai. Nilai akan disimpan di browser.');
      // tetap tampilkan hasil
      window.location = 'result.php?score='+score;
    });
}

// ... (sisa kode Anda biarkan seperti semula) ...