# Neatified

Neatified는 복사 및 우클릭, 드래그를 방지하는 기능을 차단하는 웹 브라우저 플러그인입니다.

- v1.1.0 버전부터 더 이상 `.crx` 파일이 제공되지 않으며 오직 `.zip` 아카이브만 제공됩니다. (`.crx`는 실제 설치에 관여하지 않음)

## 목차

- [설치하기](#설치하기)
- [도움말(FAQ)](#도움말)
- [문의](#문의)

### 설치하기

각 웹 스토어 버전은 GitHub의 버전보다 레거시 버전이거나 정상적으로 동작하지 않을 수도 있습니다.
마지막 업데이트가 적용된 버전을 설치하려면 GitHub 소스에서 설치하세요.

> 단, master 브랜치의 경우 정상 작동을 보장하지 않습니다.

#### Firefox

* [Firefox addons에서 Neatified 부가기능을 설치](https://addons.mozilla.org/addon/neatified/)할 수 있습니다.

> Neatified는 Chrome에서 동작하도록 설계되었으며 일부 기능이 정상적으로 동작하지 않을 수도 있습니다.

#### Chrome

* [Chrome Web Store에서 Neatified 확장 프로그램을 설치](https://chrome.google.com/webstore/detail/neatified/cpchjdflfeejpegfmghbamllgdpikgaa)할 수 있습니다.

> 마지막 릴리즈를 빠르게 사용하려면 아래 방법을 통해 직접 소스에서 설치할 수 있습니다.

1. [릴리즈 폴더](https://github.com/Seia-Soto/neatified/releases)에서 최신 버전(Zip 아카이브)을 다운로드하세요.

```
모든 릴리즈 배포판(dist)이 릴리즈 페이지로 이동 및 업로드되었음을 알려드립니다.
```

* 알파벳 버전은 이전 버전에 대한 패치이며 사전순(a, b, c..., z에 가까울수록 최신 버전임)입니다.

2. 다운로드한 Zip 아카이브를 압축해제하고 Chrome 확장프로그램 관리 페이지(chrome://extensions)를 여세요.

3. 우측 상단에서 개발자 모드를 활성화하고 '압축해제된 확장프로그램 로드...' 버튼을 클릭하세요.

4. 압축해제한 Zip 아카이브 폴더(manifest.json 파일이 위치해 있음)를 선택하고 설치를 완료하세요.

5. 우측 상단에 Neatified가 설치된 것을 확인할 수 있습니다.

#### Whale

* [Whale Store에서 Neatified 확장앱을 설치](https://store.whale.naver.com/detail/piakhinfpllpilckgolopicmfjgocghc)할 수 있습니다.

> Whale은 Chromium 기반으로 Neatified의 동작이 호환됩니다.

#### Safari

> 기능 지원이 현재 레포지토리와 상이할 수 있습니다.

Safari용 Neatified는 Helloyunho님이 포크하여 만들어주셨습니다.
아래 레포지토리에서 설치 방법과 소스 코드를 확인할 수 있습니다.

- [Helloyunho/neatified](https://github.com/Helloyunho/neatified)

#### Microsoft Edge (EdgeHTML)

> `1.3.2` 버전부터 EdgeHTML에 대한 지원이 추가되었습니다. 단, EdgeHTML은 Windows에 기본적으로 설치되어 있는 구 버전입니다.

1. [릴리즈 폴더](https://github.com/Seia-Soto/neatified/releases)에서 최신 버전(Zip 아카이브)을 다운로드하세요.

2. 다운로드한 Zip 아카이브를 압축해제하고 Edge 기능 관리 페이지(about:flags)를 여세요.

3. 기능 관리 페이지에서 `확장 개발자 기능 사용`을 활성화하고 Edge를 재시작하세요.

4. 우측 상단의 메뉴 버튼을 눌러 `확장` 메뉴로 진입하고 압축해제한 Zip 아카이브 폴더(manifest.json 파일이 위치해 있음)을 선택하고 설치를 완료하세요.

5. 우측 상단에 Neatified가 설치된 것을 확인할 수 있습니다.

### 도움말

플러그인 실행 중 문제(특정 사이트에서 플러그인이 작동하지 않는 경우 등)가 발생한다면 [이슈 탭](https://github.com/Seia-Soto/neatified/issues)에서 **같은 상황을 만들 수 있는 방법** 그리고 **현재 운영체제 및 웹 브라우저 버전 등의 정보** 등을 꼭 첨부하여 신고해주시기 바랍니다.

1. 웹 사이트의 일부 기능이 정상적으로 작동하지 않습니다. 어떻게 Neatified를 해당 사이트에서 사용 중지하나요?

Neatified를 우측 상단의 확장프로그램 아이콘을 사용해서 설정을 편집할 수 있습니다. 설정은 **전역 설정**(모든 웹 사이트에서 설정이 적용됨)이며 Nothing을 사용하면 스크립트가 실행되지 않습니다.

2. Chrome 웹 브라우저를 동기화 기능과 함께 사용 중입니다. 다른 기기에서도 설정이 동기화되나요?

아니요. 동기화되지 않습니다. Chrome 확장프로그램 스토리지 기능에는 `sync`와 `local`, 총 2개의 옵션이 있습니다.
각각 동기화를 사용하는지 또는 현재 기기에서만 설정을 유지할 지에 차이가 있습니다.
Neatified는 기본적으로 소스로부터 설치되는 환경을 가정하기 때문에 `local`을 사용하여 설정을 업데이트합니다.

3. 확장프로그램은 어떻게 업데이트해야 하나요? 자동으로 업데이트되나요?

웹스토어 혹은 애드온 마켓에서 설치하지 않은 확장 프로그램은 자동으로 업데이트되지 않습니다. 확장 프로그램을 새 버전으로 다운로드한 뒤, 다시 설치해주시면 됩니다.

### 문의

[이메일](mailto:seia@outlook.kr) 또는 [트위터](https://twitter.com/equfix)에서 개발자(Seia-Soto)에게 문의를 남길 수 있습니다.

- [웹사이트](https://seia.io)
