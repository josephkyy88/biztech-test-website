/* ─── Biztech Group — Shared Components ─── */

const NAV_HTML = `
<nav id="main-nav" style="background:#fff;border-bottom:1px solid #e5e7eb;position:fixed;top:0;left:0;right:0;z-index:1000;transition:box-shadow .3s;">
  <div class="container">
    <div style="display:flex;align-items:center;justify-content:space-between;height:76px;">
      <!-- Logo -->
      <a href="index.html" style="flex-shrink:0;display:flex;align-items:center;">
        <img src="brand_assets/BiztechGroup.png" alt="Biztech Group Pte Ltd — APAC Technology Infrastructure Partner" style="height:28px;width:auto;" />
      </a>

      <!-- Desktop Nav -->
      <div class="nav-desktop" style="display:flex;align-items:center;gap:2px;">
        <a href="index.html" class="nav-link" style="padding:8px 10px;border-radius:8px;font-size:.84rem;font-weight:500;color:#374151;text-decoration:none;transition:all .2s;white-space:nowrap;" onmouseover="this.style.background='#f9fafb';this.style.color='#0f1e3d'" onmouseout="this.style.background='';this.style.color='#374151'">Home</a>
        <a href="about.html" class="nav-link" style="padding:8px 10px;border-radius:8px;font-size:.84rem;font-weight:500;color:#374151;text-decoration:none;transition:all .2s;white-space:nowrap;" onmouseover="this.style.background='#f9fafb';this.style.color='#0f1e3d'" onmouseout="this.style.background='';this.style.color='#374151'">About</a>

        <!-- Solutions Mega Menu -->
        <div style="position:relative;" class="nav-dropdown-wrap" onmouseenter="document.getElementById('solutions-dd').style.opacity='1';document.getElementById('solutions-dd').style.visibility='visible';document.getElementById('solutions-dd').style.transform='translateY(0)'" onmouseleave="document.getElementById('solutions-dd').style.opacity='0';document.getElementById('solutions-dd').style.visibility='hidden';document.getElementById('solutions-dd').style.transform='translateY(-8px)'">
          <a href="solutions.html" class="nav-link" style="padding:8px 10px;border-radius:8px;font-size:.84rem;font-weight:500;color:#374151;text-decoration:none;transition:all .2s;display:flex;align-items:center;gap:4px;white-space:nowrap;" onmouseover="this.style.background='#f9fafb';this.style.color='#0f1e3d'" onmouseout="this.style.background='';this.style.color='#374151'">
            Solutions <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </a>
          <div id="solutions-dd" style="position:absolute;top:calc(100% + 8px);left:0;width:640px;background:#fff;border-radius:16px;box-shadow:0 24px 64px rgba(0,0,0,.15);border:1px solid #e5e7eb;opacity:0;visibility:hidden;transform:translateY(-8px);transition:all .2s;z-index:100;padding:20px;">
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;">
              <a href="solutions.html#security" style="display:block;padding:12px;border-radius:10px;text-decoration:none;transition:background .15s;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background=''"><p style="font-size:.83rem;font-weight:600;color:#0f1e3d;margin:0 0 2px;">Security Systems</p><p style="font-size:.75rem;color:#9ca3af;margin:0;">CCTV, Access Control, Analytics</p></a>
              <a href="solutions.html#infrastructure" style="display:block;padding:12px;border-radius:10px;text-decoration:none;transition:background .15s;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background=''"><p style="font-size:.83rem;font-weight:600;color:#0f1e3d;margin:0 0 2px;">Network &amp; Infrastructure</p><p style="font-size:.75rem;color:#9ca3af;margin:0;">Cabling, Wi-Fi 6, Data Centre</p></a>
              <a href="solutions.html#smart-building" style="display:block;padding:12px;border-radius:10px;text-decoration:none;transition:background .15s;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background=''"><p style="font-size:.83rem;font-weight:600;color:#0f1e3d;margin:0 0 2px;">Smart Building</p><p style="font-size:.75rem;color:#9ca3af;margin:0;">BAS, IoT, Energy, Occupancy</p></a>
              <a href="solutions.html#digital-experience" style="display:block;padding:12px;border-radius:10px;text-decoration:none;transition:background .15s;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background=''"><p style="font-size:.83rem;font-weight:600;color:#0f1e3d;margin:0 0 2px;">Digital Experience</p><p style="font-size:.75rem;color:#9ca3af;margin:0;">Signage, Video Walls, Kiosks</p></a>
              <a href="solutions.html#av-collaboration" style="display:block;padding:12px;border-radius:10px;text-decoration:none;transition:background .15s;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background=''"><p style="font-size:.83rem;font-weight:600;color:#0f1e3d;margin:0 0 2px;">AV &amp; Collaboration</p><p style="font-size:.75rem;color:#9ca3af;margin:0;">Teams Rooms, Boardrooms, PA</p></a>
              <a href="solutions.html#managed-services" style="display:block;padding:12px;border-radius:10px;text-decoration:none;transition:background .15s;background:#fdf8e8;" onmouseover="this.style.background='#fdf8e8'" onmouseout="this.style.background='#fdf8e8'"><p style="font-size:.83rem;font-weight:600;color:#9a7a20;margin:0 0 2px;">Managed Services ★</p><p style="font-size:.75rem;color:#b8962e;margin:0;">XaaS, SLA, Remote Monitoring</p></a>
              <a href="solutions.html#it-transformation" style="display:block;padding:12px;border-radius:10px;text-decoration:none;transition:background .15s;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background=''"><p style="font-size:.83rem;font-weight:600;color:#0f1e3d;margin:0 0 2px;">IT &amp; Digital Transformation</p><p style="font-size:.75rem;color:#9ca3af;margin:0;">Cloud, Cyber, Microsoft 365</p></a>
              <a href="solutions.html#retail-technology" style="display:block;padding:12px;border-radius:10px;text-decoration:none;transition:background .15s;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background=''"><p style="font-size:.83rem;font-weight:600;color:#0f1e3d;margin:0 0 2px;">Retail Technology</p><p style="font-size:.75rem;color:#9ca3af;margin:0;">POS, Kiosks, KDS, Queue Mgmt</p></a>
              <a href="solutions.html#business-communication" style="display:block;padding:12px;border-radius:10px;text-decoration:none;transition:background .15s;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background=''"><p style="font-size:.83rem;font-weight:600;color:#0f1e3d;margin:0 0 2px;">Business Communication</p><p style="font-size:.75rem;color:#9ca3af;margin:0;">Cloud PBX, VoIP, Teams Calling</p></a>
              <a href="solutions.html#regional-deployment" style="display:block;padding:12px;border-radius:10px;text-decoration:none;transition:background .15s;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background=''"><p style="font-size:.83rem;font-weight:600;color:#0f1e3d;margin:0 0 2px;">Regional Deployment</p><p style="font-size:.75rem;color:#9ca3af;margin:0;">APAC Rollouts, Multi-Site</p></a>
              <a href="solutions.html" style="display:block;padding:12px;border-radius:10px;text-decoration:none;transition:background .15s;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background=''"><span style="font-size:.8rem;font-weight:600;color:#c9a84c;">View All Solutions →</span></a>
            </div>
          </div>
        </div>

        <!-- Industries Dropdown -->
        <div style="position:relative;" class="nav-dropdown-wrap" onmouseenter="document.getElementById('industries-dd').style.opacity='1';document.getElementById('industries-dd').style.visibility='visible';document.getElementById('industries-dd').style.transform='translateY(0)'" onmouseleave="document.getElementById('industries-dd').style.opacity='0';document.getElementById('industries-dd').style.visibility='hidden';document.getElementById('industries-dd').style.transform='translateY(-8px)'">
          <a href="industries.html" class="nav-link" style="padding:8px 10px;border-radius:8px;font-size:.84rem;font-weight:500;color:#374151;text-decoration:none;transition:all .2s;display:flex;align-items:center;gap:4px;white-space:nowrap;" onmouseover="this.style.background='#f9fafb';this.style.color='#0f1e3d'" onmouseout="this.style.background='';this.style.color='#374151'">
            Industries <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </a>
          <div id="industries-dd" style="position:absolute;top:calc(100% + 8px);left:0;width:300px;background:#fff;border-radius:14px;box-shadow:0 20px 60px rgba(0,0,0,.15);border:1px solid #e5e7eb;opacity:0;visibility:hidden;transform:translateY(-8px);transition:all .2s;z-index:100;padding:10px;">
            <a href="industries.html#commercial" style="display:block;padding:10px 12px;border-radius:8px;text-decoration:none;transition:background .15s;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background=''"><span style="font-size:.83rem;font-weight:500;color:#374151;">Commercial Buildings</span></a>
            <a href="industries.html#logistics" style="display:block;padding:10px 12px;border-radius:8px;text-decoration:none;transition:background .15s;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background=''"><span style="font-size:.83rem;font-weight:500;color:#374151;">Logistics &amp; Warehousing</span></a>
            <a href="industries.html#manufacturing" style="display:block;padding:10px 12px;border-radius:8px;text-decoration:none;transition:background .15s;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background=''"><span style="font-size:.83rem;font-weight:500;color:#374151;">Manufacturing</span></a>
            <a href="industries.html#retail" style="display:block;padding:10px 12px;border-radius:8px;text-decoration:none;transition:background .15s;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background=''"><span style="font-size:.83rem;font-weight:500;color:#374151;">Retail Chains</span></a>
            <a href="industries.html#hospitality" style="display:block;padding:10px 12px;border-radius:8px;text-decoration:none;transition:background .15s;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background=''"><span style="font-size:.83rem;font-weight:500;color:#374151;">Hospitality</span></a>
            <a href="industries.html#education" style="display:block;padding:10px 12px;border-radius:8px;text-decoration:none;transition:background .15s;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background=''"><span style="font-size:.83rem;font-weight:500;color:#374151;">Education</span></a>
            <a href="industries.html#healthcare" style="display:block;padding:10px 12px;border-radius:8px;text-decoration:none;transition:background .15s;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background=''"><span style="font-size:.83rem;font-weight:500;color:#374151;">Healthcare</span></a>
            <a href="industries.html#datacentres" style="display:block;padding:10px 12px;border-radius:8px;text-decoration:none;transition:background .15s;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background=''"><span style="font-size:.83rem;font-weight:500;color:#374151;">Data Centres</span></a>
            <a href="industries.html#government" style="display:block;padding:10px 12px;border-radius:8px;text-decoration:none;transition:background .15s;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background=''"><span style="font-size:.83rem;font-weight:500;color:#374151;">Government</span></a>
          </div>
        </div>

        <a href="case-studies.html" class="nav-link" style="padding:8px 10px;border-radius:8px;font-size:.84rem;font-weight:500;color:#374151;text-decoration:none;transition:all .2s;white-space:nowrap;" onmouseover="this.style.background='#f9fafb';this.style.color='#0f1e3d'" onmouseout="this.style.background='';this.style.color='#374151'">Case Studies</a>
        <a href="apac.html" class="nav-link" style="padding:8px 10px;border-radius:8px;font-size:.84rem;font-weight:500;color:#374151;text-decoration:none;transition:all .2s;white-space:nowrap;" onmouseover="this.style.background='#f9fafb';this.style.color='#0f1e3d'" onmouseout="this.style.background='';this.style.color='#374151'">APAC</a>
        <a href="why-choose-us.html" class="nav-link" style="padding:8px 10px;border-radius:8px;font-size:.84rem;font-weight:500;color:#374151;text-decoration:none;transition:all .2s;white-space:nowrap;" onmouseover="this.style.background='#f9fafb';this.style.color='#0f1e3d'" onmouseout="this.style.background='';this.style.color='#374151'">Why Us</a>
        <a href="blog.html" class="nav-link" style="padding:8px 10px;border-radius:8px;font-size:.84rem;font-weight:500;color:#374151;text-decoration:none;transition:all .2s;white-space:nowrap;" onmouseover="this.style.background='#f9fafb';this.style.color='#0f1e3d'" onmouseout="this.style.background='';this.style.color='#374151'">Insights</a>
      </div>

      <!-- CTAs -->
      <div class="nav-ctas" style="display:flex;align-items:center;gap:10px;">
        <a href="tel:+6567588817" style="display:flex;align-items:center;gap:6px;font-size:.82rem;font-weight:600;color:#0f1e3d;text-decoration:none;white-space:nowrap;transition:color .2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='#0f1e3d'">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          +65 6758 8817
        </a>
        <a href="contact.html" class="btn-gold-sm">Get a Proposal</a>
      </div>

      <!-- Hamburger -->
      <button id="nav-hamburger" onclick="toggleMobileMenu()" style="display:none;background:#0f1e3d;border:none;border-radius:8px;padding:9px 10px;cursor:pointer;color:#fff;flex-shrink:0;line-height:0;transition:opacity .15s;" aria-label="Toggle navigation menu">
        <svg id="ham-icon" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        <svg id="close-icon" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="display:none;"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>
  </div>

  <!-- Mobile Menu — premium dark panel -->
  <div id="mobile-menu" style="display:none;background:linear-gradient(180deg,#0f1e3d 0%,#071120 100%);border-top:2px solid rgba(201,168,76,0.45);box-shadow:0 16px 48px rgba(0,0,0,.35);max-height:calc(100vh - 76px);overflow-y:auto;">
    <div>
      <a href="index.html" class="mobile-nav-link" style="display:flex;align-items:center;justify-content:space-between;padding:14px 24px;font-size:.9rem;font-weight:500;color:rgba(255,255,255,.82);text-decoration:none;border-bottom:1px solid rgba(255,255,255,.06);letter-spacing:.01em;">Home<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="opacity:.28;flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg></a>
      <a href="about.html" class="mobile-nav-link" style="display:flex;align-items:center;justify-content:space-between;padding:14px 24px;font-size:.9rem;font-weight:500;color:rgba(255,255,255,.82);text-decoration:none;border-bottom:1px solid rgba(255,255,255,.06);letter-spacing:.01em;">About Us<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="opacity:.28;flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg></a>
      <a href="solutions.html" class="mobile-nav-link" style="display:flex;align-items:center;justify-content:space-between;padding:14px 24px;font-size:.9rem;font-weight:500;color:rgba(255,255,255,.82);text-decoration:none;border-bottom:1px solid rgba(255,255,255,.06);letter-spacing:.01em;">Solutions<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="opacity:.28;flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg></a>
      <a href="industries.html" class="mobile-nav-link" style="display:flex;align-items:center;justify-content:space-between;padding:14px 24px;font-size:.9rem;font-weight:500;color:rgba(255,255,255,.82);text-decoration:none;border-bottom:1px solid rgba(255,255,255,.06);letter-spacing:.01em;">Industries<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="opacity:.28;flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg></a>
      <a href="case-studies.html" class="mobile-nav-link" style="display:flex;align-items:center;justify-content:space-between;padding:14px 24px;font-size:.9rem;font-weight:500;color:rgba(255,255,255,.82);text-decoration:none;border-bottom:1px solid rgba(255,255,255,.06);letter-spacing:.01em;">Case Studies<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="opacity:.28;flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg></a>
      <a href="apac.html" class="mobile-nav-link" style="display:flex;align-items:center;justify-content:space-between;padding:14px 24px;font-size:.9rem;font-weight:500;color:rgba(255,255,255,.82);text-decoration:none;border-bottom:1px solid rgba(255,255,255,.06);letter-spacing:.01em;">APAC Presence<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="opacity:.28;flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg></a>
      <a href="why-choose-us.html" class="mobile-nav-link" style="display:flex;align-items:center;justify-content:space-between;padding:14px 24px;font-size:.9rem;font-weight:500;color:rgba(255,255,255,.82);text-decoration:none;border-bottom:1px solid rgba(255,255,255,.06);letter-spacing:.01em;">Why Biztech<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="opacity:.28;flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg></a>
      <a href="careers.html" class="mobile-nav-link" style="display:flex;align-items:center;justify-content:space-between;padding:14px 24px;font-size:.9rem;font-weight:500;color:rgba(255,255,255,.82);text-decoration:none;border-bottom:1px solid rgba(255,255,255,.06);letter-spacing:.01em;">Careers<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="opacity:.28;flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg></a>
      <a href="blog.html" class="mobile-nav-link" style="display:flex;align-items:center;justify-content:space-between;padding:14px 24px;font-size:.9rem;font-weight:500;color:rgba(255,255,255,.82);text-decoration:none;border-bottom:1px solid rgba(255,255,255,.06);letter-spacing:.01em;">Insights &amp; Blog<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="opacity:.28;flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg></a>
      <a href="contact.html" class="mobile-nav-link" style="display:flex;align-items:center;justify-content:space-between;padding:14px 24px;font-size:.9rem;font-weight:500;color:rgba(255,255,255,.82);text-decoration:none;letter-spacing:.01em;">Contact Us<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="opacity:.28;flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg></a>
    </div>
    <div style="padding:20px 24px 28px;border-top:1px solid rgba(255,255,255,.07);">
      <a href="tel:+6567588817" style="display:flex;align-items:center;gap:10px;font-size:.88rem;font-weight:600;color:rgba(255,255,255,.55);text-decoration:none;margin-bottom:14px;">
        <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        +65 6758 8817
      </a>
      <a href="contact.html" class="btn-gold" style="display:block;text-align:center;justify-content:center;width:100%;">Get a Proposal →</a>
    </div>
  </div>
</nav>
<div style="height:76px;"></div>
`;

const FOOTER_HTML = `
<footer style="background:#071120;color:rgba(255,255,255,.75);">
  <div class="container" style="padding-top:72px;padding-bottom:48px;">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:48px;">

      <!-- Brand -->
      <div>
        <img src="brand_assets/BiztechGroup.png" alt="Biztech Group" style="height:28px;width:auto;display:block;margin-bottom:20px;filter:brightness(0) invert(1);opacity:.88;object-fit:contain;" />
        <p style="font-size:.88rem;line-height:1.75;color:rgba(255,255,255,.55);max-width:280px;margin-bottom:20px;">Asia Pacific's integrated technology infrastructure partner — designing, deploying and managing security, smart building, digital experience and connectivity solutions for enterprise organisations across APAC since 2015.</p>
        <div style="display:flex;gap:10px;">
          <a href="#" style="width:36px;height:36px;background:rgba(255,255,255,.08);border-radius:8px;display:flex;align-items:center;justify-content:center;text-decoration:none;color:rgba(255,255,255,.6);font-size:.85rem;font-weight:700;transition:all .2s;" onmouseover="this.style.background='#c9a84c';this.style.color='#071120'" onmouseout="this.style.background='rgba(255,255,255,.08)';this.style.color='rgba(255,255,255,.6)'">in</a>
          <a href="#" style="width:36px;height:36px;background:rgba(255,255,255,.08);border-radius:8px;display:flex;align-items:center;justify-content:center;text-decoration:none;color:rgba(255,255,255,.6);font-size:.85rem;font-weight:700;transition:all .2s;" onmouseover="this.style.background='#c9a84c';this.style.color='#071120'" onmouseout="this.style.background='rgba(255,255,255,.08)';this.style.color='rgba(255,255,255,.6)'">f</a>
          <a href="https://wa.me/6591121046" style="width:36px;height:36px;background:rgba(255,255,255,.08);border-radius:8px;display:flex;align-items:center;justify-content:center;text-decoration:none;color:rgba(255,255,255,.6);font-size:1rem;transition:all .2s;" onmouseover="this.style.background='#25d366'" onmouseout="this.style.background='rgba(255,255,255,.08)'">💬</a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 style="font-size:.78rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:18px;">Quick Links</h4>
        <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;">
          <li><a href="index.html" style="font-size:.88rem;color:rgba(255,255,255,.55);text-decoration:none;transition:color .2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,.55)'">Home</a></li>
          <li><a href="about.html" style="font-size:.88rem;color:rgba(255,255,255,.55);text-decoration:none;transition:color .2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,.55)'">About Us</a></li>
          <li><a href="portfolio.html" style="font-size:.88rem;color:rgba(255,255,255,.55);text-decoration:none;transition:color .2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,.55)'">Portfolio</a></li>
          <li><a href="why-choose-us.html" style="font-size:.88rem;color:rgba(255,255,255,.55);text-decoration:none;transition:color .2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,.55)'">Why Choose Us</a></li>
          <li><a href="careers.html" style="font-size:.88rem;color:rgba(255,255,255,.55);text-decoration:none;transition:color .2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,.55)'">Careers</a></li>
          <li><a href="partner-with-biztech.html" style="font-size:.88rem;color:rgba(255,255,255,.55);text-decoration:none;transition:color .2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,.55)'">Partner Programme</a></li>
          <li><a href="blog.html" style="font-size:.88rem;color:rgba(255,255,255,.55);text-decoration:none;transition:color .2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,.55)'">Blog</a></li>
          <li><a href="contact.html" style="font-size:.88rem;color:rgba(255,255,255,.55);text-decoration:none;transition:color .2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,.55)'">Contact Us</a></li>
        </ul>
      </div>

      <!-- Services -->
      <div>
        <h4 style="font-size:.78rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:18px;">Our Services</h4>
        <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;">
          <li><a href="cctv-installation-singapore.html" style="font-size:.88rem;color:rgba(255,255,255,.55);text-decoration:none;transition:color .2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,.55)'">CCTV Installation Singapore</a></li>
          <li><a href="access-control-singapore.html" style="font-size:.88rem;color:rgba(255,255,255,.55);text-decoration:none;transition:color .2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,.55)'">Access Control Singapore</a></li>
          <li><a href="structured-cabling-singapore.html" style="font-size:.88rem;color:rgba(255,255,255,.55);text-decoration:none;transition:color .2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,.55)'">Structured Cabling Singapore</a></li>
          <li><a href="digital-signage-singapore.html" style="font-size:.88rem;color:rgba(255,255,255,.55);text-decoration:none;transition:color .2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,.55)'">Digital Signage Singapore</a></li>
          <li><a href="business-phone-system-singapore.html" style="font-size:.88rem;color:rgba(255,255,255,.55);text-decoration:none;transition:color .2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,.55)'">Business Phone System</a></li>
          <li><a href="solutions.html#smart-building" style="font-size:.88rem;color:rgba(255,255,255,.55);text-decoration:none;transition:color .2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,.55)'">Smart Building Tech</a></li>
          <li><a href="solutions.html#managed-services" style="font-size:.88rem;color:rgba(255,255,255,.55);text-decoration:none;transition:color .2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,.55)'">Managed Services</a></li>
          <li><a href="apac.html" style="font-size:.88rem;color:rgba(255,255,255,.55);text-decoration:none;transition:color .2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,.55)'">APAC Regional Rollouts</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 style="font-size:.78rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:18px;">Contact Us</h4>
        <div style="display:flex;flex-direction:column;gap:14px;">
          <div style="display:flex;gap:12px;align-items:flex-start;">
            <span style="font-size:1rem;margin-top:2px;">📍</span>
            <div>
              <p style="font-size:.82rem;font-weight:600;color:rgba(255,255,255,.9);margin:0 0 2px;">Office</p>
              <p style="font-size:.83rem;color:rgba(255,255,255,.5);margin:0;line-height:1.5;">81 Ubi Avenue 4, #05-30<br>Singapore 408830</p>
            </div>
          </div>
          <div style="display:flex;gap:12px;align-items:center;">
            <span style="font-size:1rem;">📞</span>
            <div>
              <p style="font-size:.82rem;font-weight:600;color:rgba(255,255,255,.9);margin:0 0 2px;">Phone</p>
              <a href="tel:+6567588817" style="font-size:.83rem;color:rgba(255,255,255,.5);text-decoration:none;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,.5)'">+65 6758 8817</a>
            </div>
          </div>
          <div style="display:flex;gap:12px;align-items:center;">
            <span style="font-size:1rem;">📧</span>
            <div>
              <p style="font-size:.82rem;font-weight:600;color:rgba(255,255,255,.9);margin:0 0 2px;">Email</p>
              <a href="mailto:support@biztechgroup.com.sg" style="font-size:.83rem;color:rgba(255,255,255,.5);text-decoration:none;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,.5)'">support@biztechgroup.com.sg</a>
            </div>
          </div>
          <div style="display:flex;gap:12px;align-items:center;">
            <a href="https://wa.me/6591121046" style="display:flex;align-items:center;gap:10px;text-decoration:none;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,.5)'">
              <span style="font-size:1rem;">💬</span>
              <span style="font-size:.83rem;color:rgba(255,255,255,.5);transition:color .2s;">Chat with us on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom Bar -->
  <div style="border-top:1px solid rgba(255,255,255,.08);">
    <div class="container" style="padding-top:24px;padding-bottom:24px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;">
      <p style="font-size:.8rem;color:rgba(255,255,255,.3);margin:0;">&copy; 2026 Biztech Group Pte Ltd (UEN: 201728418N). All rights reserved. Reg. in Singapore.</p>
      <div style="display:flex;gap:20px;">
        <a href="privacy-policy.html" style="font-size:.8rem;color:rgba(255,255,255,.3);text-decoration:none;" onmouseover="this.style.color='rgba(255,255,255,.7)'" onmouseout="this.style.color='rgba(255,255,255,.3)'">Privacy Policy</a>
        <a href="terms-of-service.html" style="font-size:.8rem;color:rgba(255,255,255,.3);text-decoration:none;" onmouseover="this.style.color='rgba(255,255,255,.7)'" onmouseout="this.style.color='rgba(255,255,255,.3)'">Terms of Service</a>
        <a href="sitemap.xml" style="font-size:.8rem;color:rgba(255,255,255,.3);text-decoration:none;" onmouseover="this.style.color='rgba(255,255,255,.7)'" onmouseout="this.style.color='rgba(255,255,255,.3)'">Sitemap</a>
      </div>
    </div>
  </div>
</footer>
`;

const WA_FLOAT_HTML = `
<a href="https://wa.me/6591121046?text=Hello%20Biztech%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20services." class="wa-float" title="Chat with us on WhatsApp" target="_blank">
  💬
</a>
`;

function injectComponents() {
  const navEl = document.getElementById('navbar');
  const footerEl = document.getElementById('footer');
  if (navEl) navEl.innerHTML = NAV_HTML;
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;
  document.body.insertAdjacentHTML('beforeend', WA_FLOAT_HTML);

  // Close mobile menu when any link inside it is tapped
  const mobileMenuEl = document.getElementById('mobile-menu');
  if (mobileMenuEl) {
    mobileMenuEl.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        mobileMenuEl.style.display = 'none';
        mobileMenuEl.classList.remove('nav-open');
        const hi = document.getElementById('ham-icon');
        const ci = document.getElementById('close-icon');
        if (hi) hi.style.display = 'block';
        if (ci) ci.style.display = 'none';
      }
    });
  }

  // Scroll shadow on nav
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (nav) nav.style.boxShadow = window.scrollY > 10 ? '0 4px 24px rgba(0,0,0,.10)' : '';
  });

  // Highlight active nav link
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.style.color = '#c9a84c';
      link.style.fontWeight = '700';
    }
  });

  // Responsive nav
  const checkWidth = () => {
    const ham = document.getElementById('nav-hamburger');
    const desktopNav = document.querySelector('.nav-desktop');
    const ctasEl = document.querySelector('.nav-ctas');
    if (!ham) return;
    if (window.innerWidth < 1024) {
      ham.style.display = 'block';
      if (desktopNav) desktopNav.style.display = 'none';
      if (ctasEl) ctasEl.style.display = 'none';
    } else {
      ham.style.display = 'none';
      if (desktopNav) desktopNav.style.display = 'flex';
      if (ctasEl) ctasEl.style.display = 'flex';
      const menu = document.getElementById('mobile-menu');
      if (menu) { menu.style.display = 'none'; menu.classList.remove('nav-open'); }
    }
  };
  checkWidth();
  window.addEventListener('resize', checkWidth);
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const hamIcon = document.getElementById('ham-icon');
  const closeIcon = document.getElementById('close-icon');
  if (!menu) return;
  const isOpen = menu.style.display === 'block';
  if (isOpen) {
    menu.style.display = 'none';
    menu.classList.remove('nav-open');
  } else {
    menu.style.display = 'block';
    menu.offsetHeight; // force reflow so animation starts fresh each open
    menu.classList.add('nav-open');
  }
  if (hamIcon) hamIcon.style.display = isOpen ? 'block' : 'none';
  if (closeIcon) closeIcon.style.display = isOpen ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', injectComponents);
