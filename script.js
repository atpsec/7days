const skills = [
  {
    title: "DevSecOps temel mantığı",
    phase: "Planlama",
    tool: "Security checklist",
    summary: "Güvenliği yazılım yaşam döngüsünün sonuna değil, her aşamasına eklemek.",
    lab: "Secure SDLC checklist hazırla.",
    question: "Güvenlik kapısı nedir?",
    repeat: "D+1"
  },
  {
    title: "CI/CD pipeline güvenliği",
    phase: "Build",
    tool: "GitHub Actions",
    summary: "Kodun build, test ve deploy sürecinin güvenli çalışmasını sağlamak.",
    lab: "Kritik bulguda merge engelleyen pipeline kur.",
    question: "Hangi aşamada fail edilmeli?",
    repeat: "D+3"
  },
  {
    title: "GitHub Actions güvenliği",
    phase: "PR",
    tool: "permissions, pinned actions",
    summary: "Workflow dosyaları, token izinleri ve action sürümlerini güvenli yönetmek.",
    lab: "Minimum izinli workflow yaz.",
    question: "Script injection nasıl oluşur?",
    repeat: "D+7"
  },
  {
    title: "SAST",
    phase: "PR",
    tool: "Bandit, Semgrep",
    summary: "Kodu çalıştırmadan güvenlik açıklarını analiz etmek.",
    lab: "Güvensiz Python örneklerini Bandit ile tara.",
    question: "SAST neyi göremez?",
    repeat: "D+1"
  },
  {
    title: "DAST",
    phase: "Test",
    tool: "OWASP ZAP, Juice Shop",
    summary: "Uygulamayı çalışırken izinli test ortamında analiz etmek.",
    lab: "Lokal Juice Shop için pasif DAST raporu üret.",
    question: "DAST ne zaman çalışmalı?",
    repeat: "D+7"
  },
  {
    title: "Bandit ile Python güvenlik analizi",
    phase: "PR",
    tool: "Bandit",
    summary: "Python kodunda yaygın güvenlik hatalarını tespit etmek.",
    lab: "Bandit JSON ve SARIF çıktısı üret.",
    question: "Severity ve confidence farkı nedir?",
    repeat: "D+1"
  },
  {
    title: "SARIF standardı",
    phase: "Raporlama",
    tool: "SARIF, upload-sarif",
    summary: "Farklı güvenlik araçlarının bulgularını standart formatta taşımak.",
    lab: "Bandit SARIF dosyasını GitHub Security sekmesine yükle.",
    question: "SARIF neden önemlidir?",
    repeat: "D+3"
  },
  {
    title: "JSON/SARIF → HTML rapor",
    phase: "Raporlama",
    tool: "Python, Jinja2",
    summary: "Makine çıktısını okunabilir güvenlik raporuna dönüştürmek.",
    lab: "Bandit JSON raporundan HTML tablo üret.",
    question: "Raporda hangi alanlar olmalı?",
    repeat: "D+7"
  },
  {
    title: "Secret yönetimi",
    phase: "PR",
    tool: "GitHub Secrets, Gitleaks",
    summary: "API key, token ve parolaları koddan ayırmak ve sızıntıyı önlemek.",
    lab: ".env.example ve secret prevention policy oluştur.",
    question: "Secret rotate ne demek?",
    repeat: "D+1"
  },
  {
    title: "Dependency scanning",
    phase: "PR",
    tool: "Dependency Review, pip-audit",
    summary: "Bağımlılıklardaki bilinen zafiyetleri yakalamak.",
    lab: "Zafiyetli dependency PR senaryosu hazırla.",
    question: "CVE nasıl önceliklendirilir?",
    repeat: "D+7"
  },
  {
    title: "Container security",
    phase: "Build",
    tool: "Trivy",
    summary: "Docker image ve base image risklerini analiz etmek.",
    lab: "Docker image scan ve hardening raporu üret.",
    question: "Root user riski nedir?",
    repeat: "D+14"
  },
  {
    title: "IaC security",
    phase: "Deploy",
    tool: "Checkov",
    summary: "Terraform, Kubernetes, Docker ve CI/CD konfigürasyon hatalarını yakalamak.",
    lab: "Docker Compose veya Terraform örneğini tara.",
    question: "Misconfiguration nedir?",
    repeat: "D+14"
  },
  {
    title: "Log analizi ve gözlemlenebilirlik",
    phase: "Raporlama",
    tool: "GitHub Actions logs",
    summary: "Pipeline çıktılarından güvenlik sinyali çıkarmak.",
    lab: "Başarısız güvenlik job’larını analiz et.",
    question: "Loglarda hangi bilgi saklanmamalıdır?",
    repeat: "D+14"
  },
  {
    title: "Bulgu önceliklendirme",
    phase: "Raporlama",
    tool: "Risk matrix",
    summary: "Bulguları severity, exploitability ve asset criticality ile sıralamak.",
    lab: "20 bulgudan ilk 5 aksiyonu seç.",
    question: "Kritik bulgu nasıl tanımlanır?",
    repeat: "D+7"
  },
  {
    title: "Pipeline güvenlik otomasyonu",
    phase: "Deploy",
    tool: "GitHub Actions",
    summary: "SAST, DAST, secret, dependency, container ve IaC kontrollerini otomatikleştirmek.",
    lab: "Full DevSecOps pipeline tasarla.",
    question: "Hangi kontrol blocking olmalı?",
    repeat: "D+30"
  }
];

const weekOne = [
  ["1", "DevSecOps + CI/CD güvenliği", "DevSecOps’un sona eklenen güvenlik olmadığını anlamak", "90 dk", "DevSecOps nedir? CI/CD’de risk nerede oluşur? Security gate nedir?", "DevSecOps’u teknik olmayan bir yöneticiye anlat.", "Kendi Python test reposunu oluştur, README’ye güvenlik hedeflerini yaz.", "Git, GitHub", "D+1, D+3", "Repo hazır, README’de hedefler var", "devsecops-learning-lab"],
  ["2", "GitHub Actions temeli", "Basit CI workflow kurmak", "90–120 dk", "Workflow, job, step, runner nedir?", "GitHub Actions’ı fabrika bandı gibi anlat.", "Python test + lint workflow kur.", "GitHub Actions, pytest", "D+1, D+3", "Push sonrası workflow çalışıyor", ".github/workflows/ci.yml"],
  ["3", "Bandit SAST", "Python kodunu güvenlik açısından taramak", "90 dk", "Bandit neyi bulur? SAST neyi göremez?", "Bandit’i kod doktoru gibi anlat.", "Güvenli/güvensiz örnekler ekle, Bandit çalıştır.", "Bandit", "D+1, D+7", "Bandit bulgusu üretiliyor", "bandit-results.txt"],
  ["4", "Bandit JSON + HTML rapor", "Makine çıktısını okunabilir rapora çevirmek", "120 dk", "JSON rapor neden gerekir? HTML raporda hangi alanlar olmalı?", "JSON’dan rapora dönüşümü yönetici raporu gibi anlat.", "bandit -f json çıktısını al, Python ile HTML üret.", "Bandit, Python, Jinja2", "D+1, D+3, D+7", "HTML rapor oluşuyor", "security-report.html"],
  ["5", "SARIF + GitHub Security", "Bandit bulgularını SARIF’e dönüştürüp GitHub’a yüklemek", "120 dk", "SARIF nedir? Upload neden fail olur?", "SARIF’i farklı araçların ortak dili gibi anlat.", "Bandit SARIF üret, upload-sarif action kullan.", "Bandit, GitHub Code Scanning", "D+1, D+7", "Security tab’da alert görünür", "bandit.sarif"],
  ["6", "Secret + dependency scanning", "Secret ve bağımlılık risklerini anlamak", "90–120 dk", "Secret nedir? CVE nedir? Lock file neden önemli?", "API key’in koda yazılmasının riskini anlat.", "Secret prevention ve dependency review örneği kur.", "GitHub Secrets, Gitleaks", "D+1, D+7", "PR’da dependency/security kontrolü var", "dependency-review.yml"],
  ["7", "Mini DevSecOps pipeline", "İlk güvenlik kapılı pipeline’ı kurmak", "120 dk", "Hangi bulgu pipeline’ı durdurmalı?", "Pipeline’ı geliştiriciye 5 dakikada anlat.", "CI + Bandit + SARIF + HTML artifact birleşimi.", "GitHub Actions, Bandit", "D+1, D+7, D+14", "Pipeline uçtan uca çalışıyor", "İlk haftalık portföy raporu"]
];

const roadmap = [
  {
    period: "1",
    week: "1. Hafta",
    topic: "DevSecOps, CI/CD, GitHub Actions, Bandit başlangıç",
    labs: "Python repo, CI workflow, Bandit scan, JSON output",
    scenario: "PR açıldığında güvenlik taraması çalışsın.",
    review: "D+1 / D+3 / D+7",
    evaluation: "10 soru + çalışan workflow",
    output: "İlk DevSecOps lab raporu",
    github: "devsecops-learning-lab"
  },
  {
    period: "1",
    week: "2. Hafta",
    topic: "Bandit derinleşme, severity/confidence, config",
    labs: ".bandit, exclude/include, baseline mantığı",
    scenario: "Test klasörlerini hariç tut, gerçek bulguları raporla.",
    review: "D+1 / D+7",
    evaluation: "3 güvenli + 3 güvensiz kod örneği",
    output: "Bandit kural analizi",
    github: "bandit-config-lab"
  },
  {
    period: "1",
    week: "3. Hafta",
    topic: "JSON → HTML rapor",
    labs: "Jinja2 ile HTML üretimi, tablo, risk etiketi",
    scenario: "Yöneticiye okunabilir güvenlik raporu üret.",
    review: "D+1 / D+3 / D+7",
    evaluation: "Raporda severity, file, line, remediation var",
    output: "HTML security report",
    github: "security-report-generator"
  },
  {
    period: "1",
    week: "4. Hafta",
    topic: "SARIF, GitHub Security, güvenlik kapısı",
    labs: "SARIF upload, pipeline fail condition",
    scenario: "High bulgu varsa pipeline dursun.",
    review: "D+1 / D+7 / D+14",
    evaluation: "GitHub Security sekmesinde bulgu görünür",
    output: "Security gate dokümanı",
    github: "bandit-sarif-github-security"
  },
  {
    period: "2",
    week: "5. Hafta",
    topic: "Dependency scanning, SBOM mantığı, CVE önceliklendirme",
    labs: "Dependency Review Action, pip-audit yaklaşımı",
    scenario: "Yeni PR zafiyetli dependency eklerse uyarı/fail üret.",
    review: "D+1 / D+7",
    evaluation: "CVE risk sınıflandırma tablosu",
    output: "Dependency risk raporu",
    github: "dependency-security-lab"
  },
  {
    period: "2",
    week: "6. Hafta",
    topic: "Secret scanning, secret lifecycle, rotation",
    labs: "Gitleaks mantığı, .env.example, secret policy",
    scenario: "Yanlışlıkla commit edilen secret nasıl yönetilir?",
    review: "D+1 / D+3 / D+7",
    evaluation: "Secret prevention checklist",
    output: "Secret hygiene policy",
    github: "secret-scanning-lab"
  },
  {
    period: "2",
    week: "7. Hafta",
    topic: "DAST temeli, OWASP ZAP Baseline, Juice Shop",
    labs: "Lokal Juice Shop veya DVWA’ya pasif tarama",
    scenario: "Staging ortamında pasif DAST raporu üret.",
    review: "D+1 / D+7 / D+14",
    evaluation: "DAST raporunda false positive işaretleme",
    output: "DAST lab raporu",
    github: "dast-local-lab"
  },
  {
    period: "2",
    week: "8. Hafta",
    topic: "Container security",
    labs: "Dockerfile hardening, Trivy image scan",
    scenario: "Root user ile çalışan image riskini raporla.",
    review: "D+1 / D+7",
    evaluation: "Image scan + remediation",
    output: "Container security report",
    github: "container-security-lab"
  },
  {
    period: "2",
    week: "9. Hafta",
    topic: "IaC security + pipeline hardening",
    labs: "Checkov ile Docker Compose/Terraform örneği",
    scenario: "Deploy öncesi misconfiguration yakala.",
    review: "D+1 / D+7 / D+14",
    evaluation: "IaC bulgu matrisi",
    output: "IaC security report",
    github: "iac-security-lab"
  },
  {
    period: "3",
    week: "10. Hafta",
    topic: "Merkezi güvenlik raporlama",
    labs: "SAST + dependency + secret + container sonuçlarını tek raporda birleştir",
    scenario: "Tek pipeline, tek yönetici raporu.",
    review: "D+1 / D+7",
    evaluation: "Çok kaynaklı rapor üretimi",
    output: "Unified security report",
    github: "unified-security-dashboard"
  },
  {
    period: "3",
    week: "11. Hafta",
    topic: "Risk önceliklendirme",
    labs: "Severity, asset criticality, exploitability matrisi",
    scenario: "20 bulgudan ilk 5’i seç ve gerekçelendir.",
    review: "D+1 / D+7 / D+14",
    evaluation: "Risk matrisi doğru çalışıyor",
    output: "Risk prioritization report",
    github: "risk-prioritization-lab"
  },
  {
    period: "3",
    week: "12. Hafta",
    topic: "Gerçekçi DevSecOps senaryosu",
    labs: "PR güvenlik kontrolü, fail/pass, rapor, issue oluşturma",
    scenario: "Release öncesi security gate.",
    review: "D+1 / D+7",
    evaluation: "Uçtan uca senaryo demosu",
    output: "End-to-end case study",
    github: "release-security-gate"
  },
  {
    period: "3",
    week: "13. Hafta",
    topic: "Portföy ve mülakat hazırlığı",
    labs: "README, demo, mimari diyagram, LinkedIn özetleri",
    scenario: "Projeyi işe alım görüşmesinde anlat.",
    review: "D+1 / D+7 / D+30",
    evaluation: "5 dakikalık proje anlatımı",
    output: "Final DevSecOps portfolio",
    github: "devsecops-portfolio"
  }
];

const projects = [
  ["devsecops-learning-lab", "Temel CI/CD + güvenlik kontrolleri", "DevSecOps temeli"],
  ["bandit-security-scan", "Python projesinde Bandit taraması", "SAST"],
  ["bandit-json-html-report", "JSON çıktısından HTML rapor üretimi", "Güvenlik raporlama"],
  ["bandit-sarif-github-security", "SARIF upload + GitHub Security entegrasyonu", "Code scanning"],
  ["github-actions-security-gate", "High/Critical bulguda pipeline fail", "Security gate"],
  ["dependency-security-lab", "Dependency Review ve dependency kontrolü", "Supply chain security"],
  ["secret-scanning-lab", "Secret prevention ve güvenli secret kullanımı", "Credential security"],
  ["dast-local-lab", "OWASP Juice Shop/DVWA üzerinde lokal DAST", "DAST"],
  ["container-security-lab", "Docker image scan + hardening", "Container security"],
  ["iac-security-lab", "IaC misconfiguration scanning", "IaC security"],
  ["unified-security-dashboard", "Çok araçlı güvenlik raporlarını birleştirme", "Merkezi raporlama"],
  ["devsecops-portfolio", "Final doküman, mimari, raporlar, demo", "Profesyonel sunum"]
];

const exams = [
  ["1", "DevSecOps, CI/CD ve GitHub Actions temel kavramları"],
  ["2", "Bandit bulgularını severity/confidence ile sınıflandırma"],
  ["3", "JSON rapordan HTML rapor alanlarını çıkarma"],
  ["4", "SARIF upload hatalarını teşhis etme"],
  ["5", "Dependency riskini CVE ve etki ile sıralama"],
  ["6", "Secret leakage senaryosunda müdahale planı yazma"],
  ["7", "Lokal DAST raporunu yorumlama"],
  ["8", "Container image risklerini azaltma önerileri"],
  ["9", "IaC misconfiguration bulgularını açıklama"],
  ["10", "Çok araçlı güvenlik raporu tasarlama"],
  ["11", "20 bulguyu risk önceliğine göre sıralama"],
  ["12", "Release security gate tasarımı"],
  ["13", "5 dakikalık mülakat sunumu"]
];

const interview = [
  ["Bandit + SARIF + GitHub Security", "Python projesinde Bandit ile SAST taraması yaptım. Bulguları JSON ve SARIF olarak ürettim. SARIF dosyasını GitHub Code Scanning’e yükleyerek bulguların Security sekmesinde merkezi görünmesini sağladım."],
  ["HTML Security Report Generator", "Ham güvenlik çıktısını yönetici ve geliştirici için okunabilir HTML rapora dönüştürdüm. Raporda severity, dosya, satır, açıklama ve önerilen aksiyonları sundum."],
  ["Security Gate Pipeline", "CI/CD pipeline içinde High severity bulgu varsa build’i durduran bir güvenlik kapısı tasarladım. Böylece kritik risklerin merge edilmesini engelledim."],
  ["Dependency Security Lab", "PR ile gelen dependency değişikliklerini otomatik kontrol eden bir yapı kurdum. Bilinen zafiyetlerde uyarı veya bloklama davranışı ekledim."],
  ["DAST Local Lab", "OWASP Juice Shop gibi izinli lokal lab üzerinde DAST yaklaşımını test ettim. Bulguları raporlayıp false positive değerlendirmesi yaptım."],
  ["Unified DevSecOps Dashboard", "SAST, dependency, secret, container ve DAST çıktılarından merkezi güvenlik raporu üreten bir yapı oluşturdum."]
];

const skillGrid = document.querySelector("#skillGrid");
const skillSearch = document.querySelector("#skillSearch");
const skillPhase = document.querySelector("#skillPhase");

function renderSkills() {
  const query = skillSearch.value.toLowerCase();
  const phase = skillPhase.value;
  const filtered = skills.filter(item => {
    const matchesText = [item.title, item.summary, item.tool, item.lab, item.question].join(" ").toLowerCase().includes(query);
    const matchesPhase = phase === "all" || item.phase === phase;
    return matchesText && matchesPhase;
  });

  skillGrid.innerHTML = filtered.map(item => `
    <article class="skill-card" data-phase="${item.phase}">
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <p><strong>Lab:</strong> ${item.lab}</p>
      <p><strong>Kendini test et:</strong> ${item.question}</p>
      <div class="meta">
        <span class="badge">${item.phase}</span>
        <span class="badge">${item.tool}</span>
        <span class="badge">${item.repeat}</span>
      </div>
    </article>
  `).join("");
}

function renderWeekOne() {
  document.querySelector("#weekOneTable").innerHTML = weekOne.map(row => `
    <tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>
  `).join("");
}

function renderRoadmap(period = "1") {
  const grid = document.querySelector("#roadmapGrid");
  grid.innerHTML = roadmap.filter(item => item.period === period).map(item => `
    <article class="roadmap-card">
      <h3>${item.week}</h3>
      <dl>
        <div><dt>Konular</dt><dd>${item.topic}</dd></div>
        <div><dt>Lab</dt><dd>${item.labs}</dd></div>
        <div><dt>Senaryo</dt><dd>${item.scenario}</dd></div>
        <div><dt>Tekrar</dt><dd>${item.review}</dd></div>
        <div><dt>Ölçme</dt><dd>${item.evaluation}</dd></div>
        <div><dt>Portföy</dt><dd>${item.output}</dd></div>
        <div><dt>GitHub</dt><dd><code>${item.github}</code></dd></div>
      </dl>
    </article>
  `).join("");
}

function renderProjects() {
  document.querySelector("#projectList").innerHTML = projects.map(([name, desc, skill]) => `
    <article class="project-item">
      <h3><code>${name}</code></h3>
      <p>${desc}</p>
      <span class="badge">${skill}</span>
    </article>
  `).join("");
}

function renderExams() {
  document.querySelector("#examGrid").innerHTML = exams.map(([week, desc]) => `
    <article class="exam-item">
      <h3>Hafta ${week}</h3>
      <p>${desc}</p>
    </article>
  `).join("");
}

function renderInterview() {
  document.querySelector("#interviewAccordion").innerHTML = interview.map(([title, body], index) => `
    <article class="accordion-item ${index === 0 ? "open" : ""}">
      <button class="accordion-button" type="button">
        <span>${title}</span>
        <span aria-hidden="true">+</span>
      </button>
      <div class="accordion-content">${body}</div>
    </article>
  `).join("");

  document.querySelectorAll(".accordion-button").forEach(button => {
    button.addEventListener("click", () => {
      button.closest(".accordion-item").classList.toggle("open");
    });
  });
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderRoadmap(tab.dataset.period);
  });
});

document.querySelector("#navToggle").addEventListener("click", () => {
  document.querySelector("#navLinks").classList.toggle("open");
});

skillSearch.addEventListener("input", renderSkills);
skillPhase.addEventListener("change", renderSkills);

renderSkills();
renderWeekOne();
renderRoadmap("1");
renderProjects();
renderExams();
renderInterview();
