import Link from "next/link";

export default function Header() {
  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col">
      <div><p className="text-4xl">Ternyata, kamu cocok masuk...</p></div>
      <div><h1 className="font-bold text-9xl m-4">FOTOGRAFI</h1></div>
      <div className="w-2/3 text-center text-xl"><p>bidang untuk kamu-kamu yang feeds instagramnya estetik dan suka keliling-keliling hunting foto. Mulai dari kamera lensa tele sampai digicam semuanya diomongin. Pengen akses buat ngedokumentasiin semua acara ITB tanpa perlu seleksi? aman aja guys. Gapunya kamera? gausah takut karena LFM punya banyak kamera yang siap untuk kamu pinjam! GAS JOIN</p></div>
      <div>
        <a href="/"><button className="border-2 border-white px-4 py-2 text-xl rounded-2xl m-4 animate-bounce">Coba lagi</button></a>
      </div>
      <div>
        <p className="text-xl m-4">#JanganMauMasukLFM</p>
      </div>
    </div>
  );
}