import assert from'node:assert/strict';
const value=s=>[`${s.zone}${s.tolerance||'0'}`,s.modifier,s.qualifier,s.modifier==='Ⓟ'&&s.projectedHeight?`${s.projectedHeight} P`:'',s.modifier==='UZ'&&s.unequalOffset?`UZ ${s.unequalOffset}`:''].filter(Boolean).join(' ');
assert.equal(value({zone:'⌀',tolerance:'0.20',modifier:'Ⓜ',qualifier:''}),'⌀0.20 Ⓜ');
assert.equal(value({zone:'',tolerance:'0.10',modifier:'',qualifier:'CZ'}),'0.10 CZ');
assert.equal(value({zone:'⌀',tolerance:'0.20',modifier:'Ⓟ',qualifier:'',projectedHeight:'10'}),'⌀0.20 Ⓟ 10 P');
assert.equal(value({zone:'',tolerance:'0.30',modifier:'UZ',qualifier:'',unequalOffset:'0.10'}),'0.30 UZ UZ 0.10');
for(const z of['','⌀','S⌀','R','SR'])assert.ok(value({zone:z,tolerance:'0.1',modifier:'',qualifier:''}).includes('0.1'));
console.log('Advanced FCFBuilder model tests passed');
