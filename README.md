# **✨ DIEDIE.gg v0.0.1**

<div align="center"><img width="600" src="https://github.com/diedielolorg/diediefrontend/assets/84097192/3d46a4d7-e263-41f6-ae1d-85b0a2c616ab" alt="main page"></div>

_<p align="center">🏃 DIEDIE.gg는 현재 열심히 구현 중입니다! 🏃</p>_

<br/><br/>

# **🔗 배포 주소**

<table>
  <tr align="center">
    <td><b>구분</ㅠ></td>
    <td><b>링크 바로가기</b></td>
    <td><b>구분</b></td>
    <td><b>링크 바로가기</b></td>
  </tr>
  <tr align="center">
    <td>
      <img src="https://github.com/diedielolorg/diediefrontend/assets/84097192/e3af4b12-ebc1-4cf2-8760-c9dba5d978ec" alt="다이다이 로고" style="width: 20px; height: 20px; padding-top: 10px;">
    </td>
    <td>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://diediefrontend.vercel.app/">
        DIEDIE.gg
      </a>
    </td>
    <td>
      <img src="https://github.com/dawhisky/dawhisky-FE/assets/84097192/ad8ad10c-7bce-4157-bf21-238d672086c9" alt="노션 아이콘" style="width: 20px; height: 20px; padding-top: 10px;">
    </td>
    <td>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://diedie.notion.site/DIEDIE-gg-13f2db91627e49cf8cc31c2242e191e6?pvs=4">
        Team Notion
      </a>
    </td>
  </tr>
  <tr align="center">
    <td>
      <img src="https://github.com/dawhisky/dawhisky-FE/assets/84097192/54e001c4-5d51-4cba-b988-f3802b16df50" alt="리액트 아이콘" style="width: 25px; height: 20px; padding-top: 10px;">
    </td>
    <td>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/diedielolorg/diediefrontend">
        FE GitHub
      </a>
    </td>
    <td>
      <img src="https://github.com/dawhisky/dawhisky-FE/assets/84097192/b8326c42-4cea-4e84-96ab-b87c260de006" alt="노드 아이콘" style="width: 20px; height: 20px; padding-top: 10px;">
    </td>
    <td>
      <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/diedielolorg/diediebackend">
        BE GitHub
      </a>
    </td>
  </tr>
</table>

<br/><br/>

# **🎯 서비스 소개**

    롤을 하면서 한 번이라도 누군가와 싸워본적이 있으신가요?
    DIEDIE.gg는 리그 오브 레전드 유저 정보 조회 및 악성 유저 신고 커뮤니티입니다.
    익명 뒤에 숨어서 욕을 하는 유저들을 신고하고, 유저의 신고 내역을 조회할 수 있습니다!

- `개발 기간` : 2023.08 ~ 2023.09
- `1차 배포 예정일` : 2023.09.18

<br/><br/>

# **✨ 주요 기능 미리보기**

<details>
  <summary>
    &nbsp;&nbsp;<b>🔍 유저 검색</b>
  </summary>

### 📌 유저 검색

<img src="https://github.com/diedielolorg/diediefrontend/assets/84097192/47a3ab11-28d0-4d97-8b73-b2f8f00448b8" alt="메인페이지" width="800" />

  <br/>

- 현재 기능 구현 중이며 구현 완료 시 세부 기능 안내 작성 예정입니다!

  <br/>
</details>

<br/>

<details>
  <summary>
    &nbsp;&nbsp;<b>🔍 로그인 & 회원가입</b>
  </summary>

### 📌 로그인

<img src="https://blog.kakaocdn.net/dn/bQZUxa/btsBbMYT5ub/kTB0hxArMLIfW8wGAVQC01/img.gif" alt="로그인" width="800" />

- 로그인시 이메일 비밀번호 둘중에 하나라도 일치하지 않으면 스낵바로 안내가 됩니다.
- 로그인이 완료되면 메인페이지로 이동됩니다.

<br/>

### 📌 회원가입

<img src="https://blog.kakaocdn.net/dn/bB9zpn/btsBaYrK78v/mrLu5TpkZecNuDUirnjynK/img.gif" alt="회원가입" width="800" />

- 고유한 닉네임을 위해 회원가입시 닉네임 중복검사를 합니다.
- 이메일 인증시 이미 가입된 이메일이라면 헬프메세지로 닉네임 중복안내가 됩니다.
- 닉네임 중복이 아니라면 입력한 이메일로 인증번호가 보내지고 3분 타이머가 시작됩니다.
- 타이머 3분동안은 동일한 이메일로 인증번호 재발송이 어려우며 이메일 수정시 타이머가 멈추고 수정된 이메일로 메일 재발송시 타이머가 3분으로 초기화 되도록 하여 여러 상황에 따라 타이머가 멈추고 동작하도록 구현하였습니다.
- 닉네임, 이메일 중복확인, 이메일 인증, 비밀번호 일치여부 확인이 전부 이루어져야 회원가입 버튼이 활성화도되록 하였습니다.
- 회원가입이 완료되면 로그인 페이지로 이동됩니다.

  <br/>
</details>

<br/>

<details>
  <summary>
    &nbsp;&nbsp;<b>🔍 유저 정보 & 인게임 정보 조회</b>
  </summary>

### 📌 유저 정보 조회

<a target="_blank" rel="noopener noreferrer nofollow" href="https://oliviakim.tistory.com/178">
  <img src="https://blog.kakaocdn.net/dn/c7JAiJ/btstpD3zGzt/Pv0DbYJN3YDG5VsElAilNk/img.gif" alt="유저 정보 조회" width="800" />
</a>

- 메인페이지 검색창에서 유저를 조회 후 해당 유저 클릭 시 유저 정보 페이지로 이동됩니다.
- 계정이 있는 유효한 사용자일 경우 게임 프로필 이미지, 유저 정보, 신고 유저 TOP 100 중 해당 순위, 게임 내 정보 등이 조회됩니다.
- Chart.js를 이용해 신고 내역과 유저 게임 내 정보를 시각화하여 출력하였습니다.
- 존재하지 않는 유저일 경우 에러페이지로 랜딩됩니다.
- 유저 신고 내역은 react-paginate의 페이지네이션을 이용해 5개씩 보여지도록 구현하였습니다.

<br/>

### 📌 인게임 정보 조회

<a target="_blank" rel="noopener noreferrer nofollow" href="https://oliviakim.tistory.com/178">
  <img src="https://blog.kakaocdn.net/dn/cvpvvP/btsts8ap8wX/UQLRyX4yAWvUs0vgjJPbyK/img.gif" alt="인게임 정보 조회" width="800" />
</a>

- 조회한 유저의 인게임 정보 클릭 시, 해당 유저가 게임 중일 경우 실시간 게임 데이터를 조회합니다.
- 이때 유저가 진행 중인 게임 내 유저들의 기본 정보와 신고 내역이 있을 경우 신고 횟수 및 최대 누적 카테고리를 출력합니다.
- 신고 내역이 없을 경우 모범시민이라는 문구가 보여집니다.
- 조회한 유저가 게임 중이 아닐 경우 진행 중인 게임이 없다는 문구를 출력합니다.

  <br/>
</details>

<br/>

<details>
  <summary>
    &nbsp;&nbsp;<b>🔍 유저 신고 등록 & 월별 신고 Top100 조회</b>
  </summary>

### 📌 유저 신고하기

<img src="https://github.com/diedielolorg/diediefrontend/assets/84097192/38a52b8e-c028-4519-a5f8-d8aa98d85fac" alt="유저 신고하기" width="800" />

- 현재 기능 구현 중이며 구현 완료 시 세부 기능 안내 작성 예정입니다!

<br/>

### 📌 월별 신고 내역 Top100 조회

<img src="https://github.com/diedielolorg/diediefrontend/assets/84097192/a8a72e86-f51e-4662-ac67-39ccb98a93c5" alt="랭킹 조회" width="800" />

- 현재 기능 구현 중이며 구현 완료 시 세부 기능 안내 작성 예정입니다!

  <br/>
</details>

<br/>

<details>
  <summary>
    &nbsp;&nbsp;<b>🔍 마이페이지</b>
  </summary>

### 📌 마이 페이지

<img src="https://github.com/diedielolorg/diediefrontend/assets/84097192/f5bc6e26-1715-4d59-88e2-cc7369b6e8df" alt="마이페이지 리스트" width="800" />

- 현재 기능 구현 중이며 구현 완료 시 세부 기능 안내 작성 예정입니다!

<br/>

### 📌 닉네임 수정

<img src="https://blog.kakaocdn.net/dn/ctBq45/btsA3YNy9Vj/l8pbLdeTmgZKonejqK6yx1/img.gif" alt="닉네임 수정" width="800" />

- 고유한 닉네임을 위해 변경하고자 하는 닉네임이 중복되지 않았는지 확인합니다.
- 닉네임 저장하기를 누르면 마이페이지로 이동합니다.
- 저장이 완료되면 로컬스토리지에 변경된 닉네임으로 등록되고 마이페이지에 변경된 닉네임이 표시됩니다.

  <br/>
</details>

<br/>

<details>
  <summary>
    &nbsp;&nbsp;<b>🔍 한국어, 영어 다국어 처리</b>
  </summary>

### 📌 다국어

<img src="https://github.com/diedielolorg/diediefrontend/assets/84097192/6118f1c8-baae-4f02-bdea-0a24e5545e24" alt="다국어" width="800" />

- 현재 기능 구현 중이며 구현 완료 시 세부 기능 안내 작성 예정입니다!

  <br/>
</details>

<br/><br/>

# 🏗️ 기술 스택

<table>
  <tr>
    <td>Library</td>
    <td>
      <img src="https://img.shields.io/badge/React-5DC1DA?style=for-the-badge&logo=React&logoColor=white" alt="React">
    </td>
  </tr>
  <tr>
    <td>Programming Language</td>
    <td>
      <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript">
    </td>
  </tr>
  <tr>
    <td>Styling</td>
    <td>
      <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled-Components">
    </td>
  </tr>
  <tr>
    <td>State Management</td>
    <td>
      <img src="https://img.shields.io/badge/recoil-5D4EFF?style=for-the-badge&logo=Recoil&logoColor=white" alt="Recoil">
      <img src="https://img.shields.io/badge/tanstack--query-FF4759?style=for-the-badge&logo=react-query&logoColor=white" alt="Tanstack-Query">
    </td>
  </tr>
  <tr>
    <td>Version Control</td>
    <td>
      <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git"> 
      <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
    </td>
  </tr>
  <tr>
    <td>Design</td>
    <td>
      <img src="https://img.shields.io/badge/Figma-0AC97F?style=for-the-badge&logo=figma&logoColor=white" alt="Figma">
    </td>
  </tr>
  <tr>
    <td>Communication</td>
    <td>
      <img src="https://img.shields.io/badge/Notion-303134?style=for-the-badge&logo=notion&logoColor=white" alt="ESLint"> 
      <img src="https://img.shields.io/badge/Slack-481449?style=for-the-badge&logo=slack&logoColor=white" alt="Prettier">
    </td>
  </tr>
</table>

<br/><br/>

# **📊 업데이트 내역**

- 0.0.1
  - 작업 진행 중

<br/><br/>

# **👪 개발팀 소개**

<table>
  <tbody>
    <tr>
      <td align="center"><b>프론트엔드</b></td>
      <td align="center"><b>프론트엔드</b></td>
      <td align="center"><b>프론트엔드</b></td>
      <td align="center"><b>프론트엔드</b></td>
    </tr>
    <tr>
      <td align="center">
        <img style="width: 100px; height: 100px;" src="https://ddragon.leagueoflegends.com/cdn/11.1.1/img/profileicon/775.png" alt="프로필 이미지">
      </td>
      <td align="center">
        <img style="width: 100px; height: 100px;" src="https://shorturl.at/krzBE" alt="프로필 이미지">
      </td>
      <td align="center">
        <img style="width: 100px; height: 100px;" src="https://cdn-store.leagueoflegends.co.kr/images/v2/profileicons/5766.jpg" alt="프로필 이미지">
      </td>
      <td align="center">
        <img style="width: 100px; height: 100px;" src="https://cdn-store.leagueoflegends.co.kr/images/v2/profileicons/3150.jpg" alt="프로필 이미지">
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://github.com/Shinheeje">신희제 (L)</a></td>
      <td align="center"><a href="https://github.com/hansololiviakim">김한솔</a></td>
      <td align="center"><a href="https://github.com/stella0905">최유리</a></td>
      <td align="center"><a href="https://github.com/godjooyoung">신주영</a></td>
    </tr>
    <tr>
      <td align="center"><b>백엔드</b></td>
      <td align="center"><b>백엔드</b></td>
      <td align="center"><b>백엔드</b></td>
      <td align="center"><b>디자이너</b></td>
    </tr>
    <tr>
      <td align="center">
        <img style="width: 100px; height: 100px;" src="https://ddragon.leagueoflegends.com/cdn/11.1.1/img/profileicon/4031.png" alt="프로필 이미지">
      </td>
      <td align="center">
        <img style="width: 100px; height: 100px;" src="https://ddragon.leagueoflegends.com/cdn/11.1.1/img/profileicon/4862.png" alt="프로필 이미지">
      </td>
      <td align="center">
        <img style="width: 100px; height: 100px;" src="https://ddragon.leagueoflegends.com/cdn/11.1.1/img/profileicon/4568.png" alt="프로필 이미지">
      </td>
      <td align="center">
        <img style="width: 100px; height: 100px;" src="https://ddragon.leagueoflegends.com/cdn/13.17.1/img/profileicon/3019.png" alt="프로필 이미지">
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://github.com/ParkBrianJunSoo">박준수 (L)</a></td>
      <td align="center"><a href="https://github.com/dhtjddls">김용식</a></td>
      <td align="center"><a href="https://github.com/ystar5008">오성인</a></td>
      <td align="center">최혜민</td>
    </tr>
  </tbody>
</table>
