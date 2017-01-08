var background = chrome.extension.getBackgroundPage();

$(function() {
  $('#url').val(localStorage.getItem('url') || '');
  $('#cookies').val(localStorage.getItem('cookies') || '');

  $('#save').on('click', function (e) {
    e.preventDefault();
    const goUrl = $('#url').val();
    localStorage.setItem('goTime', true);
    chrome.tabs.create({ url: goUrl });
  });

  $('#url').on('blur', function (e) {
    localStorage.setItem('url', $(this).val());
  });

  $('#cookies').on('blur', function (e) {
    localStorage.setItem('cookies', $(this).val());
  });
});
