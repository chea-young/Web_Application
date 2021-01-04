# Website

## 가상의 CCTV 위치
- 1번 광화문 사거리 CCTV => 37.570226, 126.976920
- 2번 청계2가 CCTV => 37.569834, 127.002028
- 3번 한강대로 북단 => 37.522583, 126.961311
- 4번 반포대교 남단 => 37.515105, 126.996357

## 웹 애플리케이션 순서도
<img src = "images\저장.png" alt = "image1">

## 웹 애플리케이션 설명

## Repository 파일 설명
- map3.html 
    첫번째 화면을 보여주는 html 파일로 자동차의 위치는 gecoding을 이용하여 사용자의 현재 위치를 마크하여 보여주고 지정된 CCTV 위치에서 5km 안에 있으면 해당 CCTV에서 알림이 오도록 개발을 할 예정
- index.html 
    사용자가 '경로찾기' 클릭 후 출발지와 목적지를 입력하면 보여주는 화면과 하단의 입력, 출발지, 목적지 입력 부분이 구현


### 추가적으로 개발하면 좋을 점 & 수정 점
- 사고 후 클릭 시 CCTV 보이게 하기
- 시작화면에서 GPS로 사용자 위치 센싱 --------> 성공
- 사용자 위치에서 5km 내에 있으면 알림
- 두 번 클릭이 아니더라도 출발지, 목적지 마크 
- zoom 사이즈 조절 --------------------------> 성공
## netlify로 web hosting
네이버 지도 api 사용시 웹 url 적용, 해당 url에서 api 사용 가능   
현재 iceboat.netlify.app iceboat.netlify.app/set_start_seoul.html iceboat.netlify.app/set_start_busan.html 127.0.0.1 등록   
도메인 변경시 지도 api url 변경 필요.

### 참고한 사이트