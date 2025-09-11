// <!-- FILE: script.js -->
// Logika ujian: navigasi, simpan jawaban, countdown, submit otomatis
(function(){
  const TOTAL_MINUTES = 60;
  let timeLeft = TOTAL_MINUTES*60; // detik
  let currentIndex = parseInt(new URLSearchParams(location.search).get('soal') || '1',10)-1;
  const answers = JSON.parse(sessionStorage.getItem('sim_answers') || '[]');

  const nama = sessionStorage.getItem('sim_nama');
  const no = sessionStorage.getItem('sim_no');
  if(!nama || !no){
    alert('Data siswa tidak ditemukan. Kembali ke halaman login.');
    window.location = 'index.php';
    return;
  }

  const countdownEl = document.getElementById('countdown');
  const soalText = document.getElementById('soal-text');
  const optionsEl = document.getElementById('options');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const finishBtn = document.getElementById('finishBtn');
  const navGrid = document.getElementById('nav-grid');

  function renderNav(){
    navGrid.innerHTML='';
    QUESTIONS.forEach((q,i)=>{
      const b=document.createElement('div');
      b.className='nav-item'+(answers[i] !== undefined ? ' done':'');
      b.textContent=(i+1);
      b.addEventListener('click',()=>{currentIndex=i;renderQuestion();});
      navGrid.appendChild(b);
    });
  }

  function renderQuestion(){
    const q = QUESTIONS[currentIndex];
    soalText.textContent = q.text;
    optionsEl.innerHTML = '';
    q.choices.forEach((c,idx)=>{
      const o = document.createElement('div');
      o.className='option'+(answers[currentIndex]===idx ? ' selected':'');
      o.textContent = c;
      o.addEventListener('click',()=>{
        answers[currentIndex]=idx;
        sessionStorage.setItem('sim_answers', JSON.stringify(answers));
        renderQuestion();
        renderNav();
      });
      optionsEl.appendChild(o);
    });

    // tombol
    prevBtn.style.display = currentIndex===0 ? 'none' : 'inline-block';
    nextBtn.style.display = currentIndex===QUESTIONS.length-1 ? 'none' : 'inline-block';
    nextBtn.textContent = currentIndex===QUESTIONS.length-2 ? 'Selanjutnya' : 'Selanjutnya';
    // jika soal terakhir, ubah next menjadi invisible dan show finish button
    finishBtn.style.display = 'inline-block';
  }

  prevBtn.addEventListener('click',()=>{ if(currentIndex>0){currentIndex--; renderQuestion();}});
  nextBtn.addEventListener('click',()=>{ if(currentIndex<QUESTIONS.length-1){currentIndex++; renderQuestion();}});
  finishBtn.addEventListener('click', ()=>{ if(confirm('Yakin ingin mengakhiri ujian?')) submitExam(); });

  function tick(){
    const m = Math.floor(timeLeft/60).toString().padStart(2,'0');
    const s = (timeLeft%60).toString().padStart(2,'0');
    countdownEl.textContent = m+':'+s;
    if(timeLeft<=0){
      submitExam(true);
      return;
    }
    timeLeft--;
  }

  // mulai timer (jika ada di sessionStorage gunakan sisa waktu tersimpan)
  const savedTime = sessionStorage.getItem('sim_timeleft');
  if(savedTime) timeLeft = parseInt(savedTime,10);
  setInterval(()=>{tick(); sessionStorage.setItem('sim_timeleft', timeLeft);},1000);

  function computeScore(){
    let score=0;
    for(let i=0;i<QUESTIONS.length;i++){
      if(answers[i] !== undefined && answers[i] === QUESTIONS[i].answer) score++;
    }
    return score;
  }

  function submitExam(isAuto=false){
    // hitung skor
    const score = computeScore();
    const payload = {
      nama: nama,
      no_absen: no,
      score: score,
      jawaban: answers.map((a,i)=>({soal:QUESTIONS[i].text, pilihan: a===undefined?null:QUESTIONS[i].choices[a]}))
    };

    // kirim ke server
    fetch('save_score.php',{
      method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)
    }).then(r=>r.json()).then(data=>{
      // hapus session
      sessionStorage.removeItem('sim_answers');
      sessionStorage.removeItem('sim_timeleft');
      // tampilkan hasil
      window.location = 'result.php?score='+score;
    }).catch(err=>{
      console.error(err);
      alert('Terjadi kesalahan saat mengirim nilai. Nilai akan disimpan di browser.');
      // tetap tampilkan hasil
      window.location = 'result.php?score='+score;
    });
  }

  // inisialisasi render
  renderNav();
  renderQuestion();
})();