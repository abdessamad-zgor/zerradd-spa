function HTML(props) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="author" content="asoulSolutions" />
        <title>Aroma-Beauty-and-Spa-Responsive-Bootstrap-Template</title>
        <link href="/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/dist/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/dist/css/animate.min.css" rel="stylesheet" />
        <link href="/dist/css/prettyphoto.css" rel="stylesheet" />
        <link href="/dist/css/styles.css" rel="stylesheet" />
        <script src="/dist/js/html5shiv.js"></script>
        <script src="/dist/js/respond.min.js"></script>
        <link rel="shortcut icon" href="/dist/images/ico/favicon.ico" />
      </head>
      <body id="root" dangerouslySetInnerHTML={{ __html: props.html }}></body>
      
      <script type="application/javascript" src="/dist/app/main.js" />
    </html>
  );
}

export default HTML;
