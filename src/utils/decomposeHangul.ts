// 한글 자음과 모음을 분리하는 함수
const decomposeHangul = (text: string): string => {
  const CHO = [
    'ㄱ',
    'ㄲ',
    'ㄴ',
    'ㄷ',
    'ㄸ',
    'ㄹ',
    'ㅁ',
    'ㅂ',
    'ㅃ',
    'ㅅ',
    'ㅆ',
    'ㅇ',
    'ㅈ',
    'ㅉ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ',
  ];
  const JUNG = [
    'ㅏ',
    'ㅐ',
    'ㅑ',
    'ㅒ',
    'ㅓ',
    'ㅔ',
    'ㅕ',
    'ㅖ',
    'ㅗ',
    'ㅘ',
    'ㅙ',
    'ㅚ',
    'ㅛ',
    'ㅜ',
    'ㅝ',
    'ㅞ',
    'ㅟ',
    'ㅠ',
    'ㅡ',
    'ㅢ',
    'ㅣ',
  ];
  const START_UNICODE = 0xac00;

  return Array.from(text)
    .map((char) => {
      if (char >= '가' && char <= '힣') {
        const code = char.charCodeAt(0) - START_UNICODE;
        const cho = Math.floor(code / 588);
        const jung = Math.floor((code % 588) / 28);
        const jong = code % 28;
        return (
          CHO[cho] +
          JUNG[jung] +
          (jong ? String.fromCharCode(0x11a7 + jong) : '')
        );
      }
      return char;
    })
    .join('');
};

export default decomposeHangul;
