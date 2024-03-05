'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [joke, setJoke] = useState<string>('');

  const getNewJoke = async () => {
    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await res.json();
    setJoke(data.joke);
  };

  useEffect(() => {
    getNewJoke();
  }, []);

  return (
    <main className="flex flex-col items-center justify-between p-12 gap-12">
      <Image
        className="rounded-lg"
        alt="Logo depecting a black bald male shirless with a big smile and holding a mic"
        src="/dad-jokes-reloaded.png"
        height={300}
        width={300}
      />
      <div className="flex flex-col items-center gap-6">
        <p className="text-xl">{joke}</p>
        <Button
          size={'lg'}
          className="mt-4 bg-goldcrust hover:bg-olive"
          onClick={() => getNewJoke()}>
          {"Darie's next joke"}
        </Button>
      </div>
    </main>
  );
}
