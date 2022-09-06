import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

import otodikEvszak from '@/images/avatars/Otodik_evszak.jpeg'
import teddyHarpo from '@/images/avatars/teddy_harpo.jpeg'
import hangacsiMarton from '@/images/avatars/DY7I6642.jpg'
import django from '@/images/avatars/django.jpg'
import palack from '@/images/avatars/palack.jpg'
import altalanos from '@/images/avatars/borzongas_alt.jpg'
import messessippi from '@/images/avatars/messessippi.jpeg'
import langaleta from '@/images/avatars/langaletra.jpeg'
import ripoff from '@/images/avatars/ripoff.jpeg'
import kollar from '@/images/avatars/kollar.jpeg'

const days = [
  {
    name: 'Péntek',
    date: 'Szeptember 23',
    dateTime: '2022-09-23',
    speakers: [
      {
        name: 'HofferSuli zenekarainak, HELIT és TIMELESS koncertje',
        role: 'Designer at Globex Corporation',
        image: altalanos,
      },
      {
        name: 'PALACKORRÚ HOWARD: TÁRSADALOMSZOCIOLÓGIAI BORKÓSTOLÁS',
        role: 'UX Design at InGen',
        image: palack,
      },
      {
        name: 'Hangácsi Márton ',
        role: 'General Manager at Initech',
        image: hangacsiMarton,
      },
      {
        name: 'Kollár - Klemencz László kamara Trió- Ég az erdő',
        role: 'Design Engineer at Weyland-Yutani',
        image: kollar,
      },
    ],
  },
  {
    name: 'Szombat',
    date: 'Szeptember 24',
    dateTime: '2022-09-24',
    speakers: [
      {
        name: 'Messessippi koncert',
        role: 'Designer at Globex Corporation',
        image: messessippi,
      },
      {
        name: 'Langaléta Garabonciások találkozás a kurtalábú közönséggel',
        role: 'UX Design at InGen',
        image: langaleta,
      },
      {
        name: 'Teddy Harpo One Man Band',
        role: 'General Manager at Initech',
        image: teddyHarpo,
      },
      {
        name: 'Ripoff Raskolnikov Band',
        role: 'Design Engineer at Weyland-Yutani',
        image: ripoff,
      },
    ],
  },
  {
    name: 'Vasárnap',
    date: 'Szeptember 25',
    dateTime: '2022-09-25',
    speakers: [
      {
        name: 'KultPETŐFI',
        role: 'Designer at Globex Corporation',
        image: altalanos,
      },
      {
        name: 'Fertőszentmiklósi Citera Klub',
        role: 'Designer at Globex Corporation',
        image: altalanos,
      },
      {
        name: 'Ötödik évszak',
        role: 'UX Design at InGen',
        image: otodikEvszak,
      },
      {
        name: 'Swing à la Django',
        role: 'General Manager at Initech',
        image: django,
      },
    ],
  },
]

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-borzKek sm:text-5xl"
          >
            Fellépők
          </h2>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:block lg:space-y-10 lg:text-left">
              {({ selectedIndex }) =>
                days.map((day, dayIndex) => (
                  <div key={day.dateTime} className="relative lg:pl-8">
                    <svg
                      aria-hidden="true"
                      className={clsx(
                        'absolute top-[0.5625rem] -left-[0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                        {
                          'fill-borzSarga stroke-borzSarga':
                            dayIndex === selectedIndex,
                          'fill-transparent stroke-slate-400':
                            dayIndex !== selectedIndex,
                        }
                      )}
                    >
                      <path
                        d="M3 0L6 3L3 6L0 3Z"
                        strokeWidth={2}
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="relative">
                      <div
                        className={clsx('text-sm', {
                          'text-borzSarga': dayIndex === selectedIndex,
                          'text-slate-500': dayIndex !== selectedIndex,
                        })}
                      >
                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                          <span className="absolute inset-0" />
                          {day.name}
                        </Tab>
                      </div>
                      <time
                        dateTime={day.dateTime}
                        className="mt-1.5 block text-2xl font-semibold tracking-tight text-borzPiros"
                      >
                        {day.date}
                      </time>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-blue-300',
                            'border-indigo-300',
                            'border-sky-300',
                          ][speakerIndex % 3]
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <Image
                          className="transition duration-300 group-hover:scale-110"
                          src={speaker.image}
                          alt=""
                          layout="fill"
                          objectFit="cover"
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {speaker.name}
                    </h3>
                    {/* <p className="mt-1 text-base tracking-tight text-slate-500">
                      {speaker.role}
                    </p> */}
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
