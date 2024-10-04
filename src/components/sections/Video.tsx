import classNames from 'classnames/bind'

import styles from './Video.module.scss'
import Section from '../shared/Section'

const cx = classNames.bind(styles)

/** 
 * 비디오에는 webm, mp4 두 가지 형식의 비디오 파일이 있습니다.
 * webm은 구글에서 만든 비디오 포맷으로, 고화질의 비디오를 높은 압축률로 저장할 수 있습니다.
 * 단, IE에서는 지원하지 않기에 mp4 파일도 함께 제공합니다.
 * */ 
function Video() {
  return (

    /**
     * - video의 autoplay와 muted
     * video에 source를 지정하면, autoplay를 해당 자동재생되지 않습니다.
     * 이 경우 muted 속성을 추가하면 자동재생이 가능합니다.
     * */ 
    <Section className={cx('container')}>
      <video autoPlay loop muted poster="/assets/poster.jpg">
        <source src="/assets/main.webm" type="video/webm" />
        <source src="/assets/main.mp4" type="video/mp4" />
      </video>
    </Section>
  )
}

export default Video
