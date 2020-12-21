# Website

## netlify로 web hosting
네이버 지도 api 사용시 웹 url 적용, 해당 url에서 api 사용 가능   
현재 iceboat.netlify.app iceboat.netlify.app/set_start_seoul.html iceboat.netlify.app/set_start_busan.html 127.0.0.1 등록   
도메인 변경시 지도 api url 변경 필요.

## 수정점
* set_start_seoul & set_start_busan
    - 시연시 서울과 부산 위치 고정하기 위해 만듬   
    - map3,4 => 서울 큰화면, 작은화면   
    - map5,6 => 부산 큰화면, 작은화면   
    - 위치 및 CCTV default 값 설정필요.
* 차별점 제시 방안
    - 현재 위치 갱신 버튼을 알림 리스트 버튼(?)으로 수정
    - FCM 알림을 수신시 해당 사고 위치&사진 정보를 저장
    - 알림 리스트 버튼을 클릭시 수신받은 교통상황 정보 제공
        + 지도 api의 교통상황은 최소 5분에 한번 갱신 되는 것을 어떻게 표현해야 될지 잘 모르겠음...