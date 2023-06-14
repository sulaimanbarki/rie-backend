const mix = require('laravel-mix');

let base = ''
if (mix.inProduction()) {
     base = 'https://panel.khalidandkhalidholdings.com.pk'
     //https://secure.khalidandkhalidholdings.com.pk
} else {
    base  = 'http://127.0.0.1:8000/'
}


mix.webpackConfig.output = {
    chunkFilename: 'js/[name].bundle.js',
    publicPath: base,
}

mix.js('resources/js/app.js', 'public/js').vue()
    .postCss('resources/css/app.css', 'public/css', [
        //
]);
