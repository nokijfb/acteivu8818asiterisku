// Ambil semua tombol dropdown
var dropdownBtns = document.querySelectorAll('.dropdown-btn');
var subDropdownBtns = document.querySelectorAll('.sub-dropdown-btn');

// Tambahkan event listener untuk setiap tombol dropdown
dropdownBtns.forEach(function (btn) {
   btn.addEventListener('click', function () {
      // Ambil dropdown-content terkait (sibling element dari tombol yang diklik)
      var dropdownContent = this.nextElementSibling;

      // Tutup semua dropdown-content yang aktif
      var allDropdowns = document.querySelectorAll('.dropdown-content');
      allDropdowns.forEach(function (dropdown) {
         if (dropdown !== dropdownContent) {
            dropdown.classList.remove('show');
         }
      });

      // Toggle class 'show' pada dropdown-content yang diklik
      dropdownContent.classList.toggle('show');
   });
});

// Tambahkan event listener untuk setiap tombol sub-dropdown
subDropdownBtns.forEach(function (btn) {
   btn.addEventListener('click', function () {
      // Ambil sub-dropdown-content terkait (sibling element dari tombol yang diklik)
      var subDropdownContent = this.nextElementSibling;

      // Tutup semua sub-dropdown-content yang aktif
      var allSubDropdowns = document.querySelectorAll('.sub-dropdown-content');
      allSubDropdowns.forEach(function (dropdown) {
         if (dropdown !== subDropdownContent) {
            dropdown.classList.remove('show');
         }
      });

      // Toggle class 'show' pada sub-dropdown-content yang diklik
      subDropdownContent.classList.toggle('show');
   });
});

// Tutup dropdown saat mengklik di luar dropdown
window.onclick = function (event) {
   if (!event.target.matches('.dropdown-btn') && !event.target.matches('.sub-dropdown-btn')) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      for (var i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
         }
      }
      var subDropdowns = document.getElementsByClassName('sub-dropdown-content');
      for (var i = 0; i < subDropdowns.length; i++) {
         var openSubDropdown = subDropdowns[i];
         if (openSubDropdown.classList.contains('show')) {
            openSubDropdown.classList.remove('show');
         }
      }
   }
}