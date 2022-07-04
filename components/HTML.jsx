function HTML(props) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="author" content="asoulSolutions" />
        <title>Home | Center zerrad - center de service de bien etre</title>
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
      <script dangerouslySetInnerHTML={{
        __html: `window.__I18N_STORE__=${JSON.stringify(props.i18n)}`
      }}/>
    </html>
  );
}

export default HTML;
