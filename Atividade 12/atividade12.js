document.addEventListener("DOMContentLoaded", function() {
  const $ck = Array.from(document.querySelectorAll("input#Pesquisa"))
  const $ipt = Array.from(document.querySelectorAll("input"))
  $ipt.push(document.querySelector("textarea"))

  $ck.forEach((item, i) => {
      item.addEventListener("change", function() {
          if(i) {
              $ck[i - 1].checked = false
              return
          }

          $ck[i + 1].checked = false
      })
  })

  document.querySelector("form").addEventListener("submit", function(e) {
      e.preventDefault()
  
      if(this[0].selectionEnd < 10) {
          alert("O nome tem que ser maior que 10")
      }
      
      if(this[2].selectionEnd < 20) {
          alert("O comentário tem que ser maior que 20")
      }
  })

  document.querySelector("#limpar").addEventListener("click", function() {
      $ipt.forEach(item => item.value = "")
  })
})
