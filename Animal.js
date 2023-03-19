var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var vertebra = (lines[0]);
var classe = (lines[1]);
var diet = (lines[2]);

if (vertebra === 'vertebrado' && classe === 'mamifero'){
  if (diet === 'onivoro'){
    console.log('homem');
  }
}
if (vertebra === 'vertebrado' && classe === 'ave'){
  if (diet === 'onivoro'){
    console.log('pomba');
  }
}
if (vertebra === 'vertebrado' && classe === 'mamifero'){
  if (diet === 'herbivoro'){
    console.log('vaca');
  }
}
if (vertebra === 'invertebrado' && classe === 'inseto'){
  if (diet === 'hematofago'){
    console.log('pulga');
  }
}
if (vertebra === 'invertebrado' && classe === 'inseto'){
  if (diet === 'herbivoro'){
    console.log('lagarta');
  }
}
if (vertebra === 'invertebrado' && classe === 'anelideo'){
  if (diet === 'hematofago'){
    console.log('sanguessuga');
  }
}
if (vertebra === 'vertebrado' && classe === 'ave'){
  if (diet === 'carnivoro'){
    console.log('aguia');
  }
}
if (vertebra === 'invertebrado' && classe === 'anelideo'){
  if (diet === 'onivoro'){
    console.log('minhoca');
  }
}
