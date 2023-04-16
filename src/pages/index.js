import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={[inter.className,"w-full, h-full"]}>
        <div class="h-full w-full flex flex-col items-center justify-center">
          <div className='leading-loose font-bold text-7xl  bg-clip-text text-transparent bg-gra bg-gradient-to-tr from-sky-500 to-indigo-500'>
            GitHub Badges
          </div>
        </div>
    </main>
  )
}
