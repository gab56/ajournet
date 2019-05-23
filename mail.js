$.ajax({
  type: 'POST',
  url: 'https://mandrillapp.com/api/1.0//messages/send.json',
  data: {
      "key": "bd947e01fbf6bf69b6f4b2fedfd6ae00-us16",
      "message": {
        "from_email": "gquesada@pernixlabs.com",
        "to": [
            {
                "email": "gquesada@pernixlabs.com",
                "name": "Gabriel",
                "type": "to"
            }
          ],
        "autotext": null,
        "subject": "Example subject",
        "html": "<p>Example HTML content</p>",
        "text": "Example text content"
        }
  }
  }).done(function(response) {
      console.log(response);
  });
