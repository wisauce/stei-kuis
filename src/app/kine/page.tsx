import Link from "next/link";

export default function Header() {
  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col">
      <div><p className="text-4xl">Ternyata, kamu cocok masuk...</p></div>
      <div><h1 className="font-bold text-9xl m-4">KINEKLUB</h1></div>
      <div className="w-2/3 text-center text-xl"><p>sarangnya para sinefil yang letterboxd entrynya udah sampai ratusan. tempat untuk kamu yang engga cuma pengen nonton film doang tapi pengen bisa belajar memaknai dan mengapresiasi film secara lebih. suka ngomongin film-film yang jarang ditonton? atau pengen punya temen nonton bareng? Kineklub jelas tempatnya</p></div>
      <div>
        <a href="/"><button className="border-2 border-white px-4 py-2 text-xl rounded-2xl m-4 animate-bounce">Coba lagi</button></a>
      </div>
      <div>
        <p className="text-xl m-4">#JanganMauMasukLFM</p>
      </div>
    </div>
  );
}