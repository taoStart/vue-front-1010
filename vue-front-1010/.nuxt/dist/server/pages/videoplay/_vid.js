exports.ids = [8];
exports.modules = {

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/videoplay/_vid.vue?vue&type=template&id=410f9c6a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<link rel=\"stylesheet\" href=\"https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css\"> <script charset=\"utf-8\" type=\"text/javascript\" src=\"https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js\"></script> <div id=\"J_prismPlayer\" class=\"prism-player\"></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/videoplay/_vid.vue?vue&type=template&id=410f9c6a&

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__(7);

// CONCATENATED MODULE: ./api/videoplay.js

/* harmony default export */ var videoplay = ({
  getPlayAuth(id) {
    return Object(request["a" /* default */])({
      url: `/eduvod/video/getPlayAuth/${id}`,
      method: 'get'
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/videoplay/_vid.vue?vue&type=script&lang=js&

/* harmony default export */ var _vidvue_type_script_lang_js_ = ({
  layout: 'video',

  //应用video布局
  asyncData({
    params,
    error
  }) {
    return videoplay.getPlayAuth(params.vid).then(response => {
      // console.log(response.data.data)
      return {
        vid: params.vid,
        playAuth: response.data.data.playAuth
      };
    });
  },

  mounted() {
    new Aliplayer({
      id: 'J_prismPlayer',
      vid: this.vid,
      // 视频id
      playauth: this.playAuth,
      // 播放凭证
      encryptType: '1',
      // 如果播放加密视频，则需设置encryptType=1，非加密视频无需设置此项
      width: '100%',
      height: '500px'
    }, function (player) {
      console.log('播放器创建成功');
    });
  }

});
// CONCATENATED MODULE: ./pages/videoplay/_vid.vue?vue&type=script&lang=js&
 /* harmony default export */ var videoplay_vidvue_type_script_lang_js_ = (_vidvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/videoplay/_vid.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  videoplay_vidvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "11c00f7a"
  
)

/* harmony default export */ var _vid = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_vid.js.map