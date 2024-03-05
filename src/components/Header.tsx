import Image from 'next/image';

export const Header = () => {
  return (
    <div className="flex flex-row justify-between px-4 bg-white border-solid border-b-[1px] top-0 left-0 right-0 fixed">
      <Image
        alt="black and white logo"
        src="/dad-jokes-logo.svg"
        height={60}
        width={60}
      />
      <div className="pt-2">
        <p className="text-2xl font-bold">{"Darie's a Joke"}</p>
      </div>
    </div>
  );
};
