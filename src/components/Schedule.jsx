import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

const schedule = [
  {
    date: 'Szeptember 23',
    dateTime: '2022-09-23',
    summary:
      'The first day of the conference is focused on dark patterns for ecommerce.',
    timeSlots: [
      {
        name: 'A HofferSuli zenekarainak, HELIT és TIMELESS koncertje',
        description: 'Not so one-time payments',
        start: '16:00',
        end: '17:00',
      },
      {
        name: 'PALACKORRÚ HOWARD: TÁRSADALOMSZOCIOLÓGIAI BORKÓSTOLÁS',
        description: 'The finer print',
        start: '17:00',
        end: '18:00',
      },
      {
        name: 'Hangácsi Márton ',
        description: 'Post-purchase blackmail',
        start: '18:00',
        end: '20:00',
      },
      {
        name: 'Kollár - Klemencz László kamara Trió- Ég az erdő',
        description: null,
        start: '20:00',
        end: '21:00',
      },
    ],
  },
  {
    date: 'Szeptember 24',
    dateTime: '2022-09-24',
    summary:
      'Next we spend the day talking about deceiving people with technology.',
    timeSlots: [
      {
        name: 'Messessippi koncert',
        description: 'The invisible card reader',
        start: '15:00',
        end: '16:00',
      },
      {
        name: 'Langaléta Garabonciások találkozás a kurtalábú közönséggel',
        description: 'Stealing fingerprints',
        start: '16:30',
        end: '17:30',
      },
      {
        name: 'Teddy Harpo One Man Band',
        description: 'Voting machines',
        start: '18:00',
        end: '19:00',
      },
      {
        name: 'Ripoff Raskolnikov Band',
        description: null,
        start: '20:00',
        end: '21:00',
      },
    ],
  },
  {
    date: 'Szeptember 25',
    dateTime: '2022-09-25',
    summary:
      'We close out the event previewing new techniques that are still in development.',
    timeSlots: [
      {
        name: 'A KultPETŐFI rendezvény részeként: Petőfi versek-diákok',
        description: 'Neuralink dark patterns',
        start: '15:00',
        end: '16:00',
      },
      {
        name: 'A KultPETŐFI rendezvény részeként: Pendelyes-néptánc',
        description: 'DALL-E for passports',
        start: '16:00',
        end: '16:30',
      },
      {
        name: 'A KultPETŐFI rendezvény részeként: Fertőszentmiklósi Citera Klub',
        description: 'Quantum password cracking',
        start: '16:30',
        end: '17:00',
      },
      {
        name: 'A KultPETŐFI rendezvény részeként: Fertőszentmiklósi Férfi Dalárda',
        description: null,
        start: '17:00',
        end: '18:00',
      },
      {
        name: 'Ötödik évszak',
        description: 'SkyNet is coming',
        start: '18:00',
        end: '19:00',
      },
      {
        name: 'Swing à la Django',
        description: 'Dark patterns for the metaverse',
        start: '20:00',
        end: '21:00',
      },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex space-x-4 overflow-x-auto pl-4 pb-4 sm:mx-0 sm:block sm:space-y-10 sm:space-x-0 sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
            <div
              key={day.dateTime}
              className={clsx(
                'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                {
                  'opacity-70': dayIndex !== selectedIndex,
                }
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {day.date}
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      {/*  <p className="mt-1.5 text-base tracking-tight text-blue-900">
        {day.summary}
      </p> */}
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <div
      className={clsx(
        className,
        'space-y-8 bg-white/60 py-14 px-10 text-center shadow-xl shadow-blue-900/5 backdrop-blur'
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <div key={timeSlot.start}>
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <>
              <p className="sr-only">talking about</p>
              {/* <p className="mt-1 tracking-tight text-blue-900">
                {timeSlot.description}
              </p> */}
            </>
          )}
          <p className="sr-only">at</p>
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
          </p>
        </div>
      ))}
    </div>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section
      id="schedule"
      aria-labelledby="schedule-title"
      className="py-20 sm:py-32"
    >
      <h2 id="schedule-title" className="sr-only">
        Program
      </h2>
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <p className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Program
          </p>
          {/*  <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            The worst people in our industry giving the best talks you’ve ever
            seen. Nothing will be recorded and every attendee has to sign an NDA
            to watch the talks.
          </p> */}
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute -inset-x-0 -top-40 -bottom-32 overflow-hidden bg-indigo-50">
          <div className="absolute left-full top-0 translate-y-[0%] -translate-x-[50%] sm:left-1/2 sm:-translate-y-[15%] sm:-translate-x-[20%] md:translate-x-[0%] lg:translate-x-[5%] lg:translate-y-[4%] xl:-translate-y-[8%] xl:translate-x-[27%]">
            <Image
              src={backgroundImage}
              alt=""
              layout="fixed"
              width={918}
              height={1495}
              unoptimized
            />
          </div>
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
