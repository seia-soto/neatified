# Neatified

Neatified는 복사 및 우클릭, 드래그를 방지하는 기능을 차단하는 웹 브라우저 플러그인입니다.

- v1.1.0 버전부터 더 이상 `.crx` 파일이 제공되지 않으며 오직 `.zip` 아카이브만 제공됩니다. (`.crx`는 실제 설치에 관여하지 않음)

[![](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/neatified/images/0)](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/neatified/links/0)[![](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/neatified/images/1)](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/neatified/links/1)[![](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/neatified/images/2)](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/neatified/links/2)[![](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/neatified/images/3)](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/neatified/links/3)[![](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/neatified/images/4)](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/neatified/links/4)[![](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/neatified/images/5)](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/neatified/links/5)[![](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/neatified/images/6)](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/neatified/links/6)[![](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/neatified/images/7)](https://sourcerer.io/fame/Seia-Soto/Seia-Soto/neatified/links/7)

## 목차

- [설치하기](#설치하기)
- [도움말(FAQ)](#도움말)
- [문의](#문의)

### 설치하기

#### Firefox

* [Firefox addons에서 Neatified 부가기능을 설치](https://addons.mozilla.org/addon/neatified/)할 수 있습니다.

#### Chrome

이 플러그인은 Chrome 웹 스토어에서 사용가능하지 않으므로 압축해제된 플러그인 소스를 사용하여 설치해야 합니다.

1. [릴리즈 폴더](https://github.com/Seia-Soto/neatified/releases)에서 최신 버전(Zip 아카이브)을 다운로드하세요.

```
모든 릴리즈 배포판(dist)이 릴리즈 페이지로 이동 및 업로드되었음을 알려드립니다.
```

* 알파벳 버전은 이전 버전에 대한 패치이며 사전순(a, b, c..., z에 가까울수록 최신 버전임)입니다.

2. 다운로드한 Zip 아카이브를 압축해제하고 Chrome 확장프로그램 관리 페이지(chrome://extensions)를 여세요.

3. 우측 상단에서 개발자 모드를 활성화하고 '압축해제된 확장프로그램 로드...' 버튼을 클릭하세요.

4. 압축해제한 Zip 아카이브 폴더(manifest.json 파일이 위치해 있음)를 선택하고 설치를 완료하세요.

5. 우측 상단에 Neatified가 설치된 것을 확인할 수 있습니다.

#### Safari

Safari용 Neatified는 Helloyunho님이 포크하여 만들어주셨습니다. 아래 레포지토리에서 설치 방법과 소스 코드를 확인할 수 있습니다.

- [Helloyunho/neatified](https://github.com/Helloyunho/neatified)

### 도움말

플러그인 실행 중 문제(특정 사이트에서 플러그인이 작동하지 않는 경우 등)가 발생한다면 [이슈 탭](https://github.com/Seia-Soto/neatified/issues)에서 **같은 상황을 만들 수 있는 방법** 그리고 **현재 운영체제 및 웹 브라우저 버전 등의 정보** 등을 꼭 첨부하여 신고해주시기 바랍니다.

1. 웹 사이트의 일부 기능이 정상적으로 작동하지 않습니다. 어떻게 Neatified를 해당 사이트에서 사용 중지하나요?

Neatified를 우측 상단의 확장프로그램 아이콘을 사용해서 설정을 편집할 수 있습니다. 설정은 **전역 설정**(모든 웹 사이트에서 설정이 적용됨)이며 Nothing을 사용하면 스크립트가 실행되지 않습니다.

2. Chrome 웹 브라우저를 동기화 기능과 함께 사용 중입니다. 다른 기기에서도 설정이 동기화되나요?

아니요. 동기화되지 않습니다. Chrome 확장프로그램 스토리지 기능에는 `sync`와 `local`, 총 2개의 옵션이 있습니다.
각각 동기화를 사용하는지 또는 현재 기기에서만 설정을 유지할 지에 차이가 있습니다.
하지만 현재 Neatified는 소스로부터 설치되므로 설치 시 무작위의 애플리케이션 ID가 주어집니다.
그렇기 때문에 `sync`를 사용하여도 실제로 동기화를 구현할 수는 없습니다. 추후 웹 스토어에서 사용가능하게 된다면 동기화를 사용할 예정입니다.

3. 확장프로그램은 어떻게 업데이트해야 하나요? 자동으로 업데이트되나요?

확장 프로그램은 자동으로 업데이트되지 않습니다. 확장 프로그램을 새 버전으로 다운로드한 뒤, 다시 설치해주시면 됩니다.

### 문의

[이메일](mailto:seia@outlook.kr) 또는 [트위터](https://twitter.com/Seia_Soto)에서 개발자(Seia-Soto)에게 문의를 남길 수 있습니다.

- [Discord](https://discordapp.com/invite/vAEBXWY)
- [웹사이트](https://seia.io)
- [블로그](https://b2.seia.io)
- [개인정보 보호 정책](https://b2.seia.io/privacy-policy)
