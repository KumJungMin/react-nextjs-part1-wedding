// filename = wedding_01
// format = jpg | webp
// option = c_fill, w_400

// 반복적으로 사용되는 로직은 유틸로 분리하는 것이 좋습니다.
// 계산 함수가 되기 떄문에 테스트 코드 작성하기 쉬워집니다.
function generateImageUrl({
  filename,
  format,
  option = 'q_auto,c_fill',
}: {
  filename: string
  format: 'jpg' | 'webp'
  option?: string
}) {
  return `https://res.cloudinary.com/ds2kluqdi/image/upload/${option}/v1692027253/${format}/${filename}.${format}`
}

export default generateImageUrl
