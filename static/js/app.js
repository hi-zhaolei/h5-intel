(function(window) {
  function initTouchStyleApp() {
    var touchStyleApp = new TouchStyle('#touchBoxCt', {
      disableAnimation: (function() {
        return window.location.search.indexOf('disable_aniamtion=1') !== -1;
      }()),
      elementWrapSelector: '.touch-box-element-wrap',
      pagePosition: 'center',
      buttonColor: 'rgba(255, 255, 255, 0.9)',
      originWidth: 320,
      originHeight: 504,
      boxOptions: {
        loop: true,
        animation: 'flow',
        duration: 500,
        itemSelector: '.touch-box-item'
      },
      music: {
        src: 'img/Avengers.mp3',
        autoPlay: true,
        loop: true
      },
      elements: {
        'pg09417020_760': [{
          id: 'dot_01',
          css: 'touch-box-element dots_01',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '',
          style: 'position:absolute;left:30.55%;top:48%;width:1.25%;height:0.8%;background-color:yellow;box-shadow:0 0 5px yellow; border-radius:50%;opacity:0;',
        }, {
          id: 'dot_02',
          css: 'touch-box-element dots_01',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '',
          style: 'position:absolute;left:59.55%;top:53%;width:1.25%;height:0.8%;background-color:#00aeef;box-shadow:0 0 5px #00aeef; border-radius:50%;opacity:0;',
        }, {
          id: 'dot_03',
          css: 'touch-box-element dots_01',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '',
          style: 'position:absolute;left:51.55%;top:31%;width:1.25%;height:0.8%;background-color:yellow;box-shadow:0 0 5px yellow; border-radius:50%;opacity:0;',
        }, {
          id: 'dot_04',
          css: 'touch-box-element dots_01',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '',
          style: 'position:absolute;left:27.85%;top:35.6%;width:1.25%;height:0.8%;background-color:#00aeef;box-shadow:0 0 5px #00aeef; border-radius:50%;opacity:0;',
        },{
          id: 'pe09417051_921',
          css: 'touch-box-element',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '<img src="./img/guangyun.png" class="touch-box-element-image">',
          style: 'position:absolute;left:5.55%;top:18.57%;width:88.91%;height:56.45%;',
        }, {
          id: 'pe09875150_492',
          css: 'touch-box-element',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '<img src="./img/yuanquan.png" class="touch-box-element-image">',
          style: 'position:absolute;left:27.58%;top:33.14%;width:44.84%;height:28.47%;',
        }, {
          id: 'pe09908052_493',
          css: 'touch-box-element',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '<img src="./img/guangquan.png" class="touch-box-element-image">',
          style: 'position:absolute;left: 41.2%;top: 41.9%;width: 17.5%;height: 11.12%; opacity:0;',
        },{
          id: 'pe10617688_810',
          css: 'touch-box-element',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '<img src="./img/wenzi.png" class="touch-box-element-image">',
          style: 'position: absolute;left: 19%;top: 63%;width: 60.44%;height: 21%;color: rgb(255, 255, 255);z-index: 11;',
        },{
          id: 'pe09908052_83',
          css: 'touch-box-element',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '<img src="./img/qiu.png" class="touch-box-element-image">',
          style: 'width:20.16%;height:12.8%;position:relative; 200px; top: 100px;-webkit-transition:100ms;transition:100ms;'
        },{
            id: 'pe24138530_3335',
            css: 'touch-box-element',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '<img src="./img/biaoti.png" class="touch-box-element-image">',
            style: 'position:absolute;  left: 10.63%;top: 62.69%;width: 82%;height: 5.3%;opacity:0;-webkit-animation-duration:500ms;animation-duration:500ms;-webkit-animation-delay:200ms;animation-delay:200ms;',
          }, {
            id: 'pe24183129_6336',
            css: 'touch-box-element',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '<img src="./img/biaoti-2.png" class="touch-box-element-image">',
            style: 'position:absolute;left: 25%;top:68.21%;width: 52.8%;height: 6.3%;opacity:0;-webkit-animation-duration:500ms;animation-duration:500ms;-webkit-animation-delay:200ms;animation-delay:200ms;',
          }, {
            id: 'pe24134053_5634',
            css: 'touch-box-element',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '<img src="./img/xuanguang.png" class="touch-box-element-image">',
            style: 'position:absolute;left: 29.37%;top: 63.5%;width: 60%;height: 21.33%;opacity:0;-webkit-animation-duration:4s;animation-duration:4s;-webkit-animation-delay:200ms;animation-delay:200ms;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;',
          }],
        'pg23733998_5418': [{
            id: 'pe23828596_4126',
            css: 'touch-box-element',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '<img src="./img/lvjuren.png" class="touch-box-element-image">',
            style: 'position:absolute;left:33.36%;top:11.13%;width:50.16%;height:45.64%;',
            animation: 'fly1',
            duration: 500,
            delay: 160
          }, {
            id: 'pe23875794_8227',
            css: 'touch-box-element',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '<img src="./img/leishen.png" class="touch-box-element-image">',
            style: 'position:absolute;left:5%;top:15.51%;width:63.44%;height:38.89%;',
            animation: 'fly2',
            duration: 500,
            delay: 80
          },{
            id: 'pe23912158_1028',
            css: 'touch-box-element',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '<img src="./img/heiguafu.png" class="touch-box-element-image">',
            style: 'position:absolute;left:0%;top:35.34%;width:48.91%;height:25.8%;',
            animation: 'fly3',
            duration: 500,
            delay: 400
          },{
            id: 'pe23939228_4629',
            css: 'touch-box-element',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '<img src="./img/yingyan.png" class="touch-box-element-image">',
            style: 'position:absolute;left:63.12%;top:33.98%;width:36.88%;height:27.68%;',
            animation: 'fly4',
            duration: 500,
            delay: 480
          }, {
            id: 'pe23960631_430',
            css: 'touch-box-element',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '<img src="./img/duizhang.png" class="touch-box-element-image">',
            style: 'position:absolute;left:20.3%;top:19.35%;width:37.5%;height:57.44%;',
            animation: 'fly5',
            duration: 500,
            delay: 240
          }, {
            id: 'pe23997243_5231',
            css: 'touch-box-element',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '<img src="./img/gangtiexia.png" class="touch-box-element-image">',
            style: 'position:absolute;left:50.69%;top:28.89%;width:26.09%;height:47.22%;',
            animation: 'fly6',
            duration: 800,
            delay: 320
          }, {
            id: 'pe24063800_4932',
            css: 'touch-box-element',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '<img src="./img/xuanguang.png" class="touch-box-element-image">',
            style: 'position:absolute;left:51.52%;top:27.96%;width:40%;height:14.22%;opacity:0;',
            animation: 'blink',
            animationIteration: 0,
            duration: 4000,
            delay: 2000
          }, {
            id: 'biaoti1',
            css: 'touch-box-element',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '<img src="./img/p2-biaoti.png" class="touch-box-element-image">',
            style: 'position:absolute;left: 10.63%;top: 66%;width: 79%;height: 7%;',
            animation: 'zoomIn',
            // animationIteration: 0,
            duration: 500,
            delay: 1200
          }, {
            id: 'biaoti2',
            css: 'touch-box-element',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '<img src="./img/p2-biaoti-2.png" class="touch-box-element-image">',
            style: 'position:absolute;left: 10.63%;top: 73%;width: 79%;height: 7%;',
            animation: 'zoomIn',
            // animationIteration: 0,
            duration: 500,
            delay: 1200
          }, {
            id: 'biaoti3',
            css: 'touch-box-element',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '<img src="./img/xuanguang.png" class="touch-box-element-image">',
            style: 'position:absolute;left: 29.37%;top: 69%;width: 60%;height: 21.33%;',
            animation: 'slideLeftReturnMid',
            animationIteration: 0,
            duration: 4000,
            delay: 1200
          }],
        'pg18080961_141': [{
          id: 'dot_05',
          css: 'touch-box-element  dots_02',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '',
          style: 'position:absolute;left:30.55%;top:48%;width:1.25%;height:0.8%;background-color:yellow;box-shadow:0 0 5px yellow; border-radius:50%;opacity:0;',
        }, {
          id: 'dot_06',
          css: 'touch-box-element  dots_02',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '',
          style: 'position:absolute;left:59.55%;top:53%;width:1.25%;height:0.8%;background-color:#00aeef;box-shadow:0 0 5px #00aeef; border-radius:50%;opacity:0;',
        }, {
          id: 'dot_07',
          css: 'touch-box-element  dots_02',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '',
          style: 'position:absolute;left:51.55%;top:31%;width:1.25%;height:0.8%;background-color:yellow;box-shadow:0 0 5px yellow; border-radius:50%;opacity:0;',
        }, {
          id: 'dot_08',
          css: 'touch-box-element  dots_02',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '',
          style: 'position:absolute;left:27.85%;top:35.6%;width:1.25%;height:0.8%;background-color:#00aeef;box-shadow:0 0 5px #00aeef; border-radius:50%;opacity:0;',
        },{
          id: 'pe18081054_662',
          css: 'touch-box-element',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '<img src="./img/biaoti-3.png" class="touch-box-element-image">',
          style: 'position:absolute;left:9.64%;top:23.31%;width:75.94%;height:6.25%;',
          animation: 'fadeInLeft',
          // animationType: 'special',
          // animationIteration: 0,
          duration: 500,
          delay: 0
        }, {
          id: 'pe21477267_390',
          css: 'touch-box-element',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '<img src="./img/biaoti-4.png" class="touch-box-element-image">',
          style: 'position:absolute;left:26.21%;top:30.3%;width:64.69%;height:6.25%;',
          animation: 'fadeInRight',
          // animationType: 'special',
          // animationIteration: 0,
          duration: 500,
          delay: 0
        }, {
          id: 'pe21519972_191',
          css: 'touch-box-element',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '<img src="./img/xuanguang.png" class="touch-box-element-image">',
          style: 'position:absolute;left:47.39%;top:20%;width:50%;height:17.77%;',
          animation: 'slideLeftReturn',
          animationType: 'special',
          animationIteration: 0,
          duration: 4000,
          delay: 1200
        }, {
          id: 'pe21568738_572',
          css: 'touch-box-element',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '<img src="./img/neirong.png" class="touch-box-element-image">',
          style: 'position:absolute;left:11.5%;top:58.01%;width:48.28%;height:3.27%;',
          animation: 'fadeInRight',
          duration: 500,
          delay: 500
        }, {
          id: 'pe21630900_84',
          css: 'touch-box-element',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '<img src="./img/neirong-2.png" class="touch-box-element-image">',
          style: 'position:absolute;left:11.5%;top:64.53%;width:48.28%;height:3.27%;',
          animation: 'fadeInRight',
          duration: 500,
          delay: 800
        }, {
          id: 'pe21651718_615',
          css: 'touch-box-element',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '<img src="./img/neirong-3.png" class="touch-box-element-image">',
          style: 'position:absolute;left:11.5%;top:71.32%;width:48.28%;height:3.27%;',
          animation: 'fadeInRight',
          animationType: 'special',
          duration: 500,
          delay: 1100
        }, {
          id: 'pe21672622_186',
          css: 'touch-box-element',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '<img src="./img/neirong-4.png" class="touch-box-element-image">',
          style: 'position:absolute;left:11.5%;top:78.14%;width:79.84%;height:3.27%;',
          animation: 'fadeInRight',
          duration: 500,
          delay: 1500
        }],
        'pg21749873_467': [{
            id: 'dot_09',
            css: 'touch-box-element  dots_03',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '',
            style: 'position:absolute;left:30.55%;top:48%;width:1.25%;height:0.8%;background-color:yellow;box-shadow:0 0 5px yellow; border-radius:50%;opacity:0;',
          }, {
            id: 'dot_10',
            css: 'touch-box-element  dots_03',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '',
            style: 'position:absolute;left:59.55%;top:53%;width:1.25%;height:0.8%;background-color:#00aeef;box-shadow:0 0 5px #00aeef; border-radius:50%;opacity:0;',
          }, {
            id: 'dot_11',
            css: 'touch-box-element  dots_03',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '',
            style: 'position:absolute;left:51.55%;top:31%;width:1.25%;height:0.8%;background-color:yellow;box-shadow:0 0 5px yellow; border-radius:50%;opacity:0;',
          }, {
            id: 'dot_12',
            css: 'touch-box-element  dots_03',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '',
            style: 'position:absolute;left:27.85%;top:35.6%;width:1.25%;height:0.8%;background-color:#00aeef;box-shadow:0 0 5px #00aeef; border-radius:50%;opacity:0;',
          },{
            id: 'text_bottom',
            css: 'touch-box-element',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '<img src="./img/dijiwenzi.png" class="touch-box-element-image">',
            style: 'position: absolute;left: 9%;top: 12%;width: 81%;height: 69.5%;z-index: 11;',
          },{
            id: 'pe21903101_490',
            css: 'touch-box-element',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '<img src="./img/yuanhuan.png" class="touch-box-element-image">',
            style: 'position:absolute;left:12.34%;top:22.2%;width:75.31%;height:47.92%;',
          }, {
            id: 'pe21934286_431',
            css: 'touch-box-element',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '<img src="./img/yingxiong.png" class="touch-box-element-image">',
            style: 'position:absolute;left: 66%;top: 22%;width:20.94%;height:13.59%;-webkit-transition:500ms;transition:500ms;',
          }, {
            id: 'pe21982940_452',
            css: 'touch-box-element',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '<img src="./img/yingxiong-2.png" class="touch-box-element-image">',
            style: 'position:absolute;left: 17%;top: 22%;width: 16.56%;height: 13.6%;-webkit-transition:500ms;transition:500ms;',
          }, {
            id: 'pe22010115_463',
            css: 'touch-box-element',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '<img src="./img/yingxiong-3.png" class="touch-box-element-image">',
            style: 'position:absolute;left: 9%;top: 45%;width:16.56%;height:13.39%;-webkit-transition:500ms;transition:500ms;',
          }, {
            id: 'pe22051192_794',
            css: 'touch-box-element',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '<img src="./img/yingxiong-4.png" class="touch-box-element-image">',
            style: 'position:absolute;left: 41.8%;top: 58.97%;width:16.56%;height:13.69%;-webkit-transition:500ms;transition:500ms;',
          },
          // {
          //   id: 'pe22066496_85',
          //   css: 'touch-box-element',
          //   relativePosition: 'elementWrap',
          //   zIndex: 11,
          //   body: '<img src="./img/yingxiong-5.png" class="touch-box-element-image">',
          //   style: 'position:absolute;left:57.22%;top:57.22%;width:27.19%;height:12.8%;',
          // },
          {
            id: 'pe22080177_26',
            css: 'touch-box-element',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '<img src="./img/yingxiong-6.png" class="touch-box-element-image">',
            style: 'position:absolute;left: 73%;top: 44.5%;width:23.13%;height:12.9%;-webkit-transition:500ms;transition:500ms;',
          },
          {
            id: 'mask',
            css: 'touch-box-element',
            relativePosition: 'elementWrap',
            zIndex: 11,
            body: '',
            style: 'position: absolute;left: -100%;top: 0;width:100%;height:100%;z-index: 11;background-color: rgba(0, 0, 0, 0.8);',
          },
          {
              id: 'popup_431',
              css: 'touch-box-element',
              relativePosition: 'elementWrap',
              zIndex: 11,
              body: '<img src="./img/yingxiong-neirong.png" class="touch-box-element-image">',
              style: 'position: absolute;left: -81%;top: 8%;width: 81%;height: 73%;z-index: 11;',
          },
          {
              id: 'popup_452',
              css: 'touch-box-element',
              relativePosition: 'elementWrap',
              zIndex: 11,
              body: '<img src="./img/yingxiong-2-neirong.png" class="touch-box-element-image">',
              style: 'position: absolute;left: -81%;top: 8%;width: 81%;height: 73%;z-index: 11;',
          },
          {
              id: 'popup_463',
              css: 'touch-box-element',
              relativePosition: 'elementWrap',
              zIndex: 11,
              body: '<img src="./img/yingxiong-3-neirong.png" class="touch-box-element-image">',
              style: 'position: absolute;left: -81%;top: 8%;width: 81%;height: 73%;z-index: 11;',
          },
          {
              id: 'popup_794',
              css: 'touch-box-element',
              relativePosition: 'elementWrap',
              zIndex: 11,
              body: '<img src="./img/yingxiong-4-neirong.png" class="touch-box-element-image">',
              style: 'position: absolute;left: -81%;top: 8%;width: 81%;height: 73%;z-index: 11;',
          },
          {
              id: 'popup_85',
              css: 'touch-box-element',
              relativePosition: 'elementWrap',
              zIndex: 11,
              body: '<img src="./img/yingxiong-5-neirong.png" class="touch-box-element-image">',
              style: 'position: absolute;left: -81%;top: 8%;width: 81%;height: 73%;z-index: 11;',
          },
          {
              id: 'popup_26',
              css: 'touch-box-element',
              relativePosition: 'elementWrap',
              zIndex: 11,
              body: '<img src="./img/yingxiong-6-neirong.png" class="touch-box-element-image">',
              style: 'position: absolute;left: -81%;top: 8%;width: 81%;height: 73%;z-index: 11;',
          },
        ],
        'pg22135942_477': [{
          id: 'pe22136020_728',
          css: 'touch-box-element',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '<img src="./img/shijue.png" class="touch-box-element-image">',
          style: 'position:absolute;left: 0%;top: 5.2%;width: 100%;height: 54.76%;',
          animation: 'puffIn',
          duration: 500,
          delay: 0
        }, {
          id: 'pe22279231_910',
          css: 'touch-box-element',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '<img src="./img/shijuebiaoti.png" class="touch-box-element-image">',
          style: 'position:absolute;left: 5.16%;top: 21%;width: 89.69%;height: 15.18%;',
          animation: 'puffIn',
          duration: 500,
          delay: 0
        }, {
          id: 'pe22228145_399',
          css: 'touch-box-element',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '<img src="./img/xuanguang.png" class="touch-box-element-image">',
          style: 'position:absolute;left: 17.15%;top: 18.5%;width: 73.13%;height: 25.99%;animation-timing-function: cubic-bezier(0.74, 0.38, 0.29, 0.72);-webkit-animation-timing-function: cubic-bezier(0.74, 0.38, 0.29, 0.72);',
          animation: 'slideLeftReturnMid',
          // animationType: 'special',
          animationIteration: 0,
          duration: 5000,
          delay: 1200
        }, {
          id: 'pe22375992_9211',
          css: 'touch-box-element',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '<img src="./img/shijuewenzi-1.png" class="touch-box-element-image">',
          style: 'position:absolute;left: 24.86%;top: 39%;width: 49.28%;height: 6.49%;',
          animation: 'vanishIn',
          duration: 500,
          delay: 1000
        }, {
          id: 'pe22461149_1512',
          css: 'touch-box-element',
          relativePosition: 'elementWrap',
          zIndex: 11,
          body: '<img src="./img/shijuewenzi-2.png" class="touch-box-element-image">',
          style: 'position:absolute;left: 14.06%;top: 49.83%;width: 71.88%;height: 10.02%;',
          animation: 'vanishIn',
          duration: 500,
          delay: 1200
        }]
      }
    });
    //
    window.touchStyleApp = touchStyleApp;
    if (window.touchStyleAppReady) {
      window.touchStyleAppReady(touchStyleApp);
    }
  }

  TouchStyleUtil.ImageLoader.loadImages([
    'img/P1-ditu.jpg',
    'img/guangyun.png',
    'img/yuanquan.png',
    'img/qiu.png',
    'img/wenzi.png',
    'img/diqiu.jpg',
    'img/lvjuren.png',
    'img/leishen.png',
    'img/heiguafu.png',
    'img/yingyan.png',
    'img/duizhang.png',
    'img/gangtiexia.png',
    'img/xuanguang.png',
    'img/xuanguang.png',
    'img/xuanguang.png',
    'img/biaoti.png',
    'img/biaoti-2.png',
    'img/ditu.jpg',
    'img/xuanguang.png',
    'img/biaoti-3.png',
    'img/biaoti-4.png',
    'img/neirong.png',
    'img/neirong-2.png',
    'img/neirong-3.png',
    'img/neirong-4.png',
    'img/ditu.jpg',
    'img/yuanhuan.png',
    'img/yingxiong.png',
    'img/yingxiong-2.png',
    'img/yingxiong-3.png',
    'img/yingxiong-4.png',
    'img/yingxiong-5.png',
    'img/yingxiong-6.png',
    'img/yingxiongbeijing.jpg',
    'img/shijue.png',
    'img/xuanguang.png',
    'img/shijuebiaoti.png',
    'img/shijuewenzi-1.png',
    'img/shijuewenzi-2.png',
    'img/ditubeijing.jpg',
    'img/ditu-biaoti.png',
    'img/ditu-neirong.png',
    'img/ditu.png',
    'img/zuobiao.png'
  ], function(percent) {
    var touchStyleLoadingEl = document.getElementById('touchStyleLoading');
    touchStyleLoadingEl.children[0].innerHTML = percent;
    if (percent >= 100) {
      touchStyleLoadingEl.style.opacity = '0';
      setTimeout(function() {
        touchStyleLoadingEl.parentNode.removeChild(touchStyleLoadingEl);
        initTouchStyleApp()
      }, 5e2);
    }
  });
}(window));

window.touchStyleAppReady = function () {
  var lines, popupMap, rotateMap, iTimer, isStart;
  // 轨迹球class映射
  lines = [ ' dot_line_01 animated', ' dot_line_02 animated', ' dot_line_03 animated', ' dot_line_04 animated' ];
  // 弹层映射
  popupMap = {
    "pe21934286_431" : "popup_431",
    "pe21982940_452" : "popup_452",
    "pe22010115_463" : "popup_463",
    "pe22051192_794" : "popup_794",
    // "pe22066496_85" : "popup_85",
    "pe22080177_26" : "popup_26"
  };
  // p3 旋转映射
  rotateMap = [
    [ "66%","22%"],
    [ "73%","44.5%"],
    [ "41.8%","58.97%"],
    [ "9%","45%"],
    [ "17%","22%"]
  ];
  //
  touchStyleApp.box.on('touchstart', function (active) {
    if(active === 0 && !isStart){
      return false;
    }
  });
  // slide事件
  touchStyleApp.box.on('slide', function(active) {
    if(active === 0){
      if(isStart){
        pathing(document.getElementsByClassName('dots_01'))
      }else{
        return document.getElementsByClassName('touchstyle-arrowup')[0].className = 'touchstyle-arrowup-temp';
      }
    }else if (active === 2) {
      if(iTimer) clearInterval(iTimer)
      pathing(document.getElementsByClassName('dots_02'))
    }else if (active === 3) {
      pathing(document.getElementsByClassName('dots_03'))
      // 事件绑定
      for(var k in popupMap){
        !function (k,v) {
          document.querySelector('#'+k).onclick = function () {
            document.querySelector('#'+v).style.left = '9%';
            document.querySelector('#mask').style.left = '0';
          }
          document.querySelector('#'+v).onclick = function () {
            this.style.left = '-81%';
            document.querySelector('#mask').style.left = '-100%';
          }
        }(k,popupMap[k])
      }
      rotate()
      iTimer = setInterval(rotate,3000)
    }else if(active === 4){
      if(iTimer) clearInterval(iTimer)
    }
  });
  // p3 旋转
  function rotate () {
    var i = 0, doms = ["pe21934286_431","pe22080177_26", "pe22051192_794", "pe22010115_463", "pe21982940_452"], dom;
    rotateMap.push(rotateMap.shift());
    for(;i<5;i++){
      dom = document.getElementById(doms[i]).style;
      dom.left = rotateMap[i][0];
      dom.top = rotateMap[i][1];
    }
  }
  // 背景轨迹球运动
  function pathing (dots) {
    if (dots) {
      // console.log(dots)
      var i = 0
      for(;i<4;i++){
        dots[i].className += lines[i]
      }
      setTimeout(function () {
        var i = 0;
        for(;i<4;i++){
          dots[i].className = dots[i].className.replace(lines[i],'');
        }
      },2600)
    };
  }
  // 动画回调
  function animateCB () {
    var o83 = document.querySelector('#pe09908052_83'),
        o49 = document.querySelector("#pe09908052_493");
    // 移除小球
    o83.parentNode.removeChild(o83)
    // 移除文字
    var dom;
    dom = document.getElementById('pe10617688_810');
    dom.parentNode.removeChild(dom);
    // 旋转
    o49.className += ' rotate animated';
    // 背景轨迹球
    pathing(document.getElementsByClassName('dots_01'));
    // 弹出文字
    [ [ 'pe24138530_3335', ' zoomIn animated' ], ['pe24183129_6336', ' zoomIn animated' ], [ 'pe24134053_5634', ' slideLeftReturnMid animated' ] ].forEach(function (d) {
      dom = document.getElementById(d[0]);
      dom.style.opacity = 1;
      dom.className += d[1];
    });
    setTimeout(function () {
      touchStyleApp.box.next();
      document.getElementsByClassName('touchstyle-arrowup-temp')[0].className = 'touchstyle-arrowup';
      isStart = true;
      window.removeEventListener('deviceorientation', deviceorientation, false);
    },3000)
  }
  // 重力球，简单版
  function deviceorientation (evt) {
    /* beta:  -180..180 (rotation around x axis) */
    /* gamma:  -90..90  (rotation around y axis) */
    /* alpha:    0..360 (rotation around z axis) (-180..180) */
    var o83 = document.querySelector( "#pe09908052_83" );
    var W = window.screen.width * 0.5;
    var H = window.screen.height * 0.5;
    var L = W + evt.gamma / 90 * W - o83.offsetWidth / 2;
    var T = H + evt.beta / 90 * H - o83.offsetHeight / 2;
    if(L < 0 ){
      L = 0
    }else if(L > window.screen.width - 80){
      L = window.screen.width - 80;
    }
    if(T < 0){
      T = 0;
    }else if(T > window.screen.height - 150){
      T = window.screen.height - 150;
    }
    o83.style.left = L + 'px'
    o83.style.top = T + 'px'
    if(L > window.screen.width * 0.354 && L < window.screen.width * 0.44 ){
      if(T > window.screen.height * 0.338 && T < window.screen.height * 0.386 ){
        o83.style.left = "40%";
        o83.style.top = "41%";
        animateCB()
      }
    }
  }
  // 手机系统判断
  if( navigator.userAgent.indexOf('iPhone') > 0 ){
    if (window.DeviceOrientationEvent) {
      return window.addEventListener('deviceorientation', deviceorientation, false);
    }
  }
  document.querySelector('#pe09908052_83').className += ' rollIn animated'
  setTimeout(animateCB,3000)
}
