import Image from 'next/image'

import { Container } from '@/components/Container'
import logoTransistor from '@/images/logos/transistor.svg'
import raiffeisen from '@/images/logos/Raiffeisen_Bank.svg'

export function Sponsors() {
  return (
    <section
      id="sponsors"
      aria-labelledby="sponsors-title"
      className="py-20 sm:py-32"
    >
      <h2 id="sponsors-title" className="sr-only">
        Kiemelt támogatónk
      </h2>
      <Container>
        <p className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          Kiemelt támogatónk
        </p>
        <ul className="mt-20 flex flex-col items-center justify-center space-y-12 sm:flex-row sm:space-x-12 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-12">
          <li>
            <ul className="flex flex-col items-center space-y-12 sm:space-y-12 md:flex-row md:space-y-0 md:space-x-16 lg:space-x-32">
              <li className="flex">
                <Image
                  src={raiffeisen}
                  alt="raiffeisen"
                  layout="fixed"
                  unoptimized
                />
              </li>
            </ul>
          </li>
        </ul>
      </Container>
    </section>
  )
}
