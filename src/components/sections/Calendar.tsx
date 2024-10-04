import { parseISO, format } from 'date-fns'
import classNames from 'classnames/bind'
import Section from '@shared/Section'
import { ko } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'
import { memo } from 'react'

import 'react-day-picker/dist/style.css'
import styles from './Calendar.module.scss'

const cx = classNames.bind(styles)

const css = `
    .rdp-caption {
        display: none;
    }
    .rdp-cell {
        cursor: default;
    }
    .rdp-head_cell {
        font-weight: 500;
        font-size: 14px;
        font-weight: bold;
    }
    .rdp-day_selected {
        background-color: var(--red);
        font-weight: bold;
        color: #fff;
    }
    .rdp-day_selected:hover {
        background-color: var(--red);
    }
`

function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date)

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>
        <DayPicker
          locale={ko}
          month={weddingDate}
          selected={weddingDate}
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  )
}

// memo를 사용하여 props가 변경되지 않으면 리렌더링을 방지합니다.
// 만약 부모 컴포넌트에서 useState를 사용하여 상태를 변경해도
// calendar에 넘기는 date 값이 변경되지 않으면 리렌더링되지 않습니다.
// ImageViewer는 open props값에 따라 리렌더링되므로 memo를 사용하지 않습니다.
export default memo(Calendar)
