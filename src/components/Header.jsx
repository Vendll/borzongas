import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import MainLogo from '@/images/logos/borzsongás-02.svg'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import Link from 'next/link'
export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-16 w-auto text-slate-900" />
        </div>
        <div className="text-m order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-serif text-borzKek sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center space-x-4 px-4">
            <p>
              <time dateTime="2022-09-23">2022 09 23</time>-
              <time dateTime="2022-09-25">25</time>
            </p>
            <svg
              aria-hidden="true"
              className="h-1.5 w-1.5 overflow-visible fill-current stroke-current"
            >
              <path
                d="M3 0L6 3L3 6L0 3Z"
                strokeWidth={2}
                strokeLinejoin="round"
              />
            </svg>
            <p>Sopron, Deák Ferenc tér</p>
          </div>
        </div>
        <div className="hidden text-2xl sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Link href="https://www.facebook.com/soproniborzsongas">
            <AiFillFacebook className="text-borzPiros" />
          </Link>
          <Link href="https://www.instagram.com/soproniborzsongas/">
            <AiFillInstagram className="text-borzSarga" />
          </Link>
        </div>
      </Container>
    </header>
  )
}
