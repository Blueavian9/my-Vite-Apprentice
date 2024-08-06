import * as React from 'react';
import Profile from './Profile';

export default function Gallery() {
    return (
      <section className="flex  flex-col" >
        <h1>Amazing scientists</h1>
        <div className="flex gap-6">
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
        </div>
      </section>
    );
  }