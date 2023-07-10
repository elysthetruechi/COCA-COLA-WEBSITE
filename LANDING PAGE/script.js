 $(document).ready(function() {
    var contentElement = $('#content');
    var contentText = contentElement.text();
    var maxLength = 50;

    if (contentText.length > maxLength) {
      var truncatedText = contentText.substring(0, maxLength) + '...';
      contentElement.text(truncatedText);
    }
  });
