// Data adapter: replace this array with a validated Google Sheets fetch in a future integration.
// Only operational fields are retained in this build; telephone and ID-card values are not shipped.
const teachers = [
 {id:1,schoolCode:'KBA8001',school:'SK BATU LIMA',name:'MOHD FAIZ BIN CHE MANSOR',grade:'DG9',experience:'0 TAHUN'},
 {id:2,schoolCode:'KBA8002',school:'SK CHEPIR',name:'MOHD ZIKRAL HAKIM BIN ZAINUL RASHID',grade:'DG10',experience:'7 TAHUN'},
 {id:3,schoolCode:'KBA8003',school:'SK GULAU',name:'AZREEN BINTI MAPAK',grade:'DG10',experience:'5 TAHUN'},
 {id:4,schoolCode:'KBA8004',school:'SK HUJONG BANDAR',name:'SITI ROSMAWATI BINTI MD YUSOFF',grade:'DG12',experience:'9 TAHUN'},
 {id:5,schoolCode:'KBA8005',school:'SK JENERI',name:'MOHD AMIR BIN MOHD YUSOFF',grade:'DG12',experience:'8 TAHUN'},
 {id:6,schoolCode:'KBA8006',school:'SK KG. BETONG',name:'MUHAMAD IKMAL BIN RAMLI',grade:'DG9',experience:'0 TAHUN'},
 {id:7,schoolCode:'KBA8007',school:'SK HJ HUSSAIN',name:'MOHAMAD NAJIB BIN ABD RAHMAN',grade:'DG7',experience:'9 TAHUN'},
 {id:8,schoolCode:'KBA8008',school:'SK KAMPONG KOTA BUKIT',name:'MUNIRAH SOLEHAH BINTI ZAINAL ABIDIN',grade:'DG9',experience:'0 TAHUN'},
 {id:9,schoolCode:'KBA8009',school:'SK SERI AMPANG MUDA',name:'MUHAMMAD @ MAHADHIR BIN YAAKUB',grade:'DG12',experience:'2 TAHUN'},
 {id:10,schoolCode:'KBA8010',school:'SK CHEMARA',name:'BADRIYYAH BINTI RADZUAN',grade:'DG9',experience:'2 TAHUN'},
 {id:11,schoolCode:'KBA8011',school:'SK KALAI',name:'MUHAMMAD AFIQ BIN HASDI',grade:'DG9',experience:'1 TAHUN'},
 {id:12,schoolCode:'KBA8012',school:'SK PAYA TERENDAM',name:'AHMAD ZAKI BIN OSMAN',grade:'DG9',experience:'6 TAHUN'},
 {id:13,schoolCode:'KBA8013',school:'SK PADANG CHICHAK',name:'HAIRIL AFRI BIN HUSAIN',grade:'DG10',experience:'1 TAHUN'},
 {id:14,schoolCode:'KBA8014',school:'SK SIK',name:'WAN SAFIE BIN WAN AHMAD',grade:'DG10',experience:'0 TAHUN'},
 {id:15,schoolCode:'KBA8015',school:'SK BANDAR BARU BERIS JAYA',name:'NUR SYAHIRA BINTI MOHD ZULKEFLI',grade:'DG9',experience:'2 TAHUN'},
 {id:16,schoolCode:'KBA8016',school:'SK TELOI TUA',name:'NURUL IZZATI BINTI ISMAIL',grade:'DG10',experience:'2 TAHUN'},
 {id:17,schoolCode:'KBA8017',school:'SK DANGLAU',name:'FATIN NADIAH BINTI AHMAD PISAL',grade:'DG9',experience:'2 TAHUN'},
 {id:18,schoolCode:'KBA8018',school:'SK SIK DALAM',name:'NUR FARHANA BINTI AHMAD SHUKRI',grade:'DG9',experience:'2 TAHUN'},
 {id:19,schoolCode:'KBA8019',school:'SK KOTA AUR',name:'AHMAD WAFI BIN NORIZAN',grade:'DG10',experience:'2 TAHUN'},
 {id:20,schoolCode:'KBA8020',school:'SK BATU 8',name:'NURFARAH MARINA BINTI RUSLAN',grade:'DG9',experience:'3 TAHUN'},
 {id:21,schoolCode:'KBA8021',school:'SK TELOI TIMUR',name:'NUR AIN AZREEN BINTI MOHTAR',grade:'DG10',experience:'4 TAHUN'},
 {id:22,schoolCode:'KBC8019',school:'SJK C CHUNG HWA',name:'LOO PHYE YEE',grade:'DG9',experience:'3 TAHUN'},
 {id:23,schoolCode:'KBE8017',school:'SK SERI DUSUN',name:'MUHAMAD AMIRUL HAIQAL BIN MUHAMAD NAJIB',grade:'DG9',experience:'5 BULAN'},
 {id:24,schoolCode:'KEA8019',school:'SMK JENERI',name:'NAFISYAH BINTI MAT HUSSAIN',grade:'DG12',experience:'7 TAHUN'},
 {id:25,schoolCode:'KEA8020',school:'SMK SERI ENGGANG',name:'NUR HAZATUL HAFIFY BINTI MD AKHIR',grade:'DG9',experience:'2 TAHUN'},
 {id:26,schoolCode:'KEA8021',school:'SMK GULAU',name:'ABD GANI BIN WAHAB',grade:'DG12',experience:'5 TAHUN'},
 {id:27,schoolCode:'KEA8022',school:'SMK CHEPIR',name:'HASNIZA SYAZWANI BINTI AHMAD HARIS',grade:'DG12',experience:'5 TAHUN'},
 {id:28,schoolCode:'KEA8023',school:'SMK BATU LAPAN',name:'ZALINA BINTI KAMARUDIN',grade:'DG12',experience:'5 TAHUN'},
 {id:29,schoolCode:'KEE8018',school:'SMK SIK',name:'YUMIZAH BINTI YUSOF',grade:'DG12',experience:'6 TAHUN'},
 {id:30,schoolCode:'KFA8001',school:'MAAHAD DINI SULTAN ABDUL HALIM',name:'MUHAMMAD HAFIZ BIN AMAT',grade:'DG9',experience:'4 TAHUN'},
 {id:31,schoolCode:'KFT8002',school:'MAKTAB MAHMUD SIK',name:'NUR BASYIRAH BINTI MOHAMAD RITZUAN',grade:'DG10',experience:'6 TAHUN'},
 {id:32,schoolCode:'KFT8003',school:'SEKOLAH MENENGAH AGAMA IRSYADIAH',name:'MUHD AZIM SOLIHI BIN AHMAD',grade:'DG10',experience:'7 TAHUN'},
 {id:33,schoolCode:'KRA8001',school:'SMK AGAMA SIK',name:'AZIAN BINTI MOHD SUHAIMI',grade:'DG9',experience:'0 TAHUN'}
];
const $=s=>document.querySelector(s), initials=n=>n.split(/\s+/).slice(0,2).map(x=>x[0]).join('');
const years=t=>{const n=parseInt(t);return t.includes('BULAN')?n/12:n};
function renderMetrics(){const uniqueGrades=new Set(teachers.map(t=>t.grade)).size, experienced=teachers.filter(t=>years(t.experience)>=5).length;$('#metrics').innerHTML=[['◉','GURU ADMIN DELIMA',teachers.length,'Rekod aktif dalam sumber'],['▣','SEKOLAH BERREKOD',new Set(teachers.map(t=>t.school)).size,'Liputan sekolah semasa'],['≋','GRED JAWATAN',uniqueGrades,'DG7 hingga DG12'],['◷','5+ TAHUN PENGALAMAN',experienced,'Pentadbiran DELIMa']].map(x=>`<article class="metric"><span class="metric-icon">${x[0]}</span><div class="metric-label">${x[1]}</div><div class="metric-value">${x[2]}</div><div class="metric-note">${x[3]}</div></article>`).join('')}
function renderRecent(){ $('#recentTeachers').innerHTML=teachers.slice(0,4).map(t=>`<div class="mini-teacher"><span class="initials">${initials(t.name)}</span><span><b>${t.name}</b><small>${t.school}</small></span><em>${t.grade}</em></div>`).join('') }
function renderRows(){const q=$('#searchInput').value.toLowerCase().trim(),g=$('#gradeFilter').value;const records=teachers.filter(t=>(!g||t.grade===g)&&(!q||`${t.name} ${t.school} ${t.schoolCode}`.toLowerCase().includes(q)));$('#teacherRows').innerHTML=records.length?records.map(t=>`<tr data-id="${t.id}"><td><div class="teacher-cell"><span class="initials">${initials(t.name)}</span><span><b>${t.name}</b><small>${t.schoolCode}</small></span></div></td><td>${t.school}</td><td><span class="grade-tag">${t.grade}</span></td><td><span class="experience">${t.experience}</span></td><td class="row-arrow">›</td></tr>`).join(''):`<tr><td colspan="5">Tiada rekod sepadan.</td></tr>`;$('#tableFooter').textContent=`Memaparkan ${records.length} daripada ${teachers.length} rekod`;$('#recordCount').textContent=`${teachers.length} rekod aktif`;document.querySelectorAll('#teacherRows tr[data-id]').forEach(row=>row.addEventListener('click',()=>showProfile(teachers.find(t=>t.id===+row.dataset.id))))}
function showProfile(t){$('#profilePanel').innerHTML=`<div class="profile-head"><span class="initials">${initials(t.name)}</span><div><h3>${t.name}</h3><p>Guru Admin DELIMa</p></div></div><div class="profile-section"><span>SEKOLAH</span><div class="profile-item"><small>NAMA SEKOLAH</small><b>${t.school}</b></div><div class="profile-item"><small>KOD SEKOLAH</small><b>${t.schoolCode}</b></div></div><div class="profile-section"><span>PERANAN</span><div class="profile-item"><small>GRED JAWATAN</small><b>${t.grade}</b></div><div class="profile-item"><small>PENGALAMAN ADMIN DELIMA</small><b>${t.experience}</b></div></div><p class="privacy-note">Maklumat hubungan dan pengenalan peribadi tidak dipaparkan dalam aplikasi ini.</p>`}
function switchView(id){document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===id));document.querySelectorAll('.nav-link').forEach(b=>b.classList.toggle('active',b.dataset.view===id));$('#breadcrumb').innerHTML=`Pusat Kawalan <span>/</span> ${id==='overview'?'Gambaran Keseluruhan':id==='teachers'?'Profile Guru / Guru Admin DELIMa':'Modul masa hadapan'}`;$('#sidebar').classList.remove('open');$('#overlay').classList.remove('open');window.scrollTo({top:0,behavior:'smooth'})}
renderMetrics();renderRecent();[...new Set(teachers.map(t=>t.grade))].sort().forEach(g=>$('#gradeFilter').insertAdjacentHTML('beforeend',`<option value="${g}">${g}</option>`));renderRows();$('#searchInput').addEventListener('input',renderRows);$('#gradeFilter').addEventListener('change',renderRows);$('#clearFilters').addEventListener('click',()=>{$('#searchInput').value='';$('#gradeFilter').value='';renderRows()});document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>switchView(b.dataset.view)));document.querySelectorAll('[data-goto]').forEach(b=>b.addEventListener('click',()=>switchView(b.dataset.goto)));$('#menuButton').addEventListener('click',()=>{$('#sidebar').classList.add('open');$('#overlay').classList.add('open')});$('#overlay').addEventListener('click',()=>{$('#sidebar').classList.remove('open');$('#overlay').classList.remove('open')});
