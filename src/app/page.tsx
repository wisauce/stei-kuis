"use client"
import Image from 'next/image'
import { useState } from "react";
import React from 'react'
import { useRouter } from "next/navigation";

export default function Home() {
  const [cover, coverToggle] = useState(false)
  const [result, resultToggle] = useState(false)
  const [final, finalToggle] = useState(false)
  const [one, oneToggle] = useState(false)
  const [two, twoToggle] = useState(false)
  const [three, threeToggle] = useState(false)
  const [four, fourToggle] = useState(false)
  const [five, fiveToggle] = useState(false)
  const [six, sixToggle] = useState(false)
  const [seven, sevenToggle] = useState(false)
  const [eight, eightToggle] = useState(false)
  const [nine, nineToggle] = useState(false)
  const [ten, tenToggle] = useState(false)
  const [foto,setFoto] = useState(0)
  const [video,setVideo] = useState(0)
  const [kine,setKine] = useState(0)
  const [pertunjukan,setPertunjukan] = useState(0)
  const [score,setScore] = useState(0)
  const router = useRouter();

  return (
    <header>
      <nav className='text-[#F4FFE7] '>
        <ul className="text-[#F4FFE7] container flex gap-8 flex-col items-center h-screen justify-center">
          <div>
            <p className='font-semibold text-xl'>a mini project by STEI-KLINIK</p>
          </div>
          <div>
            <h1 className="text-9xl text-center font-bold ">STEI-KUIS</h1>
          </div>
          <div>
            <button onClick={() => {
              coverToggle(true)
              oneToggle(true)}} className="border-2 border-[#F4FFE7] bg-transparent py-2 px-4 rounded-full m-10 text-3xl animate-pulse">Start</button>
          </div>
          <div>
            <p>We Care, Anytime, Anywhere</p>
          </div>
          {one && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-3xl">Apa nama website project kami?</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => {
                  setVideo(video + 1)
                  oneToggle(false)
                  twoToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">stei-klinik</div>
                <div onClick={() => {
                  setPertunjukan(pertunjukan+ 1)
                  oneToggle(false)
                  twoToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">stei_klinik</div>
                <div onClick={() => {
                  setFoto(foto + 1)
                  oneToggle(false)
                  twoToggle(true)
                  setScore(score + 1)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">STEI-KLINIK</div>
                <div onClick={() => {
                  setKine(kine + 1)
                  oneToggle(false)
                  twoToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">STEI_KLINIK</div>
              </div>
            </div>
            <div>
              <p className="text-xl">We Care, Anytime,Anywhere</p>
            </div>
          </div>
          } 
          {two && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-xl">singkatan dari pendamping sebaya</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => {
                  setPertunjukan(pertunjukan + 1)
                  twoToggle(false)
                  threeToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">PenSe</div>
                <div onClick={() => {
                  setFoto(foto + 1)
                  twoToggle(false)
                  threeToggle(true)
                  setScore(score + 1)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">PS</div>
                <div onClick={() => {
                  setVideo(video + 1)
                  twoToggle(false)
                  threeToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">BFA</div>
                <div onClick={() => {
                  setKine(kine + 1)
                  twoToggle(false)
                  threeToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">BK</div>
              </div>
            </div>
            <div>
              <p className="text-xl">We Care, Anytime,Anywhere</p>
            </div>
          </div>
          }
          {three && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-4xl">Dengan siapa BK ITB bekerja sama</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => {
                  setVideo(video + 1)
                  threeToggle(false)
                  fourToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-3xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2"> Bimbingan Konseling</div>
                <div onClick={() => {
                  setFoto(foto + 1)
                  threeToggle(false)
                  setScore(score + 1)
                  fourToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-3xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Universitas Padjajaran</div>
                <div onClick={() => {
                  setPertunjukan(pertunjukan + 1)
                  threeToggle(false)
                  fourToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-3xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Direktorat Kemahasiswaan</div>
                <div onClick={() => {
                  setKine(kine + 1)
                  threeToggle(false)
                  fourToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-3xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Kemahasiswaan Jatinangor</div>
              </div>
            </div>
            <div>
              <p className="text-xl">We Care, Anytime,Anywhere</p>
            </div>
          </div>
          } 
          {four && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-2xl">Apa tagline dari STEI-KLINIK?</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => {
                  setFoto(foto + 1)
                  fourToggle(false)
                  fiveToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Code, Create, Connect</div>
                <div onClick={() => {
                  setVideo(video + 1)
                  fourToggle(false)
                  fiveToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Code, Commit, Conquer</div>
                <div onClick={() => {
                  setKine(kine + 1)
                  fourToggle(false)
                  fiveToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">We Care, Anywhere, Anytime</div>
                <div onClick={() => {
                  setPertunjukan(pertunjukan + 1)
                  fourToggle(false)
                  fiveToggle(true)
                  setScore(score + 1)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">We care, Anytime, Anywhere</div>
              </div>
            </div>
            <div>
              <p className="text-xl">Hayo apa</p>
            </div>
          </div>
          } 
          {five && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-4xl">Berikut ini media sosial yang tidak dimiliki oleh STEI-KLINIK</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => {
                  setFoto(foto + 1)
                  fiveToggle(false)
                  sixToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Instagram</div>
                <div onClick={() => {
                  setKine(kine + 1)
                  fiveToggle(false)
                  sixToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Twitter</div>
                <div onClick={() => {
                  setPertunjukan(pertunjukan + 1)
                  fiveToggle(false)
                  sixToggle(true)
                  setScore(score + 1)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Tiktok</div>
                <div onClick={() => {
                  setVideo(video + 1)
                  fiveToggle(false)
                  sixToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Facebook</div>
              </div>
            </div>
            <div>
              <p className="text-xl">We Care, Anytime,Anywhere</p>
            </div>
          </div>
          } 
          {six && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-2xl">Siapa nama dokter yang bisa dihubungi pada minggu ke-4</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => {
                  setFoto(foto + 1)
                  sixToggle(false)
                  sevenToggle(true)
                  }} className="bg-black w-full h-full rounded-xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Wiwi</div>
                <div onClick={() => {
                  setKine(kine + 1)
                  sixToggle(false)
                  sevenToggle(true)
                  }} className="bg-black w-full h-full rounded-xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Riris</div>
                <div onClick={() => {
                  setPertunjukan(pertunjukan + 1)
                  sixToggle(false)
                  sevenToggle(true)
                  }} className="bg-black w-full h-full rounded-xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Melly</div>
                <div onClick={() => {
                  setVideo(video + 1)
                  setScore(score + 1)
                  sixToggle(false)
                  sevenToggle(true)
                  }} className="bg-black w-full h-full rounded-xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Mei Ria</div>
              </div>
            </div>
            <div>
              <p className="text-xl">We Care, Anytime,Anywhere</p>
            </div>
          </div>
          } 
          {seven && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-2xl">Kapan artikel Sakit Kepala dipublikasikan</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => {
                  setKine(kine + 1)
                  sevenToggle(false)
                  eightToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">20 Agustus 2024</div>
                <div onClick={() => {
                  setVideo(video + 1)
                  sevenToggle(false)
                  eightToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">21 Agustus 2024</div>
                <div onClick={() => {
                  setFoto(foto + 1)
                  sevenToggle(false)
                  eightToggle(true)
                  setScore(score + 1)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">22 Agustus 2024</div>
                <div onClick={() => {
                  setPertunjukan(pertunjukan + 1)
                  sevenToggle(false)
                  eightToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">12 September 2024</div>
              </div>
            </div>
            <div>
              <p className="text-xl">We Care, Anytime,Anywhere</p>
            </div>
          </div>
          } 
          {eight && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-4xl">Siapa nama kontak unit reaksi cepat ITB Jatinangor</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => {
                  setVideo(video + 1)
                  eightToggle(false)
                  nineToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">laba-laba sunda</div>
                <div onClick={() => {
                  setKine(kine + 1)
                  eightToggle(false)
                  nineToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Dayat</div>
                <div onClick={() => {
                  setFoto(foto + 1)
                  eightToggle(false)
                  nineToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Afif</div>
                <div onClick={() => {
                  setPertunjukan(pertunjukan + 1)
                  eightToggle(false)
                  nineToggle(true)
                  setScore(score + 1)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">Bambang</div>
              </div>
            </div>
            <div>
              <p className="text-xl">We Care, Anytime,Anywhere</p>
            </div>
          </div>
          } 
          {nine && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold text-4xl">Berapa jumlah kontak dokter yang tertera pada website</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => {
                  setVideo(video + 2)
                  nineToggle(false)
                  tenToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">6</div>
                <div onClick={() => {
                  setPertunjukan(pertunjukan + 3)
                  nineToggle(false)
                  tenToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">10</div>
                <div onClick={() => {
                  setKine(kine + 4)
                  nineToggle(false)
                  tenToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">7</div>
                <div onClick={() => {
                  setFoto(foto + 1)
                  nineToggle(false)
                  tenToggle(true)
                  setScore(score + 1)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center text-2xl font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">5</div>
              </div>
            </div>
            <div>
              <p className="text-xl">We Care, Anytime,Anywhere</p>
            </div>
          </div>
          } 
          {ten && 
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className="w-5/6 h-3/4 text-black bg-[#EEEBE3] rounded-3xl p-8 flex flex-col m-2">
              <div><p className="font-bold">Berapa jumlah pertanyaan yang sudah kamu jawab 😁</p></div>
              <div className="grid grid-rows-2 grid-cols-2 gap-4 h-full w-full p-4">
                <div onClick={() => {
                  tenToggle(false)
                  resultToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">8</div>
                <div onClick={() => {
                  tenToggle(false)
                  resultToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">10</div>
                <div onClick={() => {
                  tenToggle(false)
                  resultToggle(true)
                  setScore(score + 1)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">9</div>
                <div onClick={() => {
                  tenToggle(false)
                  resultToggle(true)
                  }} className="bg-black w-full h-full rounded-3xl border-black bg-inherit border-2 items-center flex justify-center font-bold active:bg-black active:text-[#EEEBE3] text-center p-2">14</div>
              </div>
            </div>
            <div>
              <p className="text-xl">We Care, Anytime,Anywhere</p>
            </div>
          </div>
          }
          {cover && 
          <div className="h-screen w-screen bg-black fixed">
          </div>
          }
          {result &&
          <div className="flex w-screen h-screen justify-center items-center flex-col fixed z-20">
            <div className='text-4xl'>nih pencet tombolnya kalo bisa</div>
            <button onClick={() => finalToggle(true)} className="bg-white text-black rounded-2xl font-bold px-4 py-2 animate-spin m-4">score kamu adalah...</button>
          </div>
          }
          {final && 
          <div className="h-screen w-screen bg-[#F4FFE7] fixed z-50 flex flex-col text-[#40A578] items-center justify-center">
            <div className='text-3xl font-bold'>your final score is...</div>
            <div className='text-9xl font-bold'>{score}</div>
            <div><button onClick={()=>{
              coverToggle(false)
              resultToggle(false)
              finalToggle(false)
              setScore(0)
            }} className='border-2 border-[#40A578] rounded-3xl px-2 py-2 animate-bounce'>Try Again</button></div>
            <div className='mt-8 font-semibold'>Jangan lupa untuk menonton STEI-Klinik di Pitching Area (Auditorium) 🔥😜🙏🙏😭😭😭🥹🥰🤩</div>
          </div>
          }
        </ul>
      </nav>
    </header>
  );
}
