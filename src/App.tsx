import classNames from 'classnames/bind'

import styles from './App.module.scss'
import Heading from './components/sections/Heading'
import Video from './components/sections/Video'

import ImageGallery from './components/sections/ImageGallery'
import Intro from './components/sections/Intro'
import Invitation from './components/sections/Invitation'
import Calendar from './components/sections/Calendar'
import Map from './components/sections/Map'
import Contact from './components/sections/Contact'
import Share from './components/sections/Share'
import AttendCountModal from './components/AttendCountModal'

import useWedding from './hooks/useWedding'

const cx = classNames.bind(styles)

function App() {
  // useWedding으로 API를 호출하고, 데이터를 가져옵니다.
  // 관심사를 분리함으로서, 컴포넌트의 역할을 명확히 할 수 있습니다.
  // 컴포넌트는 UI를 담당하고, 훅은 데이터를 가져오는 역할을 합니다.
  // 데이터 로직은 분리됐기에 테스트하기도 쉽습니다.
  const { wedding } = useWedding() // !!

  if (wedding == null) {
    return null
  }

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        locationName={location.name}
        date={date}
        message={intro}
      />
      <Invitation message={invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
      <Map location={location} />
      <Contact groom={groom} bride={bride} />
      <Share groomName={groom.name} brideName={bride.name} date={date} />
      <AttendCountModal wedding={wedding} />
    </div>
  )
}

export default App
