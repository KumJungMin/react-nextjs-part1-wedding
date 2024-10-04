import classNames from 'classnames/bind'
import { format, parseISO, getDay } from 'date-fns'

import styles from './Heading.module.scss'
import Section from '@shared/Section'

const cx = classNames.bind(styles)

/**
 * 리렌더링에 영향을 받지 않는 상수 변수는 컴포넌트 밖에 선언합니다.
 */
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

function Heading({ date }: { date: string }) {
  const weddingDate = parseISO(date)

  const title = format(weddingDate, 'yy.MM.dd')
  const subTitle = days[getDay(weddingDate)]

  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{title}</div>
      <div className={cx('txt-day')}>{subTitle}</div>
    </Section>
  )
}

export default Heading
