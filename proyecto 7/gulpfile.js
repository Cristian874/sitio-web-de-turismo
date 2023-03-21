const {src,dest,watch,series } =require('gulp');
const sass = require('gulp-sass')(require('sass'));

const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer');



const imagemin=require('gulp-imagemin');

const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');

function css(done){
    /* ideptificamos la hoja de sass */
    src('src/scss/app.scss')

    .pipe(sourcemaps.init())


    .pipe(sass({outputStyle: 'compressed'}))

    /* pipe para el autoprefixer */
    .pipe(postcss([autoprefixer()],cssnano()))

    /* compilamos sass */
    .pipe(sass())

/* guardamos el sourcemaps */
  .pipe(sourcemaps.write('.'))
    /* guardamos sass */
    .pipe(dest('build/css'))



    done();
}

function script(done){
    src('src/js/app.js')
    .pipe(dest('build/js'))


    done();

}
function imagenes(done){
    src('src/img/**/*')
    .pipe(imagemin({optimizationLevel: 3}))
    .pipe(dest('build/img'))



    done();
}

function dev(done){

    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js',script);
    watch('src/img/**/*' ,imagenes)


    done();
}



exports.css = css;
exports.script = script;
exports.imagenes = imagenes;
exports.dev = dev;
exports.default = series(css,script,imagenes, dev);