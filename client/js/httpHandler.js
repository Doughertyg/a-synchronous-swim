(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //
  
  //how to implement a post process for server to post moves to client?

  const getFromServer = () => {
    console.log('get');
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:3000/',
      success: (res) => {
        // reload the page
        console.log('success!:', res);
        SwimTeam.move(res);
      },
      error: (err) => console.log(err)
    });
  };
  
  $('.get').on('click', function() {
    console.log('click!');
    getFromServer();
  })

  $(document).ready(function() { //workflow is inefficient... client checks for changes every second... server serving requests while receiving input
    setInterval(function() { //must manage receipt of input and serving requests better. perhaps push to queue then post to client async
      getFromServer(); //theres latency in this system
    }, 2000)
  })

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: 'http://127.0.0.1:3000/background.jpg',
      cache: false,
      contentType: false,
      processData: false,
      success: (data) => {
        // reload the page
        console.log('uploading img');
        // window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    console.log(file);
    $('body').css({"background-image": file});
    ajaxFileUplaod(file);
    // $('body').css({"background-image": file});
  });
  

})();
