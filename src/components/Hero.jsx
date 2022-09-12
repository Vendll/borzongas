import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute -inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        <div className="absolute top-0 left-0 -translate-y-[10%] -translate-x-[55%] -scale-x-100 sm:left-1/2 sm:-translate-y-[6%] sm:-translate-x-[98%] lg:-translate-x-[106%] xl:-translate-x-[122%]">
          <Image
            src={backgroundImage}
            alt=""
            layout="fixed"
            width={918}
            height={1495}
            priority
            unoptimized
          />
        </div>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="text-l font-display font-bold tracking-tighter text-borzKek sm:text-7xl">
            Soproni Borzsongás
          </h1>
          <div className="text-l mt-6 space-y-6 font-display tracking-tight text-black">
            <p>
              Magyarország legősibb borvidékének boros gazdáival invitáljuk
              Önöket a soproni bor útjának bejárására. Várjuk a bort szerető
              látogatókat, ismerjék meg a hagyományok ápolásának, valamint a
              modern borkészítés tudományának egyesüléseként megalkotott szép
              borokat, amelyeket már vagy szeretnek, vagy szeretni fognak.
            </p>
            <p>
              „Királyi gyümölcs, és a szegények gyümölcse, mert ízében benne van
              minden jó íz, amelyet az életben szerettünk.” – írja Krúdy a szőlő
              ezerféle zamatáról, melyek a bor aromájában, illatában és
              színeinek ragyogásában kelnek új életre a legjobb palackok
              nedűiként. Az Őszi Borzsongás a Soproni Borvidék borászataival is
              ennek a gazdagságnak igyekszik minél átfogóbb gyűjteményét
              bemutatni a Deák téren szeptember 23-25 között.
            </p>
            <p>A kínálatot színpadi és egyéb program csemegék színesítik.</p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Fellépők', '14'],
              ['Pincészetek', '19'],
              ['Helyszín', 'Sopron, Deák tér'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="text-sm text-black">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-borzPiros">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
