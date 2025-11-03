// Generate random numbers for simulation
function randInt(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

// Helper to make a fake blockchain hash
function makeFakeHash() {
  const chars = 'abcdef0123456789';
  let s = '';
  for (let i = 0; i < 64; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

// Add activity logs dynamically
function pushActivity(text) {
  const activityFeed = document.getElementById("activityFeed");
  const div = document.createElement("div");
  div.innerHTML = `<span style="color:#777;font-size:12px;">${new Date().toLocaleTimeString()}:</span> ${text}`;
  activityFeed.prepend(div);
}

// Main verification logic
function verifyProject() {
  const name = document.getElementById("projectName").value.trim() || "Unnamed Project";
  const claimedTrees = Number(document.getElementById("claimedTrees").value) || 0;
  const claimedCarbon = Number(document.getElementById("claimedCarbon").value) || 0;

  // Demo data updates
  const verifiedTrees = Math.round(claimedTrees * (randInt(30, 90) / 100));
  const verificationRate = claimedTrees ? Math.round((verifiedTrees / claimedTrees) * 100) : 0;

  document.getElementById("claimedTreesCard").textContent = `Claimed Trees: ${claimedTrees}`;
  document.getElementById("verifiedTreesCard").textContent = `Verified Trees: ${verifiedTrees}`;
  document.getElementById("verificationRate").textContent = `Verification Rate: ${verificationRate}%`;

  // Environmental data
  const carbonStored = Math.round(verifiedTrees * 0.02);
  document.getElementById("carbonStored").textContent = `Carbon Stored: ${carbonStored} tons CO₂`;
  document.getElementById("biodiversity").textContent = `Biodiversity Score: ${randInt(30, 90)}/100`;
  document.getElementById("communityJobs").textContent = `Community Jobs: ${randInt(5, 40)}`;

  // Verification score
  const percentVerified = Math.min(100, Math.max(0, verificationRate + randInt(-10, 10)));
  const confidence = randInt(70, 99);

  document.getElementById("verifiedPercent").textContent = percentVerified + "%";
  document.getElementById("confidence").textContent = `Confidence Score: ${confidence}%`;

  const badgeEl = document.getElementById("verifiedBadge");
  if (percentVerified > 60) {
    badgeEl.textContent = "VERIFIED ✅";
    badgeEl.style.background = "#2e7d32";
  } else if (percentVerified > 30) {
    badgeEl.textContent = "SUSPECT ⚠️";
    badgeEl.style.background = "#f9a825";
  } else {
    badgeEl.textContent = "FRAUD ❌";
    badgeEl.style.background = "#c62828";
  }

  // Blockchain data
  const hash = makeFakeHash();
  const shortHash = `0x${hash.slice(0, 6)}...${hash.slice(-6)}`;
  document.getElementById("blockHash").textContent = shortHash;
  document.getElementById("verifiedAt").textContent = `Verified at: ${new Date().toUTCString()}`;

  // Animate bar chart
  document.getElementById("bar1").style.height = randInt(30, 100) + "%";
  document.getElementById("bar2").style.height = randInt(30, 100) + "%";
  document.getElementById("bar3").style.height = randInt(30, 100) + "%";
  document.getElementById("bar4").style.height = randInt(30, 100) + "%";

  // Add activity logs
  pushActivity(`<b>${name}</b> verification started.`);
  setTimeout(() => pushActivity(`Satellite data analyzed for <b>${name}</b>.`), 700);
  setTimeout(() => pushActivity(`Verification rate: ${verificationRate}%`), 1200);
  setTimeout(() => pushActivity(`Result: ${badgeEl.textContent} (Confidence ${confidence}%)`), 1700);
  setTimeout(() => pushActivity(`Blockchain receipt: <span style="font-size:12px;color:#555;">${shortHash}</span>`), 2200);
}
