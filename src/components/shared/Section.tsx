import classNames from 'classnames/bind'
import React from 'react'

import styles from './Section.module.scss'

const cx = classNames.bind(styles)

/**
 * Section 컴포넌트는 공통적으로 사용되는 디자인을 별도의 컴포넌트로 뺀 것입니다.
 * 공통적으로 사용되는 디자인을 별도의 컴포넌트로 뺄 수 있다.
 */ 
function Section({
  className,
  children,
  title,
}: {
  children: React.ReactNode
  className?: string
  title?: React.ReactNode
}) {
  return (
    <section className={cx(['container', className])}>
      {title != null ? <div className={cx('txt-title')}>{title}</div> : null}
      {children}
    </section>
  )
}

export default Section
