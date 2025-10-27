[index.html](https://github.com/user-attachments/files/23161286/index.html)

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>KDA Student Achievement Showcase</title>
  <meta name="description" content="KDA Student Achievement Showcase - celebrating student success in academics, sports, and beyond.">
  <meta property="og:title" content="KDA Student Achievement Showcase">
  <meta property="og:description" content="Celebrating student excellence and success at KDA.">
  <meta property="og:image" content="image/kda-banner.jpg">
  <link rel="icon" href="image/favicon.ico" type="image/x-icon">

  <!-- Font Awesome for Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

  <!-- AOS Animation Library -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

  <style>
    html { scroll-behavior: smooth; }

    :root {
      --primary: #22577a;
      --secondary: #38a3a5;
      --highlight: #ffd166;
      --bg: #f8f9fa;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      color: #222;
      background: var(--bg);
      min-height: 100vh;
      transition: background 0.4s, color 0.4s;
      overflow-x: hidden;
    }

    main {
      max-width: 1200px;
      margin: auto;
      padding: 1rem;
    }

    /* ===== LOADER ===== */
    #loader {
      position: fixed;
      inset: 0;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      color: #fff;
      font-size: 2rem;
      font-weight: bold;
      flex-direction: column;
      gap: 1rem;
      animation: fadeOut 0.8s ease-in-out forwards;
      animation-delay: 2.2s;
      pointer-events: none;
    }

    #loader.hidden { opacity: 0; visibility: hidden; }

    .loader-logo {
      width: 80px;
      height: 80px;
      border: 6px solid rgba(255,255,255,0.3);
      border-top: 6px solid var(--highlight);
      border-radius: 50%;
      animation: spin 1.3s linear infinite;
    }

    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes fadeOut { to { opacity: 0; visibility: hidden; } }

    /* ===== BODY BACKGROUND ===== */
    body::before {
      content: "";
      position: fixed;
      inset: 0;
      z-index: -1;
      background: url("kda.jpg") center/cover no-repeat;
      filter: blur(6px);
      opacity: 0.5;
    }

    /* ===== HEADER ===== */
    header {
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: #fff;
      text-align: center;
      padding: 3rem 1rem 2rem;
      position: relative;
      overflow: hidden;
    }

    header h1 {
      font-size: 2.8rem;
      letter-spacing: 2px;
      margin-bottom: 0.5rem;
      background: linear-gradient(90deg, #fff, #ffd166, #fff);
      background-size: 200%;
      -webkit-background-clip: text;
      color: transparent;
      animation: shine 4s linear infinite;
    }

    @keyframes shine { to { background-position: 200%; } }

    header::after {
      content: "";
      position: absolute;
      bottom: -20px;
      left: 50%;
      width: 80%;
      height: 4px;
      background: var(--highlight);
      transform: translateX(-50%);
      border-radius: 2px;
    }

    header p {
      font-size: 1.1rem;
      opacity: 0.9;
      animation: fadeInUp 1.2s ease-out;
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* ===== NAVBAR ===== */
    nav {
      background: var(--secondary);
      text-align: center;
      padding: 0.8rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    nav a {
      color: #fff;
      margin: 0 0.6rem;
      font-weight: bold;
      text-decoration: none;
      transition: color 0.2s, border-bottom 0.3s;
      border-bottom: 2px solid transparent;
    }

    nav a:hover, nav a.active {
      color: var(--highlight);
      border-bottom: 2px solid var(--highlight);
    }

    .dark-toggle {
      background: var(--highlight);
      color: var(--primary);
      border: none;
      padding: 0.4rem 0.8rem;
      border-radius: 6px;
      cursor: pointer;
      font-weight: bold;
      transition: transform 0.2s, background 0.3s;
    }

    .dark-toggle:hover {
      transform: scale(1.05);
      background: #ffe57f;
    }

    /* ===== HERO SECTION ===== */
    .hero {
      background: linear-gradient(to right, rgba(34,87,122,0.95), rgba(56,163,165,0.9));
      color: #fff;
      text-align: center;
      padding: 3rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
      margin: 2rem auto;
      animation: fadeIn 1s ease-in;
    }

    @keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }

    /* ===== ACHIEVEMENTS SECTION ===== */
    .achievements-section {
      margin: 2rem auto;
      padding: 2rem;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(56,163,165,0.1);
    }

    .achievements-section h2 {
      color: var(--primary);
      text-align: center;
      margin-bottom: 1.5rem;
    }

    .achievements-list {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: center;
      align-items: stretch;
    }

    .achievement-card {
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      width: 260px;
      overflow: hidden;
      transition: transform 0.3s, box-shadow 0.3s;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      opacity: 0;
      transform: translateY(20px);
      animation: slideUp 0.6s ease-out forwards;
      animation-delay: calc(var(--i) * 0.2s);
    }

    @keyframes slideUp { to { opacity: 1; transform: translateY(0); } }

    .achievement-card:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 8px 20px rgba(56,163,165,0.25);
    }

    .achievement-photo {
      height: 180px;
      overflow: hidden;
      position: relative;
    }

    .achievement-photo::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(34,87,122,0.4), transparent);
    }

    .achievement-photo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }

    .achievement-photo img:hover { transform: scale(1.08); }

    .achievement-info {
      padding: 1rem 1.2rem;
      text-align: center;
      flex-grow: 1;
    }

    .achievement-info .student {
      font-weight: bold;
      font-size: 1.1rem;
      color: var(--primary);
      margin-bottom: 0.5rem;
      display: block;
    }

    .achievement-info .category {
      background: var(--secondary);
      color: #fff;
      padding: 0.25rem 0.8rem;
      border-radius: 5px;
      font-size: 0.85rem;
      display: inline-block;
      margin-bottom: 0.5rem;
    }

    .achievement-info .desc {
      font-size: 0.9rem;
      color: #333;
      line-height: 1.4;
    }

    /* ===== CONTACT FORM ===== */
    form {
      background: #fff;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      margin: 2rem auto;
    }

    form label {
      font-weight: bold;
      margin-bottom: 0.3rem;
      display: block;
    }

    form input, form textarea {
      width: 100%;
      padding: 0.8rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 1rem;
    }

    form button {
      background: var(--primary);
      color: #fff;
      border: none;
      padding: 0.8rem 1.2rem;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s, transform 0.2s;
    }

    form button:hover {
      background: var(--secondary);
      transform: scale(1.03);
    }

    footer {
      background: var(--primary);
      color: #fff;
      text-align: center;
      padding: 1.5rem 1rem;
      margin-top: 3rem;
      letter-spacing: 1px;
    }

    footer i {
      margin: 0 0.5rem;
      color: var(--highlight);
      transition: color 0.3s;
    }

    footer i:hover { color: #fff; }

    /* ===== DARK MODE ===== */
    body.dark-mode {
      background: #0d1117;
      color: #f0f6fc;
    }

    body.dark-mode .hero {
      background: linear-gradient(to right, rgba(30,58,138,0.9), rgba(56,163,165,0.8));
    }

    body.dark-mode .achievements-section,
    body.dark-mode form {
      background: rgba(30, 41, 59, 0.9);
      color: #e2e8f0;
    }

    body.dark-mode .achievement-card {
      background: #1e293b;
      color: #e2e8f0;
    }

    body.dark-mode .achievement-info .desc { color: #cbd5e1; }

    body.dark-mode .category {
      background: #38bdf8;
      color: #0f172a;
    }

    body.dark-mode footer { background: #1e293b; }

    @media (max-width: 700px) {
      .achievements-list { flex-direction: column; align-items: center; }
      .achievement-card { width: 85%; }
    }
  </style>
</head>

<body>
  <!-- ===== LOADER ===== -->
  <div id="loader">
    <div class="loader-logo"></div>
    <div>KDA Showcase</div>
  </div>

  <header id="home" data-aos="fade-down">
    <h1>KDA Student Achievement Showcase</h1>
    <p>Celebrating Excellence, Inspiring the Future</p>
  </header>

  <nav>
    <a href="#home">Home</a>
    <a href="#sports">Sports</a>
    <a href="#academic">Academics</a>
    <a href="#contact">Contact</a>
    <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i> YouTube</a>
    <button class="dark-toggle" onclick="toggleDarkMode()">🌙 Dark</button>
  </nav>

  <main>
    <section class="hero" data-aos="zoom-in">
      <h2>Welcome to Our Celebration Platform</h2>
      <p>At KDA, we believe in recognizing and celebrating every student’s success — whether it's in academics, sports, arts, or leadership. Explore inspiring stories and celebrate together!</p>
    </section>

    <section class="achievements-section" id="sports" data-aos="fade-up">
      <h2>Sports Achievements</h2>
      <div class="achievements-list">
        <div class="achievement-card" style="--i:0;">
          <div class="achievement-photo">
            <img src="image/owen.webp" alt="Owen playing football">
          </div>
          <div class="achievement-info">
            <span class="student">Bana Owen</span>
            <span class="category">Football</span>
            <p class="desc">Owen was the best player in the school football team this year, showing amazing leadership and teamwork.</p>
          </div>
        </div>

        <div class="achievement-card" style="--i:1;">
          <div class="achievement-photo" style="height: 50%;">
            <img src="images/davis-swimmer.jpg" alt="Davis swimming in competition">
          </div>
          <div class="achievement-info" style="height: 50%;">
            <span class="student">Davis</span>
            <span class="category">Swimming</span>
            <p class="desc">Davis is an exceptional swimmer known for his speed, endurance, and perfect technique. He has won multiple gold medals in national championships, inspiring younger athletes to excel.</p>
          </div>
        </div>

        <div class="achievement-card" style="--i:2;">
          <div class="achievement-photo">
            <img src="image/IMG-20250818-WA0008.jpg" alt="Nick playing basketball">
          </div>
          <div class="achievement-info">
            <span class="student">Nick</span>
            <span class="category">Basketball</span>
            <p class="desc">Nick was the MVP in basketball for his outstanding performance and inspiring commitment to the team.</p>
          </div>
        </div>

        <div class="achievement-card" style="--i:3;">
          <div class="achievement-photo">
            <img src="image/mirreal12.jpg" alt="Mir Junior playing volleyball">
          </div>
          <div class="achievement-info">
            <span class="student">Mir Junior</span>
            <span class="category">Volleyball</span>
            <p class="desc">Mir Junior was awarded the Most Valuable Player in volleyball, showing great spirit and sportsmanship.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="achievements-section" id="academic" data-aos="fade-up">
      <h2>Academic Achievements</h2>
      <div class="achievements-list">
        <div class="achievement-card" style="--i:0;">
          <div class="achievement-photo">
            <img src="image/kda btec.jpg" alt="BTEC science, IT and business students group">
          </div>
          <div class="achievement-info">
            <span class="student">G12 BTEC Science, IT & Business</span>
            <span class="category">BTEC</span>
            <p class="desc">Students achieved high marks across all units, showing strong academic excellence and teamwork.</p>
          </div>
        </div>

        <div class="achievement-card" style="--i:1;">
          <div class="achievement-photo">
            <img src="image/mark ethan.jpg" alt="Mark Ethan academic excellence">
          </div>
          <div class="achievement-info">
            <span class="student">Mark Ethan</span>
            <span class="category">Cambridge</span>
            <p class="desc">Achieved 3A* in Math, Physics, and Geography — a great example of dedication and hard work.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" data-aos="fade-up">
      <form>
        <h2>Contact Us</h2>
        <label>Name:</label>
        <input type="text" placeholder="Your name" required>
        <label>Email:</label>
        <input type="email" placeholder="Your email" required>
        <label>Message:</label>
        <textarea rows="4" placeholder="Write your message..." required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 KDA Student Achievement Showcase. All rights reserved.</p>
    <div>
      <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-facebook"></i></a>
    </div>
  </footer>

  <button id="backToTop" style="position:fixed;bottom:20px;right:20px;padding:10px 14px;background:var(--secondary);color:white;border:none;border-radius:50%;cursor:pointer;display:none;font-size:1.2rem;">↑</button>

  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script>
    AOS.init({ duration: 800 });

    const loader = document.getElementById('loader');
    window.addEventListener('load', () => loader.classList.add('hidden'));

    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
    }

    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
      backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    backToTop.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
  </script>
</body>
</html>
<img width="528" height="698" alt="davis" src="https://github.com/user-attachments/assets/df70b7a4-dbc5-4ce0-9d3e-965f3c00da8c" />
![IMG-20250818-WA0008](https://github.com/user-attachments/assets/9d53f96a-15cd-44ee-ae65-3e0406e0bc7e)
![kda btec](https://github.com/user-attachments/assets/de9a2b66-c0e2-4be8-a17f-cd0f6ffc83be)
![mark ethan](https://github.com/user-attachments/assets/ba474225-f215-46f9-8b31-f9ef919c48f5)
<img width="65" height="296" alt="mirreal2" src="https://github.com/user-attachments/assets/9aaf0657-97ed-423e-a404-d6d1e5d85cea" />
![mirreal12](https://github.com/user-attachments/assets/0a73af61-e026-4a1d-bbef-2fa9e96bd76f)
![owen](https://github.com/us![shalom](https://github.com/user-attachments/assets/bf42659e-f818-4889-826a-81f75f66c249)
er-attachments/assets/269ee930-a431-43ed-a720-f2ba7a21f13a)
