function switchLanguage(language) {
    document.querySelectorAll('.content-ar').forEach(el => el.style.display = language === 'ar' ? 'block' : 'none');
    document.querySelectorAll('.content-fr').forEach(el => el.style.display = language === 'fr' ? 'block' : 'none');
}
