var verb = require('verb');

verb.task('readme', function() {
  verb.src('.verb.md')
    .pipe(verb.dest('.'));
});

verb.task('default', ['readme']);
