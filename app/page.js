import React from 'react';
import { CssExterno } from './CssExterno';
import { ScssExterno } from './ScssExterno';

export default function Home() {
  return (
    <div>
      <h1 style={{color: "green", textAlign:'center'}}>Nextjs</h1>
      <CssExterno/>
      <ScssExterno/>
    </div>
  )
}
