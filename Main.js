// WebView library 적용
// npm install react-native-webview

import React from "react";
import {View, Button} from 'react-native'
import WebView from "react-native-webview";

// 함수형 컴포넌트
const Main =()=>{
    return(
        <View style={{flex:1,}}>
            {/* 1) 기본 웹뷰 배치 - style중에서 크기값은 기본 flex로 지정되어 있음. */}
            <WebView source={{uri:'https://reactnative.dev'}} style={{margin:8,height:100,}}></WebView>

            {/* 다른 뷰가 있다면 다른 뷰의 높이값을 제외한 나머지 영역을 모두 차지하게 됨. */}
            <Button title="button"></Button>

            {/* 2) 만약 억지로 사이즈를 정하고 싶다면 부모뷰를 만들어 사이즈를 부모뷰에 지정 */}
            <View style={{height:250, borderWidth:2, margin:4,}}>
                <WebView source={{uri:'https://www.naver.com'}}></WebView>
            </View>

              {/* 3) 당연히 본인 웹사이트도 열 수 있음. js/css 모두 잘 동작함 */}
              <WebView source={{uri:'http://mrhi2022.dothome.co.kr'}}></WebView>

              {/* 4) 웹뷰를 이용하면 RN에서 구현하기 번거로운 화면은 웹뷰로 만들어서 적용할 수 있음. 예) 지도화면, 로그인화면,  */}
              
              {/* 카카오 지도 구현하기 - 예전 웹 수업시간에 구현했던 카카오 지도 웹 페이지 보여주기 */}
              <WebView source={{uri:'https://lux44.github.io/webKakaoMap/'}}></WebView>
        </View>
    )
}
export default Main