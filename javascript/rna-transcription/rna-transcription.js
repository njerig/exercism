const rnaComplement = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

var DnaTranscriber = function() {};


DnaTranscriber.prototype.toRna = function(dna) {
  return dna.split('').map(function(base) {
    if (!rnaComplement[base]) {
      throw new Error('Invalid input');
    }
    return rnaComplement[base];
  }).join('');
};

module.exports = DnaTranscriber;