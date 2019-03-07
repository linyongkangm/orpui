import Affix from '$component/Affix';
import * as React from 'react';

export default function AffixDemo() {
  return (
    <div style={{ height: '5000px', width: '5000px' }}>
      <div style={{ height: '1000px' }}></div>
      <Affix
        target={document.getElementById('typescript-root')}
        offsetTop={100}
        offsetBottom={100}
        style={{ background: 'red', width: '100px', height: '100px' }}
      >Affix</Affix>
    </div>
  );
}
