var rnaComplement = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

var DnaTranscriber = function() {};


DnaTranscriber.prototype.toRna = function(dna) {
  return dna.split('').map(function(nucleotide) {
    if (!rnaComplement[nucleotide]) {
      throw new Error('Invalid input');
    }
    return rnaComplement[nucleotide];
  }).join('');
};

module.exports = DnaTranscriber;