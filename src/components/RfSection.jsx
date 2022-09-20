import Image from 'next/image'
import RfImage from '../images/rf_image.png'
export default function RfSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-[#f4e600] shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
                <span className="block">Bankszámlák akár</span>
                <span className="block">
                  <strong>O Ft</strong>
                </span>
                <span className="block">számlavezetési díjjal</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-black">
                A 2022-es Soproni Borzsongás kiemelt támogatója a Raiffeisen
                Bank. Szeptember 23. és 25. között kellemes hangulat, finom
                borok, izgalmas koncertek mellett a soproni bankfiók
                szakértőivel is találkozhattok! Ismerkedjen meg
                bankszámláinkkal, most 20 000 Ft jóváírással.
              </p>
              <a
                href="https://szamlavezetes.raiffeisen.hu/?utm_source=facebook&utm_medium=post&utm_content=borzsongas&utm_campaign=pi_account_2022"
                className="mt-8 inline-flex items-center rounded-md border border-transparent bg-borzSarga px-5 py-3 text-base font-medium text-borzKek shadow hover:bg-borzPiros"
              >
                Bővebben
              </a>
            </div>
          </div>
          <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
            <div className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20">
              <Image src={RfImage} alt="-" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
