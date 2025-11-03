let riskChart = null;

function randInt(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function makeFakeHash() {
  const chars = 'abcdef0123456789';
  let s = '';
  for (let i = 0; i < 64; i++) s += chars[randInt(0, chars.length - 1)];
  return s;
}

function pushActivity(text) {
  const feed = document.getElementById("activityFeed");
  const div = document.createElement("div");
  div.innerHTML = `<span style="color:#777;font-size:12px;">${new Date().toLocaleTimeString()}:</span> ${text}`;
  feed.prepend(div);
}


document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('riskChart').getContext('2d');
  riskChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Air Quality', 'Carbon Soil', 'Biodiversity', 'Water Cycle'],
      datasets: [{
        data: [0, 0, 0, 0],
        backgroundColor: ['#66BB6A', '#42A5F5', '#FFB300', '#EF5350'],
        borderRadius: 10,
        barThickness: 40
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { 
          enabled: true,
          titleFont: { size: 16 },
          bodyFont: { size: 14 }
        }
      },
      scales: {
        y: { 
          beginAtZero: true, 
          max: 100, 
          ticks: { 
            stepSize: 20, 
            font: { size: 16, weight: 'bold' }, 
            color: '#000' 
          },
          grid: { color: '#ccc', linewidth: 1.5 }
        },
        x: { 
          ticks: { 
            font: { size: 14, weight: 'bold' }, 
            color: '#000',
            padding: 10
          },
          grid: { display: false }
        }
      },
      animation: { duration: 1600, easing: 'easeOutElastic' }
    }
  });
});
function updateRiskChart(scores) {
  if (riskChart) {
    riskChart.data.datasets[0].data = scores;
    riskChart.update();
  }
}

function verifyProject() {
  const name = document.getElementById("projectName").value.trim() || "Amazon Restoration";
  const claimedTrees = Number(document.getElementById("claimedTrees").value) || 788900;

  const verifiedTrees = Math.round(claimedTrees * (randInt(60, 85) / 100));
  const verificationRate = Math.round((verifiedTrees / claimedTrees) * 100);

  // cards
  document.getElementById("claimedTreesCard").textContent = `Claimed Trees: ${claimedTrees.toLocaleString()}`;
  document.getElementById("verifiedTreesCard").textContent = `Verified Trees: ${verifiedTrees.toLocaleString()}`;
  document.getElementById("verificationRate").textContent = `Verification Rate: ${verificationRate}%`;
  document.getElementById("carbonStored").textContent = `Carbon Stored: ${Math.round(verifiedTrees * 0.02).toLocaleString()} tons CO₂`;
  document.getElementById("biodiversity").textContent = `Biodiversity Score: 85/100`;
  document.getElementById("communityJobs").textContent = `Community Jobs: 2`;
  document.getElementById("gps").textContent = `GPS: 0.7893, 113.9213`;
  document.getElementById("projectSize").textContent = `Project Size: 8.5 hectares`;

  // Score
  const percent = 36;
  document.getElementById("verifiedPercent").textContent = percent + "%";
  document.getElementById("confidence").textContent = "Confidence Score: 74.93%";

  const badge = document.getElementById("verifiedBadge");
  badge.textContent = "SUSPECT ⚠️";
  badge.style.background = "#FF9800";
  badge.style.color = "white";

  // Blockchain
  const shortHash = "0xabc123...def456";
  document.getElementById("blockHash").textContent = shortHash;
  document.getElementById("verifiedAt").textContent = "Verified: 11/3/2025, 11:29 PM";

  // update CHART
  updateRiskChart([20, 85, 90, 65]);

  // Logs
  pushActivity(`<b>${name}</b> verified - SUSPECT`);
}

// dark mode

document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  const isDark = document.body.classList.contains('dark-mode');
  const btn = document.getElementById('darkModeToggle');
  
  btn.textContent = isDark ? '☀️ Dark Mode ON' : '🌙 Dark Mode OFF';
  btn.style.background = isDark ? '#7c4dff' : '#333';
  
  // Save preference
  localStorage.setItem('darkMode', isDark);
});

// Load saved preference
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('darkModeToggle').textContent = '☀️ Dark Mode ON';
    document.getElementById('darkModeToggle').style.background = '#7c4dff';
  }
});
