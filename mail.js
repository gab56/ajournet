$.ajax({
  type: 'POST',
  url: 'https://mandrillapp.com/api/1.0/users/info.json',
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
      "autotext": "true",
      "subject": "Subject",
      "html": "Content"
      }
  }
  }).done(function(response) {
      console.log(response);
  });
